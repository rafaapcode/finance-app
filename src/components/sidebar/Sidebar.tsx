import MenuItem from "./MenuItems"

function Sidebar() {
  return (
    <div className="w-[6%] flex items-center flex-col gap-10 bg-[#F5F7F9] p-2">
      <header>
        Logo
      </header>
      <div className="flex-1 flex flex-col gap-5">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <footer>footer</footer>
    </div>
  )
}

export default Sidebar
