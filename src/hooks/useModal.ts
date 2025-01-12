import { Dispatch, SetStateAction, useCallback, useState } from "react";

type UseModalReturn = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

const useModal = (): UseModalReturn => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleModalVisible = useCallback(() => {
    setModalVisible(prev => !prev);
  }, []);

  return [modalVisible, handleModalVisible, setModalVisible];
};

export default useModal;