import React, { useEffect } from 'react';
import DisplayProfile from '../components/Profile/DisplayProfile';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Typography, Card } from '@supabase/ui';
import { useRouter } from 'next/router';

const ProfilePage: React.FC = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/auth');
    }
  }, [session, router]);

  return (
    <>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {session ? (
          <div className="profile-page">
            <Typography.Text>Your Profile Information</Typography.Text>
            <DisplayProfile session={session} />
          </div>
        ) : (
          <Card.Meta
            title="Error: You're not logged in."
            description="Give it a few moments, you're not logged in but you should be redirected soon. It's strange if you stay on this page for a while... Hmmmm, try reloading your page, but if the problem persists please contact us and mention me, Chris, in the subject of the email. One day I'll change this to a nice loading animation."
          />
        )}
      </div>
    </>
  );
}

export default ProfilePage;
