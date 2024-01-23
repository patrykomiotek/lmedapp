import { FormEventHandler, useRef, useEffect } from "react";
import { Input } from "../../ui/Input";

type FormState = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormRefs = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []); // [] - mount

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (passwordRef.current) {
      if (passwordRef.current.value === "") {
        passwordRef.current.style.color = "#f00";
        passwordRef.current.style.border = "#f00 1px solid";
        // passwordRef.current.classList.add()
        // passwordRef.current.classList.remove()
      }
    }

    console.log({ email: emailRef.current?.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        ref={emailRef}
        label="E-mail"
        id="email"
        type="email"
        defaultValue="patryk@wp.pl"
      />
      <Input ref={passwordRef} label="Password" id="password" type="password" />
      <Input ref={languageRef} label="Language" id="language" />

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
