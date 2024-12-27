import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"



const invoices = [
  {
    name: "INV001",
    quantity: "10",
    buy: "R$ 10.00",
    sell: null,
    percentage: "10%",
    category: "Ação",
    buy_date: new Date(Date.now()).toLocaleDateString(),
    sell_date: null,
    last_supply: null,
    quantity_supplied: null,
    profit: '0'
  },
  {
    name: "INV002",
    quantity: "10",
    buy: "R$ 10.00",
    sell: null,
    percentage: "10%",
    category: "Ação",
    buy_date: new Date(Date.now()).toLocaleDateString(),
    sell_date: null,
    last_supply: null,
    quantity_supplied: null,
    profit: '0'
  },
  {
    name: "INV003",
    quantity: "10",
    buy: "R$ 10.00",
    sell: null,
    percentage: "10%",
    category: "Ação",
    buy_date: new Date(Date.now()).toLocaleDateString(),
    sell_date: null,
    last_supply: null,
    quantity_supplied: null,
    profit: '0'
  },
  {
    name: "INV004",
    quantity: "10",
    buy: "R$ 10.00",
    sell: null,
    percentage: "10%",
    category: "Ação",
    buy_date: new Date(Date.now()).toLocaleDateString(),
    sell_date: null,
    last_supply: null,
    quantity_supplied: null,
    profit: '0'
  },
  {
    name: "INV005",
    quantity: "10",
    buy: "R$ 10.00",
    sell: null,
    percentage: "10%",
    category: "Ação",
    buy_date: new Date(Date.now()).toLocaleDateString(),
    sell_date: null,
    last_supply: null,
    quantity_supplied: null,
    profit: '0'
  },
]

export function InvestmentTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>QTD</TableHead>
          <TableHead>Compra</TableHead>
          <TableHead>Venda</TableHead>
          <TableHead>Porcentagem</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Data Compra</TableHead>
          <TableHead>Data Venda</TableHead>
          <TableHead className="text-right">Último Aporte</TableHead>
          <TableHead className="text-right">Quantidade Aporte</TableHead>
          <TableHead className="text-right">Lucro</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium text-xs">{invoice.name}</TableCell>
            <TableCell className="text-xs">{invoice.quantity}</TableCell>
            <TableCell className="text-xs">{invoice.buy}</TableCell>
            <TableCell className="text-xs">{invoice.sell}</TableCell>
            <TableCell className="text-xs">{invoice.percentage}</TableCell>
            <TableCell className="text-xs">{invoice.category}</TableCell>
            <TableCell className="text-xs">{invoice.buy_date}</TableCell>
            <TableCell className="text-xs">{invoice.sell_date}</TableCell>
            <TableCell className="text-right text-xs">{invoice.last_supply}</TableCell>
            <TableCell className="text-right text-xs">{invoice.quantity_supplied}</TableCell>
            <TableCell className="text-right text-xs">{invoice.profit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={10}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
