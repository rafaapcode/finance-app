"use client";
import { LinearAreaChart } from "@/components/charts/linearChart/LinearAreaChart";
import { PieChartComponent } from "@/components/charts/pieChart/PieChart";
import FilterTableModal from "@/components/filters/FilterTable";
import { CashFlow } from "@/components/modal/cashFlowModal";
import Modal from "@/components/modal/Modal";
import { TablePagination } from "@/components/pagination/TablePagination";
import SelectInvestment from "@/components/select/SelectInvestment";
import { InvestmentTable } from "@/components/table/InvestmentTable";
import { useCallback, useState } from "react";
import { IoFilter, IoSearchOutline } from "react-icons/io5";

function InvestmentsPage() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [typeOfFilter, setTypeOfFilter] = useState<string | null>(null);
  const [investModal, setInvestModal] = useState<boolean>(false);
  const [selectedTypeInvestment, setSelectedTypeInvestment] = useState<string>("aporte");

  const handleSelectedTypeInvestment = useCallback((type: string) => {
    setSelectedTypeInvestment(type);
  }, [setSelectedTypeInvestment]);


  const handleTypeOfFilter = useCallback((type: string) => {
    setTypeOfFilter(type);
    setOpenFilter(false);
  }, []);

  const handleSetInvestModal = useCallback(() => {
    setInvestModal(prev => !prev);
  }, []);

  return (
    <main className="h-full flex-1 overflow-y-auto scrollbar-none">
      <div className="w-full max-h-[400px] flex justify-between">
        <div className="w-[60%] max-h-[400px]">
          <LinearAreaChart />
        </div>
        <div className="w-[35%] max-h-[400px]">
          <PieChartComponent />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 pt-5">
        <header className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <button onClick={handleSetInvestModal} className="shadow border border-neutral-200 px-4 py-2 rounded-md hover:bg-neutral-100 transition-all duration-150">
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
            <button onClick={() => setOpenFilter(prev => !prev)} className="border border-neutral-200 p-2 rounded-md hover:bg-neutral-100 transition-all duration-150">
              <IoFilter />
            </button>
            <FilterTableModal selectedFilter={typeOfFilter} handleSelecteFilter={handleTypeOfFilter} visible={openFilter}/>
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
        <CashFlow.Root>
          <CashFlow.Header handleClose={handleSetInvestModal} titleHeader="Novo investimento"/>
          <CashFlow.ContentController>
            <SelectInvestment selectedType={selectedTypeInvestment} handleSelectType={handleSelectedTypeInvestment}/>
          </CashFlow.ContentController>
        </CashFlow.Root>
      </Modal>
    </main>
  );
}

export default InvestmentsPage;
