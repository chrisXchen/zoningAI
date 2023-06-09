import { FC, useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

interface Props {
  onSignin: (email: string, password: string) => void;
}

export const SigninForm: FC<Props> = ({ onSignin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignin(email, password);
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
      <FormButton type="submit">
        Sign Up
      </FormButton>
    </form>
  );
}
