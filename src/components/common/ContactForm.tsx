'use client';

import { useState } from 'react';
import { LuCheck } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// Assuming you have 'react-phone-input-2' installed
// and its CSS imported in your main layout/global.css:
// import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section
            className="bg-white dark:bg-gray-950 py-16 md:py-20 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: "url('/images/contact-us-gradiant-background.png')",
                // RESPONSIVE: Set a fixed height for the background image
                // This is more stable than a percentage.
                backgroundSize: '100% 450px',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-[#ae8b3b] dark:text-[#EBB639] mb-4">Contact Us</h2>
                    {/* RESPONSIVE: Removed <br />, added max-w-2xl for natural wrapping */}
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        We&#39;re here to help! Whether you have questions, feedback, or need assistance, our team is ready to support you.
                    </p>
                </div>

                {/* ✅ RESPONSIVE FIX #1: Added 'md:items-start'
                  This aligns both columns to the top, preventing the
                  info box from stretching to match the form's height.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
                    {/* ✅ RESPONSIVE FIX #2: Removed 'h-[70%]'
                      This allows the box to take its natural, content-based height,
                      which works perfectly on all screen sizes.
                    */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 "
                    style={{
                        boxShadow: '0px 32px 120px #947EA826;'
                    }}>
                        <h3 className="text-xl font-semibold mb-4 dark:text-white">Thank you for your interest in IDG.</h3>
                        <p className="mb-6 dark:text-gray-300">
                            The Customer Service team will respond to all emails within 48 hours, Monday to Friday (10:00 - 19:00 Central European Time), excluding holidays.
                        </p>
                        <p className="mb-6 dark:text-gray-300">
                            Please submit your inquiry using the form below.
                        </p>

                        <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                            {[
                                "Understand how our API product may fulfill your needs",
                                "Discover the capabilities and get answers to your questions",
                                "Get a customized quote for your business",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="flex items-center justify-center w-5 h-5 bg-[#ae8b3b] rounded-full mr-2 mt-[1px] flex-shrink-0">
                                        <LuCheck className="w-3 h-3 text-white" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Form Section */}
                    {/* RESPONSIVE: This form layout with 'sm:flex-row' is already perfectly responsive */}
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 space-y-6"
                          style={{
                              boxShadow: '0px 32px 120px #947EA826;'
                          }}>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
                            <div className="w-full space-y-2">
                                <Label htmlFor="firstName" className="text-sm text-muted-foreground dark:text-gray-400">First name</Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                    required
                                />
                            </div>
                            <div className="w-full space-y-2">
                                <Label htmlFor="lastName" className="text-sm text-muted-foreground dark:text-gray-400">Last name</Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone number with country code */}
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm text-muted-foreground dark:text-gray-400">Phone number</Label>
                            {/* RESPONSIVE: Added dark mode classes for the phone input */}
                            <PhoneInput
                                country={'us'}
                                value={formData.phone}
                                onChange={(phone) => setFormData({ ...formData, phone })}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: false,
                                }}
                                containerClass="!w-full"
                                inputClass="!w-full !h-10 !text-base !pl-12 !border !border-gray-300 !rounded-lg focus:!border-[#ae8b3b] focus:!shadow-none dark:!bg-gray-900 dark:!border-gray-700 dark:!text-white"
                                buttonClass="!border !border-gray-300 !rounded-l-lg dark:!bg-gray-800 dark:!border-gray-700"
                                dropdownClass="dark:!bg-gray-800"
                                searchClass="dark:!bg-gray-700 dark:!text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm text-muted-foreground dark:text-gray-400">Email address</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm text-muted-foreground dark:text-gray-400">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={10}
                                className="dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="bg-[#ae8b3b] hover:bg-[#9c7a34] text-white font-semibold px-8 py-3 rounded-full text-base"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
