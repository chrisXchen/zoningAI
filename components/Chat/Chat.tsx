import { Message } from "@/types";
import { FC } from "react";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";
import { ChatMessage } from "./ChatMessage";
import { ResetChat } from "./ResetChat";
import Dropdown from '../Form/LocalitySelect';
import { useState } from 'react';

interface Props {
  messages: Message[];
  loading: boolean;
  onSend: (message: Message) => void;
  onReset: () => void;
}

export const Chat: FC<Props> = ({ messages, loading, onSend, onReset, selectedLocality, handleLocalityChange, localities }) => {
  return (
    <>
      <div className="
        flex flex-row justify-between items-center
        mb-4 sm:mb-8 ml-3 mr-3
        gap-2 sm:gap-12 md:gap-24 lg:gap-52">
        <ResetChat onReset={onReset} />
        <Dropdown
            options={localities}
            value={selectedLocality}
            onChange={handleLocalityChange}
        />
      </div>

      <div className="flex flex-col rounded-lg px-3 sm:p-4
        ">
        {messages.map((message, index) => (
          <div
            key={index}
            className="my-1 sm:my-1.5"
          >
            <ChatMessage message={message} />
          </div>
        ))}

        {loading && (
          <div className="my-1 sm:my-1.5">
            <ChatLoader />
          </div>
        )}

        <div className="mt-4 sm:mt-8 bottom-[56px] left-0 w-full">
          <ChatInput onSend={onSend} />
        </div>
      </div>
    </>
  );
};
