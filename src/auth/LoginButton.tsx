"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
interface SignInInterface {
  mode?: "modal" | "redirect";
  children: ReactNode;
  className?: string;
}
export const SignInButton = ({
  mode = "modal",
  children,
  className = "",
}: SignInInterface) => {
  if (mode === "modal") {
    return <div>Modal WIP</div>;
  }

  const router = useRouter();

  //Redirect
  return (
    <span
      className={"cursor-pointer " + className}
      onClick={() => {
        console.log(window.location.pathname === "/login");
        router.push("/login");
      }}
    >
      {children}
    </span>
  );
};

// export const SignInButton;
