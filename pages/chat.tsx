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
        content: `Hi there! I'm Land Laws AI, an assistant knowledgable in the zoning laws for your area. Don't bother with reading through those dense government documents, just ask me your questions regarding zoning information in Howell, NJ. I have access to plenty of those government documents and can parse them super easy for you. How can I help you?`
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
        content: `Hi there! I'm Land Laws AI, an assistant knowledgable in the zoning laws for your area. Don't bother with reading through those dense government documents, just ask me your questions regarding zoning information in Howell, NJ. I have access to plenty of those government documents and can parse them super easy for you. How can I help you?`
      }
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Land Laws AI</title>
        <meta
          name="description"
          content="A simple chatbot for OpenAI's chat model and government zoning guidelines for Howell, New Jersey."
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

      <div className="flex flex-col h-screen">
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
