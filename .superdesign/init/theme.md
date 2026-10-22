# CrewLab design tokens

## Compact token summary
- Charcoal `#0d0d0c`; panels `#111110` and `#171715`; cream `#ece9e0`; muted `#aaa69d`; CrewLab coral `#f04a2e`.
- Plus Jakarta Sans / Space Grotesk body; Newsreader display; Space Mono micro-labels.
- Max width about 1240px, fluid side gutters; 12-column CSS grid; mostly square corners and hairline borders.
- Breakpoints: 1280px, 1080px, 820px, 560px.
- Editorial dark surfaces, warm accents, precise monospace labels.

## Raw stylesheets

### `src/app/(en)/globals.css`
```css
:root{
  --ink:#121110;--cream:#f1eadb;--paper:#f7f2e7;--red:#e5412d;--tan:#dccfae;
  --paper-2:var(--tan);--card:var(--paper);--ink-2:var(--ink);--mute:var(--ink);
  --line:rgba(18,17,16,.28);--panel:var(--ink);--on-panel:var(--cream);--on-red:var(--ink);
  --mint:var(--tan);--moss:var(--ink);--shadow:6px 6px 0 var(--ink);
  --display:var(--font-display);--serif:var(--font-display);--sans:var(--font-body);--mono:var(--font-mono);
  --head-h:82px;
  box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);
}
  html{scroll-padding-top:calc(72px + env(safe-area-inset-top,0px));scroll-behavior:smooth}
  *,*::before,*::after{box-sizing:border-box}
  body{margin:0;background:var(--paper);color:var(--ink);font:400 16px/1.6 var(--sans);-webkit-font-smoothing:antialiased;overflow-x:clip}
  body::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:100;opacity:.06;mix-blend-mode:multiply;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}
  img,svg{max-width:100%}
  a{color:inherit;text-decoration:none}
  button,input{font:inherit;color:inherit}
  :focus-visible{outline:3px solid var(--red);outline-offset:3px}
  .wrap{width:100%;max-width:1240px;margin-inline:auto;padding-inline:clamp(20px,4vw,48px)}
  .ic{width:1em;height:1em;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex:none}
  .mono{font:500 12px/1.4 var(--mono);letter-spacing:.06em;text-transform:uppercase}
  .visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}

  /* Buttons */
  .btn{white-space:nowrap;display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:999px;font-weight:600;font-size:15px;border:1.5px solid var(--ink);cursor:pointer;transition:transform .15s ease,background .15s ease,color .15s ease}
  .btn:active{transform:translateY(1px)}
  .btn-primary{background:var(--ink);color:var(--paper)}
  .btn-primary:hover{background:var(--red);border-color:var(--red);color:var(--on-red)}
  .btn-ghost{background:transparent;color:var(--ink)}
  .btn-ghost:hover{background:var(--ink);color:var(--paper)}
  .btn-sm{padding:10px 18px;font-size:14px}
  .btn-light{background:var(--on-panel);color:var(--panel);border-color:var(--on-panel)}
  .btn-light:hover{background:var(--red);border-color:var(--red);color:var(--on-red)}
  .btn .ic{font-size:16px}

  /* Header */
  .site-head{position:sticky;top:env(safe-area-inset-top,0px);z-index:50;background:color-mix(in srgb,var(--paper) 90%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
  .head-in{display:flex;align-items:center;justify-content:space-between;height:68px;gap:24px}
  .logo{display:flex;align-items:center;gap:10px;font:400 26px/1 var(--display);letter-spacing:.03em;text-transform:uppercase}
  .logo svg{width:28px;height:28px}
  .nav-links{display:flex;gap:36px}
  .nav-links a{font:500 12px/1 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ink-2);padding:8px 0;border-bottom:1.5px solid transparent}
  .nav-links a:hover{color:var(--ink);border-color:var(--red)}

  /* Hero */
  .hero{position:relative;padding:clamp(36px,5.5vw,76px) 0 clamp(48px,6vw,84px)}
  .hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:clamp(24px,4vw,64px);align-items:center}
  .kicker{color:var(--red);margin:0 0 22px}
  h1{margin:0}
  .d1{display:block;font:400 clamp(72px,11.4vw,168px)/.9 var(--display);text-transform:uppercase;letter-spacing:-.004em}
  .d2{display:block;font:italic 300 clamp(48px,6.6vw,98px)/1 var(--serif);margin-top:.14em;letter-spacing:-.01em}
  .crew{position:relative;display:inline-block;color:var(--on-red);padding:0 .12em;margin-left:-.05em}
  .crew>span{position:relative;z-index:1}
  .crew .brush{position:absolute;left:-7%;top:-9%;width:114%;height:120%;z-index:0;color:var(--red);animation:swipe .8s .25s cubic-bezier(.7,0,.2,1) both}
  .lede{max-width:46ch;margin:34px 0 32px;color:var(--ink-2);font-size:18px}
  .cta-row{display:flex;flex-wrap:wrap;gap:14px}
  .proof{display:flex;align-items:center;gap:14px;margin-top:38px;color:var(--ink-2);font-size:14px}
  .avs{display:flex}
  .avs i{width:38px;height:38px;border-radius:50%;border:2px solid var(--paper);margin-left:-10px;display:grid;place-items:center;font:normal 500 12px/1 var(--mono);color:var(--panel)}
  .avs i:first-child{margin-left:0}

  .collage{position:relative;width:100%;max-width:560px;aspect-ratio:1/1.04;justify-self:end}
  .halftone{position:absolute;right:-3%;top:-4%;width:58%;height:50%;background-image:radial-gradient(var(--ink) 1.4px,transparent 1.8px);background-size:9px 9px;opacity:.5;-webkit-mask-image:linear-gradient(205deg,#000 20%,transparent 78%);mask-image:linear-gradient(205deg,#000 20%,transparent 78%)}
  .halftone,.a-close-halftone,.f-cta-halftone,.h-close-halftone,.l-close-halftone,.x-close-halftone{display:none!important}
  .sheet-wrap{position:absolute;inset:5% 5% 9% 3%;transform:rotate(-2.2deg);filter:drop-shadow(0 22px 22px rgba(23,21,18,.28))}
  .sheet{width:100%;height:100%;background:var(--card);padding:9% 7% 6%;
    clip-path:polygon(0 3%,5% 0,13% 2%,24% 0,37% 2.4%,51% 0,65% 2%,79% 0,92% 2%,100% 0,100% 96.5%,93% 100%,81% 98%,67% 100%,51% 98%,36% 100%,21% 98%,9% 100%,0 97%)}
  .duo{width:100%;height:auto;display:block}
  .tape{position:absolute;width:88px;height:26px;background:rgba(212,190,140,.55);z-index:3;transform:rotate(-38deg);box-shadow:0 1px 0 rgba(0,0,0,.06)}
  .tape.t1{left:-1%;top:4%}
  .tape.t2{right:1%;bottom:12%;transform:rotate(34deg)}
  .collage .brush{position:absolute;left:-14%;bottom:6%;width:88%;color:var(--red);z-index:4;transform:rotate(-7deg);animation:swipe 1s .6s cubic-bezier(.7,0,.2,1) both}
  .tag{position:absolute;z-index:5;background:var(--paper);border:1px solid var(--ink);padding:7px 9px;font:500 11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;display:flex;gap:7px;align-items:center}
  .tag::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--red)}
  .tag.a{left:6%;top:47%;transform:rotate(-4deg)}
  .tag.b{right:1%;top:60%;transform:rotate(3deg)}
  .cap{position:absolute;left:4%;bottom:0;z-index:5;color:var(--mute);font:500 11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase}

  @keyframes swipe{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}

  /* Tickers */
  .tick{overflow:hidden;white-space:nowrap}
  .tick-a{background:var(--paper);border-top:3px solid var(--red);padding:14px 0 10px;font:400 clamp(28px,3.2vw,40px)/1 var(--display);text-transform:uppercase}
  .tick-b{background:var(--red);color:var(--on-red);padding:10px 0;font:500 12px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase}
  .track{display:inline-flex;animation:roll 38s linear infinite}
  .tick-b .track{animation-duration:46s;animation-direction:reverse}
  .track span{display:inline-flex;align-items:center;padding-right:34px}
  .track span::after{content:"";width:9px;height:9px;border-radius:50%;background:var(--red);margin-left:34px}
  .tick-b .track span::after{background:var(--on-red);width:5px;height:5px}
  @keyframes roll{to{transform:translateX(-50%)}}

  /* Two ways in */
  .ways{display:grid;grid-template-columns:1fr 1fr 1fr;background:var(--panel);color:var(--on-panel)}
  .way{position:relative;padding:clamp(28px,3.4vw,46px);min-height:460px;display:flex;flex-direction:column;overflow:hidden}
  .way h2{margin:auto 0 0;font:400 clamp(38px,4.2vw,62px)/.98 var(--display);text-transform:uppercase}
  .way p{max-width:34ch;margin:18px 0 26px;color:color-mix(in srgb,currentColor 72%,transparent)}
  .way .num{font:500 12px/1 var(--mono);letter-spacing:.14em;color:var(--red)}
  .way .ico{width:46px;height:46px;border:1px solid currentColor;display:grid;place-items:center;font-size:22px;margin:22px 0 0;opacity:.9}
  .go{width:46px;height:46px;border-radius:50%;border:1.5px solid currentColor;display:grid;place-items:center;font-size:18px;transition:background .15s,color .15s}
  .go:hover{background:var(--red);border-color:var(--red);color:var(--on-red)}
  .w1{background:var(--panel)}
  .w2{background:var(--paper-2);color:var(--ink)}
  .w3{background:url("/below-hero.webp") center/cover no-repeat var(--moss);color:var(--on-panel);padding:0}
  .w3 h2{position:absolute;left:clamp(28px,3.4vw,46px);bottom:clamp(28px,3.4vw,46px);margin:0;text-shadow:0 1px 2px rgba(0,0,0,.55),0 4px 22px rgba(0,0,0,.55)}

  /* Sections */
  section{position:relative}
  .pad{padding:clamp(56px,7vw,100px) 0}
  .tear{position:absolute;left:0;right:0;top:0;height:26px;z-index:5;pointer-events:none}
  .tear svg{display:block;width:100%;height:100%}
  h2.h{margin:0;font:400 clamp(48px,7vw,104px)/.94 var(--display);text-transform:uppercase}
  .sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:32px;flex-wrap:wrap;margin-bottom:clamp(28px,4vw,48px)}
  .sec-head p{max-width:34ch;margin:0;color:var(--ink-2)}

  /* How it works */
  .steps{display:grid;grid-template-columns:repeat(4,1fr);border-top:1.5px solid var(--ink)}
  .step{padding:28px clamp(16px,2vw,30px) 8px;border-left:1px solid var(--line)}
  .step:first-child{border-left:0;padding-left:0}
  .step .n{font:400 clamp(64px,7vw,100px)/1 var(--display);color:transparent;-webkit-text-stroke:1.5px var(--ink);letter-spacing:.01em}
  .step .ic{font-size:30px;margin:22px 0 18px;color:var(--red);display:block}
  .step h3{margin:0 0 8px;font:400 26px/1.05 var(--display);text-transform:uppercase;letter-spacing:.01em}
  .step p{margin:0;color:var(--ink-2);max-width:26ch}

  /* Workspace */
  .ws{background:var(--paper-2)}
  .ws-grid{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:clamp(32px,5vw,80px);align-items:center}
  .ws-copy{min-width:0;position:relative;z-index:1}
  .ws-title{font-size:clamp(40px,4.2vw,66px)}
  .ws .kicker{margin-bottom:20px}
  .ws-copy p{max-width:36ch;color:var(--ink-2);margin:16px 0 22px;font-size:18px}
  .feats{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
  .feats li{display:flex;align-items:center;gap:14px;padding:15px 0;border-bottom:1px solid var(--line);font-weight:500}
  .feats .ic{font-size:20px;color:var(--red)}
  .stage{position:relative;padding:5% 3%;transform:translateY(clamp(56px,8vw,116px))}
  .stage::before,.stage::after{content:"";position:absolute;inset:2% 1%;background:var(--card);border:1px solid var(--line);z-index:0}
  .stage::before{transform:rotate(-2.6deg)}
  .stage::after{transform:rotate(1.8deg)}
  .stage .brush{position:absolute;right:-3%;top:-3%;width:46%;color:var(--red);z-index:4;transform:rotate(9deg)}
  .stage .tag{left:-1%;bottom:2%;z-index:6;transform:rotate(-3deg)}
  .frame{position:relative;z-index:3;background:var(--card);padding:clamp(10px,1.6vw,18px);box-shadow:var(--shadow);border:1px solid var(--line)}
  /* Projects rail */
  .rail-ctl{display:flex;gap:10px}
  .arrow{width:48px;height:48px;border-radius:50%;border:1.5px solid var(--ink);background:transparent;display:grid;place-items:center;font-size:19px;cursor:pointer;transition:background .15s,color .15s}
  .arrow:hover{background:var(--ink);color:var(--paper)}
  .arrow:disabled{opacity:.3;cursor:default;background:transparent;color:var(--ink)}
  .rail{display:flex;gap:22px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:26px;scrollbar-width:none}
  .rail::-webkit-scrollbar{display:none}
  .pcard{flex:0 0 min(340px,82vw);scroll-snap-align:start;background:var(--card);border:1px solid var(--line);border-radius:18px;overflow:hidden;display:flex;flex-direction:column}
  .phead{display:flex;align-items:center;justify-content:space-between;padding:20px 22px 16px;border-bottom:1px solid var(--line)}
  .phead .lab{border:1px solid var(--ink);padding:5px 7px;color:var(--ink);font:500 10px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase}
  .pnum{color:var(--mute);font:500 11px/1 var(--mono);letter-spacing:.1em}
  .pbody{padding:22px 22px 24px;display:flex;flex-direction:column;gap:10px;flex:1}
  .pbody h3{margin:0;font:500 30px/1 var(--serif)}
  .pbody p{margin:0;color:var(--ink-2)}
  .pmeta{margin-top:auto;padding-top:14px;display:flex;flex-direction:column;gap:10px}
  .chip{align-self:flex-start;display:inline-flex;align-items:center;gap:0;border:1px solid var(--line);border-radius:99px;padding:6px 10px;font:500 11px/1 var(--mono);letter-spacing:.05em;text-transform:uppercase}
  .need{font-size:14px;color:var(--ink-2)}
  .need b{font-weight:600;color:var(--ink)}
  .note{margin:24px 0 0;color:var(--mute);font-size:14px}

  /* CTA */
  .cta{background:var(--panel);color:var(--on-panel);overflow:hidden}
  .cta-grid{display:grid;grid-template-columns:1fr 1fr;align-items:stretch}
  .cta-art{position:relative;min-height:360px;background:var(--panel)}
  .cta-art img{object-fit:cover}
  .cta-copy{padding:clamp(32px,4.5vw,56px) clamp(24px,5vw,80px);display:flex;flex-direction:column;justify-content:center}
  .cta-copy .kicker{margin-bottom:22px}
  .cta h2{margin:0;font:400 clamp(48px,6vw,92px)/.95 var(--display);text-transform:uppercase}
  .cta h2 .hl{display:inline-block;position:relative;color:var(--on-red);padding:0 .1em;margin:.06em 0 0 -.06em}
  .cta h2 .hl span{position:relative;z-index:1}
  .cta h2 .hl .brush{position:absolute;left:-5%;top:-10%;width:110%;height:124%;color:var(--red)}
  .cta h2 i{display:block;font:italic 300 .8em/1.1 var(--serif);text-transform:none}
  .cta-copy p{max-width:40ch;margin:18px 0 22px;color:color-mix(in srgb,var(--on-panel) 72%,transparent);font-size:18px}
  .signup{display:flex;gap:10px;flex-wrap:wrap;max-width:520px}
  .signup input{flex:1 1 220px;min-width:0;background:transparent;border:1.5px solid color-mix(in srgb,var(--on-panel) 45%,transparent);border-radius:999px;padding:14px 20px;color:var(--on-panel)}
  .signup input::placeholder{color:color-mix(in srgb,var(--on-panel) 55%,transparent)}
  .signup input:focus-visible{outline-color:var(--red)}
  .fine{margin:14px 0 0;font-size:14px;color:color-mix(in srgb,var(--on-panel) 55%,transparent);min-height:1.5em}
  .fine.ok{color:var(--mint)}

  /* Footer */
  footer{background:var(--ink);color:var(--cream);padding:clamp(44px,5.5vw,72px) 0 28px;border-top:1px solid var(--line)}
  .foot-grid{display:grid;grid-template-columns:1.2fr .7fr .7fr .7fr 1.2fr;gap:clamp(24px,4vw,56px);padding-bottom:clamp(40px,6vw,80px)}
  footer .logo{margin-bottom:16px}
  footer p{margin:0;color:rgba(241,237,228,.62);max-width:30ch}
  footer h4{margin:0 0 16px;font:500 12px/1 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:rgba(241,237,228,.5)}
  footer ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}
  footer ul a{color:rgba(241,237,228,.85)}
  footer ul a:hover{color:var(--red)}
  .foot-form{display:flex;gap:10px;margin:14px 0 20px}
  .foot-form input{flex:1;min-width:0;background:transparent;border:1px solid rgba(241,237,228,.3);border-radius:999px;padding:12px 18px;color:var(--on-panel)}
  .foot-form button{width:46px;height:46px;border-radius:50%;border:0;background:var(--red);color:var(--on-red);display:grid;place-items:center;font-size:18px;cursor:pointer;flex:none}
  .socials{display:flex;gap:10px}
  .socials a{width:38px;height:38px;border-radius:50%;border:1px solid rgba(241,237,228,.3);display:grid;place-items:center;color:rgba(241,237,228,.8)}
  .socials a .ic{width:18px;height:18px;fill:currentColor;stroke:none}
  .socials a:hover{background:var(--red);border-color:var(--red);color:var(--on-red)}
  .wordmark{overflow:hidden;white-space:nowrap;font:400 clamp(70px,17vw,260px)/.85 var(--display);letter-spacing:.01em;text-transform:uppercase;color:transparent;-webkit-text-stroke:1.5px rgba(241,237,228,.28);margin:clamp(40px,6vw,80px) 0 22px;text-align:center;user-select:none}
  .foot-base{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:rgba(241,237,228,.5);font:500 11px/1.4 var(--mono);letter-spacing:.1em;text-transform:uppercase;border-top:1px solid rgba(241,237,228,.12);padding-top:20px}

  /* Responsive */
  @media (max-width:1000px){
    .hero-grid{grid-template-columns:1fr}
    .collage{justify-self:center;max-width:500px}
    .ways{grid-template-columns:1fr}
    .way{min-height:380px}
    .w3{min-height:420px}
    .steps{grid-template-columns:1fr 1fr}
    .step:nth-child(3){border-left:0;padding-left:0}
    .step{padding-bottom:30px}
    .ws-grid{grid-template-columns:1fr}
    .cta-grid{grid-template-columns:1fr}
    .cta-art{min-height:380px}
    .foot-grid{grid-template-columns:1fr 1fr}
  }
  @media (max-width:640px){
    .nav-links{display:none}
    .steps{grid-template-columns:1fr}
    .step,.step:nth-child(3){border-left:0;padding-left:0;border-top:1px solid var(--line)}
    .step:first-child{border-top:0}
    .w-side{display:none}
    .w-body{grid-template-columns:1fr}
    .w-stats{grid-template-columns:1fr 1fr}
    .w-cols{grid-template-columns:1fr}
    .w-panel.act{display:none}
    .foot-grid{grid-template-columns:1fr}
    .tag.b{right:-2%}
  }
  @media (prefers-reduced-motion:reduce){
    html{scroll-behavior:auto}
    .track{animation:none}
    .crew .brush,.collage .brush{animation:none}
  }

/* Compact viewport rhythm */
.wrap{padding-inline:clamp(16px,3vw,36px)}
.head-in{height:60px;gap:16px}
.logo{gap:8px;font-size:24px}
.logo svg{width:26px;height:26px}
.nav-links{gap:28px}
.btn{gap:8px;padding:12px 20px}
.btn-sm{padding:8px 14px}
.hero{min-height:calc(100svh - 60px);padding:clamp(24px,3.5vw,48px) 0 clamp(30px,4vw,56px)}
.hero-grid{gap:clamp(20px,3vw,48px)}
.kicker{margin-bottom:16px}
.lede{margin:22px 0 22px}
.proof{margin-top:24px}
.tick-a{padding:10px 0 8px}
.tick-b{padding:8px 0}
.way{padding:clamp(22px,2.8vw,36px);min-height:400px}
.way .ico{margin-top:16px}
.way p{margin:14px 0 20px}
.w3 h2{left:clamp(22px,2.8vw,36px);bottom:clamp(22px,2.8vw,36px)}
.pad{padding:clamp(52px,6vw,88px) 0}
.sec-head{gap:24px;margin-bottom:clamp(28px,4vw,48px)}
.step{padding:20px clamp(12px,1.5vw,22px) 4px}
.step .ic{margin:16px 0 14px}
.ws-grid{gap:clamp(24px,3vw,48px)}
.ws-copy p{margin:20px 0 22px}
.feats li{padding:11px 0}
.stage{padding:4% 2.5%}
.pbody{padding:18px 18px 20px}
.cta-art{min-height:300px}
.cta-copy{padding:clamp(28px,3.5vw,44px) clamp(20px,4vw,56px)}
.cta-copy p{margin:20px 0 22px}
footer{padding:clamp(40px,5vw,64px) 0 24px}
.wordmark{margin:clamp(30px,4vw,56px) 0 18px}

@media (max-width:1000px){
  .hero{min-height:0}
  .way{min-height:340px}
  .w3{min-height:380px}
  .cta-art{min-height:300px}
}

@media (max-width:640px){
  .hero{padding-top:28px;padding-bottom:42px}
  .way{min-height:320px}
  .w3{min-height:350px}
  .cta-art{min-height:260px}
}

/* Readability pass */
body{font-size:16px;line-height:1.55}
.mono{font-size:11px;line-height:1.5}
.d1{font-size:clamp(64px,9.6vw,144px);line-height:.9;font-weight:400;letter-spacing:0}
.lede{font-size:clamp(16px,1.35vw,18px);line-height:1.58;font-weight:400}
.way h2{line-height:1.02;font-weight:400}
.way p,.sec-head p,.step p,.ws-copy p,.cta-copy p,.pbody p{font-size:16px;line-height:1.55;font-weight:400}
.step h3{line-height:1.1;font-weight:400}
.pbody h3{line-height:1.08;font-weight:500}
.wordmark{overflow:visible;line-height:.96;padding-top:.1em}
.projects-head{margin-bottom:clamp(40px,5vw,64px)}
.projects-head .note{margin-top:clamp(34px,3.5vw,48px)}

/* Projects rail - more link */
.rail-more{display:flex;justify-content:center;margin-top:clamp(20px,2.6vw,32px)}
.rail-more a{display:inline-flex;align-items:center;gap:10px;font:500 12px/1.6 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ink-2);padding:10px 18px;border:1.5px solid var(--line);border-radius:999px;transition:border-color .15s ease,color .15s ease,background .15s ease}
.rail-more a:hover{color:var(--on-red);background:var(--red);border-color:var(--red)}
.rail-more .ic{font-size:15px}

/* Internal links hub */
.home-links{background:var(--paper-2)}
.links-head{margin-bottom:clamp(28px,4vw,48px)}
.links-head .kicker{margin-bottom:16px}
.links-head .note{margin-top:clamp(22px,3vw,32px)}
.links-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(18px,2.2vw,26px)}
.link-card{position:relative;display:flex;flex-direction:column;gap:14px;background:var(--card);border:1px solid var(--line);padding:clamp(22px,2.6vw,32px);border-radius:14px;transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}
.link-card:nth-child(3n+1){transform:rotate(-0.45deg)}
.link-card:nth-child(3n+2){transform:rotate(0.4deg)}
.link-card:nth-child(3n+3){transform:rotate(-0.3deg)}
.link-card:hover{transform:rotate(0deg) translateY(-4px);border-color:var(--red);box-shadow:var(--shadow)}
.link-num{font:400 clamp(34px,3.4vw,48px)/1 var(--display);color:transparent;-webkit-text-stroke:1.5px var(--red);letter-spacing:.01em}
.link-label{font:400 clamp(22px,2.2vw,30px)/1.05 var(--display);text-transform:uppercase;letter-spacing:.01em}
.link-card p{margin:0;color:var(--ink-2);font-size:14.5px;line-height:1.55}
.link-go{margin-top:auto;padding-top:14px;border-top:1px solid var(--line);display:inline-flex;align-items:center;gap:8px;font:500 11px/1 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--red)}
.link-go .ic{font-size:15px}

/* FAQ */
.faq{background:var(--paper)}
.faq-head{margin-bottom:clamp(24px,3.2vw,40px)}
.faq-head .note{margin-top:clamp(20px,2.6vw,30px)}
.faq-list{max-width:900px}
.faq-item{border-top:1.5px solid var(--ink)}
.faq-item:last-child{border-bottom:1.5px solid var(--ink)}
.faq-item summary{list-style:none;cursor:pointer;display:grid;grid-template-columns:48px 1fr 24px;gap:clamp(10px,1.4vw,18px);align-items:center;padding:clamp(18px,2.4vw,26px) 0}
.faq-item summary::-webkit-details-marker{display:none}
.faq-num{font:500 12px/1 var(--mono);letter-spacing:.12em;color:var(--red)}
.faq-q{font:400 clamp(18px,2vw,24px)/1.25 var(--display);letter-spacing:.005em}
.faq-toggle{position:relative;width:22px;height:22px}
.faq-toggle::before,.faq-toggle::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--ink);transition:transform .18s ease}
.faq-toggle::before{width:14px;height:2px}
.faq-toggle::after{width:2px;height:14px}
.faq-item[open] .faq-toggle::after{transform:translate(-50%,-50%) scaleY(0)}
.faq-a{padding:0 0 clamp(20px,2.6vw,28px) calc(48px + clamp(10px,1.4vw,18px))}
.faq-a p{margin:0;max-width:68ch;color:var(--ink-2);font-size:16px;line-height:1.6}
.faq-item[open] summary .faq-q{color:var(--red)}
.faq-item summary:focus-visible{outline-offset:4px}

@media (max-width:1000px){
  .links-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:680px){
  .links-grid{grid-template-columns:1fr}
  .link-card{transform:none}
  .faq-item summary{grid-template-columns:32px 1fr 22px}
  .faq-num{font-size:10px}
  .faq-a{padding-left:0}
}

/* Cohesive, calmer type scale and component rhythm */
:root{--shadow:0 18px 44px -30px rgba(0,0,0,.48)}
body{font-size:15px;line-height:1.65}
.wrap{max-width:1200px;padding-inline:clamp(20px,4.2vw,56px)}
.head-in{height:64px}
.logo{font-size:21px;letter-spacing:.015em}
.nav-links{gap:clamp(18px,2.4vw,32px)}
.nav-links a{font-size:11px;letter-spacing:.08em}
.btn{font-size:14px;padding:11px 19px}
.btn-sm{font-size:13px;padding:9px 15px}
.mono{font-size:10px}
.hero{padding:clamp(36px,5vw,68px) 0 clamp(42px,5.5vw,74px)}
.d1{font-size:clamp(54px,8.4vw,118px);line-height:.94}
.d2{font-size:clamp(34px,4.8vw,64px);line-height:1.08}
.hero .hero-statement{font-size:clamp(38px,5vw,64px);line-height:1.06;letter-spacing:-.035em}
.lede,.ws-copy p,.cta-copy p{font-size:16px;line-height:1.65}
.proof{font-size:13px}
.tick-a{font-size:clamp(23px,2.8vw,34px)}
.way{min-height:340px;padding:clamp(24px,3vw,40px)}
.way h2{font-size:clamp(34px,3.4vw,48px)}
.way p,.sec-head p,.step p,.pbody p{font-size:15px;line-height:1.65}
.pad{padding:clamp(52px,6vw,84px) 0}
h2.h{font-size:clamp(40px,5.4vw,72px);line-height:.99}
.sec-head{margin-bottom:clamp(26px,3.4vw,40px)}
.step .n{font-size:clamp(52px,5.5vw,76px)}
.step h3{font-size:21px;line-height:1.15}
.step{padding-top:22px}
.ws-copy p{margin:14px 0 18px}
.ws-title{font-size:clamp(36px,4vw,54px)}
.feats li{font-size:14px;padding:12px 0}
.pcard{border-radius:14px}
.phead{padding:16px 18px 13px}
.pbody{padding:18px;gap:9px}
.pbody h3{font-size:25px}
.cta h2{font-size:clamp(42px,5.1vw,68px)}
.cta-copy{padding:clamp(28px,4vw,48px)}
.cta-copy p{margin:16px 0 20px}
.signup input{font-size:14px;padding:12px 17px}
.foot-grid{gap:clamp(20px,3vw,40px)}
.wordmark{font-size:clamp(48px,11vw,168px);letter-spacing:-.035em}
.link-card,.l-card,.l-rel-card{transform:none}
.link-card:hover,.l-card:hover,.l-rel-card:hover{transform:translateY(-3px)}
.link-label,.l-card h3,.l-rel-lab{font-size:clamp(20px,2vw,27px)}
.link-card p,.l-card p,.l-rel-card p{font-size:14px;line-height:1.6}
.faq-q{font-size:clamp(17px,1.7vw,21px)}
.faq-a p{font-size:15px}

@media (max-width:1000px){
  .hero-grid{gap:28px}
  .way{min-height:300px}
}
@media (max-width:640px){
  .head-in{height:58px}
  .logo{font-size:19px}
  .d1{font-size:clamp(43px,12vw,62px)}
  .d2{font-size:clamp(29px,8vw,42px)}
  .hero .hero-statement{font-size:clamp(34px,9vw,46px)}
  .hero{padding:32px 0 42px}
  .lede{font-size:15px}
  .way{min-height:280px}
  .w3{min-height:320px}
  .cta-art{min-height:240px}
  .wordmark{font-size:clamp(42px,13vw,86px)}
}

/* CrewLab collage system */
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{background:var(--cream);color:var(--ink);font:400 16px/1.55 var(--font-body);-webkit-font-smoothing:antialiased}
body::after{display:none}
.wrap{max-width:1200px;padding-inline:clamp(20px,3vw,40px)}
.site-head{position:relative;top:auto;z-index:50;background:transparent;backdrop-filter:none;-webkit-backdrop-filter:none;border-bottom:2px solid var(--ink)}
.head-in{height:calc(var(--head-h) - 2px);gap:24px}
.logo{font:800 24px/1 var(--font-display);letter-spacing:.02em}
.logo svg{width:26px;height:26px}
.nav-links{gap:36px}
.nav-links a,.foot-base,.mono,.kicker,.l-label,.x-preview{font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.08em}
.nav-links a{font-size:12px;color:var(--ink)}
.btn{min-height:44px;border:2px solid var(--ink);border-radius:999px;padding:12px 22px;font:700 13px/1.2 var(--font-mono);text-transform:uppercase;letter-spacing:.04em}
.btn-primary{background:var(--ink);color:var(--cream)}
.btn-primary:hover{background:var(--red);border-color:var(--ink);color:var(--ink)}
.btn-ghost{background:transparent;color:var(--ink)}
.btn-ghost:hover{background:var(--tan);color:var(--ink)}
.btn-light{background:var(--red);color:var(--ink);border-color:var(--ink)}
.btn-light:hover{background:var(--tan);color:var(--ink)}
.kicker{color:var(--red);font-size:12px;font-weight:700;letter-spacing:.08em}
.home-hero{display:block;min-height:0;padding:0}
.hero-grid{display:block;text-align:center;padding-top:42px;padding-bottom:0}
.hero-grid>div:first-child{max-width:100%;width:100%}
.home-hero h1{max-width:1100px;margin:22px auto 0;font:800 clamp(60px,9vw,132px)/.94 var(--font-display);letter-spacing:-.03em;text-transform:lowercase}
.home-hero .hero-statement{display:block;font:inherit;letter-spacing:inherit;line-height:inherit}
.home-hero .d2{display:block;margin:0;font:inherit;letter-spacing:inherit;line-height:inherit}
.home-hero .lede{max-width:640px;margin:34px auto 0;font-size:19px;line-height:1.5}
.home-hero .cta-row{justify-content:center;margin-top:30px;gap:14px}
.home-hero .proof{justify-content:center;margin-top:28px;font:12px/1.5 var(--font-mono);letter-spacing:.06em;text-transform:uppercase}
.home-hero .avs i{width:34px;height:34px;border:2px solid var(--cream);font-weight:700}
.home-hero .avs i:nth-child(2){background:var(--tan)}.home-hero .avs i:nth-child(3){background:var(--ink);color:var(--cream)}
.crew{padding:0 .08em .06em;background:var(--ink);color:var(--cream);border-radius:26px;transform:rotate(-2deg)}
.crew .brush{display:none}
.tick-a{display:none}
.tick-b{background:var(--red);color:var(--ink);border-block:2px solid var(--ink);padding:15px 0;font:700 15px/1.3 var(--font-mono);letter-spacing:.08em}
.tick-b .track{animation-duration:30s}.tick-b:hover .track{animation-play-state:paused}
.tick-b .track span::after{width:14px;height:14px;background:var(--ink);clip-path:polygon(50% 0,61% 35%,100% 50%,61% 65%,50% 100%,39% 65%,0 50%,39% 35%);margin-left:22px}
.way{border-top:2px solid var(--ink);border-right:1px solid var(--ink);min-height:340px}
.way h2,.h,.cta h2{font-family:var(--font-display);font-weight:800;text-transform:lowercase;letter-spacing:-.03em}
.way h2{font-size:clamp(34px,4vw,56px)}
.pad{padding:clamp(72px,8vw,112px) 0}
h2.h{font:800 clamp(42px,6.7vw,96px)/.95 var(--font-display);letter-spacing:-.03em;text-transform:lowercase}
.kicker,.sec-head>.kicker{font:700 12px/1.4 var(--font-mono);text-transform:uppercase;letter-spacing:.08em;color:var(--red)}
.sec-head{display:block;margin-bottom:40px}
.sec-head>p,.sec-head div>p:last-child{max-width:640px;margin:24px 0 0;font-size:18px;line-height:1.5}
.sec-head h2{margin-top:12px}
.steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;border:0}
.step,.step:nth-child(3){border:2px solid var(--ink);background:var(--paper);border-radius:6px;padding:26px;box-shadow:none;transform:rotate(-1deg)}
.step:nth-child(2){background:var(--tan);transform:rotate(1deg);margin-top:24px}
.step:nth-child(3){transform:rotate(-1deg)}.step:nth-child(4){background:var(--ink);color:var(--cream);transform:rotate(1deg);margin-top:24px}
.step .n{color:var(--red);-webkit-text-stroke:0;font:800 76px/1 var(--font-display)}
.step .ic{display:none}.step h3{margin:16px 0 8px;font:700 14px/1.35 var(--font-mono);letter-spacing:.02em;text-transform:uppercase}
.step p{font-size:15px;line-height:1.5;color:inherit}
.ws{background:var(--paper)}
.ws-grid{grid-template-columns:1fr 1fr}.ws-title{font-size:clamp(40px,5vw,72px)}
.stage{transform:none}.frame{border:2px solid var(--ink);box-shadow:12px 12px 0 var(--red)}
.rail{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));overflow-x:visible;gap:18px;padding:0}
.pcard{min-width:0;flex:none;border:2px solid var(--ink);border-radius:22px;background:var(--cream);box-shadow:none;transform:none}
.pcard:nth-child(even){background:var(--tan)}
.phead{border-bottom:1px solid var(--ink);padding:16px 20px}
.phead .lab{font:400 12px/1.4 var(--font-mono);border:0;letter-spacing:.08em}
.pbody{padding:22px;gap:9px}.pbody h3{font:800 34px/1.08 var(--font-display)}
.pbody p{font-size:15px;line-height:1.45}.chip{font:700 11px/1.3 var(--font-mono);border:0;background:var(--red);color:var(--ink);letter-spacing:.04em}
.rail-more{display:none}
.home-links{position:relative;background:var(--cream);overflow:hidden}
.home-links>.wrap{position:relative;z-index:1}
.links-grid{grid-template-columns:1fr;gap:0}
.link-card{display:grid;grid-template-columns:minmax(240px,1fr) minmax(220px,340px);align-items:center;gap:8px 28px;border:0;border-top:2px solid var(--ink);border-radius:0;background:transparent;padding:22px 0;transform:none;box-shadow:none}
.link-card:last-child{border-bottom:2px solid var(--ink)}
.link-num,.link-go{display:none}.link-label{font:800 clamp(30px,3.8vw,54px)/1.1 var(--font-display);text-transform:none}
.link-card p{grid-column:2;grid-row:1;margin:0;font:400 12px/1.6 var(--font-mono);letter-spacing:.02em;text-transform:uppercase}
.faq{background:var(--paper);border-top:2px solid var(--ink)}
.faq-head{text-align:center}.faq .faq-head .note{margin:22px auto 0}.faq-list{max-width:920px;margin:auto;border-top:2px solid var(--ink)}
.faq-item,.faq-item:last-child{border:0;border-bottom:1px solid var(--ink)}
.faq-item summary{grid-template-columns:1fr 28px;gap:16px;padding:22px 0;min-height:72px}
.faq-num{display:none}.faq-q{font:600 20px/1.35 var(--font-body);letter-spacing:0}
.faq-toggle{width:24px;height:24px}.faq-a{padding:0 40px 22px 0}.faq-a p{font:400 16px/1.6 var(--font-body)}
.cta{background:var(--paper);color:var(--ink);border-bottom:2px solid var(--ink);text-align:center;padding:clamp(44px,5vw,80px) 24px;background-image:none}
.cta-grid{display:block}.cta-art{display:none}.cta-copy{padding:0;align-items:center}
.cta h2{font:italic 800 clamp(52px,8vw,116px)/1 var(--font-display);letter-spacing:-.03em}
.cta h2 .hl{color:var(--red);background:none;padding:0;margin:0}.cta h2 .hl .brush{display:none}.cta h2 i{display:inline;font:inherit}
.cta-copy p{font:400 16px/1.5 var(--font-body);max-width:520px;margin:22px auto}
.signup{justify-content:center;max-width:none}.signup input{flex:0 1 250px;min-height:54px;border:2px solid var(--ink);background:var(--paper);color:var(--ink);font:400 12px var(--font-mono);letter-spacing:.06em;text-transform:uppercase}
.signup input::placeholder{color:var(--ink)}.fine{font:400 12px/1.5 var(--font-mono);color:var(--ink)}
footer{background:var(--ink);color:var(--cream);padding:80px 0 0;border:0}
.foot-grid{grid-template-columns:minmax(180px,.9fr) minmax(0,1fr) minmax(0,1fr) minmax(210px,1.1fr);gap:clamp(20px,3vw,40px);align-items:start;padding-bottom:30px}
footer .foot-grid>div:first-child p{display:block}
footer .logo,footer h4{font-family:var(--font-mono);color:var(--red);font-size:12px;text-transform:uppercase;letter-spacing:.08em}
footer h4{font-weight:400;margin-bottom:8px}
footer .foot-grid>div:nth-child(2){grid-column:2/4;grid-row:1;display:grid;grid-template-columns:1fr 1fr;gap:clamp(18px,3vw,36px);font-size:14px;line-height:1.7}
footer .foot-grid>div:nth-child(3){grid-column:4;grid-row:1;display:block;font-size:14px;line-height:1.7}
footer .foot-grid>div:nth-child(3) h4{margin:0 0 12px}
footer ul{gap:0}footer ul a{color:var(--cream)}footer .socials{display:none}
.wordmark{display:block;overflow:hidden;width:100%;font:800 clamp(72px,16vw,224px)/.78 var(--font-display);letter-spacing:-.05em;color:var(--cream);-webkit-text-stroke:0;margin:24px 0 12px;text-transform:lowercase}
.wordmark span{color:var(--red)}
.foot-base{max-width:none;margin:0;padding:16px 0 20px;font:400 10px/1.5 var(--font-mono);color:var(--cream);letter-spacing:.06em;border-top:1px solid rgba(241,234,219,.24)}
.foot-base span{max-width:33%}
@media(max-width:1000px){.steps{grid-template-columns:repeat(2,minmax(0,1fr))}.rail{grid-template-columns:repeat(2,minmax(0,1fr))}.home-hero h1{font-size:clamp(58px,10.4vw,106px)}.ws-grid{grid-template-columns:1fr}.stage{margin:24px 0}.foot-grid{gap:32px}}

@media(max-width:640px){
  .hero-intro{padding-top:20px}
  .home-hero .lede{margin-top:18px}
  .home-hero .cta-row{margin-top:18px}
  .home-hero .proof{margin-top:14px}
  main>.home-how,main>.home-projects,main>.home-links,main>.faq{padding-block:40px}
  main>.home-how{padding-block:24px}
  main>.home-links{padding-block:32px}
  main>.home-join{padding-block:32px}
  .home-how .sec-head,.home-projects .sec-head,.home-links .sec-head{margin-bottom:22px}
  .home-how .sec-head{padding:18px 16px;border-radius:8px;box-shadow:var(--shadow)}
  .home-steps{gap:14px}
  .home-steps .step-card{padding:20px}
  .home-join .signup{margin-top:18px}
  .faq-head{margin-bottom:20px}
  .home-links .link-card{padding-block:14px}
  main>.home-how .h,main>.home-links .h,main>.faq .h{font-size:clamp(22px,6.5vw,32px)}
  main>.home-how .section-description,main>.home-links .section-description,main>.faq .faq-head .note{font-size:16px}
}

@media(max-width:640px){
  .head-in{height:64px;gap:8px;padding-inline:12px}.head-in .logo{font-size:17px;gap:6px}.head-in .logo svg{width:20px;height:20px}.head-in>.btn{font-size:9px;padding:8px 10px;letter-spacing:0}
  .nav-links{display:none}.home-hero h1{width:100%;font-size:clamp(38px,10vw,46px)}
  .home-hero .lede{font-size:16px;margin-top:22px}.home-hero .cta-row{flex-direction:column;align-items:stretch;margin-top:24px}.home-hero .proof{font-size:10px;gap:8px}
  .hero-intro{width:100%;padding:32px 20px 0}.headline-pill{padding-inline:12px;border-radius:18px}
  .ways{grid-template-columns:1fr}.way{min-height:300px;border-right:0}.way h2{font-size:40px}
  .steps{grid-template-columns:1fr}.step,.step:nth-child(2),.step:nth-child(3),.step:nth-child(4){margin:0;transform:none}
  .rail{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-inline:20px;padding:0 20px 18px;margin-inline:-20px;scrollbar-width:none}
  .rail::-webkit-scrollbar{display:none}.pcard{flex:0 0 min(82vw,340px);scroll-snap-align:start}
  .link-card{grid-template-columns:1fr;gap:8px}.link-card p{grid-column:1;grid-row:auto}.faq-q{font-size:17px}
  .cta h2{font-size:clamp(27px,7.5vw,36px)}.signup{flex-direction:column;width:100%}.signup input,.signup button{width:100%;min-height:52px}
  .foot-grid{grid-template-columns:1fr}.footer-signup{grid-column:1;grid-row:auto}.foot-base{padding:24px 20px;flex-direction:column}.foot-base span{max-width:none}
}

/* Homepage collage, shared cards and responsive shared section patterns */
.hero-intro{text-align:center;padding:40px 20px 0;max-width:1200px;margin:auto}
.waitlist-sticker,.sticker{display:inline-block;background:var(--paper);border:2px solid var(--ink);padding:6px 14px;border-radius:999px;font:700 12px/1.35 var(--font-mono);letter-spacing:.08em;text-transform:uppercase}
.waitlist-sticker{transform:rotate(-3deg)}
.headline-pill{display:inline-block;padding:0 24px 8px;border-radius:26px;line-height:.94;transform:rotate(-2deg)}
.ink-pill{background:var(--ink);color:var(--cream)}
.red-pill{background:var(--red);color:var(--ink);transform:rotate(2deg);font-style:italic;font-weight:500}
.project-meta{font:400 12px/1.4 var(--font-mono);letter-spacing:.08em;text-transform:uppercase}
.dashboard-preview{width:100%;background:var(--ink);color:var(--cream);border-radius:16px;padding:20px 22px;box-shadow:12px 12px 0 var(--red);font:400 13px/1.4 var(--font-body)}
.dashboard-dots{display:flex;gap:6px;margin-bottom:16px}.dashboard-dots i{width:10px;height:10px;border-radius:50%;background:var(--red)}.dashboard-dots i:nth-child(2){background:var(--tan)}.dashboard-dots i:nth-child(3){background:var(--cream)}
.dashboard-preview h2{margin:0;font:800 26px/1.2 var(--font-display)}.dashboard-preview>p{margin:2px 0 16px;color:var(--cream);opacity:.75;font-size:13px}
.dashboard-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;text-align:left}.dashboard-stats>div{min-width:0;border:1px solid rgba(241,234,219,.34);border-radius:10px;padding:12px}
.dashboard-stats strong{display:block;font:800 30px/1 var(--font-display)}.dashboard-stats span{display:block;margin-top:4px;font:400 10px/1.3 var(--font-mono);text-transform:uppercase}
.section-header .kicker{margin:0 0 12px}.section-header h2{margin:0}.section-description{font-size:18px;line-height:1.5}
.home-how{position:relative;width:100%;isolation:isolate}.home-how>.wrap{position:relative;z-index:1}.home-steps{gap:20px}
.step-card{list-style:none;border:2px solid var(--ink);background:var(--paper);padding:26px;border-radius:6px;transform:rotate(-1deg)}
.step-card.tan{background:var(--tan);transform:rotate(1deg);margin-top:24px}.step-card.ink{background:var(--ink);color:var(--cream);transform:rotate(1deg);margin-top:24px}
.step-number{display:block;color:var(--red);font:800 76px/1 var(--font-display)}
.step-card h3{font:700 14px/1.35 var(--font-mono);text-transform:uppercase;margin:16px 0 8px}.step-card p{font-size:15px;line-height:1.5;margin:0}
.home-projects{background:var(--ink);color:var(--cream)}.home-projects .section-description{display:none}
.projects-head{display:flex;align-items:end;justify-content:space-between;gap:24px}.home-projects .kicker{color:var(--red)}.home-projects h2{color:var(--cream)}
.rail{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;overflow:visible;padding:0}
.project-card{min-height:300px;display:flex;flex-direction:column;background:var(--cream);color:var(--ink);border:0;border-radius:22px;padding:26px;scroll-snap-align:start}
.project-card.tan{background:var(--tan)}.project-card h3{font:800 34px/1.1 var(--font-display);margin:14px 0 8px}.project-card p{font-size:15px;line-height:1.45;margin:0}
.project-details{margin-top:auto;border-top:1px solid var(--ink);padding-top:14px;display:grid;gap:4px;font-size:14px}.project-details strong{font-weight:600}
.project-browse{background:var(--red);color:var(--ink);border-radius:22px;padding:26px;min-height:300px;display:flex;flex-direction:column;justify-content:flex-end;font:italic 800 38px/1 var(--font-display)}.project-browse span{font-style:normal;font-family:var(--font-body)}
.rail-ctl{display:none}
.home-join{border-bottom:2px solid var(--ink)}.home-join .cta-copy h2 span{color:var(--red)}.home-join .fine{margin-top:18px;color:var(--ink)}
.home-join .signup{width:min(100%,520px);flex-direction:row}.home-join .signup input{flex:1 1 250px;min-width:200px}
.home-links .section-header{margin-bottom:40px}.home-links .section-description{max-width:460px}
.home-links .link-card{color:var(--ink)}.home-links .link-card:hover{color:var(--red)}
.site-footer{padding:52px 0 0}
.site-footer .foot-grid{align-items:start}
.footer-links{grid-column:2/4;grid-row:1;display:grid;grid-template-columns:1fr 1fr;gap:clamp(18px,3vw,36px);font-size:14px;line-height:1.7}
.footer-signup{grid-column:4;grid-row:1;max-width:none;margin-top:0}
.footer-brand .logo{color:var(--cream);font-family:var(--font-display);font-size:24px}.footer-brand p{color:var(--cream);font-size:15px}
.footer-signup h4,.footer-links h4{font:400 12px/1.5 var(--font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--red)}
.marquee{overflow:hidden;white-space:nowrap;background:var(--red);color:var(--ink);border-block:2px solid var(--ink);padding:16px 0;font:700 15px/1.3 var(--font-mono);letter-spacing:.08em;text-transform:uppercase}
.marquee-track{display:flex;width:max-content;animation:marquee-roll 36s linear infinite}.marquee:hover .marquee-track{animation-play-state:paused}
.marquee-track>span{display:inline-flex;align-items:center;gap:22px;padding-right:22px}.marquee-track b{font-size:16px}
@keyframes marquee-roll{to{transform:translateX(-25%)}}
@media(prefers-reduced-motion:reduce){.marquee-track{animation:none}}
button,input,.nav-links a{min-height:44px}
footer .footer-links ul,footer .footer-signup ul{gap:6px}
@media(max-width:900px) and (min-width:641px){.site-footer .foot-grid{grid-template-columns:minmax(160px,.8fr) repeat(2,minmax(0,1fr));gap:28px 22px}.site-footer .footer-links{grid-column:2/4}.site-footer .footer-signup{grid-column:1/-1}}
.landing,.explore,.features,.about,.hiw{background:var(--cream);color:var(--ink);color-scheme:light}
.landing .l-sec-copy,.landing .l-sec-cards,.landing .l-related{background:var(--cream)}
.landing .l-hero{padding:clamp(36px,5vw,72px) 0}.landing .l-title .d1{font-size:clamp(48px,7vw,92px)}
.landing .l-board,.landing .l-card,.landing .l-rel-card{background:var(--paper);border:2px solid var(--ink);border-radius:22px;box-shadow:6px 6px 0 var(--ink)}
.landing .l-card:nth-child(3n+1),.landing .l-rel-card:nth-child(odd){transform:rotate(-1deg)}
.landing .l-card:nth-child(3n+2),.landing .l-rel-card:nth-child(even){transform:rotate(1deg)}
.landing .l-card:nth-child(3n+3){transform:rotate(-.5deg)}
.landing .l-card:hover,.landing .l-rel-card:hover{transform:translateY(-3px);box-shadow:8px 8px 0 var(--ink)}
.landing .l-label,.landing .l-close-kicker{font-family:var(--font-mono);font-weight:700;color:var(--red)}
.landing .l-label span{color:var(--ink)}.landing .l-close{background:var(--ink);color:var(--cream)}
.landing .l-close h2{font-family:var(--font-display);font-weight:800;text-transform:lowercase}
.landing .l-close .btn{background:var(--red);color:var(--ink)}
.explore .x-hero,.features .f-hero,.about .a-hero,.hiw .h-hero{padding:clamp(36px,5vw,72px) 0}
.explore .x-title .d1,.hiw .h-title .d1{font-size:clamp(48px,7vw,92px)}
.explore .x-title .d2,.hiw .h-title .d2{font-size:clamp(30px,4vw,56px)}
.explore .x-card,.features .f-card,.about .a-card,.hiw .h-card{border:2px solid var(--ink);border-radius:22px;background:var(--paper);box-shadow:6px 6px 0 var(--ink);color:var(--ink)}
.explore .x-card:nth-child(even),.features .f-card:nth-child(even),.about .a-card:nth-child(even),.hiw .h-card:nth-child(even){background:var(--tan)}
.explore .x-card:hover,.features .f-card:hover,.about .a-card:hover,.hiw .h-card:hover{transform:translateY(-3px);box-shadow:8px 8px 0 var(--ink)}
.explore .x-browse,.features .f-section,.about .a-section,.hiw .h-section{background:var(--cream);color:var(--ink)}
.features .f-label,.about .a-label,.hiw .h-label,.explore .kicker{font-family:var(--font-mono);font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--red)}
.explore .x-close,.features .f-cta,.about .a-close,.hiw .h-close{background:var(--ink);color:var(--cream)}
.features .f-title .d1,.about .a-t1{font-family:var(--font-display);font-weight:800;text-transform:lowercase}
.explore .x-hl,.features .f-hl,.about .a-hl,.hiw .h-hl{background:var(--red);color:var(--ink);border:2px solid var(--ink);border-radius:22px;transform:rotate(-2deg)}
.features .f-title .d2,.about .a-t2,.hiw .h-title .d2{font-family:var(--font-display);font-style:italic;font-weight:500}
.features .f-label,.about .a-kicker,.hiw .h-kicker{color:var(--red)}
.features .f-panel,.features .f-workspace,.features .f-cta{border-color:var(--ink)}
.explore .x-skill,.explore .x-pill,.features .f-chip,.about .a-tag,.hiw .h-tag{border:2px solid var(--ink);border-radius:999px;background:var(--paper);color:var(--ink);font-family:var(--font-mono)}
.explore .x-pill.on,.explore .x-tag,.features .f-tag,.about .a-tag.red,.hiw .h-tag.red{background:var(--red);color:var(--ink)}
body:has(.landing),body:has(.explore),body:has(.features),body:has(.about),body:has(.hiw){background:var(--cream)}
button,input{font-family:var(--font-body)}
:focus-visible{outline:3px solid var(--red);outline-offset:4px}
.home-hero{display:block;align-items:initial}
@media(max-width:1000px){.rail{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){
  .site-footer{padding:36px 0 0}
  .site-footer .foot-grid{display:flex;flex-direction:column;align-items:stretch;gap:24px;padding-bottom:20px}
  .site-footer .footer-brand,.site-footer .footer-links,.site-footer .footer-signup{width:100%;margin-top:0}
  .site-footer .footer-links{grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;font-size:13px}
  .site-footer .footer-brand p{max-width:32ch;font-size:14px;margin-top:10px}
  .site-footer .footer-signup ul{grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 12px}
  .site-footer .wordmark{font-size:clamp(44px,14vw,60px);line-height:.82;letter-spacing:-.07em;margin:20px 0 10px}
  .site-footer .foot-base{display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:12px 0 16px;font-size:9px}
  .site-footer .foot-base span{max-width:none}
  .projects-head{align-items:start}.rail{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-inline:20px;padding:0 20px 18px;margin-inline:-20px;scrollbar-width:none}.rail::-webkit-scrollbar{display:none}.project-card,.project-browse{flex:0 0 min(82vw,340px)}
  .step-card.tan,.step-card.ink{margin-top:0;transform:none}.step-card{transform:none}.footer-links{grid-column:1;grid-row:auto}.footer-signup{grid-column:1;grid-row:auto}
}

.hero-grid{grid-template-columns:1fr;justify-items:center;text-align:center}
.hero-grid>div:first-child{width:100%;max-width:920px}
.hero .lede{margin-inline:auto}
.hero .cta-row,.hero .proof{justify-content:center}
.hero{display:flex;align-items:center}

@media (min-width:641px){
  .hero h1 .d1{display:inline-block}
  .hero h1 .d1+.d1{margin-left:.16em}
}
@media(max-width:640px){
  :root{--head-h:66px}
  .site-head{width:100%;max-width:100vw;overflow-x:clip}
  .head-in{gap:8px;padding-inline:12px;display:flex;width:100%;max-width:100%;box-sizing:border-box;justify-content:space-between}
  .head-in .logo{font-size:17px;gap:6px}
  .head-in .logo svg{width:20px;height:20px}
  .head-in>.btn{position:absolute;top:50%;right:12px;transform:translateY(-50%);width:150px;justify-content:center;font-size:9px;padding:8px;letter-spacing:0;max-width:calc(100vw - 170px);min-width:0;white-space:nowrap}
  .home-hero{width:100%;max-width:100%;overflow-x:clip}
  .home-hero h1{width:100%;font-size:clamp(31px,9vw,38px);overflow-wrap:anywhere}
  .home-hero .lede{width:calc(100vw - 64px);max-width:326px;margin-inline:auto;font-size:17px;overflow-wrap:anywhere;white-space:normal}
  .home-hero .cta-row{width:100%;align-items:stretch}.home-hero .cta-row .btn{box-sizing:border-box;width:100%;max-width:350px;align-self:auto}
  .home-hero .proof{max-width:calc(100vw - 40px);margin-inline:auto;flex-wrap:wrap;justify-content:center}
  .hero-intro{width:100%;max-width:100%;padding:32px 20px 0}
  .headline-pill{padding-inline:12px;border-radius:18px}
  .dashboard-stats{grid-template-columns:repeat(2,minmax(0,1fr))}
  .landing,.explore,.features,.about,.hiw,.wl,.nf{width:100%;max-width:100%;overflow-x:clip}
  .landing h1,.explore h1,.features h1,.about h1,.hiw h1,.wl h1,.nf h1{max-width:100%;overflow-wrap:anywhere}
  .landing .l-title .d1,.explore .x-title .d1,.features .f-title .d1,.about .a-t1,.hiw .h-title .d1{font-size:clamp(36px,10vw,52px)}
}

.site-head-home .head-in{display:flex;justify-content:space-between}

/* Tighter homepage rhythm */
.hero-intro{padding-top:24px}
.home-hero h1{margin-top:12px}
.home-hero .lede{margin-top:24px}
.home-hero .cta-row{margin-top:24px}
.home-hero .proof{margin-top:18px}
main>.home-how,main>.home-projects,main>.home-links,main>.faq{padding-block:clamp(44px,6vw,80px)}
main>.home-how{padding-block:clamp(28px,3.5vw,48px)}
main>.home-links{padding-block:clamp(32px,4vw,56px)}
main>.home-join{padding-block:clamp(36px,4vw,56px)}
.home-projects .sec-head,.home-links .sec-head{margin-bottom:28px}
.home-how .sec-head{
  width:fit-content;
  max-width:min(680px,100%);
  margin:0 auto 28px;
  text-align:center;
  background:rgba(247,242,231,.94);
  border:2px solid var(--ink);
  border-radius:10px;
  padding:clamp(20px,3vw,32px) clamp(22px,4vw,40px);
  box-shadow:var(--shadow);
}
.home-how .sec-head h2{margin-top:0}
.home-how .sec-head h2 i{display:block}
.home-how .sec-head>p{max-width:none;margin:12px auto 0}
.home-how{isolation:isolate;overflow:hidden}
.home-how-crystal{position:absolute;inset:0;z-index:0;opacity:.42;mix-blend-mode:multiply;pointer-events:none}
.home-how-crystal-ball{position:absolute;inset:0}
.home-how-crystal .crystalized-ball{width:100%;height:100%}
.home-how-crystal-wash{position:absolute;inset:0;background:radial-gradient(ellipse 56% 60% at 50% 48%,rgba(241,234,219,.34),rgba(241,234,219,0) 100%)}
.home-how>.wrap{position:relative;z-index:1}
.home-how .sec-head{background:transparent;border:0;border-radius:0;padding:0;box-shadow:none}
.home-steps{gap:18px;align-items:stretch}
.home-steps .step-card{
  position:relative;
  overflow:hidden;
  height:100%;
  min-height:288px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:stretch;
  gap:24px;
  transform:none;
  margin-top:0;
  border:2px solid var(--ink);
  border-radius:8px;
  padding:clamp(22px,2.4vw,30px);
  box-shadow:6px 6px 0 var(--ink);
  background:rgba(247,242,231,.8);
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
  transition:transform .2s ease,box-shadow .2s ease;
}
.home-steps .step-card:hover{transform:translate(-2px,-3px);box-shadow:9px 10px 0 var(--ink)}
.home-steps .step-card.blush{background:rgba(239,214,197,.8)}
.home-steps .step-card.tan{background:rgba(220,207,174,.8)}
.home-steps .step-card.ink{background:rgba(48,38,38,.86);color:var(--cream)}
.home-steps .step-card-top{display:flex;align-items:center;justify-content:space-between;min-height:48px;padding-bottom:16px;border-bottom:1px solid currentColor}
.home-steps .step-icon{display:grid;place-items:center;width:42px;height:42px;border:1px solid currentColor;border-radius:50%;color:var(--red)}
.home-steps .step-icon .ic{width:20px;height:20px}
.home-steps .step-card-copy{min-width:0}
.home-steps .step-number{
  display:block;
  color:var(--red);
  font:800 clamp(34px,3vw,44px)/.9 var(--display);
  letter-spacing:-.04em;
}
.home-steps .step-card h3{max-width:16ch;margin:0 0 12px;font:800 clamp(22px,2vw,28px)/1.02 var(--display);letter-spacing:-.035em;text-transform:lowercase}
.home-steps .step-card p{margin:0;color:rgba(18,17,16,.78);font-size:14px;line-height:1.65}
.home-steps .step-card.ink p{color:rgba(241,234,219,.78)}
.home-join .cta-copy h2{margin-bottom:0}
.home-join .signup{margin-top:24px}
.home-join .fine{margin-top:12px}
.faq-head{margin-bottom:28px}
.faq-head .note{margin-top:14px}
.home-links .section-header{margin-bottom:28px}
.home-links .link-card{padding-block:16px}
@media(max-width:640px){
  .home-how-crystal{opacity:.3}
  .hero-intro{padding-top:20px}
  .home-hero .lede{margin-top:18px}
  .home-hero .cta-row{margin-top:18px}
  .home-hero .proof{margin-top:14px}
  main>.home-how,main>.home-projects,main>.home-links,main>.faq{padding-block:40px}
  main>.home-how{padding-block:24px}
  main>.home-links{padding-block:32px}
  main>.home-join{padding-block:32px}
  .home-how .sec-head,.home-projects .sec-head,.home-links .sec-head{margin-bottom:22px}
  .home-how .sec-head{padding:0;border:0;border-radius:0;box-shadow:none;background:transparent}
  .home-steps{gap:14px}
  .home-steps .step-card{padding:20px}
  .home-join .signup{margin-top:18px}
  .faq-head{margin-bottom:20px}
  .home-links .link-card{padding-block:14px}
  main>.home-how .h,main>.home-links .h,main>.faq .h{font-size:clamp(22px,6.5vw,32px)}
  main>.home-how .section-description,main>.home-links .section-description,main>.faq .faq-head .note{font-size:16px}
}

/* Pixel-art Earth background - scoped to the hero section only */
.site-head-home + main{margin-top:calc(-1 * var(--head-h))}
.home-hero{
  position:relative;
  isolation:isolate;
  min-height:100svh;
  padding-top:var(--head-h);
  padding-bottom:0;
  background:url("/Pixel%20Earth%20at%20Dawn.webp") center/cover no-repeat;
}
.home-hero::before{
  content:"";
  position:absolute;
  inset:0;
  z-index:-1;
  pointer-events:none;
  background:
    radial-gradient(ellipse 92% 60% at 50% 42%, rgba(241,234,219,.78), rgba(241,234,219,0) 72%),
    linear-gradient(180deg,
      rgba(241,234,219,.55) 0%,
      rgba(241,234,219,.50) 20%,
      rgba(241,234,219,.42) 40%,
      rgba(241,234,219,.34) 55%,
      rgba(241,234,219,.22) 72%,
      rgba(241,234,219,.10) 86%,
      rgba(241,234,219,0) 100%);
}
.home-hero h1{text-shadow:0 1px 2px rgba(241,234,219,.9),0 0 10px rgba(241,234,219,.5)}
.home-hero .lede,.home-hero .proof{
  text-shadow:0 1px 2px rgba(241,234,219,.95),0 0 6px rgba(241,234,219,.85),0 0 14px rgba(241,234,219,.6);
}
.home-hero .avs i{text-shadow:none;background:var(--paper);color:var(--ink);border-color:var(--ink)}
.home-hero .avs i:nth-child(2){background:var(--tan);color:var(--ink)}
.home-hero .avs i:nth-child(3){background:var(--ink);color:var(--cream)}
@media(max-width:1000px){
  .home-hero{min-height:100svh}
}
@media(max-width:640px){
  .home-hero{
    min-height:100svh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-position:center;
    background-size:cover;
  }
  .home-hero .cta-row{
    width:100%;
    gap:12px;
  }
  .home-hero .cta-row .btn{
    width:100%;
    max-width:min(350px,calc(100vw - 40px));
    justify-content:center;
    font-size:14px;
    padding:13px 18px;
  }
}
@media(max-width:380px){
  .home-hero .cta-row .btn{
    white-space:normal;
    text-align:center;
    font-size:13px;
    padding:12px 14px;
  }
}

/* Group the primary navigation links into accessible disclosure menus. */
.nav-shell{display:flex;align-items:center}
.nav-mobile-toggle{display:none}
.head-cta-short{display:none}
.nav-dropdown{position:relative}
.nav-trigger{display:flex;min-height:44px;align-items:center;gap:8px;cursor:pointer;border:0;background:transparent;list-style:none;font:500 12px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ink);padding:8px 0}
.nav-trigger::after{content:"";width:7px;height:7px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:translateY(-2px) rotate(45deg);transition:transform .16s ease}
.nav-dropdown.is-open .nav-trigger::after{transform:translateY(2px) rotate(225deg)}
.nav-trigger:hover,.nav-trigger:focus-visible{color:var(--red)}
.nav-menu{position:absolute;z-index:60;top:calc(100% + 4px);left:-16px;display:none;width:max-content;min-width:220px;max-width:min(320px,90vw);padding:8px;background:var(--paper);border:1.5px solid var(--ink);border-radius:12px;box-shadow:5px 5px 0 var(--ink)}
.nav-dropdown.is-open .nav-menu{display:grid;gap:2px}
.nav-dropdown:last-child .nav-menu{right:0;left:auto}
.nav-menu a{display:flex;min-height:42px;align-items:center;border:0;border-radius:7px;padding:9px 12px;font:500 12px/1.3 var(--mono);letter-spacing:.025em;text-transform:none;color:var(--ink)}
.nav-menu a:hover,.nav-menu a:focus-visible{background:var(--tan);border:0;color:var(--ink)}
@media(max-width:760px){
  :root{--head-h:66px}
  .site-head .head-in{height:var(--head-h);min-height:var(--head-h);display:flex;gap:8px;padding:0 12px}
  .site-head .head-in>.logo{order:1;min-width:0;margin-right:auto;font-size:clamp(16px,4vw,20px)}
  .site-head .head-in>.btn{position:static;order:2;transform:none;width:auto;max-width:calc(100vw - 180px);min-width:0;gap:5px;padding:7px 9px;font-size:9px;letter-spacing:0}
  .head-cta-full{display:none}
  .head-cta-short{display:inline}
  .site-head .nav-shell{position:static;order:3;flex:none}
  .site-head .nav-mobile-toggle{display:flex;width:42px;height:42px;min-height:42px;flex:none;flex-direction:column;align-items:center;justify-content:center;gap:5px;border:1.5px solid var(--ink);border-radius:50%;background:var(--paper);padding:0;cursor:pointer}
  .nav-mobile-toggle span{display:block;width:17px;height:1.5px;border-radius:2px;background:var(--ink);transition:transform .18s ease,opacity .18s ease}
  .nav-shell.is-mobile-open .nav-mobile-toggle span:first-child{transform:translateY(6.5px) rotate(45deg)}
  .nav-shell.is-mobile-open .nav-mobile-toggle span:nth-child(2){opacity:0}
  .nav-shell.is-mobile-open .nav-mobile-toggle span:last-child{transform:translateY(-6.5px) rotate(-45deg)}
  .site-head .nav-shell .nav-links{position:absolute;top:calc(100% + 2px);left:0;right:0;display:none;width:100%;flex-direction:column;gap:0;padding:8px 16px;background:var(--paper);border:0;border-bottom:2px solid var(--ink);box-shadow:0 6px 12px rgb(18 17 16 / 10%)}
  .site-head .nav-shell.is-mobile-open .nav-links{display:flex}
  .nav-dropdown{width:100%;border-bottom:1px solid var(--line)}
  .nav-dropdown:last-child{border-bottom:0}
  .nav-trigger{width:100%;min-height:48px;justify-content:space-between;font-size:11px;letter-spacing:.06em}
  .nav-menu,.nav-dropdown:last-child .nav-menu{position:static;width:100%;min-width:0;max-width:none;transform:none;padding:0 0 8px 12px;border:0;border-radius:0;background:transparent;box-shadow:none}
  .nav-menu a{min-height:40px;padding:9px 10px}
}
@media(max-width:360px){
  .site-head .head-in{gap:6px;padding-inline:9px}
  .site-head .head-in>.logo{font-size:16px}
  .site-head .head-in>.btn{max-width:calc(100vw - 170px);padding-inline:8px;font-size:8px}
  .site-head .head-in>.btn .ic{width:13px;height:13px}
  .site-head .nav-mobile-toggle{width:38px;height:38px;min-height:38px}
  .head-cta-full{display:none}
  .head-cta-short{display:inline}
}

```

