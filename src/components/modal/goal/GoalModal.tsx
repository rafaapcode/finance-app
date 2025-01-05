import InputComponent from "@/components/input/InputComponent";
import Select from "@/components/select/Select";
import { ChangeEvent } from "react";
import { StructureModal } from "../structureModal";

type GoalModalProps = {
  handleOpenModal: () => void;
  calculateProgress: number;
  handleSetNewGoalsCategory: (value: string | null) => void;
  handleSetNewGoalsPercentage: (value: ChangeEvent<HTMLInputElement>) => void;
  handleAddNewGoals: () => void;
};

function GoalModal({
  calculateProgress,
  handleAddNewGoals,
  handleOpenModal,
  handleSetNewGoalsCategory,
  handleSetNewGoalsPercentage,
}: GoalModalProps) {
  return (
    <StructureModal.Root>
      <StructureModal.Header
        titleHeader="Objetivos"
        handleClose={handleOpenModal}
      />
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
      <StructureModal.ActionButton
        disabled={calculateProgress >= 100}
        onClick={handleAddNewGoals}
        buttonTitle="Criar objetivo"
      />
    </StructureModal.Root>
  );
}

export default GoalModal;
