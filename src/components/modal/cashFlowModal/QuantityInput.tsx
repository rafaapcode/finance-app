import { ChangeEvent, memo, useEffect, useState } from "react";

type QuantityInputProps = {
  currency?: string;
  incomeValue: string;
  changeIncomeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

function QuantityInput({ changeIncomeValue, incomeValue, currency }: QuantityInputProps) {
  const [formattedValue, setFormattedValue] = useState<string>(incomeValue);

  useEffect(() => {
    setFormattedValue(incomeValue);
  }, [incomeValue]);

  const handleFormatIncomeValue = () => {
    setFormattedValue(
      new Intl.NumberFormat("pt-BR", {
        style: "decimal",
        currency: "BRl",
      }).format(Number(incomeValue))
    );
  };


  return (
    <div className="w-1/2 mx-auto flex gap-2 mt-5 items-center">
    <h2>{currency ? currency : "R$"}</h2>
    <input
      onBlur={handleFormatIncomeValue}
      type="text"
      value={formattedValue}
      onChange={changeIncomeValue}
      className="h-10 border-none outline-none text-xl"
    />
  </div>
  )
}

export default memo(QuantityInput);
