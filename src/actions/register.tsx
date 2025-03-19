"use server";

import { boolean, z } from "zod";
import bcrypt from "bcrypt";
import { error } from "console";
import { db } from "@/lib/db";

const registerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email" }),
    username: z.string().min(8).max(30),
    password: z.string().min(2, { message: "Enter your password." }),
    password2: z.string().min(2, { message: "Retype your password." }),
  })
  .refine((data) => data.password === data.password2, {
    message: "Password mismatch.",
    path: ["password2"],
  });

const checkIfExists = async (field: "email" | "username", value: string) => {
  const user = await db.user.findUnique({
    where: { [field]: value } as any,
  });

  return !!user;
};

export const register = async (values: z.infer<typeof registerSchema>) => {
  const val = registerSchema.safeParse(values);
  var responde = {
    success: "",
    error: "",
  };

  if (!val.success) {
    return { error: "Invalid field" };
  }
  const { email, password, username } = val.data;

  const nameTaken = await checkIfExists("username", username);
  const mailTaken = await checkIfExists("email", email);

  if (mailTaken) {
    responde.error = "Email already taken";
  } else if (nameTaken) {
    responde.error = "Username already taken";
  }

  if (responde.error) {
    return responde;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      username,
    },
  });

  return { success: "User created" };
};
