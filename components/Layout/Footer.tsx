import { FC } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';

export const Footer: FC = ({ session }) => {
  const user = useUser();

  return <div className="flex flex-wrap border-t-2
    border-black pt-9 pb-6 px-8 items-center bg-brand-secondary
    justify-center text-black font-light space-x-2">
      {user ? (
        <>
          <Link
            href="/profile"
            className="text-black hover:text-opacity-50"
          >
            My Account
          </Link>
          <p className="text-black">-</p>
        </>
          ) : null }
      <Link
        href="/home"
        className="text-black hover:text-opacity-50"
      >
        Home
      </Link>
      <p className="text-black">-</p>
      <Link
        href="/pricing"
        className="text-black hover:text-opacity-50"
      >
        Pricing
      </Link>
      <p className="text-black">-</p>
      <a
        href="mailto: chris.chen347@gmail.com"
        className="text-black hover:text-opacity-50"
      >
        Contact
      </a>
      <p className="text-black">-</p>
      <a
        href="/PrivacyPolicy.pdf"
        className="text-black hover:text-opacity-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        Policy
      </a>
      <p className="text-black">-</p>
      <a
        href="/TermsAndConditions.pdf"
        className="text-black hover:text-opacity-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms
      </a>
    </div>;
};
