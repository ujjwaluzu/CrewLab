export default function HeroCollage() {
  return (
    <div className="collage" aria-hidden="true">
      <div className="halftone" />
      <div className="sheet-wrap">
        <div className="sheet">
          <svg className="duo" viewBox="0 0 480 440">
            <g fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#wobble)">
              <path d="M70 95C70 55 110 33 150 33C195 33 235 58 235 95C235 132 195 157 150 157C140 157 132 156 124 154L100 180L104 148C82 138 70 118 70 95Z" fill="var(--mint)" />
              <path d="M152 66a20 20 0 0 0-11 36c3 2 4 5 4 9h14c0-4 1-7 4-9a20 20 0 0 0-11-36zM146 122h12" />
              <g transform="translate(-42 16)">
                <path d="M235 80C235 42 275 20 320 20C365 20 405 44 405 80C405 108 382 130 352 137L374 168L336 142C330 143 325 143 320 143C275 143 235 118 235 80Z" fill="var(--red)" fillOpacity=".92" style={{ mixBlendMode: "multiply" }} />
                <path d="M300 68l-17 14 17 14M340 68l17 14-17 14M325 60l-10 44" />
              </g>
              <path d="M34 440c0-74 34-128 86-128s86 54 86 128" fill="var(--mint)" />
              <circle cx="120" cy="262" r="42" fill="var(--card)" />
              <path d="M106 254v9M134 254v9M104 278q16 14 32 0" />
              <path d="M192 372c26-6 42-22 50-44" />
              <circle cx="248" cy="330" r="9" fill="var(--card)" />
              <path d="M276 440c0-74 34-128 86-128s86 54 86 128" fill="var(--card)" />
              <circle cx="362" cy="270" r="42" fill="var(--card)" />
              <path d="M348 262v9M376 262v9M346 286q16 14 32 0" />
              <path d="M292 380c-22 0-42-8-52-22" />
              <circle cx="236" cy="358" r="9" fill="var(--card)" />
            </g>
          </svg>
        </div>
      </div>
      <span className="tape t1" />
      <span className="tape t2" />
      <svg className="brush" viewBox="0 0 600 140" aria-hidden="true"><use href="#brush-s" /></svg>
      <span className="tag a">Idea owner</span>
      <span className="tag b">Builder</span>
      <span className="cap">Fig. 01 — Two people, one project</span>
    </div>
  );
}