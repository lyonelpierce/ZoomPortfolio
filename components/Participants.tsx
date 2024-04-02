import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Participants = () => {
  return (
    <ul>
      <li className="flex gap-1 items-center">
        <Avatar className="rounded-md items-center">
          <AvatarFallback className="bg-[#8e44ad] rounded-md font-semibold text-sm size-8 select-none">
            LP
          </AvatarFallback>
        </Avatar>
        <p className="text-sm select-none">Lyonel Pierce</p>
      </li>
      <li className="flex gap-1 items-center">
        <Avatar className="rounded-md items-center">
          <AvatarFallback className="bg-blue-500 rounded-md font-semibold text-sm size-8 select-none">
            U
          </AvatarFallback>
        </Avatar>
        <p className="text-sm select-none">You</p>
      </li>
    </ul>
  );
};

export default Participants;
