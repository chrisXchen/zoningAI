import React, { useEffect } from 'react';
import { Navbar } from "@/components/Layout/Navbar";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Card } from '@supabase/ui';
import { useRouter } from 'next/router';

const  brandedTheme = {
  default: {
    colors: {
      brand: '#dc8701',
      brandAccent: '#faf2de',
      brandButtonText: '#0b0b0b',
      brandBorder: '#0b0b0b',
      inputBackground: '#faf2de',
      inputText: '#0b0b0b',
      inputBorder: '#0b0b0b',
      brandFloatingText: '#0b0b0b'
    },
    borderWidths: {
      buttonBorderWidth: '5px',
      inputBorderWidth: '5px'
    },
    radii: {
      borderRadiusButton: '4px',
      inputBorderRadius: '4px'
    },
    space: {
      buttonPadding: '10px',
      inputPadding: '12px 25px'
    }
  }
}

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
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="container" style={{ padding: "50px 0 100px 0" }}>
          {!session ? (
            <Auth
              providers={[]}
              supabaseClient={supabase}
              appearance={{ theme: brandedTheme }}
              theme="default"
            />
          ) : (
            <Card.Meta
              title="Logging you in now..."
              description="Give it a few moments, you're logged in but you should be redirected soon. If not that's weird! Try reloading your page, but if the problem persists please contact us and ask for Chris."
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AuthPage;
