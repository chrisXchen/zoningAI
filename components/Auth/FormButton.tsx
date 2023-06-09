import { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const FormButton: FC<Props> = ({ children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className="text-white font-semibold rounded-lg px-4 py-2 bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-300"
    >
      {children}
    </button>
  );
};
