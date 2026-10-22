import { Plate } from "./kit/react/draw";
import { CrewFlowArt } from "./crew-flow-art";
import { CrewFlowLive } from "./crew-flow-live";
import { CREW_FLOW_STEPS, RESTING_STEP } from "./crew-flow-model";

export function CrewFlowFigure() {
  const resting = CREW_FLOW_STEPS[RESTING_STEP]!;
  return (
    <div className="crew-flow-wrap iso" aria-labelledby="crew-flow-title">
      <header className="crew-flow-heading">
        <p className="cl-mono">THE CREWLAB PROJECT FLOW</p>
        <h2 id="crew-flow-title">One project brings the right people together.</h2>
        <p>A project brief stays at the center as builders discover the work, request to join, and coordinate with the crew.</p>
      </header>
      <Plate
        fig="FIG 02"
        title="Project assembly bench"
        hint="Select a station · ← →"
        readout={resting.readout}
        keys={[{ mark: "lit", label: "Moving project brief" }, { mark: "raised", label: "Workflow station" }]}
        caption="The brief travels through CrewLab's workflow. Project owners decide who joins; GitHub context is optional and read only."
      >
        <CrewFlowLive art={<CrewFlowArt key="crew-flow-art" />} />
      </Plate>
    </div>
  );
}

