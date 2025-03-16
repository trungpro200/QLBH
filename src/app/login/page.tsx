import { LoginForm } from "@/auth/LoginForm";
import { Head } from "next/document";
import React from "react";

function page() {
  return (
    <>
      <head>
        <title>Login</title>
      </head>
      <LoginForm />
    </>
  );
}

export default page;
