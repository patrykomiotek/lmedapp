import { ChangeEventHandler, useState } from "react";

type FormState = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormState = () => {
  // const [email, setEmail] = useState<string>("patryk@wp.pl");
  // const [password, setPassword] = useState<string>("");
  // const [language, setLanguage] = useState<string>("");
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    language: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    const id = event.target.id;

    setFormState({ ...formState, [id]: value });
  };

  const { email, language, password } = formState;

  return (
    <form>
      <div className="mb-2">
        <p>
          E-mail: {email}, password: {password}
        </p>
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="mr-2">
          E-mail
        </label>
        <input id="email" type="email" value={email} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="mr-2">
          Password
        </label>
        <input id="password" type="password" onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label htmlFor="language" className="mr-2">
          Language
        </label>
        <input id="language" type="text" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
