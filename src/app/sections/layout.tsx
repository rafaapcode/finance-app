import LayoutSidebar from "@/components/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function Sectionslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex">
      <SidebarProvider>
        <LayoutSidebar />
        <div className="w-full px-10">
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
