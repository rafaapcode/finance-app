import useModal from "@/hooks/useModal";
import useType from "@/hooks/useType";
import { ChangeEvent, useCallback, useState } from "react";
import { InvestmentPageViewProps } from "./InvesmentPage.type";

type DefaultType = string | null;

export const useInvestmentPageModel = (): InvestmentPageViewProps => {
  const [openFilter,, setOpenFilter] = useModal();
  const [investModal, handleSetInvestModal] = useModal();
  const [typeOfFilter, setTypeOfFilter] = useState<string | null>(null);
  const [selectedTypeInvestment, setSelectedTypeInvestment] =
    useState<string>("compra");
  const [stockPrice, setStockPrice] = useState<string>("0");
  const [investmentCategory, handleSetCategory] = useType<DefaultType, null>({defaultValue: null});
  const [stockName, setStockName] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<string>("0");
  const [investmentDate, setInvestmentDate] = useState<Date | undefined>(
    undefined
  );

  const handleStockValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d*$/;
    const value = e.target.value;

    if (!regex.test(value)) {
      setStockPrice((prev) => prev);
    } else {
      setStockPrice(value);
    }
  }, []);

  const handleSelectedTypeInvestment = useCallback(
    (type: string) => {
      setStockPrice("0");
      setStockQuantity("0");
      handleSetCategory(null);
      setInvestmentDate(undefined);
      setSelectedTypeInvestment(type);
    },
    [setSelectedTypeInvestment, handleSetCategory]
  );

  const handleTypeOfFilter = useCallback((type: string | null) => {
    setTypeOfFilter(type);
    setOpenFilter(false);
  }, []);

  const handleSetStockName = useCallback(
    (stockName: string) => {
      setStockName(stockName);
    },
    [setStockName]
  );
  const handleSetStockQuantity = useCallback(
    (stockQuantity: string) => {
      setStockQuantity(stockQuantity);
    },
    [setStockQuantity]
  );
  const handleSetInvestmentDate = useCallback(
    (date: Date | undefined) => {
      setInvestmentDate(date);
    },
    [setInvestmentDate]
  );

  const handleBuy = useCallback(() => {
    handleSetCategory(null);
    setStockName("");
    setInvestmentDate(undefined);
    setStockQuantity("0");
    handleSetInvestModal();
  }, [handleSetInvestModal, handleSetCategory]);

  const handleSell = useCallback(() => {
    setStockName("");
    setInvestmentDate(undefined);
    setStockQuantity("0");
    handleSetInvestModal();
  }, [handleSetInvestModal]);

  const handleAdd = useCallback(() => {
    setStockName("");
    setInvestmentDate(undefined);
    setStockQuantity("0");
    handleSetInvestModal();
  }, [handleSetInvestModal]);

  const validationBuy = (): boolean => {
    if (
      stockName === "" ||
      stockQuantity === "0" ||
      investmentCategory === null ||
      investmentDate === undefined
    ) {
      return false;
    }
    return true;
  };

  const validationSellAndAdd = (): boolean => {
    if (
      stockName === "" ||
      stockQuantity === "0" ||
      investmentDate === undefined
    ) {
      return false;
    }
    return true;
  };

  return {
    props: {
      openFilter,
      setOpenFilter,
      handleTypeOfFilter,
      typeOfFilter,
      investModal,
      handleSetInvestModal,
      selectedTypeInvestment,
      handleSelectedTypeInvestment,
      stockPrice,
      handleStockValue,
      investmentCategory,
      handleSetCategory,
      stockName,
      handleSetStockName,
      stockQuantity,
      handleSetStockQuantity,
      investmentDate,
      handleSetInvestmentDate,
      handleBuy,
      handleSell,
      handleAdd,
      validationBuy,
      validationSellAndAdd,
    },
  };
};
