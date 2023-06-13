import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Card } from '@supabase/ui';
import { useRouter } from 'next/router';

const AuthPage: React.FC = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/profile');
    }
  }, [session, router]);

  return (
    <>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth
            providers={[]}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <Card.Meta
            title="Error: You are logged in."
            description="Give it a few moments, you're logged in but you should be redirected soon. If not that's weird! Try reloading your page, but if the problem persists please contact us and ask for Chris."
          />
        )}
      </div>
    </>
  );
}

export default AuthPage;
