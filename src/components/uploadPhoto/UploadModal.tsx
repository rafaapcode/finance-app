import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

type UploadModalProps = {
  handleClose: () => void;
};

function UploadModal({ handleClose }: UploadModalProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-md  p-4 min-w-[400px] flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2>Upload Photo</h2>
        <button onClick={handleClose}>
          <IoIosCloseCircleOutline size={25} />
        </button>
      </header>
      <div>
        <h1>input here</h1>
      </div>
      <button className="flex gap-2 items-center justify-center border border-neutral-200 rounded-md w-1/2 mx-auto p-2 hover:bg-neutral-100 transition-all duration-200">
        <MdOutlineFileUpload />
        Upload
      </button>
    </div>
  );
}

export default UploadModal;
