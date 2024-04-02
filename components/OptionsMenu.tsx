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

const OptionsMenu = () => {
  const contactTrigger = useContactTrigger();
  const controls = useControls();

  const askAI = useAIModel((state) => state.askAI);

  const ask = (question: string) => {
    askAI(question);
  };

  return (
    <div className="opacity-0 transition-all ease-in-out group-hover:opacity-100 absolute bottom-0 flex justify-between items-center h-20 px-1 w-full">
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
          <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
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
          <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
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
          <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
            About me
          </p>
        </li>
        <li className="cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon">
          <Link
            href="/files/resume.pdf"
            target="_blank"
            className="flex flex-col gap-1 items-center justify-center"
          >
            <FileDown className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
            <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
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
          <p className="text-sm text-[#25e55f] font-semibold transition-all ease-in-out group-hover/icon:brightness-150 select-none">
            Portfolio
          </p>
        </li>
        <li
          className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
          onClick={() => ask("Tell me about your skills")}
        >
          <SlidersHorizontal className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
          <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
            Skills
          </p>
        </li>
        <li
          className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
          onClick={() => ask("Tell me about your job experiences")}
        >
          <BriefcaseBusiness className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
          <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
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
          <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
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
            <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
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
            <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
              GitHub
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default OptionsMenu;
