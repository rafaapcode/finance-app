import Card from "@/components/card/Card";

// const COLORS = ["bg-[#E2E5FD]", "bg-[#FFF4D8]", "bg-[#EBF0FE]", "bg-[#F2F5F1]", "bg-[#F1ECFE]"];

// function getRandomColor() {
//   return COLORS[Math.floor(Math.random() * COLORS.length)];
// }

function HomePage() {

  return (
    <main className="h-full flex-1">
      <div className="mb-10 py-2 lg:py-0 flex-1">
        <h2 className="text-3xl">Home</h2>
        <section className="flex md:gap-4 lg:justify-evenly lg:px-3 mt-5">
          <Card color="bg-[#EBF0FE]" title="Entradas" value="2.500,00" />
          <Card
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
        <h2 className="text-3xl">Meu Gastos</h2>
      </div>
    </main>
  );
}

export default HomePage;
