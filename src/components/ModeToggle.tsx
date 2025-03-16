"use client";

import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant={"outline"}
      size={"icon"}
    >
      <SunIcon className="h-5 w-5 transition-all dark:scale-0 dark:rotate-90"></SunIcon>
      <MoonIcon className="h-5 w-5 absolute scale-0 transition-all dark:scale-100 dark:rotate-0"></MoonIcon>
    </Button>
  );
}

export default ModeToggle;
