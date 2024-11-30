import React from "react";
import { StepStatus, useReactStepperContext } from "react-stepper-context";

export const Step3: React.FC = () => {
  const {
    setCurrentStepValues,
    getCurrentStepValues,
    goToPreviousStep,
    goToNextStep,
    isCurrentStepAlreadySubmitted,
  } = useReactStepperContext();

  const values = getCurrentStepValues();

  const [formValues, setFormValues] = React.useState({
    address: values.address || "",
    phone: values.phone || "",
  });

  const handleSubmit = () => {
    setCurrentStepValues(formValues);
    goToNextStep(StepStatus.SUCCESS, StepStatus.IN_PROGRESS, true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="content-wrapper">
      <div className="flex-col-left">
        <h2>Step 3 Form</h2>
        <input
          name="address"
          placeholder="Address"
          value={formValues.address}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>
      {isCurrentStepAlreadySubmitted && <p>Step already submitted</p>}
      <div className="buttons-wrapper">
        <button onClick={() => goToPreviousStep()}>Back</button>
        <button onClick={handleSubmit}>{"Submit and continue"}</button>
        {isCurrentStepAlreadySubmitted && (
          <button onClick={() => goToNextStep()}>
            {"Continue without submitting"}
          </button>
        )}
      </div>
    </div>
  );
};
