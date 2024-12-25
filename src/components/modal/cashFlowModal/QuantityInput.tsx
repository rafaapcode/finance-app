import { ChangeEvent, memo } from "react";

type QuantityInputProps = {
  currency?: string;
  incomeValue: string;
  changeIncomeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

function QuantityInput({ changeIncomeValue, incomeValue, onBlur, currency }: QuantityInputProps) {
  return (
    <div className="w-1/2 mx-auto flex gap-2 mt-5 items-center">
    <h2>{currency ? currency : "R$"}</h2>
    <input
      onBlur={onBlur}
      type="text"
      value={incomeValue}
      onChange={changeIncomeValue}
      className="h-10 border-none outline-none text-xl"
    />
  </div>
  )
}

export default memo(QuantityInput);
