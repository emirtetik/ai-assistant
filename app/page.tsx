"use client"
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
import { getAIResponse } from "./lib/gemini";
import { FaUserAlt } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import Markdown from 'react-markdown';
const Home = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: string, text: string }[]>([]);
  const handleSubmit = async () => {
    if (!message) return;
    try {

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { role: "user", text: message },
      ]);

      const aiResponse = await getAIResponse(message);

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { role: "model", text: aiResponse || "Sorry, I couldn't understand that." },
      ]);
      
      setMessage("");

    } catch (error) {
      console.log('error', error)
    };
  };
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center text-white">
    <div className="flex flex-col w-full p-4 px-10  overflow-y-auto max-h-[50%] mb-[100px]">
        <div className="space-y-4">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} items-center`}
            >
              {message.role === "user" ? (
                <>
                  <div
                    className={`max-w-xl p-3 rounded-lg bg-gray-600 text-white`}
                  >
                    <p>{message.text}</p>
                  </div>
                  <FaUserAlt className="text-white text-lg ml-2" />
                </>
              ) : (
                <>
                  <RiRobot2Fill className="text-white text-lg mr-2" />
                  <div
                    className={`max-w-xl p-3 rounded-lg text-white`}
                  >
                     <Markdown>{message.text}</Markdown>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    <div className="flex bottom-0 fixed items-center gap-x-5 justify-center w-full p-4 px-10 bg-gray-700">
    <input
    type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Mesajınızı yazın..."
      className="rounded-lg p-2 text-black w-full border border-2 border-white hover:border-white m-2 text-white "
    />
    <button
      onClick={handleSubmit}
      className="p-2 rounded-lg"
    >
      <BsFillSendFill size={24}/>
    </button>
    </div>
  </div>
  );
};

export default Home;


