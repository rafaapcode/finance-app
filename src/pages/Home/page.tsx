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
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Home</h2>
        <section className="flex justify-evenly px-3 flex-wrap mt-5 w-full">
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
      <div>
        <h2 className="text-3xl font-semibold">Meus Gastos</h2>
        <section className="flex mt-5 w-full">
          <Carousel className="w-[98%]">
            <CarouselContent>
              <CarouselItem className="basis-1/12 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/12 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/12 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/12 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/12 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/12 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/12 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
              <CarouselItem className="basis-1/12 lg:basis-1/6"><SpendCard color={getRandomColor()} category="Home" spendValue="2.000,50"/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
