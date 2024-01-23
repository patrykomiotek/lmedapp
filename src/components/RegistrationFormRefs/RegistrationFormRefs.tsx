import { ChangeEventHandler, FormEventHandler, useRef } from "react";

type FormState = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormRefs = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (passwordRef.current) {
      if (passwordRef.current.value === "") {
        passwordRef.current.style.color = "#f00";
        passwordRef.current.style.border = "#f00 1px solid";
      }
    }

    console.log({ email: emailRef.current?.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="email" className="mr-2">
          E-mail
        </label>
        <input ref={emailRef} id="email" type="email" />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="mr-2">
          Password
        </label>
        <input ref={passwordRef} id="password" type="password" />
      </div>
      <div className="mb-2">
        <label htmlFor="language" className="mr-2">
          Language
        </label>
        <input ref={languageRef} id="language" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
