import { IconDots } from "@tabler/icons-react";
import { FC } from "react";

interface Props {}

export const ChatLoader: FC<Props> = () => {
  return (
    <div className="flex flex-col flex-start">
      <div
        className={`flex items-center bg-brand-secondary text-brand-primary rounded-2xl px-4 py-2 w-fit border-4 border-full-black shadow-nb-assistant`}
        style={{ overflowWrap: "anywhere" }}
      >
        <IconDots className="animate-pulse" color={'#dc8701'}/>
      </div>
    </div>
  );
};
