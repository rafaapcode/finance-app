import GoalsCard from "@/components/goals/GoalsCard";
import Modal from "@/components/modal/Modal";
import dynamic from "next/dynamic";
import { BiLoaderAlt } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { GoalPageViewProps } from "./GoalPage.type";
const GoalModal = dynamic(() => import("@/components/modal/goal/GoalModal"), {
  loading: () => <BiLoaderAlt color="#fff" size={24} className="animate-spin" />,
  ssr: false,
});

function GoalsPageView({ props }: GoalPageViewProps) {
  const {
    calculateProgress,
    goals,
    handleAddNewGoals,
    handleOpenModal,
    handleSetNewGoalsCategory,
    handleSetNewGoalsPercentage,
    openModal,
    handleDeleteGoals
  } = props;

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
          Array.from(goals.values()).map((goals) => (
            <GoalsCard goals={goals} key={goals.id} onDelete={handleDeleteGoals}/>
          ))
        }
      </div>
      <Modal visible={openModal}>
        <GoalModal
          calculateProgress={calculateProgress}
          handleAddNewGoals={handleAddNewGoals}
          handleOpenModal={handleOpenModal}
          handleSetNewGoalsCategory={handleSetNewGoalsCategory}
          handleSetNewGoalsPercentage={handleSetNewGoalsPercentage}
        />
      </Modal>
    </main>
  );
}

export default GoalsPageView;
