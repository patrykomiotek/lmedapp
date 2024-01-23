import { RegistrationFormRefs } from "../components/RegistrationFormRefs";

type FormState = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationPage = () => {
  const handleSubmit = (data: FormState) => {
    console.log({ data });
  };

  return (
    <div>
      <h1>Registration page</h1>
      <RegistrationFormRefs
        data={{ email: "patryk@wp.pl" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
