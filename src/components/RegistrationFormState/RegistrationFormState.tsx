import { useState } from "react";

export const RegistrationFormState = () => {
  const [email, setEmail] = useState<string>("patryk@wp.pl");
  const [password, setPassword] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

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
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="mr-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="language" className="mr-2">
          Language
        </label>
        <input
          id="language"
          type="text"
          onChange={(event) => setLanguage(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
