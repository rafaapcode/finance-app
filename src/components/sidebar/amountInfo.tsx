type AmountInfoProps = {
  total: string;
}

export default function AmountInfo({ total }: AmountInfoProps) {
  return (
    <div className="mb-5">
      <p className="text-sm">Total</p>
      <p className="text-lg font-semibold">R$ {total}</p>
    </div>
  )
}
