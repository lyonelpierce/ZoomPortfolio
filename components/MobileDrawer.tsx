import { useEffect, useState } from "react";
import MessagesComponent from "./Messages";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";
import Participants from "./Participants";

const MobileDrawer = ({
  open,
  onClose,
  option,
}: {
  open: boolean;
  onClose: () => void;
  option: string;
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Drawer open={open} onOpenChange={onClose} modal={false}>
      <DrawerContent className="h-1/2 bg-[#242424] border-x-0 border-t border-slate-400/20 rounded-none">
        <DrawerHeader>
          <DrawerTitle className="text-start">
            {option === "participants" ? "Participants" : "Chat"}
          </DrawerTitle>
        </DrawerHeader>
        {option === "participants" ? (
          <div className="px-4">
            <Participants />
          </div>
        ) : (
          <MessagesComponent />
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
