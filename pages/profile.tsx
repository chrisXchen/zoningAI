import React, { useEffect } from 'react';
import DisplayProfile from '../components/Profile/DisplayProfile';
import { Footer } from '@/components/Layout/Footer';
import { Navbar } from '@/components/Layout/Navbar';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import Head from "next/head";

const ProfilePage: React.FC = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  // this needs to be in place so that I can wait to load stuff until I get their session
  // useUser() doesn't load or await, so useEffect router.push ends up happening before
  // their data is grabbed... wow and useSession takes too long also
  useEffect(() => {
    async function verifySession() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
      }
    }
    verifySession()
  }, [user, router]);

  return (
    <>
      <Head>
        <title>My Zoning AI - Profile</title>
        <meta
          name="description"
          content="Profile page for a chatbot to extract zoning information for the selected locality."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/myzaiFavicon2.png"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section>
          <div className="border-black 2xl:max-w-7xl mx-auto 2xl:border-x-2">
            <div className="relative justify-center divide-black grid lg:divide-x-2
              lg:grid-cols-1 lg:px-20 max-h-full md:px-12 overflow-hidden w-full">
              <div className="flex flex-col flex-1 lg:py-16 md:flex-none
                md:px-18 py-10 relative sm:justify-center">
                <div className="flex flex-col rounded-lg sm:p-4 ">
                {user ? (
                  <div className="profile-page min-h-full mb-6">
                    <h2 className="text-black mt-6 text-2xl pb-2
                      border-2 py-1 border-black mb-10
                      px-2 bg-brand-secondary text-center
                      rounded-xl shadow-nb-assistant"
                    >
                      Your Profile
                    </h2>
                    <DisplayProfile session={user} />
                  </div>
                ) : (
                  <h1>
                    title="Logging you out now..."
                    description="Give it a few moments, you're not logged in but you should be redirected soon. It's strange if you stay on this page for a while... Hmmmm, try reloading your page, but if the problem persists please contact us and mention me, Chris, in the subject of the email. One day I'll change this to a nice loading animation."
                  </h1>
                )}
                </div>
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default ProfilePage;
