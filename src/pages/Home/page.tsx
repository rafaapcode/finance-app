"use client";
import Card from "@/components/card/Card";
import DatePicker from "@/components/datePicker/DatePicker";
import Goals from "@/components/goals/Goals";
import { CashFlow } from "@/components/modal/cashFlowModal";
import Modal from "@/components/modal/Modal";
import SelectComponent from "@/components/select/Select";
import SpendCard from "@/components/spendCard/SpendCard";
import { Switch } from "@/components/ui/switch";
import { ChangeEvent, useCallback, useState } from "react";
import { spendCardsData } from "../../../constants/spendCads";

function HomePage() {
  const [modal, setModal] = useState(false);
  const [incomeValue, setIncomeValue] = useState("0");
  const [formattedValue, setFormattedValue] = useState("0");
  const [typeOfIncome, setTypeOfIncome] = useState<"sallary" | "extra">(
    "sallary"
  );
  const [typeOfOutcome, setTypeOfOutcome] = useState<string | null>("variable");
  const [typeOfPayment, setTypeOfPayment] = useState<string | null>("Credito");
  const [expirationDate, setExpirationDate] = useState<Date | undefined>(undefined);
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
  }, []);

  const handleIncomeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d*$/;
    const value = e.target.value;

    if (!regex.test(value)) {
      setIncomeValue((prev) => prev);
      setFormattedValue((prev) => prev);
    } else {
      setIncomeValue(value);
      setFormattedValue(value);
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

  const handleFormatIncomeValue = () => {
    setFormattedValue(
      new Intl.NumberFormat("pt-BR", {
        style: "decimal",
        currency: "BRl",
      }).format(Number(incomeValue))
    );
  };

  const handleClickIncome = useCallback(() => {
    console.log(
      typeOfIncome,
      Number(incomeValue),
      categoryOfIncome && categoryOfIncome
    );
    setFormattedValue("0");
    setIncomeValue("0");
    setCategoryOfIncome(null);
  }, [typeOfIncome, incomeValue, categoryOfIncome]);

  const handleClickOutcome = useCallback(() => {
    console.log(
      Number(incomeValue),
      categoryOfOutcome && categoryOfOutcome,
      typeOfOutcome,
      typeOfPayment,
      expirationDate
    );
    setFormattedValue("0");
    setIncomeValue("0");
    setCategoryOfOutcome(null);
  }, [
    incomeValue,
    categoryOfOutcome,
    typeOfOutcome,
    typeOfPayment,
    expirationDate,
  ]);
  return (
    <main className="h-full flex-1 overflow-y-auto scrollbar-none">
      <div className="mb-10 py-2 lg:py-0 flex-1">
        <h2 className="text-3xl">Home</h2>
        <section className="flex md:gap-4 lg:justify-evenly lg:px-3 mt-5">
          <Card
            handleClick={() => handleModal("income")}
            color="bg-[#EBF0FE]"
            title="Entradas"
            value="2.500,00"
          />
          <Card
            handleClick={() => handleModal("outcome")}
            color="bg-[#FFF4D8]"
            title="Gastos"
            value="500,00"
            description="70% a mais que último mes "
          />
          <Card
            color="bg-[#F2F5F1]"
            routeName="/main/investments"
            title="Investimentos"
            value="7.200,00"
          />
        </section>
      </div>
      <div className="flex-1 mb-10 py-2 lg:py-0">
        <h2 className="text-3xl mb-5">Meu Gastos</h2>
        <section className="w-full flex gap-2 flex-wrap">
          {spendCardsData.map((spend, index) => (
            <SpendCard
              key={index}
              category={spend.category}
              spendValue={spend.spendValue}
            />
          ))}
        </section>
      </div>
      <div className="flex-1 mb-10 py-2 lg:py-0">
        <h2 className="text-3xl mb-5">Minhas Metas</h2>
        <div className="h-full flex flex-col gap-10">
          <Goals title="Investimentos" amount="1.5k" goal="2.5K" />
          <Goals title="Investimentos" amount="1.5k" goal="2.5K" />
          <Goals title="Investimentos" amount="1.5k" goal="2.5K" />
        </div>
      </div>
      {modal && (
        <Modal>
          {typeModal === "income" && (
            <CashFlow.Root>
              <CashFlow.Header
                titleHeader="Adicionar Entrada"
                handleClose={handleClose}
              />
              <CashFlow.ContentController>
                <Switch
                  onCheckedChange={(checked) => {
                    if (checked) {
                      handleTypeIncome("extra");
                    } else {
                      setCategoryOfIncome(null);
                      handleTypeIncome("sallary");
                    }
                  }}
                />
                <p>{typeOfIncome === "sallary" ? "Salário" : "Extra"}</p>
              </CashFlow.ContentController>
              <CashFlow.ContentTitle
                title={typeOfIncome === "sallary" ? "Renda" : "Renda Extra"}
              />
              <CashFlow.QuantityInput
                incomeValue={formattedValue}
                changeIncomeValue={handleIncomeValue}
                onBlur={handleFormatIncomeValue}
              />
              {typeOfIncome === "extra" && (
                <CashFlow.CategoryContent>
                  <div className="col-span-2">
                    <SelectComponent
                      placeHolder="Selecione uma categoria"
                      onValueChange={handleCategoryOfIncome}
                      categories={["Assinatura", "Entretenimento", "Esportes"]}
                    />
                  </div>
                </CashFlow.CategoryContent>
              )}
              <CashFlow.ActionButton
                buttonTitle={
                  typeOfIncome === "sallary" ? "Atualizar" : "Adicionar"
                }
                onClick={handleClickIncome}
              />
            </CashFlow.Root>
          )}
          {typeModal === "outcome" && (
            <CashFlow.Root>
              <CashFlow.Header
                titleHeader="Adicionar Gasto"
                handleClose={handleClose}
              />
              <CashFlow.ContentTitle title="Gasto" />
              <CashFlow.QuantityInput
                incomeValue={formattedValue}
                changeIncomeValue={handleIncomeValue}
                onBlur={handleFormatIncomeValue}
              />
              <CashFlow.CategoryContent>
                <SelectComponent
                  placeHolder="Selecione uma categoria"
                  onValueChange={handleCategoryOfOutcome}
                  categories={["Assinatura", "Entretenimento", "Esportes"]}
                />
                <SelectComponent
                  placeHolder="Selecione o tipo do gasto"
                  onValueChange={handleTypeOutcome}
                  categories={["Fixo", "Variavel"]}
                />
                {typeOfOutcome === "fixo" && (
                  <>
                    <SelectComponent
                      placeHolder="Seleciona a forma de pagamento"
                      onValueChange={handleTypePayment}
                      categories={["Credito", "Pix", "Boleto", "Debito"]}
                    />
                    {(typeOfPayment === "credito" ||
                      typeOfPayment === "debito") && (
                      <DatePicker date={expirationDate} setDate={handleExpirationDate}/>
                    )}
                  </>
                )}
              </CashFlow.CategoryContent>
              <CashFlow.ActionButton
                buttonTitle="Adicionar"
                onClick={handleClickOutcome}
              />
            </CashFlow.Root>
          )}
        </Modal>
      )}
    </main>
  );
}
export default HomePage;
