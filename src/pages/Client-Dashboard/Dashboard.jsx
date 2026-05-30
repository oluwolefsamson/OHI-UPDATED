import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AppSidebar } from "../../components/ui/app-sidebar";
import { SiteHeader } from "../../components/ui/site-header";
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar";
export default function Dashboard() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="min-h-dvh">
        <SiteHeader />
        <div className="relative mt-3 flex min-h-dvh flex-1 flex-col overflow-hidden bg-[linear-gradient(180deg,#f7fafc_0%,#eef4fb_46%,#e8f0f8_100%)] pt-4 sm:mt-4 sm:pt-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-[-4rem] h-72 w-72 rounded-full bg-[#0f4c81]/8 blur-3xl" />
            <div className="absolute bottom-[-6rem] left-[-5rem] h-80 w-80 rounded-full bg-[#118ab2]/10 blur-3xl" />
          </div>
          <div className="@container/main relative z-10 flex flex-1 flex-col gap-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-1 flex-col h-full"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
