import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent) => void;
  disabled: boolean;
  buttonText: string;
  loading: boolean;
  bgColor?: string; // optional bgColor prop
}

const FormButton: React.FC<ButtonProps> = ({ onClick, disabled, buttonText, loading, bgColor }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-black focus:outline-none
          ease-in-out transform transition
          border-2 border-black duration-200
          hover:bg-black hover:shadow-none
          hover:text-white inline-flex items-center
          justify-center px-6 py-3 rounded-xl
          shadow-nb-down text-center w-full
          ${bgColor ? bgColor : "bg-white"}
          `}

  >
    {loading ? 'Loading...' : buttonText}
  </button>
);

export default FormButton;
