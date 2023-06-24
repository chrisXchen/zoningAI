import { FC } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export const Footer: FC = ({ session }) => {
  const user = useUser();

  return <div className="flex flex-wrap border-t-2
    border-black pt-9 pb-6 px-8 items-center bg-brand-secondary
    justify-center text-black font-light space-x-2">
      {user ? (
        <>
          <a
            href="/profile"
            className="text-black hover:text-opacity-50">
            My Account
          </a>
          <p className="text-black">-</p>
        </>
          ) : null }
      <a
        href="/home"
        className="text-black hover:text-opacity-50">
        Home
      </a>
      <p className="text-black">-</p>
      <a
        href="/pricing"
        className="text-black hover:text-opacity-50">
        Pricing
      </a>
      <p className="text-black">-</p>
      <a
        href="/contact"
        className="text-black hover:text-opacity-50">
        Contact
      </a>
      <p className="text-black">-</p>
      <a
        href="/policy"
        className="text-black hover:text-opacity-50">
        Policy
      </a>
      <p className="text-black">-</p>
      <a
        href="/terms"
        className="text-black hover:text-opacity-50">
        Terms
      </a>
    </div>;
};
