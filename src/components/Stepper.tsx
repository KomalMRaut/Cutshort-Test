import React from "react";
import { stepperType } from "../types/components/StepperType";

export const Stepper: React.FC<stepperType> = ({ activeStep, totalSteps }) => {
  return (
    <div className="stepper">
      {Array.from({ length: totalSteps }, (_, i) => {
        return (
          <div
            className={`stepper__step ${
              i <= activeStep ? "stepper__step--active" : ""
            }`}
            key={i}
          >
            <span>{i + 1}</span>
            {totalSteps !== i + 1 && (
              <hr className={i === activeStep ? "last-hr" : ""} />
            )}
          </div>
        );
      })}
    </div>
  );
};
