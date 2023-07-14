import { Chat } from "@/components/Chat/Chat";
import { Footer } from "@/components/Layout/Footer";
import { Navbar } from "@/components/Layout/Navbar";
import { Message } from "@/types";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { supabaseClient } from '../utils/PublicSupabaseClient'

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedLocality, setSelectedLocality] = useState('');
  const [localities, setLocalities] = useState([]);

  const handleLocalityChange = (event) => {
      setSelectedLocality(event.target.value);
  };

  useEffect(() => {
    const loadLocalities = async () => {
      const { data, error } = await supabaseClient.from('unique_city_state').select();
      if (error) {
        console.error(error);
        return;
      }
      const newLocalities = data.map(obj => ({ label: obj.city + ', ' + obj.state, value: obj }));
      setLocalities(newLocalities);
      if(newLocalities.length > 0) {
        setSelectedLocality(newLocalities[0]);
      }
    }

    loadLocalities();
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (message: Message) => {
    const updatedMessages = [...messages, message];
    console.log(selectedLocality)
    setMessages(updatedMessages);
    setLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: message.content,
        city: selectedLocality.value.city,
        state: selectedLocality.value.state
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
    let full_reply;
    if (data.found_at.length === 0) {
      full_reply = data.text
    } else {
      full_reply = `${data.text}\n\nPage: ${data.found_at[0].page}\nURL: ${data.found_at[0].url}${data.found_at.length > 1 ? '\n\nPage: ' + data.found_at[1].page + '\nURL: ' + data.found_at[1].url: ''}`
    }

    setLoading(false);

    setMessages((messages) => [
      ...messages,
      {
        role: "assistant",
        content: full_reply
      }
    ]);
  };


  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: `Welcome to My Zoning AI, your intelligent guide to zoning laws. I'm here to swiftly decode legal jargon and provide clear answers.\n\nI try to be as accurate as possible, but please remember to use your judgement and cross-check my answers.\n\nHow may I assist you today?`
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
        content: `Welcome to My Zoning AI, your intelligent guide to zoning laws. I'm here to swiftly decode legal jargon and provide clear answers.\n\nI try to be as accurate as possible, but please remember to use your judgement and cross-check my answers.\n\nHow may I assist you today?`
      }
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>My Zoning AI - Chat</title>
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
          href="/myzaiFavicon2.png"
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
              selectedLocality={selectedLocality}
              handleLocalityChange={handleLocalityChange}
              localities={localities}
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
