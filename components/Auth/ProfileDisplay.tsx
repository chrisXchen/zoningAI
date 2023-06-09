import { User } from "@/types";
import { IconMail, IconBuildingEstate } from "@tabler/icons-react";
import { FC } from "react";

interface Props {
  user: User;
}

export const ProfileDisplay: FC<Props> = ({ user }) => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="flex items-center text-neutral-900 font-semibold">
        <IconMail className="h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-blue-500 text-white hover:opacity-80 mr-2" />
        Email: <span className="text-neutral-700 ml-2">{user.email}</span>
      </div>
      <div className="flex items-center text-neutral-900 font-semibold">
        <IconBuildingEstate className="h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-blue-500 text-white hover:opacity-80 mr-2" />
        City: <span className="text-neutral-700 ml-2">{user.city}</span>
      </div>
    </div>
  );
};
