"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FormFieldWrapper } from "@/components/FormFieldWrapper";
import { login } from "@/actions/login";
import { loginFormSchema } from "./LoginForm";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { FormSuccess } from "@/components/FormSuccess";
import { FormError } from "@/components/FormError";

export const registerSchema = z
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

export const RegisterForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const route = useRouter();
  const [isPending, startTransition] = useTransition();

  function onSubmit(values: z.infer<typeof registerSchema>) {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        if (data?.error) {
          setError(data.error);
        }

        if (data?.success) {
          setSuccess(data.success);
        }
      });
    });
  }

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      password2: "",
    },
  });

  return (
    <div>
      <Card className="max-w-xl mx-auto">
        <CardHeader className="items-center">
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Register to VChess</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormFieldWrapper
                fieldName="email"
                form={form}
                disabled={isPending}
              />
              <FormFieldWrapper
                fieldName="username"
                form={form}
                disabled={isPending}
              />
              <FormFieldWrapper
                fieldName="password"
                form={form}
                disabled={isPending}
              />
              <FormFieldWrapper
                fieldName="password2"
                displayName="Comfirm your password: "
                form={form}
                placeholder="Comfirm password"
                disabled={isPending}
              />
              <FormMessage />
              <legend className="h-4"></legend>
              <Button
                type="submit"
                size={"lg"}
                className="w-full space-x-7"
                disabled={isPending}
              >
                Sign Up
              </Button>
              <FormSuccess message={success} />
              <FormError message={error} />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
