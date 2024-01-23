import { FormEventHandler, useRef, useEffect } from "react";
import { Input } from "../../ui/Input";
import { FormState } from "../../types/FormState";

type Props = {
  onSubmit: (data: FormState) => void;
  data?: Partial<FormState>;
};

export const RegistrationFormRefs = ({ onSubmit, data }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []); // [] - mount

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const formData: FormState = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
      language: languageRef.current?.value || "",
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        ref={emailRef}
        label="E-mail"
        id="email"
        type="email"
        defaultValue={data?.email}
      />
      <Input ref={passwordRef} label="Password" id="password" type="password" />
      <Input ref={languageRef} label="Language" id="language" />

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
