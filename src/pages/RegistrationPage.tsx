import { useState } from "react";
import { RegistrationFormRefs } from "../components/RegistrationFormRefs";
import { FormState } from "../types/FormState";

export const RegistrationPage = () => {
  const [step, setStep] = useState<number>(1); // 1, 2, 3
  const handleSubmit = (data: FormState) => {
    console.log({ data });
  };

  // let Content: React.ReactNode = RegistrationFormRefs;
  // <Content />

  const renderFirstStep = () => {
    // if () {

    // }
    return (
      <RegistrationFormRefs
        data={{ email: "patryk@wp.pl" }}
        onSubmit={handleSubmit}
      />
    );
  };

  return (
    <div>
      <h1>Registration page</h1>
      {step === 1 && renderFirstStep()}
    </div>
  );
};
