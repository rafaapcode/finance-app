import { memo } from "react";
import {
  IoIosCloseCircleOutline,
  IoIosNotificationsOutline,
  IoMdNotifications,
} from "react-icons/io";

type HeaderProps = {
  handleClose: () => void;
  titleHeader: string;
  notification?: boolean;
  seletedNotification?: boolean;
  handleNotification?: () => void;
};

function Header({
  handleClose,
  titleHeader,
  handleNotification,
  notification,
  seletedNotification,
}: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-2xl">{titleHeader}</h2>
      <div className="flex gap-2">
        {notification && (
          <button onClick={handleNotification}>
            {!seletedNotification ? (
              <IoIosNotificationsOutline size={25} />
            ) : (
              <IoMdNotifications size={25} />
            )}
          </button>
        )}
        <button onClick={handleClose}>
          <IoIosCloseCircleOutline size={25} />
        </button>
      </div>
    </div>
  );
}

export default memo(Header);
