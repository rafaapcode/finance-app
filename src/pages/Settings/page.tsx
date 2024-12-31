"use client";
import GoalsCard from "@/components/goals/GoalsCard";
import InputComponent from "@/components/input/InputComponent";
import Modal from "@/components/modal/Modal";
import Select from "@/components/select/Select";
import { ChangeEvent, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { GoPlus } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

type GoalsType = {
  category: string;
  percentage: number;
};

function SettingsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [goals, setGoals] = useState<Map<string, GoalsType>>(new Map());
  const [newgoals, setNewGoals] = useState<GoalsType | null>(null);

  const handleSetNewGoalsCategory = useCallback(
    (value: string | null) =>
      setNewGoals((prev) => {
        if (prev) {
          return { ...prev, category: value || "" };
        }
        return { category: value || "", percentage: 1 };
      }),
    [setNewGoals]
  );

  const handleSetNewGoalsPercentage = useCallback(
    (value: ChangeEvent<HTMLInputElement>) =>
      setNewGoals((prev) => {
        if (prev) {
          return { ...prev, percentage: Number(value.target.value) || 0 };
        }
        return { category: "", percentage: Number(value.target.value) || 0 };
      }),
    [setNewGoals]
  );

  const handleOpenModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  const handleAddNewGoals = () => {
    if (!newgoals) {
      toast.error(
        "Você deve selecionar pelo menos uma categoria e uma porcentagem"
      );
    } else {
      if (newgoals.category === "") {
        toast.error(
          "Você deve selecionar pelo uma categoria e uma porcentagem válida"
        );
      } else if (newgoals.percentage <= 0 || newgoals.percentage > 100) {
        toast.error(
          "Você deve selecionar pelo uma categoria e uma porcentagem válida"
        );
      } else {
        if (goals.has(newgoals.category)) {
          toast.error("Você já adicionou um objetivo para essa categoria");
        } else {
          setGoals((prev) => prev.set(newgoals.category, newgoals));
          toast.success("Objetivo adicionado com sucesso !!");
          handleOpenModal();
        }
      }
    }
  };

  console.log(Array.from(goals.values()));
  return (
    <main className="h-full flex-1">
      <h2 className="text-3xl mb-2">Objetivos</h2>
      <h2 className="text-lg text-neutral-400">
        Aqui você pode configurar a porcentagem que deseja dedicar para cada
        área.
      </h2>
      <div className="mt-4">
        <button
          onClick={handleOpenModal}
          className="flex hover:bg-neutral-100 transition-all duration-150 items-center gap-1 px-2 py-1 border border-neutral-200 shadow-md rounded-md"
        >
          <GoPlus size={15} />
          Objetivo
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-2 mt-6">
        {
          Array.from(goals.values()).map((goal, index) => (
            <GoalsCard category={goal.category} percentage={goal.percentage} key={index}/>
          ))
        }
      </div>
      <Modal visible={openModal}>
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
              onClick={handleAddNewGoals}
              className="px-3 py-1 border border-neutral-300 rounded-md hover:bg-neutral-100 transition-all duration-150"
            >
              Criar objetivo
            </button>
          </footer>
        </div>
      </Modal>
    </main>
  );
}

export default SettingsPage;
