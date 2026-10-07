import WaitlistForm from "@/components/WaitlistForm";

export default function Cta() {
  return <section className="cta home-join" id="join">
    <div className="cta-copy">
      <h2>join the <span>crew</span></h2>
      <WaitlistForm />
    </div>
  </section>;
}
