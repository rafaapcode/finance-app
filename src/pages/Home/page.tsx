import Card from "@/components/card/Card";
import SpendCard from "@/components/spendCard/SpendCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const COLORS = ["bg-[#E2E5FD]", "bg-[#FFF4D8]", "bg-[#EBF0FE]", "bg-[#F2F5F1]", "bg-[#F1ECFE]"];

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function HomePage() {

  return (
    <main className="h-full w-full">
      <div className="hidden lg:block mb-10 py-2 lg:py-0">
        <h2 className="text-3xl font-semibold">Home</h2>
        <section className="flex md:gap-4 lg:justify-evenly  lg:px-3 flex-wrap mt-5 w-full">
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
      <div className="hidden lg:block">
        <h2 className="text-3xl font-semibold">Meus Gastos</h2>
        <section className="flex mt-5 w-full">
          <Carousel className="w-[95%] mx-auto lg:w-[98%]">
            <CarouselContent>
              <CarouselItem className="basis-1/3 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex"/>
            <CarouselNext className="hidden lg:flex"/>
          </Carousel>
        </section>
      </div>
      <div className="hidden lg:flex flex-col">
        
      </div>
      <div className="flex items-center justify-center h-full lg:hidden">
        <h2 className="text-xl">Por favor acesse o sistema pelo computador para melhor experiência.</h2>
      </div>
    </main>
  );
}

export default HomePage;
