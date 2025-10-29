"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ChevronDown, Search } from "lucide-react";
// --- FIX: Replaced Next.js components with standard HTML ---
// import Image from "next/image";
// import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import countriesData from "@/data/countries.json";

// --- FIX: Removed PhoneInput import to fix compilation error ---
// CSS must be imported in your global styles: import 'react-phone-input-2/lib/style.css';
// import PhoneInput from 'react-phone-input-2';

// --- ADDED: JSON data for country codes ---

// --- END: JSON data ---
interface Country {
    name: string;
    code: string;
    flag: string;
}

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // --- FIX: Added state to manage all form inputs ---
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [countries, setCountries] = useState<Country[]>([...countriesData]);

    // --- ADDED: State for custom country dropdown ---
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [searchTerm, setSearchTerm] = useState("");
    // --- END: State for dropdown ---

    const filteredCountries = countries.filter(
        (country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.code.includes(searchTerm)
    );

    return (
        // --- UI FIX: Added flex-col, padding, and font ---
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            {/* --- UI FIX: Logo moved outside and above the main card --- */}
            <div className="flex justify-center mb-6">
                {/* --- FIX: Replaced <Image> with img --- */}
                <img
                    src="/images/logo-od.png"
                    alt="IDG Logo"
                    width={90}
                    height={90}
                />
            </div>

            <div className="w-full max-w-md text-center">
                {/* Logo was originally here, now removed */}

                {/* --- UI FIX: Title made responsive --- */}
                <h1 className="text-3xl sm:text-4xl font-bold text-[#bfa14a] mb-2">Sign Up</h1>
                <p className="text-gray-500 mb-8">Create Your IDG Account</p>

                {/* Form */}
                <form className="space-y-0">
                    {/* Name fields */}
                    <div className="grid grid-cols-2 border border-gray-300 rounded-t-xl">
                        <div className="border-r border-gray-300 px-4 pt-3 text-left">
                            <label className="block text-xs text-gray-500 mb-1">
                                First Name
                            </label>
                            {/* --- UI FIX: shadow-none added --- */}
                            <Input
                                type="text"
                                placeholder="John"
                                className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 shadow-none"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>
                        <div className="px-4 pt-3 text-left">
                            <label className="block text-xs text-gray-500 mb-1">
                                Last Name
                            </label>
                            {/* --- UI FIX: shadow-none added --- */}
                            <Input
                                type="text"
                                placeholder="Samual"
                                className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 shadow-none"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    {/* --- FIX: Replaced static input with custom dropdown --- */}
                    <div className="flex border border-t-0 border-gray-300 text-left">
                        {/* Country Selector Button */}
                        <div className="relative">
                            <button
                                type="button"
                                className="flex items-center px-4 border-r border-gray-300 min-w-[90px] h-full"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <img
                                    src={selectedCountry.flag}
                                    alt={selectedCountry.name}
                                    width={18}
                                    height={18}
                                    className="mr-1"
                                />
                                <span className="text-sm text-gray-700 mr-1">{selectedCountry.code}</span>
                                <ChevronDown size={14} className="text-gray-500" />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                    <div className="p-2 relative">
                                        <Input
                                            type="text"
                                            placeholder="Search country..."
                                            className="w-full pl-8"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                    <ul className="max-h-60 overflow-y-auto">
                                        {filteredCountries.map((country) => (
                                            <li key={country.name}>
                                                <button
                                                    type="button"
                                                    className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setIsDropdownOpen(false);
                                                        setSearchTerm("");
                                                    }}
                                                >
                                                    <img
                                                        src={country.flag}
                                                        alt={country.name}
                                                        width={18}
                                                        height={18}
                                                        className="mr-2"
                                                    />
                                                    <span className="text-sm text-gray-700 mr-2">{country.name}</span>
                                                    <span className="text-sm text-gray-500 ml-auto">{country.code}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* Phone Input */}
                        <div className="flex-1 px-4 pt-3">
                            <label className="block text-xs text-gray-500 mb-1">
                                Phone Number
                            </label>
                            {/* --- UI FIX: shadow-none added --- */}
                            <Input
                                type="tel"
                                placeholder="5856254525"
                                className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 shadow-none"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>
                    {/* --- END FIX --- */}


                    {/* Email */}
                    <div className="border border-t-0 border-gray-300 px-4 pt-3 text-left">
                        <label className="block text-xs text-gray-500 mb-1">Email</label>
                        {/* --- UI FIX: shadow-none added --- */}
                        <Input
                            type="email"
                            placeholder="John@drgsd.com"
                            className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 shadow-none"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    {/* Password */}
                    <div className="border border-t-0 border-gray-300 px-4 pt-3 text-left relative">
                        <label className="block text-xs text-gray-500 mb-1">Password</label>
                        {/* --- UI FIX: shadow-none added --- */}
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 shadow-none"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 bottom-3 text-gray-500 hover:text-gray-700"
                        >
                            {/* FIX: Corrected typo from 1G to 18 */}
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="border border-t-0 border-gray-300 rounded-b-xl px-4 pt-3 text-left relative">
                        <label className="block text-xs text-gray-500 mb-1">
                            Verify password
                        </label>
                        {/* --- UI FIX: shadow-none added --- */}
                        <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 shadow-none"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 bottom-3 text-gray-500 hover:text-gray-700"
                        >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center mt-4 text-left gap-2">
                        <Checkbox id="terms" className="border-gray-400" />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            By Signing Up I agree with{" "}
                            {/* --- FIX: Replaced <Link> with <a> --- */}
                            <a href="#" className="text-blue-600 underline">
                                Terms & Conditions
                            </a>
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    {/* --- UI FIX: Updated gradient, font-bold, text-lg --- */}
                    <Button
                        className="w-full mt-6 text-white font-bold text-lg py-6 rounded-xl bg-gradient-to-r hover:opacity-90 transition"
                        type="submit"
                        style={{backgroundImage:
                                "linear-gradient(-60deg, #AE8B3B 0%, #EBB639 -93%, #D98D12 40%, #C08D41 100%)",}}
                    >
                        Sign up
                    </Button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-200" />
                    <span className="px-3 text-sm text-gray-500">Or sign in with</span>
                    <hr className="flex-grow border-gray-200" />
                </div>

                {/* --- UI FIX: Google Sign-In border removed, bg added --- */}
                <button
                    type="button"
                    className="flex items-center justify-center w-full rounded-xl py-3 hover:bg-gray-200 transition"
                >
                    {/* --- FIX: Replaced <Image> with img --- */}
                    <img
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

                {/* Sign In Link */}
                <p className="text-sm text-gray-600 mt-6">
                    Already have an Account?{" "}
                    {/* --- FIX: Replaced <Link> with <a>, updated text color/font --- */}
                    <Link href="/login" className="text-[#ae8b3b] font-bold hover:underline">
                        Sign In
                    </Link>
                </p>

                {/* --- UI FIX: Removed bottom gold wave image for consistency --- */}
                {/* <div className="mt-8"> ... </div> */}
            </div>
        </div>
    );
};

export default SignUpPage;

