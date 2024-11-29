import { useReactStepper } from "react-stepper-context";

export const StepperSideBar = () => {
  const { currentStepKey, steps, goToStep } = useReactStepper();

  return (
    <div className="stepper-wrapper">
      <h2>React Stepper Context</h2>
      <div className="flex-col-left">
        {steps.map((step, index) => (
          <button
            key={step.key}
            style={{ color: step.key === currentStepKey ? "red" : "white" }}
            onClick={() => goToStep(index)}
            disabled={step.locked}
          >
            {step.title} - {step.status} - {step.locked ? "Locked" : "Unlocked"}
          </button>
        ))}
      </div>
    </div>
  );
};
