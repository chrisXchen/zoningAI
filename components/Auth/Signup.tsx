import { FC, useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

interface Props {
  onSignup: (email: string, password: string, city: string) => void;
}

export const Signup: FC<Props> = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(email, password, city);
  }

  return (
    <form className="flex flex-col p-4 space-y-4" onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <FormInput
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <FormInput
        label="City"
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        required
      />
      <FormButton type="submit">
        Sign Up
      </FormButton>
    </form>
  );
};
