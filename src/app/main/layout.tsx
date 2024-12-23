"use client";

import Sidebar from "@/components/sidebar/Sidebar";

type LayoutMainProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutMainProps) {
  return (
    <main className="flex h-full gap-5 lg:gap-0">
      <Sidebar />
      <div className="flex-1 mx-auto p-4">{children}</div>
    </main>
  );
}

export default LayoutMain;
