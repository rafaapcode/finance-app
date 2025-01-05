import { LinearAreaChart } from "@/components/charts/linearChart/LinearAreaChart";
import { PieChartComponent } from "@/components/charts/pieChart/PieChart";
import DatePicker from "@/components/datePicker/DatePicker";
import InputComponent from "@/components/input/InputComponent";
import Modal from "@/components/modal/Modal";
import { StructureModal } from "@/components/modal/structureModal";
import { TablePagination } from "@/components/pagination/TablePagination";
import Select from "@/components/select/Select";
import SelectInvestment from "@/components/select/SelectInvestment";
import { InvestmentTable } from "@/components/table/InvestmentTable";
import { ChartConfig } from "@/components/ui/chart";
import dynamic from "next/dynamic";
import { BiLoaderAlt } from "react-icons/bi";
import { IoFilter, IoSearchOutline } from "react-icons/io5";
import { InvestmentPageViewProps } from "./InvesmentPage.type";
const FilterTableModal = dynamic(() => import("@/components/filters/FilterTable"), {
  loading: () => <BiLoaderAlt color="#fff" size={24} className="animate-spin"/>,
  ssr: false
});

// Esses dados devem ser obtidos de uma API e estar dentro do MODEL.
const chartDataPie = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfigPie = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const chartDataLinear = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfigLinear = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

function InvestmentPageView({ props }: InvestmentPageViewProps) {
  const {
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
    handleSetCategory,
    handleSetStockName,
    handleSetStockQuantity,
    investmentDate,
    handleSetInvestmentDate,
    handleBuy,
    handleSell,
    handleAdd,
    validationBuy,
    validationSellAndAdd,
  } = props;

  return (
    <main className="h-full flex-1 overflow-y-auto scrollbar-none">
      <div className="w-full max-h-[400px] flex justify-between">
        <div className="w-[60%] max-h-[400px]">
          <LinearAreaChart config={chartConfigLinear} data={chartDataLinear} keysConfig={{dataKey: "month", nameKey: "desktop"}}/>
        </div>
        <div className="w-[35%] max-h-[400px]">
          <PieChartComponent title="Pie Chart" config={chartConfigPie} data={chartDataPie} keysConfig={{dataKey: 'visitors', nameKey: 'browser'}}/>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 pt-5">
        <header className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <button
              onClick={handleSetInvestModal}
              className="shadow border border-neutral-200 px-4 py-2 rounded-md hover:bg-neutral-100 transition-all duration-150"
            >
              Novo investimento
            </button>
            <button className="shadow border border-neutral-200 px-4 py-2 rounded-md hover:bg-neutral-100 transition-all duration-150">
              Exportar para planilha
            </button>
            <div className="shadow border px-2 border-neutral-200 rounded-md flex items-center gap-2">
              <input
                type="text"
                className="rounded-md w-[90%] text-black px-2 h-[80%] border border-neutral-300"
              />
              <button className="h-[80%] px-3 rounded-md hover:bg-neutral-100 transition-all duration-150">
                <IoSearchOutline />
              </button>
            </div>
          </div>
          <div className="relative transition-all duration-150">
            <button
              onClick={() => setOpenFilter((prev) => !prev)}
              className="border border-neutral-200 p-2 rounded-md hover:bg-neutral-100 transition-all duration-150"
            >
              <IoFilter />
            </button>
            <FilterTableModal
              selectedFilter={typeOfFilter}
              handleSelecteFilter={handleTypeOfFilter}
              visible={openFilter}
            />
          </div>
        </header>
        <div className="flex-1 mt-1 overflow-x-auto">
          <InvestmentTable />
        </div>
        <div className="self-start">
          <TablePagination />
        </div>
      </div>
      <Modal visible={investModal}>
        <StructureModal.Root>
          <StructureModal.Header
            handleClose={handleSetInvestModal}
            titleHeader="Novo investimento"
          />
          <StructureModal.ContentController>
            <SelectInvestment
              selectedType={selectedTypeInvestment}
              handleSelectType={handleSelectedTypeInvestment}
            />
          </StructureModal.ContentController>
          {selectedTypeInvestment === "compra" && (
            <>
              <StructureModal.ContentTitle title="Preço de Compra" />
              <StructureModal.QuantityInput
                incomeValue={stockPrice}
                changeIncomeValue={handleStockValue}
                onBlur={() => {}}
              />
              <StructureModal.CategoryContent>
                <InputComponent
                  handleChangeValue={(e) => handleSetStockName(e.target.value)}
                  type="text"
                  placeholder="Nome do ativo"
                />
                <Select
                  onValueChange={handleSetCategory}
                  categories={["Ação", "Fii", "Crypto"]}
                  placeHolder="Selecione uma categoria"
                />
                <InputComponent
                  handleChangeValue={(e) =>
                    handleSetStockQuantity(e.target.value)
                  }
                  type="number"
                  placeholder="Quantidade comprada"
                />
                <DatePicker
                  date={investmentDate}
                  setDate={handleSetInvestmentDate}
                />
              </StructureModal.CategoryContent>
              <StructureModal.ActionButton
                disabled={!validationBuy()}
                buttonTitle="Comprar"
                onClick={handleBuy}
              />
            </>
          )}
          {selectedTypeInvestment === "venda" && (
            <>
              <StructureModal.ContentTitle title="Preço de Venda" />
              <StructureModal.QuantityInput
                incomeValue={stockPrice}
                changeIncomeValue={handleStockValue}
                onBlur={() => {}}
              />
              <StructureModal.CategoryContent>
                <InputComponent
                  handleChangeValue={(e) => handleSetStockName(e.target.value)}
                  type="text"
                  placeholder="Nome do ativo"
                />
                <InputComponent
                  handleChangeValue={(e) =>
                    handleSetStockQuantity(e.target.value)
                  }
                  type="number"
                  placeholder="Quantidade comprada"
                />
                <DatePicker
                  date={investmentDate}
                  setDate={handleSetInvestmentDate}
                />
              </StructureModal.CategoryContent>
              <StructureModal.ActionButton
                disabled={!validationSellAndAdd()}
                buttonTitle="Vender"
                onClick={handleSell}
              />
            </>
          )}
          {selectedTypeInvestment === "aporte" && (
            <>
              <StructureModal.ContentTitle title="Preço de Compra" />
              <StructureModal.QuantityInput
                incomeValue={stockPrice}
                changeIncomeValue={handleStockValue}
                onBlur={() => {}}
              />
              <StructureModal.CategoryContent>
                <InputComponent
                  handleChangeValue={(e) => handleSetStockName(e.target.value)}
                  type="text"
                  placeholder="Nome do ativo"
                />
                <InputComponent
                  handleChangeValue={(e) =>
                    handleSetStockQuantity(e.target.value)
                  }
                  type="number"
                  placeholder="Quantidade comprada"
                />
                <DatePicker
                  date={investmentDate}
                  setDate={handleSetInvestmentDate}
                />
              </StructureModal.CategoryContent>
              <StructureModal.ActionButton
                disabled={!validationSellAndAdd()}
                buttonTitle="Aportar"
                onClick={handleAdd}
              />
            </>
          )}
        </StructureModal.Root>
      </Modal>
    </main>
  );
}

export default InvestmentPageView;
