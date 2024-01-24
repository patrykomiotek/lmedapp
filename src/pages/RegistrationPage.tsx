import { useState } from "react";
import { RegistrationFormRefs } from "../components/RegistrationFormRefs";
import { RegistrationFormRHF } from "../components/RegistrationFormRHF";
import { SubmitHandler } from "react-hook-form";
import { CreateUserDto } from "../types/dtos/CreateUserDto";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const [step, setStep] = useState<number>(1); // 1, 2, 3
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<CreateUserDto> = (data) => {
    console.log({ data });

    // try { await registerUser(data); } catch { } -> services/users.ts -> axios.post(endpoint, data)
    // navigate('/navigate/:publicId')
  };

  // let Content: React.ReactNode = RegistrationFormRefs;
  // <Content />

  const renderFirstStep = () => {
    // if () {

    // }
    return (
      <RegistrationFormRHF
        data={{ email: "patryk@wp.pl" }}
        onSubmit={handleSubmit}
      />
      // <RegistrationFormRefs
      //   data={{ email: "patryk@wp.pl" }}
      //   onSubmit={handleSubmit}
      // />
    );
  };

  return (
    <div>
      <h1>Registration page</h1>
      {step === 1 && renderFirstStep()}
    </div>
  );
};
