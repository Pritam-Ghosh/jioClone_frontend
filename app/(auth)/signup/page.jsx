"use client"
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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { api, ENDPOINT } from "../../../lib/api";
import { userLoggedInDetail } from "../../../redux/slice/UserSlice";
import { LoaderCircle } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {

    try {
      e.preventDefault()
      if (!name || !email || !password || !confirmPassword) {
        toast.error("fill all the input field")
      }
      if (password != confirmPassword) {
        toast.error("password and confirm passowrd not match!")
      }

      setLoading(true)

      const resp = await api.post(ENDPOINT.signup, {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      })
      setLoading(false)

      if (resp.data.status == "success") {
        dispatch(userLoggedInDetail(resp.data.user))
        toast.success("New account created!")
        router.push("/");

        if (resp.data) {
          return toast.success("Welcome!")
        }
      }

    } catch (err) {
      toast.error(
        err.response?.data?.err || "Account creation failed"
      );
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0d0b0b] px-4 py-8 text-white">
      <Card className="mx-auto w-full max-w-[460px] gap-0 border border-[#302d2c] bg-[#1c1a19] px-5 py-6 shadow-none sm:px-7">
        {/* Header */}
        <CardHeader className="mb-5 space-y-1 p-0">
          <CardTitle className="text-2xl font-semibold text-white">
            Create Account
          </CardTitle>

          <CardDescription className="text-sm leading-relaxed text-[#a5a5a5] sm:text-base">
            Enter your details below to create your account.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">

          <form className="space-y-4">

            {/* Name */}
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-sm font-semibold text-white sm:text-base">
                Full Name
              </Label>

              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-sm text-white placeholder:text-[#a5a5a5]"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-semibold text-white sm:text-base">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-sm text-white placeholder:text-[#a5a5a5]"
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-sm text-white placeholder:text-[#a5a5a5]"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword" className="text-sm font-semibold text-white sm:text-base">
                Confirm Password
              </Label>

              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-sm text-white placeholder:text-[#a5a5a5]"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              onClick={handleSignUp}
              className="mt-2 h-11 w-full rounded-lg bg-[#ed174c] text-base font-semibold text-white hover:bg-[#d91443]"
            >
              Create Account {loading ? <LoaderCircle className="animate-spin" /> : ""}
            </Button>

          </form>

          {/* Footer */}
          <div className="mt-7 text-center text-sm text-white">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 hover:text-[#ed174c]"
            >
              Sign In
            </Link>
          </div>

        </CardContent>
      </Card>

    </main>
  );
}
