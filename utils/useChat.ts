import { useEffect, useRef, useState } from "react";
import { Message } from "@/types";

export const useChat = () => {
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
    setMessages([]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    handleReset();
  }, []);

  return {
    messages,
    loading,
    handleSend,
    handleReset,
    messagesEndRef
  };
};
