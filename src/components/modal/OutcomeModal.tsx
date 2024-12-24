"use client";
import { memo } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type OutcomeModalProps = {
  handlClose: () => void;
};

function OutcomeModal({ handlClose }: OutcomeModalProps) {
  return (
    <div className="min-w-96 bg-white p-5 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Adicionar gasto</h2>
        <button onClick={handlClose}>
          <IoIosCloseCircleOutline size={25} />
        </button>
      </div>
    </div>
  );
}

export default memo(OutcomeModal);
