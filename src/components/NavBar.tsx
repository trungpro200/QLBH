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
      <Button>Login</Button>
    </SignInButton>
  );

  const loc = usePathname();
  return (
    <div className="flex float-right items-center h-fit p-1">
      <ModeToggle></ModeToggle>
      {loc?.startsWith("/login") ? null: lg}
    </div>
  );
}

export default NavBar;
