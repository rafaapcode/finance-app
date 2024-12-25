"use client";
import { ChangeEvent, memo } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Switch } from "../ui/switch";

type IncomeModalProps = {
  handlClose: () => void;
  incomeValue: string;
  changeIncomeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  typeIncome: "sallary" | "extra";
  setTypeIncome: (type: "sallary" | "extra") => void;
  onClick: () => void;
};

function IncomeModal({
  handlClose,
  changeIncomeValue,
  incomeValue,
  onBlur,
  setTypeIncome,
  typeIncome,
  onClick
}: IncomeModalProps) {
  return (
    <div className="min-w-96 bg-white p-5 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl">Adicionar entrada</h2>
        <button onClick={handlClose}>
          <IoIosCloseCircleOutline size={25} />
        </button>
      </div>
      <div className="mb-10 flex gap-2 items-center">
        <Switch onCheckedChange={(checked) => checked ? setTypeIncome("extra") : setTypeIncome("sallary")}/>
        <p>{typeIncome === "sallary" ? "Salário" : "Extra"}</p>
      </div>
      <p className="text-xl text-center">{ typeIncome === "sallary" ? "Renda" : "Renda Extra"}</p>
      <div className="w-1/2 mx-auto flex gap-2 mt-5 items-center">
        <h2>R$</h2>
        <input
          onBlur={onBlur}
          type="text"
          value={incomeValue}
          onChange={changeIncomeValue}
          className="h-10 border-none outline-none text-xl"
        />
      </div>
      <div className="flex mt-5">
        <button onClick={onClick} className="mx-auto bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 p-2 rounded">{typeIncome === "sallary" ? "Atualizar" : "Adicionar"}</button>
      </div>
    </div>
  );
}

export default memo(IncomeModal);
