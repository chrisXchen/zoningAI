import { FC } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export const Navbar: FC = ({session}) => {
  const supabase = useSupabaseClient();
  const user = useUser();

  return (
    <>
    <div className="flex h-[50px] sm:h-[70px] border-b-2 border-full-black
      py-2 px-2 sm:px-8 items-center justify-between bg-brand-tertiary">
      <div className="font-bold text-4xl flex items-center">
        <a
          className="ml-2 hover:opacity-50 text-full-black text-sm sm:text-xl md:text-2xl xl:text-4xl"
          href="http://localhost:3000/"
        >
          Talk Zoning
        </a>
      </div>
      <div className="font-bold text-2xl flex items-center space-x-4">
        {user ? (
          <>
            <a
              className="ml-2 hover:opacity-50 text-full-black text-sm sm:text-xl md:text-2xl"
              href="http://localhost:3000/chat"
            >
              Chat
            </a>
            <a
              className="ml-2 hover:opacity-50 text-full-black text-sm sm:text-xl md:text-2xl"
              href="http://localhost:3000/profile"
            >
              Profile
            </a>
          </>
        ) : (
          <a
            className="ml-2 hover:opacity-50 text-full-black text-sm sm:text-xl md:text-2xl"
            href="http://localhost:3000/login"
          >
            Login/Register
          </a>
        )}
      </div>
    </div>
    </>
  );
};
