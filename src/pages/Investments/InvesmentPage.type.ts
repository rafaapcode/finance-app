import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type InvestmentPageViewProps = {
 props: {
  openFilter: boolean;
  setOpenFilter: Dispatch<SetStateAction<boolean>>;
  handleTypeOfFilter: (type: string | null) => void;
  typeOfFilter: string | null;
  investModal: boolean;
  handleSetInvestModal: () => void;
  selectedTypeInvestment: string;
  handleSelectedTypeInvestment:  (type: string) => void;
  stockPrice: string;
  handleStockValue: (e: ChangeEvent<HTMLInputElement>) => void;
  investmentCategory: string | null;
  handleSetCategory: (category: string | null) => void;
  stockName: string;
  handleSetStockName: (stockName: string) => void;
  stockQuantity: string;
  handleSetStockQuantity: (stockQuantity: string) => void;
  investmentDate: Date | undefined;
  handleSetInvestmentDate: (date: Date | undefined) => void;
  handleBuy: () => void;
  handleSell: () => void;
  handleAdd: () => void;
  validationBuy: () => boolean;
  validationSellAndAdd: () => boolean;
 }
};