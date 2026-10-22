"use client";

import * as React from "react";
import { Camera, Mesh, Plane, Program, Renderer, Transform } from "ogl";
import "./product-scene.css";
import type { ProductLayer } from "@/lib/product-scene";
type Locale = "en" | "hi";

const CONTENT: Record<Locale, Record<ProductLayer, { title: string; label: string; copy: string; tag: string }>> = {
  en: {
    brief: { title: "Project brief", label: "The project", copy: "A clear idea, current stage, and next milestone give a crew shared context.", tag: "PROJECT / 01" },
    profiles: { title: "Builder profiles", label: "People & skills", copy: "Profiles help owners and builders understand each person’s skills, interests, and availability.", tag: "PEOPLE / 02" },
    discovery: { title: "Project discovery", label: "Find a fit", copy: "Browse project briefs, compare requested skills, and review the owner before reaching out.", tag: "EXPLORE / 03" },
    requests: { title: "Join requests", label: "Owner review", copy: "Builders explain their interest and contribution. Project owners choose who joins.", tag: "REQUESTS / 04" },
    workspace: { title: "Crew workspace", label: "Build together", copy: "Accepted members coordinate in a project discussion space with shared context.", tag: "CREW / 05" },
    github: { title: "GitHub context", label: "Optional · read only", copy: "Owners can connect repository details for members to view. Access is optional and read only.", tag: "GITHUB / 06" },
  },
  hi: {
    brief: { title: "प्रोजेक्ट विवरण", label: "प्रोजेक्ट", copy: "स्पष्ट विचार, मौजूदा चरण और अगला लक्ष्य टीम को साझा संदर्भ देते हैं।", tag: "प्रोजेक्ट / 01" },
    profiles: { title: "बिल्डर प्रोफ़ाइल", label: "लोग और कौशल", copy: "प्रोफ़ाइल से मालिक और बिल्डर कौशल, रुचि और उपलब्धता समझते हैं।", tag: "लोग / 02" },
    discovery: { title: "प्रोजेक्ट खोज", label: "उपयुक्त काम खोजें", copy: "प्रोजेक्ट विवरण देखें, ज़रूरी कौशल की तुलना करें और मालिक को जानें।", tag: "खोज / 03" },
    requests: { title: "जुड़ने का अनुरोध", label: "मालिक की समीक्षा", copy: "बिल्डर अपनी रुचि और योगदान बताते हैं। प्रोजेक्ट मालिक तय करते हैं कि कौन जुड़ेगा।", tag: "अनुरोध / 04" },
    workspace: { title: "टीम का कार्यक्षेत्र", label: "साथ मिलकर बनाएँ", copy: "स्वीकृत सदस्य प्रोजेक्ट चर्चा में तालमेल और संदर्भ साझा करते हैं।", tag: "टीम / 05" },
    github: { title: "GitHub संदर्भ", label: "वैकल्पिक · केवल पढ़ने के लिए", copy: "मालिक रिपॉज़िटरी की जानकारी जोड़ सकते हैं। सदस्य इसे केवल देख सकते हैं।", tag: "GITHUB / 06" },
  },
};

const LAYERS: ProductLayer[] = ["brief", "profiles", "discovery", "requests", "workspace", "github"];
const COLORS = [[0.94, 0.29, 0.18], [0.44, 0.43, 0.39], [0.80, 0.31, 0.20], [0.57, 0.52, 0.43], [0.90, 0.40, 0.25], [0.42, 0.48, 0.44]];

