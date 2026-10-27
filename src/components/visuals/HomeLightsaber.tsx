"use client";

import { useEffect, useRef, useState } from "react";
import type * as ThreeTypes from "three";

const CORAL = 0xf04a2e;
const FLOW_CARDS = {
  en: [
  { title: "Builder profiles", copy: "Show the skills and passions you bring to the galaxy." },
  { title: "Project discovery", copy: "Scan the horizon for a mission that calls to you." },
  { title: "Join requests", copy: "Transmit your request. Project leaders choose who joins the crew." },
  { title: "Crew workspace", copy: "Once aboard, coordinate plans and build the next big thing together." },
  { title: "GitHub context", copy: "Link a repository for optional, read-only mission intel." },
  ],
  hi: [
    { title: "बिल्डर प्रोफ़ाइल", copy: "अपने कौशल, रुचियाँ और अनुभव साझा करें।" },
    { title: "प्रोजेक्ट खोजें", copy: "ऐसा प्रोजेक्ट खोजें जो आपकी रुचि और कौशल से मेल खाए।" },
    { title: "जुड़ने का अनुरोध", copy: "अपनी रुचि बताएँ; प्रोजेक्ट का मालिक टीम चुनता है।" },
    { title: "टीम के साथ काम", copy: "योजना बनाएँ, बातचीत करें और मिलकर प्रोजेक्ट आगे बढ़ाएँ।" },
    { title: "GitHub जानकारी", copy: "ज़रूरत होने पर रिपॉज़िटरी को केवल देखने के लिए जोड़ें।" },
  ],
};

