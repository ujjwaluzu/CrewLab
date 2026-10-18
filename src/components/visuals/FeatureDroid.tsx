/**
 * Astromech droid: the character that sits in the right column of the
 * /features hero.
 *
 * Built from the R2-D2-style astromech brief: 1.1 m tall by 0.7 m wide,
 * cylindrical chassis, hemispherical dome, two side legs plus a retractable
 * centre leg, white painted panels over brushed steel mechanicals, and glass
 * sensor lenses with an emissive glow.
 *
 * Recoloured off the brief, deliberately. The spec calls for blue accent panels;
 * this site is a warm near-black canvas running a single orange accent, and blue
 * is the one hue in it that reads as somebody else's product. So the accents are
 * warm graphite instead, which provides the same contrast against the white
 * chassis, and orange is left as the droid's only colour, which makes it
 * unambiguously the *lit* one: lenses, status lights, panel lips, the beams, the
 * pool of light on the floor. Every grey is on the warm stone ramp rather than
 * the cool zinc one, for the same reason.
 *
 * The brief's production deliverables (.blend/.fbx, an IK/FK control rig, 4K
 * PBR texture sets, baked animation clips) are a DCC pipeline, not something a
 * web page can hold. What is reproducible here is the *design and the motion*,
 * so this is inline SVG with the rig's controls expressed as CSS keyframes in
 * app/globals.css:
 *
 *   Root control ............ `aiptx-droid-float`   body rides its suspension
 *   Body tilt ............... `aiptx-droid-lean`    rocks about the feet, with
 *                             `aiptx-droid-level`   the dome counter-rotating
 *                                                   so the head stays upright
 *   Head yaw (independent) .. `aiptx-droid-scan`    snap, hold, settle
 *   Head pitch (±) .......... `aiptx-droid-tilt`    the curious head-cock
 *   Eye look-at ............. `aiptx-droid-iris`    iris drifts in the socket
 *   Sensor emission ......... `aiptx-droid-lens` + `aiptx-droid-eye-blink`
 *   Status readout .......... `aiptx-droid-blink`, `aiptx-droid-cursor`,
 *                             `aiptx-droid-progress`
 *   Centre-leg deployment ... `aiptx-droid-deploy` + `aiptx-droid-piston`
 *   Wheel spin .............. `aiptx-droid-wheel`
 *
 * ...plus the things that are the droid's *output* rather than its body: the
 * gaze beams (`aiptx-droid-beam-l/-r`, lit in step with the yaw holds) and the
 * radar pings.
 *
 * Layering matters and is load-bearing: the beams and pings sit *behind* the
 * droid group, so the chassis occludes their origins and they read as projected
 * rather than pasted on top.
 *
 * Pure CSS animation is deliberate: no state, no effects, no `"use client"`. The
 * hero stays a Server Component and the whole illustration costs zero JS.
 * `prefers-reduced-motion` drops every animation to a still pose in globals.css.
 *
 * No SVG filters, also on purpose. A `feGaussianBlur` re-runs its whole graph
 * every frame an animated child changes, which was the one non-compositor cost
 * in here; the glows are pre-blurred radial-gradient ellipses instead, carrying
 * the same animation class as the light they back so the two pulse together.
 *
 * The gradient/clip ids are fixed rather than generated, so this renders once
 * per page. It is a hero decoration; if it ever needs to appear twice on one
 * route, the ids have to be parameterised first.
 */

/** Dome indicator lights, as `[x, delay]`. Staggered so the row chatters. */
const DOME_LIGHTS: Array<[number, string]> = [
  [100, "0s"],
  [110, "0.35s"],
  [120, "0.7s"],
  [190, "0.2s"],
  [200, "0.55s"],
  [210, "0.9s"],
];

/**
 * Logic-display cells, as `[x, delay]`. Evenly stepped rather than scattered:
 * one lit cell walks left to right like a scanning cursor, which reads as the
 * agent working through something. Random blinking read as a fault light.
 */
