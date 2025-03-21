"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Calendar, Home, icons, Inbox, Search, Settings } from "lucide-react";
import UsersTable from "./UsersTable";
import AddUser from "./AddUser";

const items = [
  {
    title: "Users",
    id: "user",
    icon: Calendar,
  },
  {
    title: "Add user",
    id: "adduser",
    icon: icons.Plus,
  },
];

interface SBinterface {
  setMenu: React.Dispatch<React.SetStateAction<string>>;
}

export function AppSidebar({ setMenu }: SBinterface) {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => {
                  setMenu(item.id);
                }}
              >
                <item.icon></item.icon>
                {item.title}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
