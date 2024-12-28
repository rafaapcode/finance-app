import Card from "@/components/card/Card";
import DatePicker from "@/components/datePicker/DatePicker";
import Goals from "@/components/goals/Goals";
import { CashFlow } from "@/components/modal/cashFlowModal";
import Modal from "@/components/modal/Modal";
import SelectComponent from "@/components/select/Select";
import SpendCard from "@/components/spendCard/SpendCard";
import { Switch } from "@/components/ui/switch";
import { spendCardsData } from "../../../constants/spendCads";
import { HomePageViewProps } from "./HomePage.type";

function HomePageView({ props }: HomePageViewProps) {
  const {
    incomeValue,
    modal,
    typeOfIncome,
    typeOfOutcome,
    typeOfPayment,
    expirationDate,
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
    validationIncomeValue,
    validationOutcomeValue,
  } = props;

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
      <Modal visible={modal}>
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
                    handleCategoryOfIncome(null);
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
              incomeValue={incomeValue}
              changeIncomeValue={handleIncomeValue}
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
              disabled={!validationIncomeValue()}
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
              incomeValue={incomeValue}
              changeIncomeValue={handleIncomeValue}
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
                    <DatePicker
                      date={expirationDate}
                      setDate={handleExpirationDate}
                    />
                  )}
                </>
              )}
            </CashFlow.CategoryContent>
            <CashFlow.ActionButton
              buttonTitle="Adicionar"
              onClick={handleClickOutcome}
              disabled={!validationOutcomeValue()}
            />
          </CashFlow.Root>
        )}
      </Modal>
    </main>
  );
}

export default HomePageView;
