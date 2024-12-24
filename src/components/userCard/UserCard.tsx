import Image from "next/image";
import Link from "next/link";
import UserImg from "../../../public/user-img.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function UserCard() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-red-300 relative w-9 h-9 lg:w-12 lg:h-12 p-2 rounded-full overflow-hidden">
        <Image fill src={UserImg} alt="User image" className="object-cover" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-2">
        <Link href={"/main/profile"}>
          <DropdownMenuItem className="cursor-pointer">Perfil</DropdownMenuItem>
        </Link>
        <Link href={"/main/profile"}>
          <DropdownMenuItem className="cursor-pointer">Sair</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserCard;
