import { FC } from "react";

interface Props {
  onReset: () => void;
}

export const ResetChat: FC<Props> = ({ onReset }) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className="text-sm sm:text-base text-full-black font-semibold
        rounded-lg px-4 py-2 bg-white hover:bg-black hover:text-white
        focus:outline-none border-2
        border-full-black shadow-nb-assistant"
        onClick={() => onReset()}
      >
        Reset
      </button>
    </div>
  );
};
;
