"use client";

import Link from "next/link";
import {
  BookImage,
  BriefcaseBusiness,
  FileDown,
  Github,
  Linkedin,
  MessageSquare,
  Phone,
  SlidersHorizontal,
  UserRound,
  UsersRound,
} from "lucide-react";
import { useContactTrigger } from "@/hooks/use-contact";
import { useControls } from "@/hooks/use-controls";
import { useAIModel } from "@/hooks/use-model";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/hooks/use-window";
import MobileDrawer from "./MobileDrawer";
import { toast } from "sonner";

const OptionsMenu = () => {
  const [option, setOption] = useState<string>("");
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const controls = useControls();
  const contactTrigger = useContactTrigger();

  const { isPlaying } = useAIModel();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width! > 768) {
      setOpenMobileMenu(false);
    }
  }, [width]);

  const askAI = useAIModel((state) => state.askAI);

  const ask = (question: string) => {
    askAI(question);
  };

  const handleTriggers = (question: string) => {
    if (isPlaying) {
      toast.info("Please wait until the current action is finished.");
      return;
    }

    if (controls.isChatOpen) {
      ask(question);
    } else {
      controls.onChatOpen();
      ask(question);
    }
  };

  const handleOpenMobileMenu = (option: string) => {
    setOption(option);
    setOpenMobileMenu(true);
  };

  const handleTriggersMobile = (question: string) => {
    if (isPlaying) {
      toast.info("Please wait until the current action is finished.");
      return;
    }

    setOption("chat");
    setOpenMobileMenu(true);
    ask(question);
  };

  return (
    <>
      <div className="hidden opacity-0 transition-all ease-in-out group-hover:opacity-100 absolute bottom-0 md:flex justify-between items-center h-20 px-1 w-full">
        {/* Start Menu */}
        <ul className="flex justify-start items-center w-full">
          <li
            className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
            onClick={
              controls.isParticipantsOpen
                ? controls.onParticipantsClose
                : controls.onParticipantsOpen
            }
          >
            <UsersRound className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
            <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
              Participants
            </p>
          </li>
          <li
            className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
            onClick={
              controls.isChatOpen ? controls.onChatClose : controls.onChatOpen
            }
          >
            <MessageSquare className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
            <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
              Chat
            </p>
          </li>
        </ul>

        {/* Middle Menu */}
        <ul className="flex justify-center items-center w-full">
          <li
            className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
            onClick={contactTrigger.onOpen}
          >
            <UserRound className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
            <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
              About me
            </p>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon">
            <Link
              href="https://j921775fjqkcrdxz.public.blob.vercel-storage.com/Resume-dNdwviCQvCdbdBo0R17v3dprcrYRrj.pdf"
              target="_blank"
              className="flex flex-col gap-1 items-center justify-center"
            >
              <FileDown className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                Resume
              </p>
            </Link>
          </li>
          <li
            className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
            onClick={
              controls.isPortfolioOpen
                ? controls.onPortfolioClose
                : controls.onPortfolioOpen
            }
          >
            <BookImage className="text-[#25e55f] h-6 w-6 transition-all ease-in-out group-hover/icon:brightness-150" />
            <p className="text-xs md:text-sm text-[#25e55f] font-semibold transition-all ease-in-out group-hover/icon:brightness-150 select-none">
              Portfolio
            </p>
          </li>
          <li
            className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
            onClick={() => handleTriggers("Tell me about your skills")}
          >
            <SlidersHorizontal className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
            <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
              Skills
            </p>
          </li>
          <li
            className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
            onClick={() => handleTriggers("Tell me about your job experiences")}
          >
            <BriefcaseBusiness className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
            <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
              Experience
            </p>
          </li>
        </ul>

        {/* End Menu */}
        <ul className="flex justify-end items-center w-full">
          <li
            className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
            onClick={contactTrigger.onOpen}
          >
            <Phone className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
            <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
              Contact
            </p>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon">
            <Link
              href="https://www.linkedin.com/in/lyonelpierce/"
              target="_blank"
              className="flex flex-col gap-1 items-center justify-center"
            >
              <Linkedin className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                LinkedIn
              </p>
            </Link>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon">
            <Link
              href="https://github.com/lyonelpierce"
              target="_blank"
              className="flex flex-col gap-1 items-center justify-center"
            >
              <Github className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                GitHub
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#121619] md:hidden opacity-0 transition-all ease-in-out group-hover:opacity-100 absolute bottom-0 flex justify-between items-center h-20 px-1 w-full overflow-hidden">
        <ScrollArea className="flex flex-row items-center justify-center h-full">
          {/* Start Menu */}
          <ul className="flex gap-1 items-center justify-center w-full h-20">
            <li
              className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon"
              onClick={() => handleOpenMobileMenu("participants")}
            >
              <UsersRound className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                Participants
              </p>
            </li>
            <li
              className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon"
              onClick={() => handleOpenMobileMenu("chat")}
            >
              <MessageSquare className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                Chat
              </p>
            </li>
            <Separator
              orientation="vertical"
              className="w-0.5 h-10 bg-white/30"
            />
            {/* Middle Menu */}
            <li
              className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon"
              onClick={contactTrigger.onOpen}
            >
              <UserRound className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                About me
              </p>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon">
              <Link
                href="https://j921775fjqkcrdxz.public.blob.vercel-storage.com/Resume-dNdwviCQvCdbdBo0R17v3dprcrYRrj.pdf"
                target="_blank"
                className="flex flex-col gap-1 items-center justify-center"
              >
                <FileDown className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
                <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                  Resume
                </p>
              </Link>
            </li>
            <li
              className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon"
              onClick={
                controls.isPortfolioOpen
                  ? controls.onPortfolioClose
                  : controls.onPortfolioOpen
              }
            >
              <BookImage className="text-[#25e55f] size-5 transition-all ease-in-out group-hover/icon:brightness-150" />
              <p className="text-xs md:text-sm text-[#25e55f] font-semibold transition-all ease-in-out group-hover/icon:brightness-150 select-none">
                Portfolio
              </p>
            </li>
            <li
              className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon"
              onClick={() => handleTriggersMobile("Tell me about your skills")}
            >
              <SlidersHorizontal className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                Skills
              </p>
            </li>
            <li
              className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon"
              onClick={() =>
                handleTriggersMobile("Tell me about your job experiences")
              }
            >
              <BriefcaseBusiness className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                Experience
              </p>
            </li>
            <Separator
              orientation="vertical"
              className="w-0.5 h-10 bg-white/30"
            />
            {/* End Menu */}
            <li
              className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon"
              onClick={contactTrigger.onOpen}
            >
              <Phone className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
              <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                Contact
              </p>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon">
              <Link
                href="https://www.linkedin.com/in/lyonelpierce/"
                target="_blank"
                className="flex flex-col gap-1 items-center justify-center"
              >
                <Linkedin className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
                <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                  LinkedIn
                </p>
              </Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-20 p-2 group/icon">
              <Link
                href="https://github.com/lyonelpierce"
                target="_blank"
                className="flex flex-col gap-1 items-center justify-center"
              >
                <Github className="text-[#a8a8a8] size-5 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
                <p className="text-xs md:text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
                  GitHub
                </p>
              </Link>
            </li>
          </ul>
          <ScrollBar orientation="horizontal" />
          {width && width <= 768 && (
            <MobileDrawer
              open={openMobileMenu}
              onClose={() => setOpenMobileMenu(false)}
              option={option}
            />
          )}
        </ScrollArea>
      </div>
    </>
  );
};

export default OptionsMenu;
