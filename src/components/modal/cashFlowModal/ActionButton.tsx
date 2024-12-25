import { memo } from "react";

type ActionButtonProps = {
  onClick: () => void;
  buttonTitle: string;
}

function ActionButton({ buttonTitle, onClick }: ActionButtonProps) {
  return (
    <div className="flex mt-5">
        <button onClick={onClick} className="mx-auto bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 p-2 rounded">{buttonTitle}</button>
      </div>
  )
}

export default memo(ActionButton);
