import "./App.css";

import { ReactStepperContext } from "react-stepper-context";

import { StepperSideBar } from "./steps/StepperSideBar";

import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";

const steps = [
  {
    key: "step1",
    component: <Step1 />,
    title: "Step 1",
  },
  {
    key: "step2",
    component: <Step2 />,
    title: "Step 2 as a form",
    locked: true,
  },
  {
    key: "step3",
    component: <Step3 />,
    title: "Step 3 as a summary",
    locked: true,
  },
  {
    key: "step4",
    component: <Step4 />,
    title: "Step 4",
    locked: true,
  },
];

function App() {
  return (
    <ReactStepperContext steps={steps}>
      {(currentStepComponent) => (
        <div className="wrapper">
          <StepperSideBar />
          {currentStepComponent}
        </div>
      )}
    </ReactStepperContext>
  );
}

export default App;
