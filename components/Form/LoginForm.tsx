import React, { useState } from 'react';
import FormButton from './FormButton';

interface Props {
  onLogin: (email: string, password: string) => void;
  buttonText: string;
}

export const LoginForm: React.FC<Props> = ({ onLogin, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    await onLogin(email, password);

    setLoading(false);
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="space-y-6">
        <div className="border-black border-2 rounded-xl
          divide-black divide-y-2 overflow-hidden shadow">
          <div>
            <label className="sr-only" name="email">
              Email
            </label>
            <input
              type="email"
              placeholder="tonymontana@scarface.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-black focus:outline-none
                border-2 border-black w-full appearance-none
                block border-transparent focus:bg-lila-500
                focus:border-black focus:ring-black
                placeholder-black px-3 py-4 sm:text-sm
                text-xl focus:rounded-t-xl
                placeholder-opacity-50"
            />
          </div>
          <div className="col-span-full">
            <label className="sr-only" name="password">
              Password
            </label>
            <input
              type="password"
              placeholder="uncrackable secret pw here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-black focus:outline-none
                border-2 border-black w-full appearance-none
                block border-transparent focus:bg-lila-500
                focus:border-black focus:ring-black
                placeholder-black px-3 py-4 sm:text-sm
                text-xl focus:rounded-b-xl
                placeholder-opacity-50"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row mt-10">
          <FormButton
            onClick={handleLogin}
            disabled={loading}
            buttonText={buttonText}
            loading={loading}
          />
        </div>
      </div>
    </form>
  );
}
