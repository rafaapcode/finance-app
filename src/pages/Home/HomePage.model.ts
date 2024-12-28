import { ChangeEvent, useCallback, useState } from "react";
import { HomePageViewProps } from "./HomePage.type";

export const useHomePageModel = (): HomePageViewProps => {
  const [modal, setModal] = useState(false);
  const [incomeValue, setIncomeValue] = useState("0");
  const [typeOfIncome, setTypeOfIncome] = useState<"sallary" | "extra">(
    "sallary"
  );
  const [typeOfOutcome, setTypeOfOutcome] = useState<string | null>("variable");
  const [typeOfPayment, setTypeOfPayment] = useState<string | null>("Credito");
  const [expirationDate, setExpirationDate] = useState<Date | undefined>(
    undefined
  );
  const [categoryOfIncome, setCategoryOfIncome] = useState<string | null>(null);
  const [categoryOfOutcome, setCategoryOfOutcome] = useState<string | null>(
    null
  );
  const [typeModal, setTypeModal] = useState<null | "income" | "outcome">(null);

  const handleModal = useCallback((type: "income" | "outcome" | null) => {
    setModal((prev) => !prev);
    setTypeModal(type);
  }, []);

  const handleClose = useCallback(() => {
    setModal(false);
    setTypeModal(null);
    setCategoryOfIncome(null);
    setCategoryOfOutcome(null);
    setIncomeValue("0");
    setExpirationDate(undefined);
    setTypeOfPayment(null);
    setTypeOfOutcome(null);
    setTypeOfIncome("sallary");
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

  const handleTypeIncome = useCallback((typeIncome: "sallary" | "extra") => {
    setTypeOfIncome(typeIncome);
  }, []);

  const handleTypeOutcome = useCallback((value: string | null) => {
    setTypeOfOutcome(value);
  }, []);

  const handleExpirationDate = useCallback((value: Date | undefined) => {
    setExpirationDate(value);
  }, []);

  const handleTypePayment = useCallback((value: string | null) => {
    setTypeOfPayment(value);
  }, []);

  const handleCategoryOfIncome = useCallback((value: string | null) => {
    setCategoryOfIncome(value);
  }, []);

  const handleCategoryOfOutcome = useCallback((value: string | null) => {
    setCategoryOfOutcome(value);
  }, []);

  const handleClickIncome = useCallback(() => {
    console.log(
      typeOfIncome,
      Number(incomeValue),
      categoryOfIncome && categoryOfIncome
    );
    setIncomeValue("0");
    setCategoryOfIncome(null);
    handleClose();
  }, [typeOfIncome, incomeValue, categoryOfIncome, handleClose]);

  const handleClickOutcome = useCallback(() => {
    console.log(
      Number(incomeValue),
      categoryOfOutcome && categoryOfOutcome,
      typeOfOutcome,
      typeOfPayment,
      expirationDate
    );
    setIncomeValue("0");
    setCategoryOfOutcome(null);
    handleClose();
  }, [
    incomeValue,
    categoryOfOutcome,
    typeOfOutcome,
    typeOfPayment,
    expirationDate,
    handleClose,
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
