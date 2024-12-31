import { ChangeEvent, DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type InputComponentProps = {
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string;
  handleChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
  props?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

function InputComponent({handleChangeValue, placeholder, type, props}: InputComponentProps) {
  return (
    <div>
      <input {...props} onChange={handleChangeValue} placeholder={placeholder} type={type} className="placeholder:text-xs w-full p-1 border border-neutral-200 rounded-md" />
    </div>
  )
}

export default InputComponent
