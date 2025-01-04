"use client";
import Modal from "@/components/modal/Modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import UserImg from "../../../public/user-img.jpg";
const UploadModal = dynamic(() => import("@/components/uploadPhoto/UploadModal"), {
  loading: () => <BiLoaderAlt color="#fff" size={24} className="animate-spin"/>,
  ssr: false
});

function ProfilePage() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = useCallback(() => {
    setModalVisible(prev => !prev);
  }, []);

  return (
    <div className="container mx-auto flex flex-col gap-2">
      <div className="relative shadow mx-auto mt-10 w-32 h-32 rounded-full overflow-hidden">
        <button onClick={handleModal}>
          <Image src={UserImg} alt="User image" fill className="object-cover" />
        </button>
      </div>
      <form className="w-1/2 mx-auto grid grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="border border-neutral-200 rounded-md p-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="border border-neutral-200 rounded-md p-2 outline-none"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button type="submit" className="bg-neutral-200 w-1/4 p-2 rounded-md hover:bg-neutral-100 transition-all duration-200">
            Salvar
          </button>
        </div>
      </form>
      <Modal visible={modalVisible}>
        <UploadModal handleClose={handleModal}/>
      </Modal>
    </div>
  );
}

export default ProfilePage;
