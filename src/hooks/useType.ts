import { useCallback, useState } from "react";

type UseTypeProps<DefaultValue> = {
  defaultValue: DefaultValue;
};

type UseTypeReturn<StateTypeReturn> = [
  typeReturn: StateTypeReturn,
  handleType: (value: StateTypeReturn) => void
]

function useType<StateType, DefaultValue extends StateType>({defaultValue}: UseTypeProps<DefaultValue>): UseTypeReturn<StateType> {
  const [type, setType] = useState<StateType>(defaultValue);
  const handleType = useCallback((value: StateType) => {
    setType(value);
  }, []);
  
  return [type, handleType];
}

export default useType;