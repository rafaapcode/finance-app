import { ChangeEvent, useCallback, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

type UploadModalProps = {
  handleClose: () => void;
};

function UploadModal({ handleClose }: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  
  const handleFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length == 1) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  }, []);

  return (
    <div className="bg-white border border-neutral-200 rounded-md  p-4 min-w-[400px] flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-xl">Upload Photo</h2>
        <button onClick={handleClose}>
          <IoIosCloseCircleOutline size={25} />
        </button>
      </header>
      <input onChange={handleFile} type="file" accept="image/png, image/jpeg" className="my-4"/>
      <button disabled={!file} className="flex gap-2 items-center justify-center border border-neutral-200 rounded-md w-1/2 mx-auto p-2 disabled:bg-neutral-300 disabled:text-neutral-100 hover:bg-neutral-100 transition-all duration-200">
        <MdOutlineFileUpload />
        Upload
      </button>
    </div>
  );
}

export default UploadModal;
