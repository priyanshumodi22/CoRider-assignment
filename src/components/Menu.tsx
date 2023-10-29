import { FC } from "react";
import { Users2, MoreVertical, Phone, MailWarning } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="DropdownMenuContent bg-white " align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users2 className="mr-2 h-5 w-5" />
            <span className="font-semibold">Members</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Phone className="mr-2 h-5 w-5" />
            <span className="font-semibold">Share Number</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <MailWarning className="mr-2 h-5 w-5" />
            <span className="font-semibold">Report</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
