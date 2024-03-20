import React, { useState } from "react";
import ButtonStep from "./ButtonStep";

const Stepper = ({ value, steps }) => {
  const [step, setStep] = useState(1);
  return (
    <React.Fragment>
      <ButtonStep steps={steps} setStep={setStep} step={step} value={value} />
      {steps.map(
        (item) =>
          item.id === step && (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <item.render value={value} step={step} />
            </div>
          )
      )}
    </React.Fragment>
  );
};

export default Stepper;
