import { FC } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';

export const Navbar: FC = ({session}) => {
  const user = useUser();

  return (
    <>
    <div className="flex h-[50px] sm:h-[70px] border-b-2 border-full-black
      py-2 px-2 sm:px-8 items-center justify-between bg-brand-secondary">
      <div className="font-bold text-4xl flex items-center">
        <Link
          href="http://localhost:3000/"
          className="ml-2 hover:opacity-50 text-full-black text-sm sm:text-xl md:text-2xl xl:text-4xl"
        >
          Just Zoning
        </Link>
      </div>
      <div className="font-bold text-2xl flex items-center space-x-4">
        {user ? (
          <>
            <Link
              href="http://localhost:3000/chat"
              className="ml-2 hover:opacity-50 text-full-black text-sm sm:text-xl md:text-2xl"
            >
              Chat
            </Link>
            <Link
              href="http://localhost:3000/profile"
              className="ml-2 hover:opacity-50 text-full-black text-sm sm:text-xl md:text-2xl"
            >
              Profile
            </Link>
          </>
        ) : (
          <Link
            href="http://localhost:3000/login"
            className="ml-2 hover:opacity-50 text-full-black text-sm sm:text-xl md:text-2xl"
          >
            Login/Register
          </Link>
        )}
      </div>
    </div>
    </>
  );
};
