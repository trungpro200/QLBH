"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/UsersDB-sidebar";
import React, { useState } from "react";

function page() {
  const [menu, setMenu] = useState("");

  return (
    <SidebarProvider>
      <AppSidebar setMenu={setMenu} />
      <main>
        <SidebarTrigger />
        {menu}
      </main>
    </SidebarProvider>
  );
}

export default page;
