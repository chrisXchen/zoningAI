import { Signup } from '../components/Auth/Signup';

const SignupPage: React.FC = () => {
  const handleSignup = async (email: string, password: string, city: string) => {
    // TODO: Perform signup logic here, e.g. sending the data to /api/signup
  }

  return <Signup onSignup={handleSignup} />;
}

export default SignupPage;
