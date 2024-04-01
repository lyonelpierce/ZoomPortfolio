import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req: NextRequest) {
  const chatCompletition = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a web developer asking a question to an AI.",
      },
      {
        role: "system",
        content: "You will always respond with a JSON object.",
      },
      {
        role: "user",
        content: `${req.nextUrl.searchParams.get("question")}`,
      },
    ],
    model: "gpt-4-turbo-preview",
    response_format: {
      type: "json_object",
    },
  });

  console.log(chatCompletition.choices[0].message.content);
  return NextResponse.json(chatCompletition.choices[0].message.content);
}
