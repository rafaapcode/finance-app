import Image from "next/image"

function Notfound() {
  return (
    <div className="flex justify-center flex-col gap-10 items-center h-screen">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <div className="w-64 h-64 relative">
        <Image src="./404-icon.svg" fill alt="Erro Icon"/>
      </div>
    </div>
  )
}

export default Notfound
