import { cn } from "@/lib/utils";
import { memo } from "react";

type SelectInvestmentProps = {
  selectedType: string;
  handleSelectType: (type: string) => void;
};

function SelectInvestment({
  handleSelectType,
  selectedType,
}: SelectInvestmentProps) {
  return (
    <div className="flex gap-2 min-w-1/3 w-fit p-3 bg-neutral-300 rounded-lg transition-all duration-200">
      <button
        onClick={() => handleSelectType("aporte")}
        className={cn(
          "transition-all duration-300 py-1 px-2 rounded-md text-xs font-medium hover:bg-neutral-100",
          selectedType === "aporte" && "bg-white"
        )}
      >
        Aporte
      </button>
      <button
        onClick={() => handleSelectType("compra")}
        className={cn(
          "transition-all duration-300 py-1 px-2 rounded-md text-xs font-medium hover:bg-neutral-100",
          selectedType === "compra" && "bg-white"
        )}
      >
        Compra
      </button>
      <button
        onClick={() => handleSelectType("venda")}
        className={cn(
          "transition-all duration-300 py-1 px-2 rounded-md text-xs font-medium hover:bg-neutral-100",
          selectedType === "venda" && "bg-white"
        )}
      >
        Venda
      </button>
    </div>
  );
}

export default memo(SelectInvestment);
