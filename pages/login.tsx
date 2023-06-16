import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Footer } from "@/components/Layout/Footer";
import { Navbar } from '@/components/Layout/Navbar';
import { LoginForm } from '@/components/Form/LoginForm';
import FormButton from '@/components/Form/FormButton';
import { useUser, useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginView, setLoginView] = useState(true);
  const [confirmation, setConfirmation] = useState(null);

  const supabase = useSupabaseClient();
  const session = useSession();
  const user = useUser();
  const router = useRouter();

  const switchView = (e: React.MouseEvent) => {
    e.preventDefault();
    setError(null);
    setConfirmation(null);
    setLoginView(!loginView);
  };

  const handleRegister = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        setError(error.message);
        setConfirmation(null);
    } else {
        setConfirmation("Please check your inbox for a confirmation email");
    }

    setLoading(false);
  }

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    async function verifySession() {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/profile')
      }
    }
    verifySession()
  }, [user, router]);

  return (
    <>
        <div className="flex flex-col h-screen">
            <Navbar />
            <section>
                <div className="border-black 2xl:max-w-7xl mx-auto 2xl:border-x-2">
                    <div className="relative justify-center divide-black grid lg:divide-x-2
                        lg:grid-cols-1 lg:px-0 max-h-full md:px-12 overflow-hidden">
                        <div className="flex flex-col bg-brand-tertiary flex-1 lg:py-16 md:flex-none
                            md:px-28 px-4 py-10 relative sm:justify-center z-10">
                        {loginView ? (
                          <div className="w-full mx-auto md:px-0 sm:px-4">
                            <div className="space-y-6">
                                <LoginForm
                                    onLogin={handleLogin}
                                    buttonText="Login"
                                />
                                <p className="text-black lg:text-2xl text-sm">
                                    Forgot password?
                                    <a href="localhost:3000/profile" className="text-black
                                        lg:text-2xl hover:text-white ml-3 underline">
                                        Click here to reset.
                                    </a>
                                </p>
                            </div>
                            {error &&
                                <div className="text-red-600 text-center py-3 text-xl">
                                    {error}
                                </div>
                            }
                            <div className="relative py-3">
                                <div className="flex items-center absolute inset-0" aria-hidden="true">
                                    <div className="border-black border-t-2 w-full">
                                    </div>
                                </div>
                                <div className="flex justify-center relative py-3">
                                    <span className="text-black text-lg bg-brand-primary
                                        border-2 border-black px-2 rounded-lg">
                                        Looking to join?
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="text-black lg:text-2xl text-xl">
                                        Join Architects, Construction Managers, Land Inspectors, Civil Engineers, and tons of others across America who are expediting their Zoning Ordinance research with AI.
                                    </h2>
                                    <div className="space-y-6 py-3">
                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <FormButton
                                                onClick={switchView}
                                                disabled={false}
                                                buttonText="Register"
                                                loading={false}
                                              />
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        ) : (
                            <div className="w-full mx-auto md:px-0 sm:px-4">
                                <h2 className="text-black lg:text-2xl mt-6 text-xl pb-6">
                                    Join Architects, Construction Managers, Land Inspectors, Civil Engineers, and tons of others across America who are expediting their Zoning Ordinance research with AI.
                                </h2>
                            <div className="space-y-6">
                                <LoginForm
                                    onLogin={handleRegister}
                                    buttonText="Register"
                                />
                            </div>
                            {confirmation &&
                                <div className="border-black border-4 rounded-xl
                                    bg-white text-black text-center
                                    py-2 text-l mt-6 w-1/2 mx-auto shadow-nb-down">
                                    {confirmation}
                                </div>
                            }
                            {error &&
                                <div className="text-red-600 text-center py-3 text-xl">
                                    {error}
                                </div>
                            }
                            <div className="flex flex-col">
                                <div>
                                    <div className="relative py-12">
                                        <div className="flex items-center absolute inset-0" aria-hidden="true">
                                            <div className="border-black border-t-2 w-full">
                                            </div>
                                        </div>
                                        <div className="flex justify-center relative">
                                            <span className="text-black text-lg bg-brand-primary
                                                border-2 border-black px-2 rounded-lg">
                                                Already have an account?
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <FormButton
                                                onClick={switchView}
                                                disabled={false}
                                                buttonText="Go To Login"
                                                loading={false}
                                              />
                                        </div>
                                    </div>
                                </div>
                            </div>

                          </div>
                        )}
                        </div>
                  </div>
                </div>
            </section>
        </div>
      <Footer />
    </>
  );
}

export default LoginPage;
