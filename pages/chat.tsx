import { Chat } from "@/components/Chat/Chat";
import { Footer } from "@/components/Layout/Footer";
import { Navbar } from "@/components/Layout/Navbar";
import { Message } from "@/types";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (message: Message) => {
    const updatedMessages = [...messages, message];

    setMessages(updatedMessages);
    setLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: message.content
      })
    });

    if (!response.ok) {
      setLoading(false);
      throw new Error(response.statusText);
    }

    const data = await response.json();

    if (!data) {
      return;
    }

    setLoading(false);

    setMessages((messages) => [
      ...messages,
      {
        role: "assistant",
        content: data.text
      }
    ]);
  };


  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: `Hello! I'm Just Zoning's AI, your intelligent guide to zoning laws. I'm here to swiftly decode legal jargon and provide clear answers. I try to be as accurate as possible, but please remember to use your judgement and cross-check my answers. How may I assist you today?`
      }
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: `Hello! I'm Just Zoning's AI, your intelligent guide to zoning laws. I'm here to swiftly decode legal jargon and provide clear answers. I try to be as accurate as possible, but please remember to use your judgement and cross-check my answers. How may I assist you today?`
      }
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Just Zoning - Chat</title>
        <meta
          name="description"
          content="A chatbot to extract zoning information for the selected locality."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 overflow-auto sm:px-10 pb-4 sm:pb-10">
          <div className="max-w-[800px] mx-auto mt-4 sm:mt-12 mb-4 sm:mb-8">
            <Chat
              messages={messages}
              loading={loading}
              onSend={handleSend}
              onReset={handleReset}
            />
            <div ref={messagesEndRef} />
          </div>
        </div>
          <div className="hidden md:block">
          <Footer />
          </div>
      </div>
    </>
  );
}

export default ChatPage;
