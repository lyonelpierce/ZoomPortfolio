"use client";

import ContactCard from "@/components/ContactCard";
import MessagesComponent from "@/components/Messages";
import OptionsMenu from "@/components/OptionsMenu";
import Participants from "@/components/Participants";
import VideoCanvas from "@/components/VideoCanvas";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useControls } from "@/hooks/use-controls";
import useWindowDimensions from "@/hooks/use-window";

export default function Home() {
  const controls = useControls();

  const { width } = useWindowDimensions();

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={80} className="relative group w-full group">
        <ContactCard />
        <VideoCanvas />
        <OptionsMenu />
      </ResizablePanel>
      {width! > 768 && (
        <>
          {(controls.isParticipantsOpen || controls.isChatOpen) && (
            <>
              <ResizableHandle className="bg-[#383838]" />
              <ResizablePanel
                defaultSize={20}
                maxSize={30}
                minSize={20}
                className="bg-[#242424] hiddem md:flex"
              >
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
                      <MessagesComponent />
                    </ResizablePanel>
                  )}
                </ResizablePanelGroup>
              </ResizablePanel>
            </>
          )}
        </>
      )}
    </ResizablePanelGroup>
  );
}
