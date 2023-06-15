import { FC } from "react";

interface Props {
  onReset: () => void;
}

export const ResetChat: FC<Props> = ({ onReset }) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className="text-sm sm:text-base text-full-black font-semibold
        rounded-lg px-4 py-2 bg-brand-obnoxious hover:bg-brand-secondary
        focus:outline-none focus:ring-1 focus:ring-neutral-300 border-4
        border-full-black"
        onClick={() => onReset()}
      >
        Reset
      </button>
    </div>
  );
};
;
