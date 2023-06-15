import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-b-2 border-full-black
      py-2 px-2 sm:px-8 items-center justify-between bg-brand-secondary">
      <div className="font-bold text-4xl flex items-center">
        <a
          className="ml-2 hover:opacity-50 text-full-black"
          href="http://localhost:3000/"
        >
          Talk Zoning
        </a>
      </div>
      <div className="font-bold text-2xl flex items-center space-x-4">
        <a
          className="ml-2 hover:opacity-50 text-full-black"
          href="http://localhost:3000/blog"
        >
          Blog
        </a>
        <a
          className="ml-2 hover:opacity-50 text-full-black"
          href="http://localhost:3000/auth"
        >
          Login
        </a>
        <a
          className="ml-2 hover:opacity-50 text-full-black"
          href="http://localhost:3000/profile"
        >
          Profile
        </a>
      </div>
    </div>
  );
};
