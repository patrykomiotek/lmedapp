import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { Helmet } from "react-helmet-async";

// import { RegistrationFormRefs } from "../components/RegistrationFormRefs";
import { RegistrationFormRHF } from "../components/RegistrationFormRHF";
import { CreateUserDto } from "../types/dtos/CreateUserDto";
import { Header } from "../ui";

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
      <Helmet>
        <title>Registration page</title>
      </Helmet>
      <Header>Registration page</Header>
      {step === 1 && renderFirstStep()}
    </div>
  );
};
