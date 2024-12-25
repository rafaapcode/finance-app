import { memo } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type HeaderProps = {
  handleClose: () => void;
  titleHeader: string;
}

function Header({handleClose, titleHeader}: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-2xl">{titleHeader}</h2>
      <button onClick={handleClose}>
        <IoIosCloseCircleOutline size={25} />
      </button>
    </div>
  );
}

export default memo(Header);
