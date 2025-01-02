import { ChangeEvent } from "react";

export type GoalsType = {
  category: string;
  percentage: number;
};

export type GoalPageViewProps = {
  props: {
    openModal: boolean;
    handleOpenModal: () => void;
    goals: Map<string, GoalsType>;
    handleAddNewGoals: () => void;
    newgoals: GoalsType | null;
    calculateProgress: number;
    handleSetNewGoalsCategory: (value: string | null) => void;
    handleSetNewGoalsPercentage: (value: ChangeEvent<HTMLInputElement>) => void;
  };
};
