import { useReactStepperContext } from "react-stepper-context";

export const Step4: React.FC = () => {
  const { goToStep, goToPreviousStep, allStepsValues } = useReactStepperContext();

  const handleDoneClick = () => {
    alert("You have completed all the steps!");
  };

  return (
    <div className="content-wrapper">
      <h2>Summary</h2>
      <div className="flex-col-left">
        <pre>{JSON.stringify(allStepsValues, null, 2)}</pre>
      </div>
      <p>You have completed all the steps. Click "Done" to finish.</p>
      <div className="buttons-wrapper">
        <button onClick={() => goToStep(0)}>First step</button>
        <button onClick={() => goToPreviousStep()}>Prev</button>
        <button onClick={handleDoneClick}>Done</button>
      </div>
    </div>
  );
};
