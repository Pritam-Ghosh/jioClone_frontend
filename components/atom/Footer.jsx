
import { Apple, Play } from "lucide-react";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaApple,
    FaGooglePlay,
} from "react-icons/fa6";

const jioLinks = [
    { name: "For You", href: "/" },
    { name: "Sports", href: "/sports" },
    { name: "Movies", href: "/movies" },
    { name: "TV Shows", href: "/tv-shows" },
];

const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Terms Of Use", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Content Complaints", href: "/complaints" },
];

const socialLinks = [
    {
        name: "Facebook",
        icon: FaFacebookF,
        href: "https://facebook.com",
    },
    {
        name: "X",
        icon: FaXTwitter,
        href: "https://x.com",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://instagram.com",
    },
    {
        name: "YouTube",
        icon: FaYoutube,
        href: "https://youtube.com",
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#171819] text-[#d5d5d5]">

            {/* Main Footer */}
            <div className="mx-auto grid w-full grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-12 lg:py-16">

                {/* JioCinema Links */}
                <div>
                    <h3 className="mb-7 text-xl font-bold uppercase text-white">
                        JioCinema
                    </h3>

                    <ul className="space-y-2">
                        {jioLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-lg transition hover:text-white sm:text-xl"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="mb-7 text-xl font-bold uppercase text-white">
                        Support
                    </h3>

                    <ul className="space-y-2">
                        {supportLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-lg transition hover:text-white sm:text-xl"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="mb-7 text-xl font-bold uppercase text-white">
                        Connect With Us
                    </h3>

                    <div className="flex flex-wrap items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#374151] text-white transition hover:bg-[#e6007e]"
                                >
                                    <Icon size={35} />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Download App */}
                <div>
                    <h3 className="mb-7 text-xl font-bold uppercase text-white">
                        Download The App
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 lg:mt-16">

                        {/* Google Play */}
                        <Link
                            href="https://play.google.com/store"
                            target="_blank"
                            className="flex h-[56px] items-center gap-2 rounded-xl bg-black px-3 transition hover:opacity-80"
                        >
                            <Play
                                size={30}
                                fill="#34d399"
                                className="text-[#34d399]"
                            />

                            <div className="flex flex-col leading-tight">
                                <span className="text-[10px] uppercase text-white">
                                    Get it on
                                </span>
                                <span className="whitespace-nowrap text-lg font-medium text-white">
                                    Google Play
                                </span>
                            </div>
                        </Link>

                        {/* App Store */}
                        <Link
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            className="flex h-[56px] items-center gap-2 rounded-xl bg-black px-3 transition hover:opacity-80"
                        >
                            <Apple size={34} fill="white" />

                            <div className="flex flex-col leading-tight">
                                <span className="text-[10px] text-white">
                                    Download on the
                                </span>
                                <span className="whitespace-nowrap text-lg font-medium text-white">
                                    App Store
                                </span>
                            </div>
                        </Link>

                    </div>
                </div>

            </div>

            {/* Copyright Section */}
            <div className="flex min-h-[110px] flex-col items-center justify-between gap-5 border-t border-[#292a2b] bg-[#202122] px-6 py-6 sm:flex-row sm:px-8">

                <p className="text-center text-base sm:text-lg">
                    Copyright © 2026 Pritam Ghosh. All rights reserved.
                </p>

                {/* Jio Logo */}
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#e6007e]">
                    <span className="text-[32px] font-black tracking-tight text-white">
                        Jio
                    </span>
                </div>
            </div>
        </footer>
    );
}
