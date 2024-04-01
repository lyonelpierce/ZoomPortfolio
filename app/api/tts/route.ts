import { NextRequest, NextResponse } from "next/server";

import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { PassThrough } from "stream";

export async function GET(req: NextRequest) {
  const speechConfig = sdk.SpeechConfig.fromSubscription(
    process.env.SPEECH_KEY!,
    process.env.SPEECH_REGION!
  );

  speechConfig.speechSynthesisVoiceName = `en-US-AndrewNeural`;

  const speechSynthesizer = new sdk.SpeechSynthesizer(speechConfig);
  const visemes: any = [];
  speechSynthesizer.visemeReceived = function (s, e) {
    visemes.push([e.audioOffset / 10000, e.visemeId]);
  };

  const audioStream: any = await new Promise((resolve, reject) => {
    speechSynthesizer.speakTextAsync(
      req.nextUrl.searchParams.get("text") ||
        "I'm excited to try text to speech",
      (result) => {
        const { audioData } = result;

        speechSynthesizer.close();

        // convert arrayBuffer to stream
        const bufferStream = new PassThrough();
        bufferStream.end(Buffer.from(audioData));
        resolve(bufferStream);
      },
      (error) => {
        console.log(error);
        speechSynthesizer.close();
        reject(error);
      }
    );
  });

  const response = new NextResponse(audioStream, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Disposition": `inline; filename=tts.mp3`,
      Visemes: JSON.stringify(visemes),
    },
  });

  return response;
}
