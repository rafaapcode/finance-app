import { memo } from "react";

type ActionButtonProps = {
  onClick: () => void;
  buttonTitle: string;
  disabled?: boolean;
};

function ActionButton({ buttonTitle, onClick, disabled }: ActionButtonProps) {
  return (
    <div className="flex mt-5">
      <button
        onClick={onClick}
        disabled={disabled}
        className="mx-auto disabled:text-neutral-300 disabled:hover:bg-neutral-100 disabled:cursor-not-allowed bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 p-2 rounded"
      >
        {buttonTitle}
      </button>
    </div>
  );
}

export default memo(ActionButton);
