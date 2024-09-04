"use client";

import ContactCard from "@/components/ContactCard";
import OptionsMenu from "@/components/OptionsMenu";
import Participants from "@/components/Participants";
import VideoCanvas from "@/components/VideoCanvas";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useControls } from "@/hooks/use-controls";
import { useAIModel } from "@/hooks/use-model";
import { cn } from "@/lib/utils";
import { Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const askAI = useAIModel((state) => state.askAI);
  const { messages } = useAIModel();
  const loading = useAIModel((state) => state.loading);
  const [question, setQuestion] = useState("");

  const ask = () => {
    askAI(question);
    setQuestion("");
  };

  const controls = useControls();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={80} className="relative group w-full group">
        <ContactCard />
        <VideoCanvas />
        <OptionsMenu />
      </ResizablePanel>
      {(controls.isParticipantsOpen || controls.isChatOpen) && (
        <>
          <ResizableHandle className="bg-[#383838]" />
          <ResizablePanel defaultSize={20} maxSize={30} minSize={20} className="bg-[#242424]">
            <ResizablePanelGroup direction="vertical">
              {controls.isParticipantsOpen && (
                <>
                  <ResizablePanel
                    defaultSize={20}
                    maxSize={20}
                    minSize={20}
                    className="px-4"
                  >
                    <p className="text-center text-sm font-semibold p-4 select-none">
                      Participants (2)
                    </p>
                    <Participants />
                  </ResizablePanel>
                </>
              )}
              <ResizableHandle className="bg-[#383838]" />
              {controls.isChatOpen && (
                <ResizablePanel defaultSize={80} className="relative">
                  <p className="text-center text-sm font-semibold p-4 select-none">
                    Meeting Chat
                  </p>
                  <ScrollArea
                    className={cn(
                      controls.isParticipantsOpen ? "h-[65vh]" : "h-[85vh]"
                    )}
                    ref={scrollRef}
                  >
                    {messages.map((message: any) => (
                      <div
                        className="flex flex-col gap-4 w-full text-xs p-4"
                        key={message.id}
                      >
                        <div className="flex justify-start">
                          <p className="bg-zinc-600 rounded-lg p-2 mr-8">
                            {message.question}
                          </p>
                        </div>
                        <div className="flex justify-end">
                          <p className="bg-blue-600 rounded-lg p-2 ml-8">
                            {message.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                  <Textarea
                    placeholder="Ask me a question"
                    className="rounded-none bg-[#242424] border-0 border-t border-slate-400/20 resize-none"
                    rows={5}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    disabled={loading}
                  />
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 absolute bottom-0 right-0 m-2 size-7"
                    size="icon"
                    onClick={ask}
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </ResizablePanel>
              )}
            </ResizablePanelGroup>
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  );
}
