import CloseSidebar from "@/components/Sidebar/CloseSidebar";

type LayoutMainProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutMainProps) {
  return (
    <div className="flex gap-5 h-full">
      {/* <OpenSidebar /> */}
      <CloseSidebar />
      <div className="flex-1 py-2">
        {children}
      </div>
    </div>
  )
}

export default LayoutMain