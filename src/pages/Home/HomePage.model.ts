import useModal from "@/hooks/useModal";
import useType from "@/hooks/useType";
import { ChangeEvent, useCallback, useState } from "react";
import { HomePageViewProps } from "./HomePage.type";

type TypeOfIncome = "sallary" | "extra";
type DefaultType = string | null;
type ExpirationDate = Date | undefined;

export const useHomePageModel = (): HomePageViewProps => {
  const [modal, handle, setModal] = useModal();
  const [notificationActive, handleNotificationActive] = useModal();
  const [incomeValue, setIncomeValue] = useState("0");
  const [typeOfIncome, handleTypeIncome] = useType<TypeOfIncome, "sallary">({defaultValue: "sallary"});
  const [typeOfOutcome, handleTypeOutcome] = useType<DefaultType, string>({defaultValue: "variable"});
  const [typeOfPayment, handleTypePayment] = useType<DefaultType, string>({defaultValue: "Credito"});
  const [expirationDate, handleExpirationDate] = useType<ExpirationDate, undefined>({defaultValue: undefined});
  const [categoryOfIncome, handleCategoryOfIncome] = useType<DefaultType, null>({defaultValue: null});
  const [categoryOfOutcome, handleCategoryOfOutcome] = useType<DefaultType, null>({defaultValue: null});
  const [typeModal, setTypeModal] = useState<null | "income" | "outcome">(null);

  const handleModal = useCallback((type: "income" | "outcome" | null) => {
    handle();
    setTypeModal(type);
  }, []);

  const handleClose = useCallback(() => {
    setModal(false);
    setTypeModal(null);
    handleCategoryOfIncome(null);
    handleCategoryOfOutcome(null);
    setIncomeValue("0");
    handleExpirationDate(undefined);
    handleTypePayment(null);
    handleTypeOutcome(null);
    handleTypeIncome("sallary");
  }, []);

  const handleIncomeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d*$/;
    const value = e.target.value;

    if (!regex.test(value)) {
      setIncomeValue((prev) => prev);
    } else {
      setIncomeValue(value);
    }
  }, []);

  const handleClickIncome = useCallback(() => {
    console.log(
      typeOfIncome,
      Number(incomeValue),
      categoryOfIncome && categoryOfIncome
    );
    setIncomeValue("0");
    handleCategoryOfIncome(null);
    handleClose();
  }, [typeOfIncome, incomeValue, categoryOfIncome, handleClose, handleCategoryOfIncome]);

  const handleClickOutcome = useCallback(() => {
    console.log(
      Number(incomeValue),
      categoryOfOutcome && categoryOfOutcome,
      typeOfOutcome,
      typeOfPayment,
      expirationDate
    );
    setIncomeValue("0");
    handleCategoryOfOutcome(null);
    handleClose();
  }, [
    incomeValue,
    categoryOfOutcome,
    typeOfOutcome,
    typeOfPayment,
    expirationDate,
    handleClose,
    handleCategoryOfOutcome
  ]);

  const validationIncomeValue = (): boolean => {
    if (typeOfIncome === "sallary") {
      return incomeValue !== "0";
    }

    if (typeOfIncome === "extra") {
      return incomeValue !== "0" && categoryOfIncome !== null;
    }

    return false;
  };

  const validationOutcomeValue = (): boolean => {
    if (typeOfOutcome === "variavel") {
      return incomeValue !== "0";
    }

    if (typeOfOutcome === "fixo") {
      if (typeOfPayment === "credito" || typeOfPayment === "debito") {
        return (
          incomeValue !== "0" &&
          categoryOfOutcome !== null &&
          typeOfPayment !== null &&
          expirationDate !== undefined
        );
      }
      return (
        incomeValue !== "0" &&
        categoryOfOutcome !== null &&
        typeOfPayment !== null
      );
    }

    return false;
  };

  return {
    props: {
      notificationActive, 
      handleNotificationActive,
      validationOutcomeValue,
      validationIncomeValue,
      modal,
      incomeValue,
      typeOfIncome,
      typeOfOutcome,
      typeOfPayment,
      expirationDate,
      categoryOfIncome,
      categoryOfOutcome,
      typeModal,
      handleModal,
      handleClose,
      handleIncomeValue,
      handleTypeIncome,
      handleTypeOutcome,
      handleExpirationDate,
      handleTypePayment,
      handleCategoryOfIncome,
      handleCategoryOfOutcome,
      handleClickIncome,
      handleClickOutcome,
    },
  };
};
