
"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { ArrowLeft, LoaderCircle, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      // Backend email OTP API will be connected here

      setOpenDialog(true);

    } catch (err) {
      toast.error("Unable to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!otp || !newPassword || !confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      // Backend reset password API will be connected here

      toast.info("Connect your reset password API here");

    } catch (err) {
      toast.error("Password reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0b0b] px-4 py-8 text-white flex items-center">

      <Card className="mx-auto w-full max-w-[460px] gap-0 border border-[#302d2c] bg-[#1c1a19] px-5 py-6 shadow-none sm:px-7">

        {/* Header */}
        <CardHeader className="mb-6 space-y-2 p-0">

          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ed174c]/10">
            <Mail className="h-6 w-6 text-[#ed174c]" />
          </div>

          <CardTitle className="text-2xl font-semibold text-white">
            Forgot Password?
          </CardTitle>

          <CardDescription className="text-sm leading-relaxed text-[#a5a5a5]">
            Don't worry! Enter your registered email address.
            We'll help you reset your password.
          </CardDescription>

        </CardHeader>

        <CardContent className="p-0">

          <form onSubmit={handleSendOtp} className="space-y-4">

            <div className="space-y-1.5">

              <Label htmlFor="email" className="text-sm font-semibold text-white">
                Email Address
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-sm text-white placeholder:text-[#a5a5a5] focus-visible:border-[#e91e63] focus-visible:ring-[#e91e63]"
              />

            </div>

            <Button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-lg bg-[#ed174c] text-base font-semibold text-white hover:bg-[#d91443]"
            >
              {loading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Sending OTP...
                </>
              ) : (
                "Send OTP"
              )}
            </Button>

          </form>

          <div className="mt-7 text-center">

            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm text-[#a5a5a5] transition hover:text-[#ed174c]"
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>

          </div>

        </CardContent>

      </Card>

      {/* Reset Password Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>

        <DialogContent className="border border-[#302d2c] bg-[#1c1a19] text-white sm:max-w-[440px]">

          <DialogHeader>

            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ed174c]/10">
              <ShieldCheck className="h-6 w-6 text-[#ed174c]" />
            </div>

            <DialogTitle className="text-xl font-semibold text-white">
              Reset Your Password
            </DialogTitle>

            <DialogDescription className="text-sm text-[#a5a5a5]">
              Enter the OTP sent to your email and create a new password.
            </DialogDescription>

          </DialogHeader>

          <form onSubmit={handleResetPassword} className="space-y-4">

            {/* OTP */}
            <div className="space-y-1.5">

              <Label htmlFor="otp" className="text-sm font-semibold text-white">
                Enter OTP
              </Label>

              <Input
                id="otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-white placeholder:text-[#a5a5a5] focus-visible:border-[#e91e63] focus-visible:ring-[#e91e63]"
              />

            </div>

            {/* New Password */}
            <div className="space-y-1.5">

              <Label htmlFor="newPassword" className="text-sm font-semibold text-white">
                New Password
              </Label>

              <Input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-white placeholder:text-[#a5a5a5] focus-visible:border-[#e91e63] focus-visible:ring-[#e91e63]"
              />

            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">

              <Label htmlFor="confirmPassword" className="text-sm font-semibold text-white">
                Confirm Password
              </Label>

              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-11 border-[#302d2c] bg-[#0d0b0b] text-white placeholder:text-[#a5a5a5] focus-visible:border-[#e91e63] focus-visible:ring-[#e91e63]"
              />

            </div>

            <DialogFooter className="pt-2">

              <Button
                type="submit"
                disabled={loading}
                className="h-11 w-full rounded-lg bg-[#ed174c] text-base font-semibold text-white hover:bg-[#d91443]"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Resetting...
                  </>
                ) : (
                  "Reset Password"
                )}
              </Button>

            </DialogFooter>

          </form>

        </DialogContent>

      </Dialog>

    </main>
  );
}
