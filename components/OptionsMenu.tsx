"use client";

import Link from "next/link";
import { FileDown, Phone, UsersRound } from "lucide-react";
import { useContactTrigger } from "@/hooks/use-contact";
import { useControls } from "@/hooks/use-controls";

const OptionsMenu = () => {
  const contactTrigger = useContactTrigger();
  const controls = useControls();

  return (
    <ul className="opacity-0 transition-all ease-in-out group-hover:opacity-100 absolute bottom-0 flex justify-center items-center h-20 px-8 w-full">
      <li
        className="flex flex-col gap-1 items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#434343] rounded-lg w-28 p-2 group/icon"
        onClick={controls.isOpen ? controls.onClose : controls.onOpen}
      >
        <UsersRound className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
        <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
          Participants
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
        onClick={contactTrigger.onOpen}
      >
        <Phone className="text-[#a8a8a8] h-6 w-6 transition-all ease-in-out group-hover/icon:text-[#d9d9d9]" />
        <p className="text-sm text-[#a8a8a8] font-semibold transition-all ease-in-out group-hover/icon:text-[#d9d9d9] select-none">
          Contact
        </p>
      </li>
    </ul>
  );
};

export default OptionsMenu;
