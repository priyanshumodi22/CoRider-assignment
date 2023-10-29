import { FC, useState } from "react";
import { ArrowLeft, Check, PenSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Menu from "./Menu";

const Navbar: FC = () => {
  const [tripName, setTripName] = useState("Trip 1");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTripName(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save the edited text here
  };

  return (
    <div className="Header">
      <div className="flex gap-2 items-center p-4 ">
        <Button variant="ghost">
          <ArrowLeft className="h-8 w-8 sm:h-6 sm:w-6 text-zinc-700" />
        </Button>

        {isEditing ? (
          <input
            type="text"
            value={tripName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="text-zinc-900 text-xl font-medium md:block"
          />
        ) : (
          <p className="text-zinc-900 text-xl font-medium md:block">
            {tripName}
          </p>
        )}

        {isEditing ? (
          <Button variant="ghost" className="ml-auto" onClick={handleSaveClick}>
            <Check className="h-6 w-6 sm:h-6 sm:w-6 text-zinc-700" />
          </Button>
        ) : (
          <Button variant="ghost" className="ml-auto" onClick={handleEditClick}>
            <PenSquare className="h-6 w-6 sm:h-6 sm:w-6 text-zinc-700" />
          </Button>
        )}
      </div>
      <div className="flex items-center justify-between p-4 border-b border-solid">
        <div className="flex gap-4">
          <Avatar className="ml-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="Group" />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>

          <div className="flex-col">
            <div className="flex gap-2">
              <p className="text-zinc-500">From</p>
              <p className="text-zinc-900 font-bold">IGI Airport, T3</p>
            </div>
            <div className="flex gap-2">
              <p className="text-zinc-500">To</p>
              <p className="text-zinc-900 font-bold">Sector 28</p>
            </div>
          </div>
        </div>
        <div className="mr-4">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
