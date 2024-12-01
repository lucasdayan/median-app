"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";

export default function SignInModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("signinmodal");
  const { login } = useAuth();

  const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  type loginSchema = z.infer<typeof signInSchema>;

  const { register, handleSubmit, formState, clearErrors, reset } =
    useForm<loginSchema>({
      resolver: zodResolver(signInSchema),
    });

  const onSubmit: SubmitHandler<loginSchema> = async (data) => {
    clearErrors();
    await login(data.email, data.password);
  };
  return (
    <>
      {modal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
          <div className="container flex items-center justify-center h-screen">
            <div className="relative w-full max-w-md space-y-6 p-6 bg-background rounded-lg shadow-lg">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </Link>

              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Sign up with email
                </h1>
                <p className="text-muted-foreground">
                  Enter your credentials below to log into your account.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Your email</Label>
                    <Input
                      placeholder="name@example.com"
                      type="email"
                      {...register("email")}
                    />
                    {formState.errors.email && (
                      <p className="text-xs text-red-400 m-1">
                        {formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" {...register("password")} />
                    {formState.errors.password && (
                      <p className="text-xs text-red-400 m-1">
                        {formState.errors.password.message}
                      </p>
                    )}
                  </div>
                  <Button className="w-full" size="lg">
                    Log in
                  </Button>
                  <div className="space-y-4 text-center text-sm">
                    <Link
                      href={"/?signupmodal=true"}
                      className="inline-flex items-center text-gray-600 hover:text-gray-700"
                    >
                      Doesn't have an account? Sign up now!
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
