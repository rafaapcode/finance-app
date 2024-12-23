import Link from "next/link"

function MenuItem() {
  return (
    <Link href="/main/home" className="flex justify-center items-center p-2 rounded-md hover:bg-neutral-200">
      <p>Menu Itens</p>
    </Link>
  )
}

export default MenuItem
