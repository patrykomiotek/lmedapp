import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { Input } from "../../ui/Input";

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

  useEffect(() => {
    // body

    return () => {
      // unmount
    };
  }, [formState.email]); // [] - mount & update

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    const id = event.target.id;

    setFormState({ ...formState, [id]: value });
  };

  const { email, language, password } = formState;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    console.log({ email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <p>
          E-mail: {email}, password: {password}
        </p>
      </div>
      <Input
        label="E-mail"
        id="email"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <Input label="Password" id="password" type="password" />
      <Input label="Language" id="language" />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
