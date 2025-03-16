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

export const LoginForm = () => {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string(),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email: " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormDescription className="w-full">
                <span>Don't have account?</span>
                <a href="/signup" className="float-right inline-block">
                  Sign up
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
            <Button size={"lg"} className="w-full">
              <FaGithub className="h-5 w-5" />
            </Button>
            <Button size={"lg"} className="w-full">
              <FcGoogle className="h-5 w-5" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
