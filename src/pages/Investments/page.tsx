import { LinearAreaChart } from "@/components/charts/linearChart/LinearAreaChart";
import { PieChartComponent } from "@/components/charts/pieChart/PieChart";
import { TablePagination } from "@/components/pagination/TablePagination";
import { InvestmentTable } from "@/components/table/InvestmentTable";
import { IoFilter, IoSearchOutline } from "react-icons/io5";

function InvestmentsPage() {
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
            <button className="shadow border border-neutral-200 px-4 py-2 rounded-md hover:bg-neutral-100 transition-all duration-150">
              Novo investimento
            </button>
            <button className="shadow border border-neutral-200 px-4 py-2 rounded-md hover:bg-neutral-100 transition-all duration-150">
              Exportar para planilha
            </button>
            <div className="shadow border border-neutral-200 rounded-md flex items-center">
              <button className="h-full px-3 rounded-md hover:bg-neutral-100 transition-all duration-150">
                <IoSearchOutline />
              </button>
              <input type="text" className="hidden rounded-md w-[90%] text-black px-2 h-[80%] border border-neutral-300"/>
            </div>
          </div>
          <button className="shadow border outline-none border-neutral-200 px-2 py-2 rounded-md hover:bg-neutral-100 transition-all duration-150">
            <IoFilter />
          </button>
        </header>
        <div className="flex-1 mt-1 overflow-x-auto">
          <InvestmentTable />
        </div>
        <div className="self-start">
          <TablePagination />
        </div>
      </div>
    </main>
  );
}

export default InvestmentsPage;
