import { StepStatus, useReactStepperContext } from "react-stepper-context";

export const Step2: React.FC = () => {
  const {
    setCurrentStepValues,
    getCurrentStepValues,
    goToPreviousStep,
    goToNextStep,
  } = useReactStepperContext();

  const values = getCurrentStepValues();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const postObj = { ...values, [e.target.name]: e.target.value };
    setCurrentStepValues(postObj);
  };

  return (
    <div className="content-wrapper">
      <div className="flex-col-left">
        <h2>Step 2 Form</h2>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className="buttons-wrapper">
        <button onClick={() => goToPreviousStep()}>Back</button>
        <button
          onClick={() => {
            goToNextStep(StepStatus.SUCCESS, StepStatus.IN_PROGRESS, true);
          }}
        >
          {"Submit and continue"}
        </button>
      </div>
    </div>
  );
};
