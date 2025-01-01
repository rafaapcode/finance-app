"use client";
import GoalsCard from "@/components/goals/GoalsCard";
import InputComponent from "@/components/input/InputComponent";
import List from "@/components/List";
import Modal from "@/components/modal/Modal";
import Select from "@/components/select/Select";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { GoPlus } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

type GoalsType = {
  category: string;
  percentage: number;
};

function GoalsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [goals, setGoals] = useState<Map<string, GoalsType>>(new Map());
  const [newgoals, setNewGoals] = useState<GoalsType | null>(null);

  const calculateProgress = useMemo(() => {
    let total = 0;
    goals.forEach((value) => {
      total += value.percentage || 0;
    });
    return total;
  }, [goals.size]);

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
    if (calculateProgress + (newgoals?.percentage || 0) >= 100) {
      toast.error("A soma de todos os objetivos devem representar 100%");
      return;
    }
    if (!newgoals) {
      toast.error(
        "Você deve selecionar pelo menos uma categoria e uma porcentagem"
      );
      return;
    }
    if (newgoals.category === "") {
      toast.error(
        "Você deve selecionar pelo uma categoria e uma porcentagem válida"
      );
      return;
    } else if (newgoals.percentage <= 0 || newgoals.percentage > 100) {
      toast.error(
        "Você deve selecionar pelo uma categoria e uma porcentagem válida"
      );
      return;
    } else {
      if (goals.has(newgoals.category)) {
        toast.error("Você já adicionou um objetivo para essa categoria");
        return;
      }
      setGoals((prev) => prev.set(newgoals.category, newgoals));
      toast.success("Objetivo adicionado com sucesso !!");
      handleOpenModal();
    }
  };
  return (
    <main className="h-full flex-1">
      <h2 className="text-3xl mb-2">Objetivos</h2>
      <h2 className="text-lg text-neutral-400">
        Aqui você pode configurar a porcentagem que deseja dedicar para cada
        área.
      </h2>
      <div className="mt-4">
        <button
          disabled={calculateProgress === 100}
          onClick={handleOpenModal}
          className="flex disabled:bg-neutral-100 disabled:text-neutral-300 hover:bg-neutral-100 transition-all duration-150 items-center gap-1 px-2 py-1 border border-neutral-200 shadow-md rounded-md"
        >
          <GoPlus size={15} />
          Objetivo
        </button>
        <p className="mt-2 text-xs text-neutral-400">
          Progresso: {`${calculateProgress}%`}
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-2 mt-6">
        {
          <List
            Component={GoalsCard}
            items={Array.from(goals.values())}
            sourceName="goals"
          />
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
      </Modal>
    </main>
  );
}

export default GoalsPage;
