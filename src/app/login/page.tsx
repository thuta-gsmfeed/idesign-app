"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Added next/image import

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        // --- CHANGE 2: Layout updated to flex-col to move logo above card ---
        // Added flex-col, py-8 (for padding on small screens)
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8"
             style={{ fontFamily: 'Poppins, sans-serif' }}
        >

            {/* --- CHANGE 2: Logo moved outside and above the main card --- */}
            <div className="flex justify-center mb-6">
                {/* --- FIX: Replaced <img> with <Image> --- */}
                <Image
                    src="/images/logo-od.png"
                    alt="IDG Logo"
                    width={90}
                    height={90}
                />
            </div>

            <div className="w-full max-w-md text-center">
                {/* Logo was originally here, now removed */}

                {/* --- CHANGE 1: Title made responsive --- */}
                <h1 className="text-3xl sm:text-4xl font-bold text-[#bfa14a] mb-2">
                    Welcome Back!
                </h1>
                <p className="text-gray-500 mb-8">Experience perfection, once again.</p>

                {/* Form */}
                <form className="space-y-0">
                    {/* Email */}
                    <div className="border border-gray-300 rounded-t-xl px-4 py-3 text-left">
                        <label className="block text-xs text-gray-500 mb-1">E-mail</label>
                        <Input
                            type="email"
                            placeholder="example@gmail.com"
                            // --- CHANGE 3: shadow-none added ---
                            className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 placeholder:text-gray-400 shadow-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="border border-t-0 border-gray-300 rounded-b-xl px-4 py-3 text-left relative">
                        <label className="block text-xs text-gray-500 mb-1">Password</label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            // --- CHANGE 3: shadow-none added ---
                            className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 placeholder:text-gray-400 shadow-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 bottom-3 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Sign In Button */}
                    {/* --- FIX: Updated gradient to use Tailwind classes instead of inline style --- */}
                    <Button
                        className="w-full mt-6 text-white font-bold text-lg py-6 rounded-xl hover:opacity-90 transition"
                        type="submit"
                        style={{
                            backgroundImage: "linear-gradient(-60deg, #AE8B3B 0%, #EBB639 -93%, #D98D12 40%, #C08D41 100%)"
                        }}
                    >
                        Sign in
                    </Button>
                </form>

                {/* Links */}
                <div className="mt-4">
                    {/* --- FIX: Replaced <a> with <Link> for consistency --- */}
                    <Link
                        href="#"
                        className="text-sm text-gray-600 hover:underline"
                    >
                        Forgotten your password?
                    </Link>
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-200" />
                    <span className="px-3 text-sm text-gray-500">Or sign in with</span>
                    <hr className="flex-grow border-gray-200" />
                </div>

                {/* --- CHANGE 4: Google Sign-In border removed, bg-gray-100 added --- */}
                <button
                    type="button"
                    className="flex items-center justify-center w-full rounded-xl py-3 hover:bg-gray-200 transition"
                >
                    {/* --- FIX: Replaced <img> with <Image> --- */}
                    <Image
                        src="/images/google.svg"
                        alt="Google"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    <span className="text-sm text-gray-700 font-medium">
                        Sign in with Google
                    </span>
                </button>

                {/* Sign Up */}
                <p className="text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <Link href="/sign-up" className="text-[#ae8b3b] font-bold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
            {/* --- FIX: Added missing closing tags --- */}
        </div>
    );
};

export default LoginPage;
