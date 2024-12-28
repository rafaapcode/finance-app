import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  visible: boolean;
}

function Modal({children, visible}: ModalProps) {
  if(!visible) {
    return null;
  }

  return <>{createPortal(<div className="absolute top-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center">
    {children}
  </div>, document.body)}</>;
}

export default Modal;
