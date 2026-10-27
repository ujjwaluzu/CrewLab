import { APP_URL } from "@/lib/site";

export default function Cta() {
  return <section className="cta home-join" id="join">
    <div className="cta-copy">
      <h2>join the <span>crew</span></h2>
      <a className="btn btn-light" href={APP_URL}>Sign up <span aria-hidden="true">→</span></a>
    </div>
  </section>;
}
