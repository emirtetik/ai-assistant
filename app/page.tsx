"use client"
// import { useState } from "react";
// import { getAIResponse } from "./lib/gemini";

const Home = () => {
  // const [response, setResponse] = useState("");
  // const [userInput, setUserInput] = useState("")
  // const [chatHistory, setChatHistory] = useState<any[]>([]);
  // const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   setUserInput(event.target.value)
  // }
  // const handleSubmit = async () => {
  //   const newMessage = {author: "user", content: userInput};
  //   const updatedHistory = [...chatHistory, newMessage];

  //   const result = await getAIResponse(userInput, updatedHistory);
  //   setResponse(result.text());
  //   setUserInput("")
  // }
 
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
    <div className="w-full">
      <input
        type="text"
        // onChange={handleChangeInput}
        // value={userInput}
        placeholder="Type your message"
        className="border border-2 border-white rounded-lg p-2 w-full bottom-0 absolute"
      />
      <button >Send</button>
    </div>
    <div className="border border-2 border-white w-[500px] h-[300px] w-full p-2 overflow-auto">
      <h2>AI Response:</h2>
      
    </div>
  </div>
  );
};

export default Home;