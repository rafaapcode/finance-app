import { ChangeEvent, useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { GoalPageViewProps, GoalsType } from "./GoalPage.type";

export const useGoalsPageModal = (): GoalPageViewProps => {
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

  return {
    props: {
      openModal,
      handleOpenModal,
      goals,
      handleAddNewGoals,
      newgoals,
      calculateProgress,
      handleSetNewGoalsCategory,
      handleSetNewGoalsPercentage,
    }
  }
};