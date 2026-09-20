export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <filter id="rough" x="-12%" y="-30%" width="124%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.55" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="wobble" x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" seed="4" result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="3.2" />
        </filter>
        <symbol id="brush-s" viewBox="0 0 600 140">
          <path d="M12 74C90 26 210 108 330 58S528 36 590 66L586 108C486 124 386 90 306 116S92 138 16 110Z" fill="currentColor" filter="url(#rough)" />
        </symbol>
        <symbol id="brush-f" viewBox="0 0 600 140">
          <path d="M8 24C110 6 230 28 340 12S540 10 594 26L590 116C490 132 390 110 300 128S96 136 12 118Z" fill="currentColor" filter="url(#rough)" />
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></symbol>
        <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14.5c2.4 0 4 1.7 4 4.5" /></symbol>
        <symbol id="i-code" viewBox="0 0 24 24"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" /></symbol>
        <symbol id="i-bars" viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7" /></symbol>
        <symbol id="i-bulb" viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /></symbol>
        <symbol id="i-branch" viewBox="0 0 24 24"><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="8" r="2" /><path d="M6 7v10M18 10c0 4-6 3-12 7" /></symbol>
        <symbol id="i-check" viewBox="0 0 24 24"><path d="M4 6l1.5 1.5L8 5M4 12l1.5 1.5L8 11M4 18l1.5 1.5L8 17M11 6h9M11 12h9M11 18h9" /></symbol>
        <symbol id="i-chat" viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></symbol>
        <symbol id="i-pulse" viewBox="0 0 24 24"><path d="M3 12h4l3-8 4 16 3-8h4" /></symbol>
        <symbol id="i-grid" viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
        <symbol id="i-left" viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6" /></symbol>
        <symbol id="i-up-right" viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9" /></symbol>
      </defs>
    </svg>
  );
}