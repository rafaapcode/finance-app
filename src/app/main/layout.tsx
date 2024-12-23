"use client";

type LayoutMainProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutMainProps) {
  return (
    <div className="flex h-full gap-5 lg:gap-0">
      <div>
        <h1>teste</h1>
      </div>
      <div className="flex-1 mx-auto py-2">{children}</div>
    </div>
  );
}

export default LayoutMain;
