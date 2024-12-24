
type GoalsProps = {
  title: string;
  amount: string;
  goal: string;
}

function Goals({ amount, goal, title }: GoalsProps) {
  return (
    <div>
      <h3 className="text-[#828282]">{title}</h3>
      <div className="w-full flex flex-col">
        <p className="self-end">{goal}</p>
        <div className="border border-[#E2E2E2] h-5 rounded-lg flex text-ellipsis overflow-hidden">
          <div className="h-full w-1/2 bg-[#E5FBF2] rounded-lg"/>
          <p className="text-xs ml-2">{amount}</p>
        </div>
      </div>
    </div>
  )
}

export default Goals
