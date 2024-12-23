import Image from "next/image";
import UserImg from "../../../public/user-img.jpg";

type UserCardProps = {
  open: boolean;
};

function UserCard({ open }: UserCardProps) {
  return (
    <div className="w-full flex gap-2 border border-neutral-200 p-1 rounded-md">
      <div className={`relative ${!open ? "w-5 h-5" : "w-11 h-11"} rounded-full overflow-hidden`}>
        <Image
          fill
          src={UserImg}
          alt="User image"
          className="object-cover rounded-full"
        />
      </div>
      {open && (
        <div className="flex-1 text-nowrap text-ellipsis overflow-hidden">
          <p className="text-sm font-semibold">NomeNomeNome</p>
          <p className="text-xs">Email</p>
        </div>
      )}
    </div>
  );
}

export default UserCard;
