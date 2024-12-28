import { cn } from "@/lib/utils";
import { memo } from "react";

type FilterTableModalProps = {
  visible: boolean;
  selectedFilter: string | null;
  handleSelecteFilter: (type: string) => void;
}


function FilterTableModal({visible, selectedFilter, handleSelecteFilter}: FilterTableModalProps) {
 
  if(!visible) {
    return null;
  }
 
  return (
    <div className="bg-neutral-100 flex flex-col gap-2 border border-neutral-300 absolute w-36 z-20 mt-1 rounded-md py-1 px-2 right-0">
      <button onClick={() => handleSelecteFilter("crescente")} className={cn("p-1 rounded-md", selectedFilter === "crescente" && "bg-neutral-200")}>Crescente</button>
      <button onClick={() => handleSelecteFilter("decrescente")} className={cn("p-1 rounded-md", selectedFilter === "decrescente" && "bg-neutral-200")}>Decrescente</button>
    </div>
  )
}

export default memo(FilterTableModal);