### `src/app/(en)/homepage.css`
```css
.crewlab-page{
  --cl-bg:#0d0d0c;--cl-panel:#141413;--cl-panel-2:#111110;--cl-line:#2a2a27;--cl-input:#4a4a45;
  --cl-text:#ece9e0;--cl-muted:#a9a69b;--cl-red:#f04a2e;--cl-red-hover:#ff6a50;--cl-ink:#0d0d0c;
  --cl-display:var(--font-cl-display);--cl-body:var(--font-cl-body);--cl-mono:var(--font-cl-mono);
  width:100%;overflow:clip;background:var(--cl-bg);color:var(--cl-text);font:400 15px/1.55 var(--cl-body)
}
.crewlab-page *{box-sizing:border-box}
.crewlab-page a{color:inherit;text-decoration:none;transition:color 150ms ease,background-color 150ms ease,border-color 150ms ease}
.crewlab-page a:hover{color:var(--cl-red-hover)}
.cl-wrap{max-width:1280px;margin:0 auto;border-inline:1px solid var(--cl-line)}
.cl-row{display:grid;border-bottom:1px solid var(--cl-line);min-width:0}
.cl-cell{min-width:0;padding:32px;border-right:1px solid var(--cl-line)}
.cl-cell:last-child{border-right:0}
.cl-mono{font:400 13px/1.45 var(--cl-mono);letter-spacing:.04em;text-transform:uppercase;color:var(--cl-muted)}
.cl-nav{position:sticky;top:env(safe-area-inset-top,0px);z-index:100;grid-template-columns:260px 1fr 240px;align-items:center;background:var(--cl-bg)}
.cl-nav .cl-cell{padding:14px 32px}
.cl-nav-brand{display:flex;align-items:center}
.cl-logo{display:inline-flex;align-items:center;gap:10px;color:var(--cl-text)!important;font:700 22px/1 var(--cl-display);letter-spacing:-.02em}
.cl-logo svg{width:20px;height:20px;flex:none}
.cl-nav-links{display:flex;justify-content:center;color:var(--cl-text)}
.cl-language-control{position:absolute;right:0;display:inline-flex;flex:none;align-items:center}
.cl-language-select{min-width:54px;min-height:38px;padding:0 18px 0 9px;border:1px solid var(--cl-line);border-radius:0;background:var(--cl-bg);color:var(--cl-text);font:500 11px/1 var(--cl-mono);letter-spacing:.04em;cursor:pointer}
.cl-language-select:hover,.cl-language-select:focus-visible{border-color:var(--cl-red);color:var(--cl-red-hover)}
.crewlab-page .nav-shell{position:relative;display:flex;width:100%;align-items:center;justify-content:center;gap:16px}
.crewlab-page .nav-links{position:static;display:flex;width:auto;align-items:center;justify-content:center;gap:32px;padding:0;border:0;background:transparent;box-shadow:none}
.crewlab-page .nav-dropdown{position:relative;width:auto;border:0}
.crewlab-page .nav-trigger{min-height:44px;gap:9px;padding:8px 0;border:0;border-radius:0;background:transparent;color:var(--cl-text);font:400 12px/1.2 var(--cl-mono);letter-spacing:.04em;text-transform:uppercase;transition:color 150ms ease}
.crewlab-page .nav-trigger:hover,.crewlab-page .nav-trigger:focus-visible{color:var(--cl-red-hover)}
.crewlab-page .nav-dropdown.is-active>.nav-trigger{color:var(--cl-red)}
.crewlab-page .nav-dropdown.is-active>.nav-trigger::after{border-color:var(--cl-red)}
.crewlab-page .nav-dropdown.is-active>.nav-trigger:hover,.crewlab-page .nav-dropdown.is-active>.nav-trigger:focus-visible{color:var(--cl-red-hover)}
.crewlab-page .nav-trigger::after{width:6px;height:6px;border-width:1px;transition:transform 150ms ease,color 150ms ease}
.crewlab-page .nav-menu{position:absolute;z-index:80;top:calc(100% + 5px);left:-16px;display:none;width:max-content;min-width:220px;max-width:min(320px,90vw);gap:2px;padding:6px;border:1px solid var(--cl-line);border-radius:0;background:var(--cl-panel);box-shadow:none}
.crewlab-page .nav-dropdown.is-open .nav-menu{display:grid}
.crewlab-page .nav-dropdown:last-child .nav-menu{right:0;left:auto}
.crewlab-page .nav-menu a{display:flex;min-height:40px;align-items:center;padding:9px 12px;border:0;border-radius:0;color:var(--cl-text);font:400 12px/1.35 var(--cl-mono);letter-spacing:.015em;text-transform:none;transition:color 150ms ease,background-color 150ms ease}
.crewlab-page .nav-menu a:hover,.crewlab-page .nav-menu a:focus-visible{border:0;background:var(--cl-bg);color:var(--cl-red-hover)}
.crewlab-page .nav-menu a.is-current-page{background:var(--cl-bg);color:var(--cl-red)}
.crewlab-page .nav-mobile-toggle{display:none}
.cl-nav-cta{text-align:right}
.cl-nav-actions{display:flex;align-items:center;justify-content:flex-end;gap:14px}

.cl-nav-waitlist-short{display:none}
.cl-button{display:inline-flex;min-height:46px;align-items:center;justify-content:center;gap:8px;padding:13px 22px;background:var(--cl-red);color:var(--cl-ink)!important;border:1px solid var(--cl-red);font:700 13px/1.2 var(--cl-mono);letter-spacing:.04em;text-transform:uppercase;transition:color 150ms ease,background-color 150ms ease,border-color 150ms ease}
.cl-button:hover{background:var(--cl-red-hover);border-color:var(--cl-red-hover)}
.cl-button.cl-ghost{background:transparent;color:var(--cl-text)!important;border-color:#3a3a36}
.cl-button.cl-ghost:hover{color:var(--cl-red-hover)!important;border-color:var(--cl-red-hover)}
.cl-hero{grid-template-columns:2fr 1fr}
.cl-hero-copy{padding:48px 32px 64px}
.cl-kicker{margin:0 0 30px;color:var(--cl-text)}
.cl-kicker i{display:inline-block;width:8px;height:8px;margin-right:6px;background:var(--cl-red)}
.cl-hero-copy .cl-actions{margin-top:28px}
.cl-hero h1,.cl-join h2{margin:0;font:700 clamp(44px,6.4vw,84px)/1 var(--cl-display);letter-spacing:-.02em;text-transform:uppercase}
.cl-hero h1 span,.cl-join h2 span{color:var(--cl-red)}
.cl-droid-cell{display:grid;place-items:center;overflow:hidden;background:var(--cl-panel-2);padding:24px}
.cl-droid-art{display:block;width:min(100%,320px);height:auto;overflow:visible}
.cl-intro{grid-template-columns:1.6fr 1fr 1fr 1fr}
.cl-intro-main p{max-width:510px;margin:0 0 24px;color:var(--cl-muted)}
.cl-actions{display:flex;flex-wrap:wrap;gap:8px}
.cl-audience{display:flex;flex-direction:column;justify-content:space-between;gap:36px}
.cl-audience strong{font:700 clamp(25px,3vw,38px)/1 var(--cl-display);letter-spacing:-.02em;text-transform:uppercase}
.cl-section{border-bottom:1px solid var(--cl-line)}
.cl-section-head{grid-template-columns:1fr 2fr 1fr;align-items:stretch;border-bottom:1px solid var(--cl-line);scroll-margin-top:12px}
.cl-head-title{display:flex;align-items:center;background:var(--cl-panel)}
.cl-head-title h2{margin:0;font:700 clamp(32px,4vw,44px)/1 var(--cl-display);letter-spacing:-.02em;text-transform:uppercase}
.cl-head-copy{display:flex;align-items:center}
.cl-head-copy p{max-width:520px;margin:0;color:var(--cl-muted)}
.cl-head-count{display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:8px;text-align:right}
.cl-head-count strong{font:700 44px/1 var(--cl-display)}
.cl-steps{grid-template-columns:repeat(4,minmax(0,1fr));border-bottom:0}
.cl-step{min-height:280px}
.cl-step-num{color:var(--cl-red)}
.cl-step h3{margin:64px 0 10px;font:500 24px/1.15 var(--cl-display);letter-spacing:-.01em}
.cl-step p{margin:0;color:var(--cl-muted);font-size:14px;line-height:1.6}
.cl-crew-list{border-bottom:0}
.cl-crew-item{grid-template-columns:1fr 1.4fr 96px;align-items:center;color:var(--cl-text)!important}
.cl-crew-item:hover{background:var(--cl-panel)}
.cl-crew-item .cl-cell{padding:22px 32px}
.cl-crew-title{font:700 36px/1.05 var(--cl-display);letter-spacing:-.02em;text-transform:uppercase}
.cl-crew-description{color:var(--cl-muted);font-size:14px}
.cl-plus{display:grid;width:32px;height:32px;padding:0;place-items:center;justify-self:end;background:var(--cl-red);color:var(--cl-ink);font:700 19px/1 var(--cl-mono)}
.cl-crew-item .cl-cell.cl-plus,.cl-faq-summary .cl-cell.cl-plus{padding:0;justify-self:center;align-self:center}
.cl-crew-item:hover .cl-plus{background:var(--cl-red-hover)}
.cl-faq-list{border-bottom:0}
.cl-faq-item{display:block}
.cl-faq-summary{display:grid;grid-template-columns:96px minmax(0,1fr) 96px;align-items:stretch;list-style:none;cursor:pointer}
.cl-faq-summary::-webkit-details-marker{display:none}
.cl-faq-summary:focus-visible{outline:2px solid var(--cl-red);outline-offset:-3px}
.cl-faq-num{display:flex;align-items:center}
.cl-faq-question{display:flex;align-items:center;font-size:17px}
.cl-faq-answer{padding:0 128px 24px;color:var(--cl-muted)}
.cl-faq-answer p{max-width:760px;margin:0}
.cl-faq-item[open] .cl-faq-summary .cl-plus{font-size:0}
.cl-faq-item[open] .cl-faq-summary .cl-plus::before{content:"−";font-size:19px}
.cl-faq-item[open] .cl-faq-summary:hover{background:var(--cl-panel)}
.cl-join{grid-template-columns:1.2fr 1fr}
.cl-join-title{display:flex;align-items:center;padding-block:72px}
.cl-join-form{display:flex;flex-direction:column;justify-content:flex-end;gap:16px;background:var(--cl-panel-2);padding-block:56px}
.cl-join-form>.cl-mono{color:var(--cl-text)}
.cl-join-form .signup{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px 18px;align-items:end;width:100%;min-width:0;max-width:none;margin:0}
.cl-join-form .signup label{position:static;display:block;overflow:visible;flex-basis:100%;width:auto;height:auto;clip:auto;clip-path:none;white-space:normal;margin:0;padding:0;color:var(--cl-muted);font:400 13px/1.45 var(--cl-mono);letter-spacing:.04em;text-transform:uppercase}
.cl-join-form .signup label{grid-column:1/-1}
.cl-join-form .signup input{grid-column:1;min-width:0;width:100%;min-height:48px;padding:10px 0;border:0;border-bottom:1px solid var(--cl-input);border-radius:0;background:transparent;color:var(--cl-text);font:400 15px/1.4 var(--cl-body);letter-spacing:normal;text-transform:none;outline:none}
.cl-join-form .signup input::placeholder{color:#8f8c82}
.cl-join-form .signup input:focus{border-bottom-color:var(--cl-red)}
.cl-join-form .signup input:focus-visible{box-shadow:0 1px 0 var(--cl-red)}
.cl-join-form .signup button{grid-column:2;justify-self:end;min-height:46px;padding:13px 18px;border:1px solid var(--cl-red);border-radius:0;background:var(--cl-red);color:var(--cl-ink);font:700 12px/1.2 var(--cl-mono);letter-spacing:.025em;text-transform:uppercase;cursor:pointer;transition:color 150ms ease,background-color 150ms ease,border-color 150ms ease}
.cl-join-form .signup button:hover{background:var(--cl-red-hover);border-color:var(--cl-red-hover)}
.cl-join-form .signup button:disabled{opacity:.7;cursor:wait}
.cl-join-form .fine{margin:0;color:var(--cl-muted);font:400 12px/1.5 var(--cl-mono)}
.cl-join-form .fine:empty{display:none}
.cl-footer .cl-foot-grid{grid-template-columns:1.2fr 1fr 1fr 1fr}
.cl-foot-brand p{max-width:250px;margin:16px 0 0;color:var(--cl-muted);font-size:14px}
.cl-foot-links{display:flex;flex-direction:column;align-items:flex-start;gap:8px;font-size:14px}
.cl-foot-links h3{margin:0 0 8px;color:var(--cl-muted);font:400 13px/1.45 var(--cl-mono);letter-spacing:.04em;text-transform:uppercase}
.cl-foot-links a.is-current-page{color:var(--cl-red)}
.cl-foot-links a.is-current-page:hover{color:var(--cl-red-hover)}
.cl-foot-brand .cl-logo[aria-current="page"] span{color:var(--cl-red)}
.cl-copyright{grid-template-columns:1fr 1fr}
.cl-copyright .cl-cell{padding:16px 32px}
.cl-copyright .cl-cell:last-child{text-align:right}
.cl-wordmark{grid-template-columns:repeat(7,minmax(0,1fr));border-bottom:0}
.cl-wordmark span{text-align:center;padding:24px 0;border-right:1px solid var(--cl-line);font:700 clamp(48px,11vw,150px)/.95 var(--cl-display);letter-spacing:-.04em}
.cl-wordmark span:last-child{border-right:0}
.cl-wordmark span:nth-child(n+5){color:var(--cl-red)}
.crewlab-page .aiptx-droid-boot{animation:aiptx-droid-boot 900ms cubic-bezier(0,0,.2,1) both}
.crewlab-page .aiptx-droid-boot-field{animation:aiptx-droid-boot-field 1.2s ease-out 600ms both}
.crewlab-page .aiptx-droid-float{animation:aiptx-droid-float 4.3s ease-in-out infinite}
.crewlab-page .aiptx-droid-lean{transform-origin:160px 410px;animation:aiptx-droid-lean 6.7s ease-in-out infinite}
.crewlab-page .aiptx-droid-level{transform-origin:160px 146px;animation:aiptx-droid-level 6.7s ease-in-out infinite}
.crewlab-page .aiptx-droid-shadow{transform-origin:160px 440px;animation:aiptx-droid-shadow 4.3s ease-in-out infinite}
.crewlab-page .aiptx-droid-scan{transform-origin:160px 110px;animation:aiptx-droid-scan 8.7s cubic-bezier(.62,0,.2,1) infinite}
.crewlab-page .aiptx-droid-tilt{transform-origin:160px 146px;animation:aiptx-droid-tilt 11.3s cubic-bezier(.5,0,.25,1) infinite}
.crewlab-page .aiptx-droid-iris{transform-origin:160px 106px;animation:aiptx-droid-iris 5.3s ease-in-out infinite}
.crewlab-page .aiptx-droid-eye-blink{animation:aiptx-droid-eye-blink 7.1s linear infinite}
.crewlab-page .aiptx-droid-lens{animation:aiptx-droid-lens 2.9s ease-in-out infinite}
.crewlab-page .aiptx-droid-blink{animation:aiptx-droid-blink 1.7s steps(1,end) infinite}
.crewlab-page .aiptx-droid-cursor{animation:aiptx-droid-cursor 2.4s steps(1,end) infinite}
.crewlab-page .aiptx-droid-progress{transform-origin:122px 210px;transform:scaleX(.47);animation:aiptx-droid-progress 6.2s steps(14,end) infinite}
.crewlab-page .aiptx-droid-beam-l,.crewlab-page .aiptx-droid-beam-r{opacity:0;animation:aiptx-droid-beam-l 8.7s ease-in-out infinite}
.crewlab-page .aiptx-droid-beam-r{animation-name:aiptx-droid-beam-r}
.crewlab-page .aiptx-droid-ping{opacity:0;transform-origin:160px 250px;animation:aiptx-droid-ping 10.2s cubic-bezier(0,.5,.4,1) infinite}
.crewlab-page .aiptx-droid-deploy{transform-origin:160px 414px;animation:aiptx-droid-deploy 14.3s ease-in-out infinite}
.crewlab-page .aiptx-droid-piston{transform-origin:160px 376px;animation:aiptx-droid-piston 14.3s ease-in-out infinite}
.crewlab-page .aiptx-droid-wheel{transform-origin:160px 414px;animation:aiptx-droid-wheel 3.1s linear infinite}
.crewlab-page .aiptx-droid-ring{transform-origin:160px 250px;animation:aiptx-droid-ring 46s linear infinite}
.crewlab-page .aiptx-droid-ring-alt{animation-duration:64s;animation-direction:reverse}
.crewlab-page .aiptx-droid-alert{opacity:0;transition:opacity 200ms ease}
.crewlab-page .aiptx-droid-stage:hover .aiptx-droid-alert{opacity:1}
@keyframes aiptx-droid-boot{from{opacity:0;transform:translateY(12px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes aiptx-droid-boot-field{from{opacity:0}to{opacity:.55}}
@keyframes aiptx-droid-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes aiptx-droid-lean{0%,100%{transform:rotate(-1deg)}50%{transform:rotate(1.4deg)}}
@keyframes aiptx-droid-level{0%,100%{transform:rotate(1deg)}50%{transform:rotate(-1.4deg)}}
@keyframes aiptx-droid-shadow{0%,100%{transform:scaleX(1);opacity:.85}50%{transform:scaleX(.82);opacity:.55}}
@keyframes aiptx-droid-scan{0%,12%{transform:rotate(0deg)}24%,38%{transform:rotate(-8deg)}50%,64%{transform:rotate(7deg)}76%,100%{transform:rotate(0deg)}}
@keyframes aiptx-droid-tilt{0%,30%,100%{transform:rotate(0deg)}42%,58%{transform:rotate(-3deg)}72%,88%{transform:rotate(2deg)}}
@keyframes aiptx-droid-iris{0%,100%{transform:translateX(0)}28%{transform:translateX(-3px)}68%{transform:translateX(3px)}}
@keyframes aiptx-droid-eye-blink{0%,92%,100%{transform:scaleY(1)}94%,96%{transform:scaleY(.12)}}
@keyframes aiptx-droid-lens{0%,100%{opacity:.72}50%{opacity:1}}
@keyframes aiptx-droid-blink{0%,45%,100%{opacity:1}48%,53%{opacity:.25}}
@keyframes aiptx-droid-cursor{0%,12%,100%{opacity:.25}6%{opacity:1}}
@keyframes aiptx-droid-progress{0%{transform:scaleX(.12)}50%{transform:scaleX(.82)}100%{transform:scaleX(.3)}}
@keyframes aiptx-droid-beam-l{0%,16%,100%{opacity:0}6%,12%{opacity:.8}}
@keyframes aiptx-droid-beam-r{0%,46%,72%,100%{opacity:0}54%,66%{opacity:.8}}
@keyframes aiptx-droid-ping{0%{opacity:0;transform:scale(.45)}12%{opacity:.45}45%,100%{opacity:0;transform:scale(1.2)}}
@keyframes aiptx-droid-ring{to{transform:rotate(360deg)}}
@keyframes aiptx-droid-deploy{0%,34%,86%,100%{transform:translateY(0)}48%,70%{transform:translateY(6px)}}
@keyframes aiptx-droid-piston{0%,34%,86%,100%{transform:scaleY(1)}48%,70%{transform:scaleY(1.25)}}
@keyframes aiptx-droid-wheel{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.crewlab-page .aiptx-droid-boot,.crewlab-page .aiptx-droid-boot-field,.crewlab-page .aiptx-droid-float,.crewlab-page .aiptx-droid-lean,.crewlab-page .aiptx-droid-level,.crewlab-page .aiptx-droid-shadow,.crewlab-page .aiptx-droid-scan,.crewlab-page .aiptx-droid-tilt,.crewlab-page .aiptx-droid-iris,.crewlab-page .aiptx-droid-eye-blink,.crewlab-page .aiptx-droid-lens,.crewlab-page .aiptx-droid-blink,.crewlab-page .aiptx-droid-cursor,.crewlab-page .aiptx-droid-progress,.crewlab-page .aiptx-droid-beam-l,.crewlab-page .aiptx-droid-beam-r,.crewlab-page .aiptx-droid-ping,.crewlab-page .aiptx-droid-deploy,.crewlab-page .aiptx-droid-piston,.crewlab-page .aiptx-droid-wheel,.crewlab-page .aiptx-droid-ring{animation:none!important;transition:none!important}}
.crewlab-page :focus-visible{outline:2px solid var(--cl-red);outline-offset:3px}
.cl-nav a:focus-visible,.cl-button:focus-visible,.cl-crew-item:focus-visible{outline-offset:4px}
html:has(.crewlab-page){scroll-behavior:smooth;background:var(--cl-bg)}
body:has(.crewlab-page){margin:0;background:var(--cl-bg)}
@media(max-width:1000px){
  .cl-nav{grid-template-columns:220px 1fr 215px}.cl-nav .cl-cell{padding-inline:22px}.crewlab-page .nav-links{gap:19px}
  .cl-cell{padding:26px}.cl-crew-item .cl-cell{padding:20px 26px}.cl-faq-summary{grid-template-columns:72px minmax(0,1fr) 72px}
  .cl-faq-answer{padding-inline:98px}
}
@media(max-width:1000px) and (min-width:821px){
  .cl-intro .cl-cell{padding-inline:18px}
  .cl-audience strong{font-size:clamp(20px,2.3vw,24px)}
}
@media(max-width:900px){
  .cl-join-form .signup{grid-template-columns:minmax(0,1fr)}
  .cl-join-form .signup button{grid-column:1;justify-self:start;width:min(100%,280px)}
}
@media(max-width:820px){
  .cl-nav-actions{gap:7px}
  .cl-row:not(.cl-wordmark){grid-template-columns:minmax(0,1fr)!important}
  .cl-row.cl-nav{position:sticky;top:env(safe-area-inset-top,0px);z-index:100;grid-template-columns:minmax(0,1fr) 112px auto!important;align-items:center}.cl-nav-brand{grid-column:1;grid-row:1}.cl-nav-links{grid-column:2;grid-row:1;display:flex;min-width:0;overflow:visible}.cl-nav-cta{grid-column:3;grid-row:1;text-align:right}
  .cl-nav .cl-cell{padding:14px 20px;border:0}.cl-cell{border-right:0;border-bottom:1px solid var(--cl-line);padding:26px 22px}.cl-cell:last-child{border-bottom:0}
  .crewlab-page .nav-shell{position:static;justify-content:flex-end}

  .crewlab-page .nav-shell .cl-language-control{position:static;align-self:flex-end;margin:8px 0 4px;padding-top:10px;border-top:1px solid var(--cl-line)}
  .cl-language-select{min-width:48px;min-height:36px;padding-left:6px;padding-right:15px;font-size:10px}
  .crewlab-page .nav-mobile-toggle{display:flex;width:40px;height:40px;min-height:40px;flex:none;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0;border:1px solid var(--cl-line);border-radius:0;background:var(--cl-panel-2);cursor:pointer}
  .crewlab-page .nav-mobile-toggle span{display:block;width:17px;height:1px;border-radius:0;background:var(--cl-text);transition:transform 150ms ease,opacity 150ms ease}
  .crewlab-page .nav-shell.is-mobile-open .nav-mobile-toggle span:first-child{transform:translateY(6px) rotate(45deg)}
  .crewlab-page .nav-shell.is-mobile-open .nav-mobile-toggle span:nth-child(2){opacity:0}
  .crewlab-page .nav-shell.is-mobile-open .nav-mobile-toggle span:last-child{transform:translateY(-6px) rotate(-45deg)}
  .crewlab-page .nav-shell .nav-links{position:absolute;z-index:80;top:100%;right:0;left:0;display:none;width:100%;flex-direction:column;align-items:stretch;gap:0;padding:8px 18px;border:1px solid var(--cl-line);border-top:0;background:var(--cl-panel);box-shadow:none}
  .crewlab-page .nav-shell.is-mobile-open .nav-links{display:flex}
  .crewlab-page .nav-dropdown{width:100%;border-bottom:1px solid var(--cl-line)}
  .crewlab-page .nav-dropdown:last-child{border-bottom:0}
  .crewlab-page .nav-trigger{width:100%;min-height:46px;justify-content:space-between;font-size:12px}
  .crewlab-page .nav-shell .nav-menu,.crewlab-page .nav-shell .nav-dropdown:last-child .nav-menu{position:static;width:100%;min-width:0;max-width:none;gap:0;padding:0 0 8px 12px;border:0;border-radius:0;background:transparent;box-shadow:none}
  .crewlab-page .nav-shell .nav-menu a{min-height:38px;padding:8px 10px}
  .cl-hero-copy{padding:44px 24px 48px}.cl-droid-art{width:min(100%,300px)}
  .cl-intro-main{grid-row:1}.cl-audience{min-height:130px;gap:24px}.cl-section-head .cl-head-title{min-height:100px}.cl-head-copy{min-height:94px}.cl-head-count{min-height:80px;align-items:flex-start;text-align:left}
  .cl-steps{grid-template-columns:1fr!important}.cl-step{min-height:225px;border-right:0}.cl-step h3{margin-top:38px}
  .cl-row.cl-crew-item{grid-template-columns:minmax(0,1fr) 54px!important;align-items:center}.cl-crew-title{grid-column:1;grid-row:1;border:0!important;padding-bottom:8px!important}.cl-crew-description{grid-column:1;grid-row:2;border:0!important;padding-top:0!important}.cl-crew-item .cl-plus{grid-column:2;grid-row:1/3}
  .cl-faq-summary{grid-template-columns:48px minmax(0,1fr) 52px}.cl-faq-summary .cl-cell{padding:18px 12px}.cl-faq-answer{padding:0 64px 22px;color:var(--cl-muted)}
  .cl-join-title{min-height:220px}.cl-join-form{gap:14px}.cl-footer .cl-foot-grid{grid-template-columns:1fr!important}
  .cl-foot-brand{grid-column:auto}.cl-wordmark{grid-template-columns:repeat(7,minmax(0,1fr))!important}.cl-wordmark span{font-size:clamp(38px,11vw,90px)}
}
@media(max-width:500px){

  .crewlab-hi .cl-page-hero h1{font-size:clamp(34px,9vw,48px)!important}
  .cl-wrap{border-inline:1px solid var(--cl-line)}.cl-nav .cl-cell{padding-inline:8px}.cl-nav-cta .cl-button{padding:11px 8px;font-size:10px;min-height:40px}
  .cl-cell{padding:23px 18px}.cl-hero-copy{padding:38px 18px 42px}.cl-droid-cell{padding:22px}.cl-droid-art{width:min(76vw,270px)}.cl-kicker{font-size:10px;margin-bottom:24px}.cl-hero h1{font-size:clamp(44px,10.2vw,54px)}
  .cl-actions{display:grid;grid-template-columns:1fr}.cl-actions .cl-button{width:100%}.cl-head-title h2{font-size:34px}.cl-steps{grid-template-columns:1fr!important}.cl-step{min-height:220px;border-right:0!important}.cl-step h3{margin-top:38px}
  .cl-crew-item .cl-cell{padding:18px}.cl-crew-title{font-size:clamp(25px,8vw,34px)}.cl-faq-summary{grid-template-columns:42px minmax(0,1fr) 46px}.cl-faq-summary .cl-cell{padding:16px 10px}.cl-faq-question{font-size:15px}.cl-faq-answer{padding:0 56px 20px 52px;font-size:14px}
  .cl-join-title{min-height:180px;padding-inline:18px}.cl-join h2{font-size:clamp(42px,12vw,64px)}.cl-join-form{padding:28px 18px}.cl-join-form .signup{grid-template-columns:minmax(0,1fr)}.cl-join-form .signup button{grid-column:1;justify-self:stretch;width:100%}
  .cl-footer .cl-foot-grid{grid-template-columns:1fr!important}.cl-foot-brand{grid-column:auto}.cl-copyright{grid-template-columns:1fr!important}.cl-copyright .cl-cell:last-child{text-align:left}.cl-wordmark span{font-size:clamp(42px,11vw,66px);padding:18px 0;letter-spacing:-.06em}
}
@media(max-width:380px){
  .cl-nav-waitlist-full{display:none}.cl-nav-waitlist-short{display:inline}
  .cl-hero h1{font-size:clamp(38px,11.5vw,44px)}
  .cl-hero-copy{padding-inline:15px}
  .cl-mono{letter-spacing:.025em}
}

/* Shared inner-page structures use the same CrewLab grid as the home page. */
.cl-page-hero .cl-hero-copy{display:flex;flex-direction:column;justify-content:center;min-height:430px}
.crewlab-hi{--cl-body:var(--font-body);--cl-display:var(--font-body);--cl-mono:var(--font-body)}
.crewlab-hi .cl-mono{text-transform:none;letter-spacing:0;font-family:var(--font-body)}
.crewlab-hi .cl-page-hero h1{font-family:var(--font-body);font-size:clamp(38px,5.8vw,70px);line-height:1.28;letter-spacing:0;text-transform:none}
.crewlab-hi .cl-page-card h3,.crewlab-hi .cl-page-related-card{line-height:1.5}
.crewlab-hi .cl-page-card h3{font-family:var(--font-body);font-size:19px}
.crewlab-hi .cl-faq-question,.crewlab-hi .cl-section-head h2{font-family:var(--font-body);line-height:1.5}
.crewlab-hi .cl-faq-answer{line-height:1.8}
.crewlab-hi .cl-nav-actions .cl-button{font-family:var(--font-body);white-space:nowrap}
.cl-page-hero h1{display:flex;flex-direction:column;max-width:790px}
.cl-page-hero .cl-hero-copy h1>span{color:var(--cl-text)}
.cl-page-hero h1 .cl-page-highlight{color:var(--cl-red)}
.cl-page-lede{max-width:58ch;margin:22px 0 0;color:var(--cl-muted)}
.cl-page-hero .cl-actions{margin-top:26px}
.cl-page-label{display:block;margin-bottom:12px;color:var(--cl-red)}
.cl-section-head .cl-head-title{flex-direction:column;align-items:flex-start;justify-content:center;gap:10px}
.cl-section-head .cl-head-title h2{max-width:100%;overflow-wrap:anywhere}
.cl-section-head .cl-head-count strong{font-size:36px}
.cl-page-card-grid{grid-template-columns:repeat(3,minmax(0,1fr));border-bottom:0}
.cl-page-card{min-height:230px;display:flex;flex-direction:column;align-items:flex-start;gap:12px;background:var(--cl-bg);transition:background-color 150ms ease}
.cl-page-card:hover{background:var(--cl-panel)}
.cl-page-card-icon{display:grid;width:36px;height:36px;place-items:center;border:1px solid var(--cl-line);color:var(--cl-red)}
.cl-page-card-icon .ic{width:18px;height:18px}
.cl-page-card h3,.cl-page-bullet h3{margin:auto 0 0;color:var(--cl-text);font:500 22px/1.15 var(--cl-display);text-transform:uppercase;letter-spacing:-.01em}
.cl-page-card p,.cl-page-bullet p{margin:0;color:var(--cl-muted);font-size:14px;line-height:1.6}
.cl-page-bullet-list{border-bottom:0}
.cl-page-bullet{grid-template-columns:96px minmax(0,1fr);align-items:stretch}
.cl-page-bullet-num{display:flex;align-items:flex-start;color:var(--cl-red)}
.cl-page-bullet-copy{display:flex;flex-direction:column;gap:10px}
.cl-page-bullet-copy h3{margin:0}
.cl-page-fine{margin:0;padding:20px 32px;border-bottom:1px solid var(--cl-line);color:var(--cl-muted);font:400 13px/1.5 var(--cl-mono)}
.cl-page-related{border-bottom:1px solid var(--cl-line)}
.cl-page-related-grid{grid-template-columns:repeat(3,minmax(0,1fr));border-bottom:0}
.cl-page-related-card{display:flex;flex-direction:column;gap:14px;min-height:190px;color:var(--cl-text)!important;background:var(--cl-bg);transition:background-color 150ms ease}
.cl-page-related-card:hover{background:var(--cl-panel)}
.cl-page-related-card>span{color:var(--cl-red)}
.cl-page-related-card p{margin:0;color:var(--cl-muted);font-size:14px;line-height:1.55}
.cl-page-related-card strong{display:flex;align-items:center;gap:8px;margin-top:auto;color:var(--cl-red);font:400 12px/1.4 var(--cl-mono);text-transform:uppercase}
.cl-page-join .cl-join-title{display:block}
.cl-page-join .cl-join-title>p{margin:0 0 18px;color:var(--cl-red)}
.cl-page-join .cl-join-title small{display:block;margin-top:16px;color:var(--cl-muted);font:400 .46em/1.3 var(--cl-body);text-transform:none;letter-spacing:0}
.cl-page-join .cl-join-form{align-items:flex-start;justify-content:center}
.cl-page-join .cl-join-form>p{max-width:48ch;margin:0;color:var(--cl-muted)}
.cl-page-join .cl-join-form>.cl-mono{margin-top:6px}
@media(max-width:1000px){.cl-page-card-grid,.cl-page-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cl-page-related-card:nth-child(2n){border-right:0}}
@media(max-width:820px){.cl-page-hero .cl-hero-copy{min-height:0}.cl-page-hero h1{font-size:clamp(40px,8.5vw,64px)!important}.cl-page-card-grid,.cl-page-related-grid{grid-template-columns:1fr}.cl-page-card,.cl-page-related-card{min-height:0;border-right:0}.cl-page-bullet{grid-template-columns:64px minmax(0,1fr)!important}.cl-page-fine{padding-inline:22px}.cl-page-join .cl-join-title{min-height:0}}
@media(max-width:500px){.cl-page-hero h1{font-size:clamp(36px,10vw,50px)!important}.cl-page-hero .cl-kicker{overflow-wrap:anywhere}.cl-page-bullet{grid-template-columns:42px minmax(0,1fr)!important}.cl-page-bullet .cl-cell{padding-inline:14px}.cl-page-fine{padding-inline:18px}.cl-page-join .cl-join-title h2{font-size:clamp(38px,11vw,56px)}}
.cl-waitlist-hero{grid-template-columns:1.15fr .85fr;align-items:stretch}
.cl-waitlist-copy{padding-block:clamp(40px,6vw,76px)}
.cl-waitlist-copy h1{margin:0;font:700 clamp(44px,6.4vw,84px)/1 var(--cl-display);letter-spacing:-.02em;text-transform:uppercase}
.cl-waitlist-copy h1>span{color:var(--cl-red)}
.cl-waitlist-copy h1 small{display:block;font:inherit;font-size:.7em}
.cl-waitlist-copy .cl-page-lede{margin-top:22px}
.cl-waitlist-points{margin-top:28px;border-top:1px solid var(--cl-line)}
.cl-waitlist-point{grid-template-columns:64px minmax(0,1fr);align-items:stretch}
.cl-waitlist-point .cl-cell{padding:15px 18px}
.cl-waitlist-point .cl-cell:first-child{color:var(--cl-red)}
.cl-waitlist-form{display:flex;flex-direction:column;justify-content:center;align-items:stretch;gap:14px;background:var(--cl-panel-2);padding:clamp(24px,4vw,48px)}
.cl-waitlist-form>.cl-mono{color:var(--cl-text)}
.cl-waitlist-form h2{margin:0;font:700 clamp(28px,3.5vw,44px)/1 var(--cl-display);letter-spacing:-.02em;text-transform:uppercase}
.cl-waitlist-form>p{margin:0;color:var(--cl-muted)}
.cl-waitlist-form .signup{margin-top:12px}
.cl-waitlist-next .cl-section-head{scroll-margin-top:12px}
.cl-waitlist-next .cl-page-related-card h3{margin:0;color:var(--cl-text);font:500 22px/1.15 var(--cl-display);text-transform:uppercase}
.cl-not-found{min-height:65vh;grid-template-columns:1.4fr .6fr;align-items:stretch}
.cl-not-found-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-block:clamp(50px,8vw,100px)}
.cl-not-found-copy>.cl-mono{color:var(--cl-red)}
.cl-not-found-copy h1{margin:12px 0 18px;font:700 clamp(46px,7vw,84px)/1 var(--cl-display);letter-spacing:-.02em;text-transform:uppercase}
.cl-not-found-copy>p:not(.cl-mono){max-width:54ch;margin:0;color:var(--cl-muted)}
.cl-not-found-copy .cl-actions{margin-top:28px}
.cl-not-found-code{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:var(--cl-panel-2)}
.cl-not-found-code strong{color:var(--cl-red);font:700 clamp(90px,18vw,190px)/.85 var(--cl-display);letter-spacing:-.08em}
.cl-explore-browse{scroll-margin-top:12px}
.cl-explore-tools{padding:24px 32px;border-bottom:1px solid var(--cl-line);background:var(--cl-panel-2)}
.cl-explore-tools .x-tools{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:14px 20px}
.cl-explore-tools .x-search{display:flex;min-width:0;align-items:center;gap:10px;border-bottom:1px solid var(--cl-input);color:var(--cl-muted)}
.cl-explore-tools .x-search input{width:100%;min-width:0;min-height:44px;border:0;outline:0;background:transparent;color:var(--cl-text);font:400 15px/1.4 var(--cl-body)}
.cl-explore-tools .x-search input:focus{box-shadow:0 1px 0 var(--cl-red)}
.cl-explore-tools .x-search input::placeholder{color:var(--cl-muted)}
.cl-explore-tools .x-filters{display:flex;flex-wrap:wrap;gap:6px}
.cl-explore-tools .x-pill{min-height:36px;padding:8px 12px;border:1px solid var(--cl-line);border-radius:0;background:transparent;color:var(--cl-text);font:400 11px/1.2 var(--cl-mono);letter-spacing:.04em;text-transform:uppercase;cursor:pointer}
.cl-explore-tools .x-pill:hover,.cl-explore-tools .x-pill.on{border-color:var(--cl-red);background:var(--cl-red);color:var(--cl-ink)}
.cl-explore-tools .x-tool-note{grid-column:1/-1;margin:0;color:var(--cl-muted);font:400 12px/1.5 var(--cl-mono)}
.cl-explore-browse>.x-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;border:0;border-bottom:1px solid var(--cl-line)}
.cl-explore-browse .x-card{min-width:0;border:0;border-right:1px solid var(--cl-line);border-bottom:1px solid var(--cl-line);border-radius:0;background:var(--cl-bg);color:var(--cl-text);box-shadow:none;transform:none;transition:background-color 150ms ease}
.cl-explore-browse .x-card:hover{background:var(--cl-panel);transform:none;box-shadow:none}
.cl-explore-browse .x-card-top{display:flex;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--cl-line);background:var(--cl-panel-2)}
.cl-explore-browse .x-samp,.cl-explore-browse .x-num,.cl-explore-browse .x-card-category,.cl-explore-browse .x-skill{border:1px solid var(--cl-line);border-radius:0;color:var(--cl-muted);font:400 11px/1.3 var(--cl-mono);letter-spacing:.04em;text-transform:uppercase}
.cl-explore-browse .x-samp,.cl-explore-browse .x-num{padding:4px 7px}
.cl-explore-browse .x-card-body{gap:12px;padding:20px}
.cl-explore-browse .x-card-body h3{color:var(--cl-text);font:500 25px/1.1 var(--cl-display);text-transform:uppercase}
.cl-explore-browse .x-card-body p,.cl-explore-browse .x-seek{color:var(--cl-muted);font:400 14px/1.55 var(--cl-body)}
.cl-explore-browse .x-card-category{align-self:flex-start;padding:5px 8px}
.cl-explore-browse .x-skills{display:flex;flex-wrap:wrap;gap:6px}
.cl-explore-browse .x-skill{padding:5px 8px}
.cl-explore-browse .x-avs i{width:26px;height:26px;border:1px solid var(--cl-bg);border-radius:0;color:var(--cl-ink);font:500 9px/1 var(--cl-mono)}
.cl-explore-browse .x-build{border-top:1px solid var(--cl-line)}
@media(max-width:1000px){.cl-explore-browse>.x-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cl-explore-browse .x-card:nth-child(2n){border-right:0}}
@media(max-width:820px){.cl-waitlist-hero,.cl-not-found{grid-template-columns:minmax(0,1fr)!important}.cl-waitlist-form{border-top:1px solid var(--cl-line)}.cl-not-found-code{min-height:240px}.cl-not-found-copy .cl-actions{width:100%}}
@media(max-width:600px){.cl-waitlist-copy h1{font-size:clamp(38px,10vw,54px)}.cl-waitlist-point{grid-template-columns:46px minmax(0,1fr)!important}.cl-waitlist-point .cl-cell{padding-inline:12px}.cl-waitlist-form{padding:26px 18px}.cl-not-found-copy .cl-actions{display:grid;grid-template-columns:1fr}.cl-not-found-copy .cl-button{width:100%}.cl-explore-tools{padding:20px 18px}.cl-explore-tools .x-tools{grid-template-columns:1fr}.cl-explore-tools .x-tool-note{grid-column:1}.cl-explore-tools .x-filters{overflow-x:auto;flex-wrap:nowrap;padding-bottom:4px}.cl-explore-tools .x-pill{flex:none}.cl-explore-browse>.x-grid{grid-template-columns:1fr}.cl-explore-browse .x-card{border-right:0}}

/* Search resources and long-form guides */
.cl-resource-index,.cl-resource-article{padding:clamp(28px,6vw,80px) clamp(20px,7vw,96px);border-bottom:1px solid var(--cl-line)}
.cl-resource-hero{max-width:780px;margin:0 auto 48px}
.cl-resource-scene{display:flex;justify-content:center;margin:0 auto 48px}
.cl-resource-scene .product-scene{width:min(100%,470px)}
.cl-resource-hero h1,.cl-resource-article-head h1{margin:12px 0 18px;font:700 clamp(38px,6vw,68px)/1.05 var(--cl-display);letter-spacing:-.03em}
.cl-resource-hero h1 span{color:var(--cl-red)}
.cl-resource-hero>p:last-child,.cl-resource-intro{max-width:720px;color:var(--cl-muted);font-size:18px;line-height:1.7}
.cl-resource-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));max-width:1060px;margin:auto;border-top:1px solid var(--cl-line);border-left:1px solid var(--cl-line)}
.cl-resource-card{display:flex;min-height:260px;flex-direction:column;align-items:flex-start;padding:28px;border-right:1px solid var(--cl-line);border-bottom:1px solid var(--cl-line)}
.cl-resource-card h2{margin:24px 0 10px;font:600 27px/1.15 var(--cl-display)}
.cl-resource-card>p{margin:0 0 24px;color:var(--cl-muted)}
.cl-resource-link{margin-top:auto;color:var(--cl-red)!important;font:400 13px/1.4 var(--cl-mono);text-transform:uppercase}
.cl-resource-article{padding-top:32px}
.cl-resource-breadcrumb{display:flex;gap:10px;max-width:820px;margin:0 auto 48px;color:var(--cl-muted);font:400 12px/1.5 var(--cl-mono);text-transform:uppercase}
.cl-resource-article-head,.cl-resource-body{max-width:820px;margin-inline:auto}
.cl-resource-article-head{padding-bottom:32px;border-bottom:1px solid var(--cl-line)}
.cl-resource-article-head h1{max-width:780px}
.cl-resource-intro{margin:0}
.cl-resource-body{padding-top:28px}
.cl-resource-body section{margin:0 0 38px}
.cl-resource-body h2{margin:0 0 12px;font:600 29px/1.2 var(--cl-display)}
.cl-resource-body p,.cl-resource-body li{color:var(--cl-muted);font-size:16px;line-height:1.8}
.cl-resource-body p{margin:0 0 14px}
.cl-resource-body ul{display:grid;gap:8px;padding-left:24px}
.cl-resource-cta{display:grid;gap:10px;margin-top:46px;padding:24px;border:1px solid var(--cl-line);background:var(--cl-panel)}
.cl-resource-cta p{margin:0}
.cl-resource-cta>a{font:600 20px/1.35 var(--cl-display)}
@media(max-width:640px){
  .cl-resource-grid{grid-template-columns:1fr}
  .cl-resource-card{min-height:220px;padding:22px}
  .cl-resource-article-head h1,.cl-resource-hero h1{font-size:clamp(36px,11vw,52px)}
  .cl-resource-body h2{font-size:25px}
  .cl-resource-body p,.cl-resource-body li{font-size:15px}
}

```