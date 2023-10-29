import { FC, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface MessageProps {
  msg: any;
}

const Message: FC<MessageProps> = ({ msg }) => {
  const selfSend = msg.sender.self;
  const msgText = msg.message;
  const profilePic = msg.sender.image;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "auto" });
  }, [msg]);
  

  return (
    <div ref={ref}>
      {!selfSend ? (
        <div className="flex items-start">
          <div>
            <Avatar className="ml-2">
              <AvatarImage src={profilePic} alt="Group" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
          </div>
          <div className="mr-20 md:mr-80">
            <div className="m-4 p-2 bg-white max-70vw flex-grow justify-start rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-md ml-2 ">
              <p className="text-gray-600"> {msgText} </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex p-4 justify-end gap-2 flex-row-reverse ml-20 md:ml-80">
          <div className="m-1 p-2 bg-[#1C63D5] max-w-70vw flex-grow justify-start rounded-tr-lg rounded-tl-lg rounded-bl-lg shadow-md">
            <p className="text-white text-justify p-1"> {msgText} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
