import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";
import { useControls } from "@/hooks/use-controls";
import { useEffect, useRef, useState } from "react";
import { useAIModel } from "@/hooks/use-model";
import { Loader2, Send } from "lucide-react";

const MessagesComponent = () => {
  const controls = useControls();

  const { messages } = useAIModel();
  const askAI = useAIModel((state) => state.askAI);
  const loading = useAIModel((state) => state.loading);

  const [question, setQuestion] = useState<string>("");

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const ask = () => {
    askAI(question);
    setQuestion("");
  };

  return (
    <>
      <p className="text-center text-sm font-semibold p-4 select-none">
        Meeting Chat
      </p>
      <ScrollArea
        className={cn(controls.isParticipantsOpen ? "h-[65vh]" : "h-[85vh]")}
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
    </>
  );
};

export default MessagesComponent;
