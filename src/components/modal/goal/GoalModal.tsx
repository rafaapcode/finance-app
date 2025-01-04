import InputComponent from "@/components/input/InputComponent";
import Select from "@/components/select/Select";
import { ChangeEvent } from "react";
import { IoIosClose } from "react-icons/io";

type GoalModalProps = {
  handleOpenModal: () => void;
  calculateProgress: number;
  handleSetNewGoalsCategory: (value: string | null) => void;
  handleSetNewGoalsPercentage: (value: ChangeEvent<HTMLInputElement>) => void;
  handleAddNewGoals: () => void;
}

function GoalModal({calculateProgress, handleAddNewGoals, handleOpenModal, handleSetNewGoalsCategory, handleSetNewGoalsPercentage}: GoalModalProps) {
  return (
    <div className="flex flex-col min-w-[400px] bg-white p-4 rounded-md">
    <header className="flex justify-between items-center">
      <h2 className="text-2xl">Objetivos</h2>
      <button onClick={handleOpenModal}>
        <IoIosClose size={28} />
      </button>
    </header>
    <section className="mt-8 flex flex-col gap-4">
      <div>
        <p>Categoria</p>
        <Select
          disabled={calculateProgress >= 100}
          placeHolder="Selecione uma categoria"
          categories={["Ações", "Crypto", "FIIS"]}
          onValueChange={handleSetNewGoalsCategory}
        />
      </div>
      <div>
        <p>Porcentagem</p>
        <p className="text-xs">
          Coloque aqui a porcentagem que deseja atribuir a essa categoria
        </p>
        <InputComponent
          props={{ max: 100, min: 1, defaultValue: 1 }}
          type="number"
          placeholder="Selecione uma porcentagem"
          handleChangeValue={handleSetNewGoalsPercentage}
        />
      </div>
    </section>
    <footer className="mt-4 mx-auto">
      <button
        disabled={calculateProgress >= 100}
        onClick={handleAddNewGoals}
        className="px-3 py-1 border border-neutral-300 rounded-md hover:bg-neutral-100 transition-all duration-150"
      >
        Criar objetivo
      </button>
    </footer>
  </div>
  )
}

export default GoalModal
