import { 
    Content,
    GoogleGenerativeAI,
  } from "@google/generative-ai";
  
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const generationConfig = {
    temperature: 0.7,
    topP: 0.9,
    topK: 50,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  const chatHistory: Content[] = [];
  
  export async function getAIResponse(message: string) {
    const userMessage: Content = {
      role: "user",
      parts: [{ text: message }],
    };
    chatHistory.push(userMessage);
  
    const chatSession = model.startChat({
      generationConfig,
      history: chatHistory,
    });
  
    const result = await chatSession.sendMessage(message);
  
    const aiMessage: Content = {
      role: "ai",
      parts: [{ text: result.response.text() }],
    };
    chatHistory.push(aiMessage);
  
    return result.response.text();
  }