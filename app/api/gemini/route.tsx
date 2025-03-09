import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { Message, streamText } from "ai";
import { initialMessage } from "@/app/lib/data";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
const google = createGoogleGenerativeAI({
  apiKey,
});
const generateId = () => Math.random().toString(36).slice(2,15);
const buildGoogleGenAIPromt = (messages: Message[]): Message[] => [
    {
        id: generateId(),
        role: "user",
        content: initialMessage.content,
    },
    ...messages.map((message) => ({
        id: message.id || generateId(),
        role: message.role,
        content: message.content,
    })),
];
export async function POST(req: Request) {
    const {message} = await req.json()
    const stream = await streamText({
        model: google("gemini-1.5-flash"),
        messages: buildGoogleGenAIPromt(message),
        temperature: 0.7,
    });
    return stream?.toDataStreamResponse()
}
