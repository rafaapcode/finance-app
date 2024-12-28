import { ChangeEvent } from "react";

export type HomePageViewProps = {
  props: {
    modal: boolean;
    incomeValue: string;
    typeOfIncome: "sallary" | "extra";
    typeOfOutcome: string | null;
    typeOfPayment: string | null;
    expirationDate: Date | undefined;
    categoryOfIncome: string | null;
    categoryOfOutcome: string | null;
    typeModal: null | "income" | "outcome";
    handleModal: (type: "income" | "outcome" | null) => void;
    handleClose: () => void;
    handleIncomeValue: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTypeIncome: (typeIncome: "sallary" | "extra") => void;
    handleTypeOutcome: (value: string | null) => void;
    handleExpirationDate: (value: Date | undefined) => void;
    handleTypePayment: (value: string | null) => void;
    handleCategoryOfIncome: (value: string | null) => void;
    handleCategoryOfOutcome: (value: string | null) => void;
    handleClickIncome: () => void;
    handleClickOutcome: () => void;
    validationIncomeValue: () => boolean;
    validationOutcomeValue: () => boolean;
  };
};
