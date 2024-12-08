import { cn } from "@/lib/utils";
import Image from "next/image";

type UserInfoProps = {
  isOpen: boolean;
};

export default function UserInfo({ isOpen }: UserInfoProps) {
  return (
    <div className={cn("bg-app_primary rounded-md flex items-center", isOpen && "gap-2 px-2 h-16 border")}>
      <div className={cn("size-9 relative rounded-full", isOpen && "size-11")}>
        <Image
          src="/user.jpg"
          alt="user image"
          className="rounded-full object-cover"
          fill
        />
      </div>
      {isOpen && (
        <div className="flex-1 px-1">
          <p className="text-sm font-semibold">João</p>
          <p className="text-xs ">joao@gmail.com</p>
        </div>
      )}
    </div>
  );
}
