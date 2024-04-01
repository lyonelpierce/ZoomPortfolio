"use client";

import ContactCard from "@/components/ContactCard";
import OptionsMenu from "@/components/OptionsMenu";
import VideoCanvas from "@/components/VideoCanvas";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Send } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const askAI = useAIModel((state) => state.askAI);
  const loading = useAIModel((state) => state.loading);
  const [question, setQuestion] = useState("");

  const ask = () => {
    askAI(question);
    setQuestion("");
  };

  const controls = useControls();

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={80} className="relative group w-full group">
        <ContactCard />
        <VideoCanvas />
        <OptionsMenu />
      </ResizablePanel>
      <ResizableHandle className="bg-[#383838]" />
      <ResizablePanel defaultSize={20} className="bg-[#242424]">
        <ResizablePanelGroup direction="vertical">
          {controls.isOpen && (
            <>
              <ResizablePanel defaultSize={20} className="px-4">
                <p className="text-center text-sm font-semibold p-4">
                  Participants (2)
                </p>
                <div className="flex gap-1 items-center">
                  <Avatar className="rounded-md items-center">
                    <AvatarFallback className="bg-[#8e44ad] rounded-md font-semibold text-sm size-8">
                      LP
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm">Lyonel Pierce</p>
                </div>
              </ResizablePanel>
              <ResizableHandle className="bg-[#383838]" />
            </>
          )}
          <ResizablePanel defaultSize={80} className="relative">
            <p className="text-center text-sm font-semibold p-4">
              Meeting Chat
            </p>
            <ScrollArea></ScrollArea>
            <Textarea
              placeholder="Ask me a question"
              className="absolute bottom-0 rounded-none bg-[#242424] border-0 border-t border-slate-400/20 resize-none"
              rows={5}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button
              className="bg-blue-600 hover:bg-blue-700 absolute bottom-0 right-0 m-2 size-7"
              size="icon"
              onClick={ask}
            >
              <Send className="w-4 h-4" />
            </Button>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
