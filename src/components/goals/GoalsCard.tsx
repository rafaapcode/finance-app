import { GoHomeFill } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";

type GoaslCardProps = {
  goals: {
    id: string;
    category: string;
    percentage: number;
  },
  onDelete: (id: string) => void;
};

function GoalsCard({goals,onDelete}: GoaslCardProps) {
  const { category,percentage } = goals;
 
  return (
    <div className="min-w-[350px] flex justify-between items-center w-fit border border-neutral-300 px-3 py-2 rounded">
      <div className="self-start w-12 h-12 flex items-center justify-center rounded-md overflow-hidden border border-neutral-200">
        <GoHomeFill size={30}/>
      </div>
      <div>
        <p className="text-xs">Categoria</p>
        <p className="text-lg font-semibold">{category}</p>
      </div>
      <div>
        <p className="text-xs">Porcentagem</p>
        <p className="text-lg text-center font-semibold">{`${percentage}%`}</p>
      </div>
      <button onClick={() => onDelete(category)}>
        <IoMdCloseCircle className="text-red-500 hover:text-red-400 transition-all duration-150"/>
      </button>
    </div>
  )
}

export default GoalsCard
