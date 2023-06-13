import { SigninForm } from '../components/Auth/SigninForm';

const SigninPage: React.FC = () => {
  const handleSignin = async (email: string, password: string) => {
    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const user = await response.json();
  }

  return <SigninForm onSignin={handleSignin} />;
}

export default SigninPage;