export default function HomeLightsaber({ locale = "en" }: { locale?: "en" | "hi" }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const switchRef = useRef<HTMLButtonElement>(null);
  const onRef = useRef(true);
  const reducedMotionRef = useRef(false);
  const [isOn, setIsOn] = useState(true);
  const [webglReady, setWebglReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  onRef.current = isOn;
  reducedMotionRef.current = reducedMotion;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    let disposed = false;
    let raf = 0;
    let resizeObserver: ResizeObserver | undefined;
    let renderer: ThreeTypes.WebGLRenderer | undefined;
    let composer: import("three/addons/postprocessing/EffectComposer.js").EffectComposer | undefined;
    let bloomPass: import("three/addons/postprocessing/UnrealBloomPass.js").UnrealBloomPass | undefined;
    let outputPass: import("three/addons/postprocessing/OutputPass.js").OutputPass | undefined;
    let onContextLost: ((event: Event) => void) | undefined;
    let disposeScene: (() => void) | undefined;

    async function initialize() {
      const canvas = canvasRef.current;
      const stage = stageRef.current;
      if (!canvas || !stage) return;
      const stageElement = stage;

      try {
        const [THREE, { EffectComposer }, { RenderPass }, { UnrealBloomPass }, { OutputPass }] = await Promise.all([
          import("three"),
          import("three/addons/postprocessing/EffectComposer.js"),
          import("three/addons/postprocessing/RenderPass.js"),
          import("three/addons/postprocessing/UnrealBloomPass.js"),
          import("three/addons/postprocessing/OutputPass.js"),
        ]);
        if (disposed) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(43, 1, 0.1, 40);
        camera.position.set(0, 0.1, 9.4);

        const contextAttributes: WebGLContextAttributes = {
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        };
        const webglContext = canvas.getContext("webgl2", contextAttributes)
          ?? canvas.getContext("webgl", contextAttributes);
        if (!webglContext) throw new Error("WebGL is unavailable");

        renderer = new THREE.WebGLRenderer({
          canvas,
          context: webglContext as WebGLRenderingContext,
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setClearColor(0x0d0d0c, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.3;
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.45, 0.24, 0.3);
        composer.addPass(bloomPass);
        outputPass = new OutputPass();
        composer.addPass(outputPass);

        scene.add(new THREE.HemisphereLight(0xbebbb0, 0x171412, 1.35));
        const key = new THREE.DirectionalLight(0xffe3d9, 3.2);
        key.position.set(-3, 4, 5);
        scene.add(key);
        const edge = new THREE.DirectionalLight(0x665d63, 2.1);
        edge.position.set(3, -1, -3);
        scene.add(edge);

        // A restrained, animated starfield shares this renderer so it stays
        // behind the saber without creating a second WebGL context.
        const starCount = 520;
        const starPositions = new Float32Array(starCount * 3);
        const starSizes = new Float32Array(starCount);
        const starPhases = new Float32Array(starCount);
        const starColors = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i += 1) {
          starPositions[i * 3] = (Math.random() - 0.5) * 14;
          starPositions[i * 3 + 1] = (Math.random() - 0.5) * 9;
          starPositions[i * 3 + 2] = Math.random() * 3.2;
          starSizes[i] = 0.65 + Math.random() * 1.8;
          starPhases[i] = Math.random() * Math.PI * 2;
          const warm = Math.random() > 0.9;
          starColors[i * 3] = warm ? 1 : 0.68 + Math.random() * 0.3;
          starColors[i * 3 + 1] = warm ? 0.3 + Math.random() * 0.28 : 0.72 + Math.random() * 0.28;
          starColors[i * 3 + 2] = warm ? 0.22 + Math.random() * 0.18 : 0.82 + Math.random() * 0.18;
        }
        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
        starGeometry.setAttribute("aSize", new THREE.BufferAttribute(starSizes, 1));
        starGeometry.setAttribute("aPhase", new THREE.BufferAttribute(starPhases, 1));
        starGeometry.setAttribute("aColor", new THREE.BufferAttribute(starColors, 3));
        const starMaterial = new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          uniforms: {
            uTime: { value: 0 },
            uPointer: { value: new THREE.Vector2() },
            uPointerActive: { value: 0 },
            uWarp: { value: 0 },
          },
          vertexShader: `
            attribute float aSize;
            attribute float aPhase;
            attribute vec3 aColor;
            uniform float uTime;
            uniform vec2 uPointer;
            uniform float uPointerActive;
            uniform float uWarp;
            varying float vTwinkle;
            varying vec3 vColor;
            void main() {
              vec3 p = position;
              vec2 pointerPosition = vec2(uPointer.x * 7.0, uPointer.y * 4.5);
              vec2 away = p.xy - pointerPosition;
              float influence = exp(-dot(away, away) * 0.12) * uPointerActive;
              p.xy += normalize(away + vec2(0.0001)) * influence * 0.28;
              p.z = -0.75 - mod(p.z + uTime * 0.24, 3.2) + uWarp * 0.9;
              float angle = uTime * 0.025;
              p.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * p.xy;
              vec4 viewPosition = modelViewMatrix * vec4(p, 1.0);
              gl_Position = projectionMatrix * viewPosition;
              gl_PointSize = aSize * (1.0 + uWarp * 3.0) * (24.0 / max(1.0, -viewPosition.z));
              vTwinkle = 0.52 + 0.48 * sin(uTime * 1.2 + aPhase);
              vColor = aColor;
            }
          `,
          fragmentShader: `
            varying float vTwinkle;
            varying vec3 vColor;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              float glow = exp(-d * 11.0) * (1.0 - smoothstep(0.08, 0.5, d));
              float core = 1.0 - smoothstep(0.0, 0.18, d);
              float alpha = (glow * 0.52 + core * 0.42) * vTwinkle;
              gl_FragColor = vec4(vColor * (0.7 + core * 0.9), alpha);
            }
          `,
        });
        const galaxy = new THREE.Points(starGeometry, starMaterial);
        galaxy.renderOrder = -1;
        scene.add(galaxy);

        const saber = new THREE.Group();
        saber.position.y = -0.18;
        scene.add(saber);

        const metal = new THREE.MeshStandardMaterial({
          color: 0x6d6b68,
          metalness: 0.88,
          roughness: 0.24,
        });
        const brightMetal = new THREE.MeshStandardMaterial({
          color: 0xd0cdc4,
          metalness: 0.93,
          roughness: 0.19,
        });
        const darkMetal = new THREE.MeshStandardMaterial({
          color: 0x1b1b1a,
          metalness: 0.76,
          roughness: 0.34,
        });
        const blackRubber = new THREE.MeshStandardMaterial({
          color: 0x111211,
          metalness: 0.24,
          roughness: 0.68,
        });

        function cylinder(
          radiusTop: number,
          radiusBottom: number,
          height: number,
          material: ThreeTypes.Material,
          y: number,
          radialSegments = 32,
          group: ThreeTypes.Group = saber,
        ) {
          const mesh = new THREE.Mesh(
            new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
            material,
          );
          mesh.position.y = y;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          group.add(mesh);
          return mesh;
        }

        // The emitter and stepped collars build a recognizable machined crown.
        cylinder(0.16, 0.2, 0.15, darkMetal, -1.48);
        cylinder(0.18, 0.18, 0.09, brightMetal, -1.39);
        cylinder(0.135, 0.16, 0.2, metal, -1.26);
        cylinder(0.165, 0.165, 0.075, darkMetal, -1.14);
        cylinder(0.13, 0.13, 0.12, brightMetal, -1.075);
        cylinder(0.115, 0.115, 0.2, darkMetal, -0.94);

        // A compact, knurled graphite grip with machined silver separators.
        cylinder(0.145, 0.15, 0.8, blackRubber, -1.96);
        for (let i = 0; i < 9; i += 1) {
          cylinder(0.157, 0.157, 0.035, darkMetal, -1.63 - i * 0.077, 32);
        }
        cylinder(0.18, 0.18, 0.06, brightMetal, -2.38);
        cylinder(0.17, 0.16, 0.12, metal, -2.46);
        cylinder(0.16, 0.16, 0.1, darkMetal, -2.56);
        cylinder(0.125, 0.15, 0.22, blackRubber, -2.71);
        cylinder(0.15, 0.15, 0.07, brightMetal, -2.84);
        cylinder(0.115, 0.14, 0.13, darkMetal, -2.93);
        cylinder(0.095, 0.12, 0.07, metal, -3.03);

        // Thin longitudinal grip rails catch the rim light like real milled grooves.
        const railMaterial = new THREE.MeshStandardMaterial({
          color: 0x4e4d4a,
          metalness: 0.72,
          roughness: 0.38,
        });
        for (let i = 0; i < 8; i += 1) {
          const angle = (i / 8) * Math.PI * 2;
          const rail = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.56, 0.025), railMaterial);
          rail.position.set(Math.cos(angle) * 0.15, -1.97, Math.sin(angle) * 0.15);
          rail.rotation.y = -angle;
          saber.add(rail);
        }

        // On the hilt: the visible activation stud is a real 3D part. Its HTML
        // hit target is projected here so it stays physically attached on resize.
        const buttonSocket = new THREE.Mesh(
          new THREE.CylinderGeometry(0.112, 0.112, 0.055, 32),
          darkMetal,
        );
        buttonSocket.rotation.x = Math.PI / 2;
        buttonSocket.position.set(0.115, -1.86, 0.16);
        saber.add(buttonSocket);
        const buttonMaterial = new THREE.MeshStandardMaterial({
          color: 0x5b1710,
          emissive: CORAL,
          emissiveIntensity: 1.9,
          metalness: 0.35,
          roughness: 0.24,
        });
        const buttonCap = new THREE.Mesh(
          new THREE.CylinderGeometry(0.073, 0.08, 0.035, 32),
          buttonMaterial,
        );
        buttonCap.rotation.x = Math.PI / 2;
        buttonCap.position.set(0.115, -1.86, 0.202);
        saber.add(buttonCap);

        // A layered blade: crisp hot core, colored sheath and a broad additive aura.
        const bladeRootY = -1.53;
        const bladeLength = 4.65;
        const blade = new THREE.Group();
        blade.position.y = bladeRootY;
        saber.add(blade);
        const aura = new THREE.Mesh(
          new THREE.CylinderGeometry(0.19, 0.19, bladeLength, 32, 1, true),
          new THREE.MeshBasicMaterial({
            color: CORAL,
            transparent: true,
            opacity: 0.1,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide,
            toneMapped: false,
          }),
        );
        aura.position.y = bladeLength / 2;
        blade.add(aura);
        const innerAura = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, bladeLength, 32, 1, true),
          new THREE.MeshBasicMaterial({
            color: 0xff5c40,
            transparent: true,
            opacity: 0.24,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide,
            toneMapped: false,
          }),
        );
        innerAura.position.y = bladeLength / 2;
        blade.add(innerAura);
        const sheath = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, bladeLength, 32),
          new THREE.MeshBasicMaterial({
            color: CORAL,
            transparent: true,
            opacity: 0.86,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            toneMapped: false,
          }),
        );
        sheath.position.y = bladeLength / 2;
        blade.add(sheath);
        const core = new THREE.Mesh(
          new THREE.CylinderGeometry(0.028, 0.028, bladeLength * 0.992, 24),
          new THREE.MeshBasicMaterial({ color: 0xfff2ed, toneMapped: false }),
        );
        core.position.y = bladeLength / 2;
        blade.add(core);
        const tip = new THREE.Mesh(
          new THREE.SphereGeometry(0.064, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
          new THREE.MeshBasicMaterial({ color: 0xff927a, toneMapped: false }),
        );
        tip.position.y = bladeLength;
        blade.add(tip);
        const bladeLight = new THREE.PointLight(CORAL, 8, 4.5, 2);
        bladeLight.position.set(0, 2.15, 0.18);
        saber.add(bladeLight);

        const target = new THREE.Vector3();
        let galaxyWarp = 0;
        const updateGalaxyPointer = (event: PointerEvent) => {
          const bounds = stageElement.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          const y = event.clientY - bounds.top;
          const inside = x >= 0 && y >= 0 && x <= bounds.width && y <= bounds.height;
          starMaterial.uniforms.uPointer.value.set(
            (x / Math.max(bounds.width, 1) - 0.5) * 2,
            (0.5 - y / Math.max(bounds.height, 1)) * 2,
          );
          starMaterial.uniforms.uPointerActive.value = inside && !reducedMotionRef.current ? 1 : 0;
        };
        const triggerGalaxyWarp = (event: PointerEvent) => {
          if (event.target instanceof Element && event.target.closest(".home-saber-switch")) return;
          if (!reducedMotionRef.current) galaxyWarp = 1;
        };
        const clearGalaxyPointer = () => {
          starMaterial.uniforms.uPointerActive.value = 0;
        };
        stageElement.addEventListener("pointermove", updateGalaxyPointer);
        stageElement.addEventListener("pointerdown", triggerGalaxyWarp);
        stageElement.addEventListener("pointerleave", clearGalaxyPointer);

        function resize() {
          const { width, height } = stageElement.getBoundingClientRect();
          if (!width || !height || !renderer) return;
          renderer.setSize(width, height, false);
          composer?.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          const ndc = target.copy(buttonCap.position).add(saber.position).project(camera);
          if (switchRef.current) {
            switchRef.current.style.left = `${(ndc.x * 0.5 + 0.5) * width}px`;
            switchRef.current.style.top = `${(-ndc.y * 0.5 + 0.5) * height}px`;
          }
          composer?.render();
          setWebglReady(true);
        }

        let power = 1;
        let lastTime = 0;
        const render = (time: number) => {
          if (disposed || !renderer) return;
          const dt = Math.min((time - (lastTime || time)) / 1000, 0.05);
          lastTime = time;
          starMaterial.uniforms.uTime.value = reducedMotionRef.current ? 0 : time / 1000;
          starMaterial.uniforms.uWarp.value = galaxyWarp;
          galaxyWarp = Math.max(0, galaxyWarp - dt * 1.7);
          const targetPower = onRef.current ? 1 : 0;
          const step = reducedMotionRef.current ? 1 : dt / 0.24;
          power += (targetPower - power) * Math.min(1, step * 5);
          if (Math.abs(power - targetPower) < 0.001) power = targetPower;
          blade.scale.y = Math.max(0.0001, power);
          bladeLight.intensity = 8 * power;
          buttonMaterial.emissiveIntensity = (onRef.current ? 1.9 : 0.08) + (reducedMotionRef.current ? 0 : Math.sin(time * 0.002) * 0.08 * power);
          if (!reducedMotionRef.current) {
            saber.rotation.z = Math.sin(time * 0.00032) * 0.004;
          }
          const ndc = target.copy(buttonCap.position).add(saber.position).project(camera);
          if (switchRef.current) {
            const { width, height } = stageElement.getBoundingClientRect();
            switchRef.current.style.left = `${(ndc.x * 0.5 + 0.5) * width}px`;
            switchRef.current.style.top = `${(-ndc.y * 0.5 + 0.5) * height}px`;
          }
          composer?.render();
          raf = window.requestAnimationFrame(render);
        };

        onContextLost = (event) => {
          event.preventDefault();
          if (!disposed) setWebglReady(false);
        };
        canvas.addEventListener("webglcontextlost", onContextLost);
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(stageElement);
        resize();
        raf = window.requestAnimationFrame(render);

        disposeScene = () => {
          stageElement.removeEventListener("pointermove", updateGalaxyPointer);
          stageElement.removeEventListener("pointerdown", triggerGalaxyWarp);
          stageElement.removeEventListener("pointerleave", clearGalaxyPointer);
          scene.traverse((object) => {
            const mesh = object as ThreeTypes.Mesh;
            if (mesh.geometry) mesh.geometry.dispose();
            const material = mesh.material;
            if (Array.isArray(material)) material.forEach((item) => item.dispose());
            else if (material) material.dispose();
          });
          renderer?.renderLists.dispose();
          renderer?.dispose();
          renderer?.forceContextLoss();
          bloomPass?.dispose();
          outputPass?.dispose();
          composer?.dispose();
        };
      } catch {
        disposeScene?.();
        renderer?.dispose();
        renderer?.forceContextLoss();
        bloomPass?.dispose();
        outputPass?.dispose();
        composer?.dispose();
        if (!disposed) setWebglReady(false);
      }
    }

    void initialize();
    return () => {
      disposed = true;
      window.cancelAnimationFrame(raf);
      resizeObserver?.disconnect();
      if (onContextLost && canvasRef.current) {
        canvasRef.current.removeEventListener("webglcontextlost", onContextLost);
      }
      disposeScene?.();
    };
  }, []);

  function togglePower() {
    setIsOn((current) => !current);
  }

  return (
    <div className="home-saber">
      <div className="home-saber-heading">
        <div>
          <h2>{locale === "hi" ? <>एक प्रोजेक्ट सही <em>साथियों</em> को जोड़ता है।</> : <>One project brings the <em>right crew</em> together.</>}</h2>
        </div>
        <p className="home-saber-intro">
          {locale === "hi"
            ? "प्रोजेक्ट का विवरण रास्ता दिखाता है: बिल्डर काम को समझते हैं, अपनी रुचि बताते हैं और उसे साकार करने के लिए साथ आते हैं।"
            : "The project brief is your mission beacon: builders discover the work, signal their interest, and join forces to bring it to life. May the crew be with you."}
        </p>
      </div>

      <div className="home-saber-display">
        <div className="home-saber-stage-wrap">
          <div className={`home-saber-stage${isOn ? " is-on" : " is-off"}`} ref={stageRef}>
            <canvas ref={canvasRef} className="home-saber-canvas" aria-hidden="true" />
            {!webglReady && <div className={`home-saber-fallback${isOn ? " is-on" : " is-off"}`} aria-hidden="true">
              <div className="home-saber-fallback-beam"><i /></div>
              <div className="home-saber-fallback-hilt">
                <span className="home-saber-fallback-emitter" />
                <span className="home-saber-fallback-grip"><i /><i /><i /><i /><i /><i /><i /><i /></span>
                <span className="home-saber-fallback-pommel" />
                <span className="home-saber-fallback-button" />
              </div>
            </div>}
            <button
              ref={switchRef}
              className="home-saber-switch"
              type="button"
              aria-label={locale === "hi"
                ? (isOn ? "क्रू सेबर बंद करें" : "क्रू सेबर चालू करें")
                : (isOn ? "Power down the crew saber" : "Ignite the crew saber")}
              aria-pressed={isOn}
              onClick={togglePower}
              style={webglReady ? undefined : { left: "calc(50% + clamp(6px, 1.6vw, 10px))", top: "80%" }}
            />
            <span className="home-saber-sr-status" aria-live="polite">{locale === "hi" ? `क्रू सेबर ${isOn ? "चालू" : "बंद"}` : `Crew saber ${isOn ? "online" : "offline"}`}</span>
          </div>
        </div>
      </div>

      <ol className="home-saber-cards" aria-label={locale === "hi" ? "CrewLab पर टीम कैसे बनती है" : "How your crew comes together on CrewLab"}>
        {FLOW_CARDS[locale].map((card, index) => (
          <li className="home-saber-card" key={card.title}>
            <span className="home-saber-card-number">0{index + 1}</span>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
