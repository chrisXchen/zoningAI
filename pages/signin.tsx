import { SigninForm } from '../components/Auth/SigninForm';

const SigninPage: React.FC = () => {
  const handleSignin = async (email: string, password: string) => {
    // TODO: Perform signup logic here, e.g. sending the data to /api/signup
  }

  return <SigninForm onSignin={handleSignin} />;
}

export default SigninPage;
