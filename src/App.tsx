import {
  ReactStepperContext,
  StepStatus,
  useReactStepper,
} from "react-stepper-context";

import "./App.css";

function App() {
  return (
    <ReactStepperContext
      steps={[
        {
          key: "step1",
          component: (
            <>
              <div>Step 1</div>
              <StepperNavigationButtons />
            </>
          ),
          title: "Step 1",
        },
        {
          key: "step2",
          component: <Step2Form />,
          title: "Step 2 as a form",
        },
        {
          key: "step3",
          component: <Step3Summary />,
          title: "Step 3 as a summary",
        },
      ]}
    >
      {(currentStepComponent) => (
        <>
          <CurrentStepInfo />
          {currentStepComponent}
        </>
      )}
    </ReactStepperContext>
  );
}

export default App;

const StepperNavigationButtons = () => {
  const {
    goToNextStep,
    goToPreviousStep,
    isThisLastStep,
    setCurrentStepStatus,
  } = useReactStepper();
  return (
    <div>
      <button onClick={goToPreviousStep}>Back</button>
      <button
        onClick={() => {
          setCurrentStepStatus(StepStatus.SUCCESS);
          goToNextStep();
        }}
      >
        {isThisLastStep ? "Done" : "Next"}
      </button>
    </div>
  );
};

const CurrentStepInfo = () => {
  const { currentStepKey, currentStepIndex, steps } = useReactStepper();

  return (
    <div>
      <h2>Current Step</h2>
      <p>Key: {currentStepKey}</p>
      <p>Index: {currentStepIndex}</p>
      <ul>
        {steps.map((step) => (
          <li
            key={step.key}
            style={{ color: step.key === currentStepKey ? "red" : "white" }}
          >
            {step.title}
            {/* - {step.locked ? "Locked" : "Unlocked"}
            {index === currentStepIndex && " (Current)"} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Step2Form = () => {
  const { setCurrentStepValues, getCurrentStepValues } = useReactStepper();
  const values = getCurrentStepValues();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const postObj = { ...values, [e.target.name]: e.target.value };
    setCurrentStepValues(postObj);
  };

  return (
    <div>
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
      <StepperNavigationButtons />
    </div>
  );
};

const Step3Summary = () => {
  const { allStepsValues } = useReactStepper();
  return (
    <div>
      <h2>Step 3 Summary</h2>
      <pre>{JSON.stringify(allStepsValues, null, 2)}</pre>
      <StepperNavigationButtons />
    </div>
  );
};
