"use server";

import { z } from "zod";
import { loginFormSchema } from "@/auth/LoginForm";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

const saltRound = 10;

const getUser = async (values: z.infer<typeof loginFormSchema>) => {
  const hashPassword = await bcrypt.hash(values.password, saltRound);
  const field = z.string().email().safeParse(values.email).success
    ? "email"
    : "username";

  const user = await db.user.findFirst({
    where: {
      [field]: values.email,
    },
  });
  return user;
};

export const login = async (values: z.infer<typeof loginFormSchema>) => {
  var responde = {
    success: "",
    error: "",
  };

  const user = await getUser(values);
  const pass = user == null ? "" : (user.password as string);

  if (!user) {
    responde.error = "Incorrect username or password";
  }

  if (await bcrypt.compare(values.password, pass)) {
    responde.success = "Logged in";
  } else {
    responde.error = "Incorrect username or password";
  }

  return responde;
};
