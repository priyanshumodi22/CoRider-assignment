import { FC } from "react";
import { Paperclip, Camera, Video, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
interface AttachProps {}

const Clip: FC<AttachProps> = ({}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Paperclip />
      </PopoverTrigger>
      <PopoverContent className="flex bg-[#008000] p-1 rounded-full w-45 justify-between mb-6 border-0">
        <Button variant="link">
          <Camera className="text-white w-5 h-5" />
        </Button>
        <Button variant="link">
        <Video className="text-white w-5 h-5" />
        </Button>
        <Button variant="link">
        <FileDown className="text-white w-5 h-5" />
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default Clip;
