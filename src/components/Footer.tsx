import { FC } from "react";
import { SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Clip from "./Clip";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="Footer">
    <div className="p-4 mb-4 relative">
      <Input type="text" placeholder="Reply" />

      <div className="absolute top-1/2 right-16 transform -translate-y-1/2">
        <Clip />
      </div>

      <Button
        variant="ghost"
        type="submit"
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
      >
        <SendHorizonal />
      </Button>
    </div>
    </div>
  );
};

export default Footer;
