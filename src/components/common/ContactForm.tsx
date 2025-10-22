'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LuCheck } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
        console.log('Form submitted:', formData);
    };

    return (
        <section
            className="bg-white py-20 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: "url('/images/contact-us-gradiant-background.png')",
                backgroundSize: '100% 50%',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-[#ae8b3b] mb-4">Contact Us</h2>
                    <p className="text-gray-500">
                        We&#39;re here to help! Whether you have questions, feedback, or need <br /> assistance, our team is ready to support you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-xl p-8 shadow h-[70%]">
                        <h3 className="text-xl font-semibold mb-4">Thank you for your interest in IDG.</h3>
                        <p className="mb-6">
                            The Customer Service team will respond to all emails within 48 hours, Monday to Friday (10:00 - 19:00 Central European Time), excluding holidays. <br />
                        </p>
                        <p className="mb-6">
                            Please submit your inquiry using the form below.
                        </p>

                        <ul className="space-y-4 text-sm text-gray-700">
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
                    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow space-y-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
                            <div className="w-full space-y-2">
                                <Label htmlFor="firstName" className="text-sm text-muted-foreground">First name</Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="w-full space-y-2">
                                <Label htmlFor="lastName" className="text-sm text-muted-foreground">Last name</Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        {/* ✅ Phone number with country code */}
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm text-muted-foreground">Phone number</Label>
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
                                inputClass="!w-full !h-10 !text-base !pl-12 !border !border-gray-300 !rounded-lg focus:!border-[#ae8b3b] focus:!shadow-none"
                                buttonClass="!border !border-gray-300 !rounded-l-lg"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm text-muted-foreground">Email address</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm text-muted-foreground">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={10}
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