function SceneCanvas({ selected }: { selected: ProductLayer }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const selectedRef = React.useRef(selected);
  selectedRef.current = selected;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let renderer: Renderer;
    try {
      renderer = new Renderer({ canvas, alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio || 1, 2) });
    } catch {
      canvas.dataset.unavailable = "true";
      return;
    }

    const gl = renderer.gl;
    const camera = new Camera(gl, { fov: 34, near: 0.1, far: 40 });
    camera.position.set(0, 0, 8.6);
    const scene = new Transform();
    const meshes = LAYERS.map((_, index) => {
      const program = new Program(gl, {
        transparent: true,
        uniforms: { uColor: { value: COLORS[index] }, uActive: { value: 0 }, uTime: { value: 0 } },
        vertex: `attribute vec3 position; attribute vec2 uv; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix; varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
        fragment: `precision mediump float; uniform vec3 uColor; uniform float uActive; uniform float uTime; varying vec2 vUv; float box(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.0))+min(max(q.x,q.y),0.0)-r;} void main(){vec2 p=vUv-0.5;float d=box(p,vec2(0.47,0.28),0.035);float fill=1.0-smoothstep(-0.008,0.008,d);float edge=1.0-smoothstep(0.004,0.014,abs(d));float glow=(0.25+0.75*uActive)*(0.86+0.14*sin(uTime));vec3 color=mix(vec3(0.12,0.12,0.11),uColor,0.2+0.8*uActive);gl_FragColor=vec4(color,fill*(0.35+0.25*uActive)+edge*glow*0.8);}`,
      });
      const mesh = new Mesh(gl, { geometry: new Plane(gl, { width: 1, height: 1 }), program });
      mesh.rotation.x = -0.42;
      mesh.rotation.y = 0.08;
      mesh.setParent(scene);
      return mesh;
    });
    let raf = 0;
    let disposed = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
      draw(performance.now());
    };
    const draw = (now: number) => {
      const active = LAYERS.indexOf(selectedRef.current);
      meshes.forEach((mesh, index) => {
        const distance = index - active;
        mesh.position.set(distance * 0.045, -distance * 0.17, -index * 0.12);
        mesh.scale.set(2.55 - Math.abs(distance) * 0.11, 1.28 - Math.abs(distance) * 0.045, 1);
        mesh.program.uniforms.uActive.value = index === active ? 1 : 0;
        mesh.program.uniforms.uTime.value = reduceMotion ? 0 : now * 0.001;
      });
      renderer.render({ scene, camera });
    };
    const animate = (now: number) => {
      if (disposed) return;
      draw(now);
      if (!reduceMotion) raf = window.requestAnimationFrame(animate);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    if (!reduceMotion) raf = window.requestAnimationFrame(animate);
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return <canvas className="product-scene-canvas" ref={canvasRef} aria-hidden="true" />;
}

export function ProductScene({ initial = "discovery", locale = "en" }: { initial?: ProductLayer; locale?: Locale }) {
  const [selected, setSelected] = React.useState<ProductLayer>(initial);
  const content = CONTENT[locale];
  const current = content[selected];
  const index = LAYERS.indexOf(selected);

  return <section className="product-scene" lang={locale === "hi" ? "hi-IN" : "en"} aria-label={locale === "hi" ? "CrewLab प्रोजेक्ट प्रक्रिया" : "How a project comes together on CrewLab"}>
    <SceneCanvas selected={selected} />
    <div className="product-scene-brief">
      <span className="product-scene-tag">{locale === "hi" ? "प्रोजेक्ट / 01" : "PROJECT / 01"}</span>
      <span className="product-scene-orbit" aria-hidden="true">✳</span>
      <p>{locale === "hi" ? "साझा प्रोजेक्ट" : "SHARED PROJECT"}</p>
      <h2>{locale === "hi" ? "एक विचार बनाएँ" : "Build an idea"}</h2>
      <span className="product-scene-rule" />
      <small>{locale === "hi" ? "विचार → पहली रिलीज़" : "IDEA → FIRST RELEASE"}</small>
    </div>
    <div className="product-scene-controls" role="group" aria-label={locale === "hi" ? "प्रोजेक्ट की परत चुनें" : "Select a project layer"}>
      {LAYERS.map((layer, layerIndex) => <button key={layer} type="button" aria-pressed={selected === layer} onClick={() => setSelected(layer)}>
        <span className="product-scene-step">0{layerIndex + 1}</span><span>{content[layer].title}</span><i aria-hidden="true" />
      </button>)}
    </div>
    <div className="product-scene-description" aria-live="polite" aria-atomic="true"><span>0{index + 1}</span><p><strong>{current.title}</strong>{current.copy}</p></div>
    <span className="product-scene-footer">{locale === "hi" ? "एक साझा प्रोजेक्ट के आसपास" : "ONE PROJECT · CONNECTED STEPS"}</span>
  </section>;
}

