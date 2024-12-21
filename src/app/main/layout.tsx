
type LayoutMainProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutMainProps) {
  return (
    <div className="flex gap-5">
      <div className="bg-red-300 w-[10%]">Sidebar</div>
      <div className="bg-red-700 flex-1">
        {children}
      </div>
    </div>
  )
}

export default LayoutMain