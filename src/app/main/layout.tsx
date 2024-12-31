"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

type LayoutMainProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutMainProps) {
  return (
    <main className="flex h-full gap-5 lg:gap-0">
      <Toaster position="top-center" reverseOrder={false}/>
      <Sidebar />
      <div className="flex-1 mx-auto p-4">{children}</div>
    </main>
  );
}

export default LayoutMain;
