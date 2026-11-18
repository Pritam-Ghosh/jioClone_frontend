
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0d0b0b] px-4 py-8 text-white">

      <Card className="mx-auto w-full max-w-[460px] gap-0 border border-[#302d2c] bg-[#1c1a19] px-5 py-6 shadow-none sm:px-7">

        {/* Header */}
        <CardHeader className="mb-5 space-y-1 p-0">
          <CardTitle className="text-2xl font-semibold text-white">
            Login
          </CardTitle>

          <CardDescription className="text-sm leading-relaxed text-[#a5a5a5] sm:text-base">
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">

          <form className="space-y-4">

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-semibold text-white sm:text-base">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-sm text-white placeholder:text-[#a5a5a5] focus-visible:border-[#e91e63] focus-visible:ring-[#e91e63]"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-sm font-semibold text-white sm:text-base">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-sm text-white focus-visible:border-[#e91e63] focus-visible:ring-[#e91e63]"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="mt-2 h-11 w-full rounded-lg bg-[#ed174c] text-base font-semibold text-white hover:bg-[#d91443]"
            >
              Sign in
            </Button>

          </form>

          {/* Footer Links */}
          <div className="mt-9 flex flex-wrap items-center justify-between gap-3 text-sm text-white">

            <Link href="/forgot-password" className="hover:text-[#ed174c]">
              Forgot Password?
            </Link>

            <p>
              Need an account?{" "}
              <Link
                href="/signup"
                className="underline underline-offset-2 hover:text-[#ed174c]"
              >
                Sign Up
              </Link>
            </p>

          </div>

        </CardContent>
      </Card>

    </main>
  );
}
