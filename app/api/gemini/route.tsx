// import { createGoogleGenerativeAI } from "@ai-sdk/google";
// import { Message, streamText } from "ai";
// import { NextResponse } from "next/server";
// import { initialMessage } from "@/app/lib/data";

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
// console.log("apiKey", apiKey);

// const google = createGoogleGenerativeAI({
//   apiKey,
// });

// const generateId = () => Math.random().toString(36).slice(2, 15);

// const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
//   {
//     id: generateId(),
//     role: "system",
//     content: initialMessage.content,
//   },
//   ...messages.map((message) => ({
//     id: message.id || generateId(),
//     role: message.role,
//     content: message.content,
//   })),
// ];

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     if (!message || !Array.isArray(message)) {
//       return NextResponse.json(
//         { error: "Geçersiz istek verisi. 'message' bir dizi olmalıdır." },
//         { status: 400 }
//       );
//     }

//     const promptMessages = buildGoogleGenAIPrompt(message);

//     const stream = await streamText({
//       model: google("gemini-1.5-flash"),
//       messages: promptMessages,
//       temperature: 0.7,
//     });

//     if (!stream) {
//       return NextResponse.json(
//         { error: "Sunucudan geçerli bir yanıt alınamadı." },
//         { status: 500 }
//       );
//     }

//     console.log("Stream Response:", stream);
//     const response = stream.toDataStreamResponse();

//     if (!response) {
//       return NextResponse.json(
//         { error: "Veri akışı yanıtı oluşturulamadı." },
//         { status: 500 }
//       );
//     }

//     return response;
//   } catch (error) {
//     console.error("API error:", error);
//     return NextResponse.json(
//       { error: "Sunucu Hatası: " + (error as Error).message },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   return NextResponse.json(
//     { message: "Gemini API çalışıyor" },
//     { status: 200 }
//   );
// }
