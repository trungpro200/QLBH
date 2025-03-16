"use server";

import type { loginSchema } from "@/auth/LoginForm";

export const login = (values: loginSchema) => {
  console.log(values);
};
