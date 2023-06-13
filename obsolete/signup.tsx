import { Signup } from '../components/Auth/Signup';

const SignupPage: React.FC = () => {
  const handleSignup = async (email: string, password: string, city: string) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, city })
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const user = await response.json();
  };

  return <Signup onSignup={handleSignup} />;
}

export default SignupPage;
