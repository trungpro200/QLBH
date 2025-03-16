"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FormFieldWrapper } from "@/components/FormFieldWrapper";
import { login } from "@/actions/login";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string(),
});

export type loginSchema = z.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    login(values);
  }

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-[500px]">
      <Card>
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Login to VChess</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormFieldWrapper
                fieldName="email"
                form={form}
              ></FormFieldWrapper>
              <FormFieldWrapper fieldName="password" form={form} />
              <FormDescription className="w-full">
                <span>Don't have account?</span>
                <a href="/register" className="float-right inline-block">
                  Register
                </a>
              </FormDescription>
              <Button type="submit" className="w-full" size="lg">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="w-full flex gap-2">
            <Button variant={"outline"} size={"lg"} className="w-full">
              <FaGithub className="h-5 w-5" />
            </Button>
            <Button variant={"outline"} size={"lg"} className="w-full">
              <FcGoogle className="h-5 w-5" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