const LOGIC_CELLS: Array<[number, string]> = [
  [122, "0s"],
  [140, "0.12s"],
  [158, "0.24s"],
  [176, "0.36s"],
  [194, "0.48s"],
];

/** Radar pings. Negative delays start them mid-flight, so none is ever absent. */
const PING_DELAYS = ["0s", "-3.4s", "-6.8s"];

export function FeatureDroid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 470"
      role="img"
      aria-label="Illustration of the CrewLab build assistant droid"
      className={`aiptx-droid-boot h-auto w-full ${className ?? ""}`}
    >
      <defs>
        {/* Painted aluminium: the white body panels. Lit from the upper left,
            which is where the hero's bloom sits. */}
        <linearGradient id="droid-paint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fafafa" />
          <stop offset="52%" stopColor="#e7e5e4" />
          <stop offset="100%" stopColor="#a8a29e" />
        </linearGradient>

        {/* Metallic silver dome: brighter at the crown, falling into shadow at
            the neck ring. */}
        <linearGradient id="droid-dome" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#fafafa" />
          <stop offset="38%" stopColor="#d6d3d1" />
          <stop offset="100%" stopColor="#78716c" />
        </linearGradient>

        {/* Accent panels use warm graphite. See the note above on why not blue. */}
        <linearGradient id="droid-accent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#44403c" />
          <stop offset="55%" stopColor="#231f1d" />
          <stop offset="100%" stopColor="#12100f" />
        </linearGradient>

        {/* Ember is the lit edge on an accent panel and the leg stripes. */}
        <linearGradient id="droid-ember" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7b0a9" />
          <stop offset="55%" stopColor="#d42a1e" />
          <stop offset="100%" stopColor="#7f1d16" />
        </linearGradient>

        {/* Brushed steel forms the pistons, hubs, neck ring, and wheel. */}
        <linearGradient id="droid-steel" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#a8a29e" />
          <stop offset="45%" stopColor="#78716c" />
          <stop offset="100%" stopColor="#3f3a37" />
        </linearGradient>

        {/* Glass lens: dark at the rim, hot in the middle. */}
        <radialGradient id="droid-lens" cx="0.42" cy="0.36" r="0.72">
          <stop offset="0%" stopColor="#fde1dc" />
          <stop offset="34%" stopColor="#d42a1e" />
          <stop offset="78%" stopColor="#5a1812" />
          <stop offset="100%" stopColor="#12100f" />
        </radialGradient>

        {/* Pre-blurred glow, standing in for the feGaussianBlur this used to
            run. Painted as an ellipse behind whatever is emitting. */}
        <radialGradient id="droid-bloom" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#d42a1e" stopOpacity="0.55" />
          <stop offset="42%" stopColor="#d42a1e" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#d42a1e" stopOpacity="0" />
        </radialGradient>

        {/* Gaze beam. userSpaceOnUse and centred on the eye, so both wedges can
            share one gradient and each fades with true distance from the lens
            rather than with its own bounding box. */}
        <radialGradient
          id="droid-beam"
          gradientUnits="userSpaceOnUse"
          cx="160"
          cy="106"
          r="215"
        >
          <stop offset="0%" stopColor="#d42a1e" stopOpacity="0.34" />
          <stop offset="40%" stopColor="#d42a1e" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#d42a1e" stopOpacity="0" />
        </radialGradient>

        {/* Ground contact. A black shadow is invisible on a #080606 canvas, so
            the floor reads as a warm pool of light around the droid. It anchors
            the feet with opposite polarity. */}
        <radialGradient id="droid-shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#d42a1e" stopOpacity="0.3" />
          <stop offset="55%" stopColor="#9b261f" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#9b261f" stopOpacity="0" />
        </radialGradient>

        {/* The dome silhouette. The face group yaws and pitches inside this, so
            features travel out of sight round the dome's edge instead of
            floating off into the hero. */}
        <clipPath id="droid-dome-clip">
          <path d="M88 146 A72 72 0 0 1 232 146 Z" />
        </clipPath>
      </defs>

      {/* ------------------------------------------------ scanning field */}
      {/* One slow dashed ring for texture, plus pings expanding out of the
          droid. `r` is not CSS-animatable, so the pings are scaled. They share a
          radius and use per-element transforms. The whole field powers up a
          beat after the droid itself. */}
      <g
        aria-hidden="true"
        opacity="0.55"
        className="aiptx-droid-boot-field"
      >
        <circle
          cx="160"
          cy="250"
          r="146"
          fill="none"
          stroke="rgba(212,42,30,0.18)"
          strokeWidth="1"
          strokeDasharray="2 14"
          className="aiptx-droid-ring"
        />
        {PING_DELAYS.map((delay) => (
          <circle
            key={delay}
            cx="160"
            cy="250"
            r="118"
            fill="none"
            stroke="rgba(212,42,30,0.5)"
            strokeWidth="1"
            className="aiptx-droid-ping"
            style={{ animationDelay: delay }}
          />
        ))}
        {/* Hover only: a second, brighter ring fading up under the cursor.
            Deliberately not keyframe-animated because you cannot transition out of a
            running animation's current transform, so anything that has to
            respond smoothly to hover has to be a separate, still element. */}
        <circle
          cx="160"
          cy="250"
          r="132"
          fill="none"
          stroke="rgba(212,42,30,0.4)"
          strokeWidth="1"
          strokeDasharray="1 7"
          className="aiptx-droid-alert aiptx-droid-ring aiptx-droid-ring-alt"
        />
      </g>

      {/* ------------------------------------------------------- gaze beams */}
      {/* Two fixed wedges rather than one rotating one. This is a flat front
          view, so a cone thrown toward the viewer cannot be drawn; what reads
          instead is light spilling past the dome on whichever side the head is
          turned to. Each wedge lights during its own hold in `aiptx-droid-scan`,
          which couples the beam to the gaze without either having to know the
          other's geometry. */}
      <g aria-hidden="true">
        <path
          d="M160 106 L-30 214 L-46 118 Z"
          fill="url(#droid-beam)"
          className="aiptx-droid-beam-l"
        />
        <path
          d="M160 106 L350 214 L366 118 Z"
          fill="url(#droid-beam)"
          className="aiptx-droid-beam-r"
        />
      </g>

      {/* Floor contact. Outside the float group so the droid rises off it. */}
      <ellipse
        cx="160"
        cy="440"
        rx="112"
        ry="17"
        fill="url(#droid-shadow)"
        className="aiptx-droid-shadow"
        aria-hidden="true"
      />

      {/* ------------------------------------------------------- the droid */}
      {/* Root control: the whole rig bobs on its suspension... */}
      <g className="aiptx-droid-float">
        {/* ...and rocks about the feet, so it has weight instead of riding an
            elevator. The dome counter-rotates below. */}
        <g className="aiptx-droid-lean">
          {/* ----------------------------------------------- side legs */}
          {/* Behind the chassis, so the shoulder hubs tuck under the body edge. */}
          {[false, true].map((mirror) => (
            <g
              key={mirror ? "right" : "left"}
              transform={mirror ? "translate(320 0) scale(-1 1)" : undefined}
            >
              {/* Upper leg: white armour over the shoulder. */}
              <rect
                x="42"
                y="156"
                width="44"
                height="180"
                rx="9"
                fill="url(#droid-paint)"
              />
              {/* Accent strip uses ember rather than graphite. At leg scale a dark
                  bar disappears into the shadow between body and leg. */}
              <rect
                x="50"
                y="178"
                width="28"
                height="11"
                rx="3"
                fill="url(#droid-ember)"
              />
              {/* Recessed seam + edge wear. */}
              <rect
                x="50"
                y="200"
                width="28"
                height="1.5"
                fill="#78716c"
                opacity="0.55"
              />
              <path
                d="M46 232 h36"
                stroke="#57534e"
                strokeWidth="1"
                opacity="0.45"
              />
              <path
                d="M52 262 l24 6"
                stroke="#fafafa"
                strokeWidth="0.8"
                opacity="0.35"
              />

              {/* Shoulder hub, half-hidden by the chassis. */}
              <circle cx="88" cy="176" r="18" fill="url(#droid-steel)" />
              <circle cx="88" cy="176" r="7" fill="#1c1917" />

              {/* Hydraulic piston in the shin. */}
              <rect x="56" y="330" width="16" height="52" fill="url(#droid-steel)" />
              <rect x="60" y="330" width="3" height="52" fill="#d6d3d1" opacity="0.4" />
              <rect
                x="44"
                y="326"
                width="40"
                height="16"
                rx="5"
                fill="url(#droid-paint)"
              />

              {/* Hinged ankle. */}
              <rect
                x="40"
                y="374"
                width="48"
                height="24"
                rx="7"
                fill="url(#droid-paint)"
              />
              <circle cx="64" cy="386" r="5" fill="#3f3a37" />

              {/* Wide triangular foot. */}
              <path
                d="M30 396 h68 l-8 30 H38 Z"
                fill="url(#droid-paint)"
                stroke="#78716c"
                strokeWidth="0.75"
              />
              <path d="M38 420 h52 l-1 6 H39 Z" fill="#3f3a37" />
            </g>
          ))}

          {/* ---------------------------------------------- centre leg */}
          {/* Housing is fixed to the chassis; everything below telescopes out of
              it on a long cycle and stows again. This follows animation test 5
              from the brief. */}
          <rect x="146" y="350" width="28" height="36" rx="4" fill="url(#droid-steel)" />
          <rect
            x="151"
            y="376"
            width="18"
            height="26"
            rx="3"
            fill="#a8a29e"
            className="aiptx-droid-piston"
          />
          <rect
            x="155"
            y="376"
            width="3"
            height="26"
            fill="#f5f5f4"
            opacity="0.5"
            className="aiptx-droid-piston"
          />

          <g className="aiptx-droid-deploy">
            <circle cx="160" cy="414" r="19" fill="#1c1917" />
            <circle
              cx="160"
              cy="414"
              r="19"
              fill="none"
              stroke="#3f3a37"
              strokeWidth="2"
            />
            <circle cx="160" cy="414" r="11" fill="url(#droid-steel)" />
            {/* Wheel spin: only the spokes turn, so the tyre stays put. */}
            <g className="aiptx-droid-wheel">
              <path
                d="M160 404 v20 M150 414 h20 M153 407 l14 14 M167 407 l-14 14"
                stroke="#1c1917"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <circle cx="160" cy="414" r="3.5" fill="#57534e" />
          </g>

          {/* --------------------------------------------------- torso */}
          <rect
            x="88"
            y="146"
            width="144"
            height="214"
            rx="13"
            fill="url(#droid-paint)"
          />
          {/* Rounded shoulder highlight down the left edge. */}
          <rect x="92" y="152" width="6" height="200" rx="3" fill="#ffffff" opacity="0.5" />
          {/* ...and the shadow the cylinder throws on its own right side. */}
          <rect x="218" y="152" width="12" height="200" rx="6" fill="#78716c" opacity="0.35" />

          {/* Neck ring the dome rotates on. */}
          <rect x="92" y="138" width="136" height="15" rx="7" fill="url(#droid-steel)" />
          <rect x="98" y="142" width="124" height="2" rx="1" fill="#e7e5e4" opacity="0.4" />

          {/* Upper accent band, lit along its top lip. */}
          <rect x="96" y="162" width="128" height="17" rx="4" fill="url(#droid-accent)" />
          <rect x="98" y="163" width="124" height="2" rx="1" fill="url(#droid-ember)" opacity="0.9" />

          {/* Logic display: the recessed panel where the agent thinks out loud. */}
          <rect x="112" y="188" width="96" height="34" rx="5" fill="#141313" />
          <rect
            x="112"
            y="188"
            width="96"
            height="34"
            rx="5"
            fill="none"
            stroke="#3f3a37"
            strokeWidth="1"
          />
          {LOGIC_CELLS.map(([x, delay]) => (
            <g
              key={x}
              className="aiptx-droid-cursor"
              style={{ animationDelay: delay }}
            >
              <ellipse cx={x + 6} cy="198.5" rx="13" ry="10" fill="url(#droid-bloom)" />
              <rect x={x} y="195" width="12" height="7" rx="2" fill="#d42a1e" />
            </g>
          ))}
          {/* Progress track, and the bar that fills it in discrete jumps. */}
          <rect x="122" y="208" width="72" height="4" rx="2" fill="#3f3a37" />
          <rect
            x="122"
            y="208"
            width="72"
            height="4"
            rx="2"
            fill="#ef6b60"
            opacity="0.85"
            className="aiptx-droid-progress"
          />

          {/* Vents and grills. */}
          {[100, 166].map((x) => (
            <g key={x}>
              <rect x={x} y="232" width="54" height="24" rx="4" fill="#1c1917" />
              {[238, 244, 250].map((y) => (
                <rect
                  key={y}
                  x={x + 5}
                  y={y}
                  width="44"
                  height="2"
                  rx="1"
                  fill="#a8a29e"
                  opacity="0.5"
                />
              ))}
            </g>
          ))}

          {/* Recessed access panels. */}
          {[100, 166].map((x) => (
            <g key={x}>
              <rect
                x={x}
                y="268"
                width="54"
                height="44"
                rx="4"
                fill="#d6d3d1"
                opacity="0.55"
              />
              <rect
                x={x}
                y="268"
                width="54"
                height="44"
                rx="4"
                fill="none"
                stroke="#78716c"
                strokeWidth="1"
              />
              <circle cx={x + 8} cy="276" r="1.6" fill="#57534e" />
              <circle cx={x + 46} cy="276" r="1.6" fill="#57534e" />
              <circle cx={x + 8} cy="304" r="1.6" fill="#57534e" />
              <circle cx={x + 46} cy="304" r="1.6" fill="#57534e" />
            </g>
          ))}

          {/* Lower accent band. */}
          <rect x="96" y="320" width="128" height="17" rx="4" fill="url(#droid-accent)" />
          <rect x="98" y="321" width="124" height="2" rx="1" fill="url(#droid-ember)" opacity="0.8" />

          {/* Chassis floor. */}
          <rect x="90" y="342" width="140" height="18" rx="6" fill="url(#droid-steel)" />

          {/* Surface wear includes a couple of faint scratches. */}
          <path
            d="M108 296 l22 -8 M186 236 l14 -5"
            stroke="#ffffff"
            strokeWidth="0.7"
            opacity="0.22"
          />

          {/* -------------------------------------------------- dome */}
          {/* Counter-rotates the body lean so the head stays upright. It still
              swings sideways with the body. Only the tilt is cancelled, which
              is exactly what a levelled head does. */}
          <g className="aiptx-droid-level">
            <path d="M88 146 A72 72 0 0 1 232 146 Z" fill="url(#droid-dome)" />

            <g clipPath="url(#droid-dome-clip)">
              {/* Head rig, two stacked transforms so they compose: pitch on the
                  outer group, yaw on the inner. Both pivot at the neck. */}
              <g className="aiptx-droid-tilt">
                <g className="aiptx-droid-scan">
                  {/* Segmented panel markings. */}
                  <path d="M108 146 L124 92 h13 l-9 54 Z" fill="url(#droid-accent)" opacity="0.92" />
                  <path d="M212 146 L196 92 h-13 l9 54 Z" fill="url(#droid-accent)" opacity="0.92" />
                  <rect x="84" y="126" width="152" height="12" fill="url(#droid-accent)" opacity="0.92" />
                  <rect x="84" y="126" width="152" height="1.5" fill="url(#droid-ember)" opacity="0.75" />
                  {/* Recessed channel the indicator lights sit in. The band above
                      is already dark, so this one goes to near-black to stay a
                      separate depth rather than merging into it. */}
                  <rect x="84" y="138" width="152" height="9" fill="#080606" opacity="0.95" />
                  {/* Panel seams. */}
                  <path
                    d="M160 74 v54 M132 80 l10 48 M188 80 l-10 48"
                    stroke="#78716c"
                    strokeWidth="1"
                    opacity="0.45"
                  />

                  {/* Holoprojector housing: hardware only; it is not
                      projecting anything. */}
                  <rect x="152" y="80" width="16" height="9" rx="2" fill="url(#droid-steel)" />
                  <circle cx="160" cy="81" r="4" fill="#1c1917" />

                  {/* Central camera eye. */}
                  <circle cx="160" cy="106" r="21" fill="url(#droid-steel)" />
                  <circle cx="160" cy="106" r="17" fill="#12100f" />
                  {/* Hover only: the eye flares when a visitor is on the droid. */}
                  <ellipse
                    cx="160"
                    cy="106"
                    rx="40"
                    ry="40"
                    fill="url(#droid-bloom)"
                    className="aiptx-droid-alert"
                  />
                  {/* Breathing bloom + the lens itself. The blink lives on the
                      wrapper so it multiplies with the breathing rather than
                      fighting it for the same property. */}
                  <g className="aiptx-droid-eye-blink">
                    <ellipse
                      cx="160"
                      cy="106"
                      rx="27"
                      ry="27"
                      fill="url(#droid-bloom)"
                      className="aiptx-droid-lens"
                    />
                    <g className="aiptx-droid-iris">
                      <circle
                        cx="160"
                        cy="106"
                        r="12"
                        fill="url(#droid-lens)"
                        className="aiptx-droid-lens"
                      />
                    </g>
                  </g>
                  <ellipse cx="154" cy="100" rx="5" ry="3" fill="#ffffff" opacity="0.4" />

                  {/* Secondary optical sensors. */}
                  {[126, 194].map((x) => (
                    <g
                      key={x}
                      className="aiptx-droid-lens"
                      style={{ animationDelay: "-1.1s" }}
                    >
                      <ellipse cx={x} cy="120" rx="13" ry="13" fill="url(#droid-bloom)" />
                      <circle cx={x} cy="120" r="6.5" fill="#12100f" />
                      <circle cx={x} cy="120" r="2.6" fill="#ef6b60" />
                    </g>
                  ))}

                  {/* Indicator lights along the dome base. */}
                  {DOME_LIGHTS.map(([x, delay]) => (
                    <g
                      key={x}
                      className="aiptx-droid-blink"
                      style={{ animationDelay: delay }}
                    >
                      <ellipse cx={x + 3.5} cy="142.5" rx="9" ry="7" fill="url(#droid-bloom)" />
                      <rect x={x} y="140" width="7" height="5" rx="1.5" fill="#d42a1e" />
                    </g>
                  ))}
                </g>
              </g>

              {/* Specular sweep across the dome. It sits outside the head rig;
                  highlight belongs to the light, not to the head, so it must
                  not travel with the face. */}
              <ellipse cx="128" cy="98" rx="30" ry="18" fill="#ffffff" opacity="0.22" />
            </g>

            {/* Dome rim, on top of the clip so the edge stays crisp. */}
            <path
              d="M88 146 A72 72 0 0 1 232 146"
              fill="none"
              stroke="#a8a29e"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
