import { ChangeEvent, HTMLInputTypeAttribute } from "react";

type InputComponentProps = {
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string;
  handleChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent({handleChangeValue, placeholder, type}: InputComponentProps) {
  return (
    <div>
      <input onChange={handleChangeValue} placeholder={placeholder} type={type} className="placeholder:text-xs w-full p-1 border border-neutral-200 rounded-md" />
    </div>
  )
}

export default InputComponent
