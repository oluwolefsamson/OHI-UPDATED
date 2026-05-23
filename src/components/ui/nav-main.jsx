import React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export function NavMain({
  items,
  collapsed = false,
  iconClassName = "h-4 w-4",
  textClassName = "text-sm",
}) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = location.pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={collapsed ? item.title : undefined}
                  className={cn(
                    "h-auto w-full transition-all duration-200",
                    collapsed
                      ? "justify-center rounded-full px-0 py-2.5"
                      : "justify-start rounded-2xl px-3 py-2.5",
                    isActive
                      ? "bg-[linear-gradient(135deg,rgba(15,76,129,0.14),rgba(17,138,178,0.12))] text-slate-950 shadow-sm ring-1 ring-[#0f4c81]/10"
                      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-950"
                  )}
                >
                  <NavLink to={item.url} className="flex w-full items-center gap-3">
                    {item.icon && (
                      <item.icon
                        className={cn(
                          iconClassName,
                          isActive ? "text-[#0f4c81]" : "text-slate-500"
                        )}
                      />
                    )}
                    {!collapsed && (
                      <span className={cn("truncate font-medium", textClassName)}>
                        {item.title}
                      </span>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
