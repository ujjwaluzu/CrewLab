import Button from "@/components/Button";

export default function Hero() {
  return <>
    <link rel="preload" as="image" href="/Pixel%20Earth%20at%20Dawn.png" />
    <section className="home-hero" aria-labelledby="home-title">
    <div className="hero-intro">
      <h1 id="home-title">build real<br />products with<br /><span className="headline-pill ink-pill">real</span> <span className="headline-pill red-pill">people.</span></h1>
      <p className="lede">CrewLab is the builder community where founders, developers, designers, marketers, students and creators connect. Have an idea but no team? Find a cofounder. Have skills but no idea? Join a startup or side project.</p>
      <div className="cta-row">
        <Button href="/waitlist">Join the waitlist</Button>
        <Button href="/explore" variant="secondary">Find project teammates</Button>
      </div>
      <div className="proof">
        <span className="avs" aria-hidden="true"><i>AK</i><i>RJ</i><i>PS</i></span>
        <span>Be among the first builders on CrewLab</span>
      </div>
    </div>
  </section>
  </>;
}
