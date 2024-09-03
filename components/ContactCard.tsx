"use client";

import Link from "next/link";

import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ContactRound } from "lucide-react";
import { useContactTrigger } from "@/hooks/use-contact";
import { useEffect, useState } from "react";

const ContactCard = () => {
  const [isMounted, setIsMounted] = useState(false);

  const contactTrigger = useContactTrigger();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <Popover open={contactTrigger.isOpen} onOpenChange={contactTrigger.onClose}>
      <PopoverAnchor className="absolute left-0 z-10">
        <Button
          className="bg-[#292929] hover:bg-[#292929] opacity-0 transition-colors ease-in-out group-hover:opacity-100 absolute top-0 left-0 m-4"
          size="icon"
          onClick={contactTrigger.onOpen}
        >
          <ContactRound className="text-[#25e55f]" />
        </Button>
      </PopoverAnchor>
      <PopoverContent
        className="bg-[#26272a] border-0 ml-4 shadow-none text-[#f5f5f5] w-96 flex flex-col gap-2 my-16"
        sideOffset={10}
        side="bottom"
      >
        <h1 className="font-semibold">
          Lyonel Pierce&apos;s Portfolio Meeting
        </h1>
        <p className="text-sm">
          Hi! I&apos;m Lyonel Pierce, I&apos;m a Full Stack Developer and Web
          Designer, who has passion for building creative and functional web
          applications with intuitive functionality.
        </p>
        <ul className="flex flex-col gap-1">
          <li className="grid grid-cols-2">
            <p className="text-[#999999] text-sm">Host:</p>
            <p className="text-sm text-[#f5f5f5]">Lyonel Pierce</p>
          </li>
          <li className="grid grid-cols-2">
            <p className="text-[#999999] text-sm">Location:</p>
            <p className="text-sm text-[#f5f5f5]">New York City</p>
          </li>

          <li className="grid grid-cols-2">
            <p className="text-[#999999] text-sm">Phone:</p>
            <Link
              href="callto:9293746098"
              className="text-sm text-[#4e9ad8] transition-all ease-in-out hover:brightness-110 w-fit"
            >
              (929)-374-6098
            </Link>
          </li>
          <li className="grid grid-cols-2">
            <p className="text-[#999999] text-sm">E-mail:</p>
            <Link
              href="mailto:lyonel@live.com"
              className="text-sm text-[#4e9ad8] transition-all ease-in-out hover:brightness-110 w-fit"
            >
              lyonel@live.com
            </Link>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ContactCard;
