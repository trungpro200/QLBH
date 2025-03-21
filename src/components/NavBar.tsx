"use client";

import React, { useState } from "react";
import { Sheet } from "./ui/sheet";
import { Button } from "./ui/button";
import { error } from "console";
import { SignInButton } from "@/auth/LoginButton";
import ModeToggle from "./ModeToggle";
import { usePathname } from "next/navigation";


function NavBar() {
  const lg = (
    <SignInButton mode="redirect" className="pl-2">
      <Button variant={"secondary"}>Login</Button>
    </SignInButton>
  );

  const loc = usePathname();
  if (loc == "/usersDB") {
    return <></>;
  }

  return (
    <div className="flex items-center h-fit p-2 bg-zinc-200/35 shadow-sm shadow-zinc-300 inset-1 backdrop-blur-sm">
      {lg}
    </div>
  );
}

export default NavBar;
