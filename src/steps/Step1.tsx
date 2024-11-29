import { StepStatus, useReactStepper } from "react-stepper-context";

export const Step1: React.FC = () => {
  const { goToNextStep } = useReactStepper();
  return (
    <div className="content-wrapper">
      <div style={{ textAlign: "left" }}>
        <h2>This is Step 1</h2>
        <p>there are custom buttons for it</p>
      </div>
      <div className="buttons-wrapper">
        <button
          onClick={() =>
            goToNextStep(StepStatus.ERROR, StepStatus.IN_PROGRESS, true)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
