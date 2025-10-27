'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// --- (NEW) Import ChevronDown icon ---
import { CreditCard, Lock, ChevronDown } from 'lucide-react';
// import { footer } from "motion/react-client"; // This import seems incorrect, removing it.

// --- (MODIFIED) Reusable Form Components ---

const Input = ({ label, placeholder, id, type = 'text' }: { label: string, placeholder: string, id: string, type?: string }) => (
    <div className="relative">
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg peer placeholder-transparent
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label
            htmlFor={id}
            // --- (MODIFIED) Added dark:bg-white. Adjust if your dark mode body is different. ---
            className="absolute left-3.5 -top-2.5 text-sm text-gray-600 bg-white dark:bg-white px-1
                 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
        >
            {label}
        </label>
    </div>
);

const Select = ({ label, id, children }: { label: string, id: string, children: React.ReactNode }) => (
    <div className="relative">
        <select
            id={id}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
        >
            {children}
        </select>
        <label
            htmlFor={id}
            // --- (MODIFIED) Added dark:bg-white. ---
            className="absolute left-3.5 -top-2.5 text-sm text-gray-600 bg-white dark:bg-white px-1"
        >
            {label}
        </label>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>
);

// ... (ShippingOption component - no changes) ...
const ShippingOption = ({ id, label, price, checked, onChange }: { id: string, label: string, price: string, checked: boolean, onChange: () => void }) => (
    <div
        className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer
                ${checked ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-300'}`}
        onClick={onChange}
    >
        <div className="flex items-center space-x-3">
            <input
                type="radio"
                id={id}
                name="shippingMethod"
                checked={checked}
                onChange={onChange}
                className="w-5 h-5 text-blue-600"
            />
            <label htmlFor={id} className="text-sm font-medium cursor-pointer">{label}</label>
        </div>
        <span className="text-sm font-medium">{price}</span>
    </div>
);


export default function CheckoutPage() {
    const { cartItems, subtotal } = useCart();
    const [shippingMethod, setShippingMethod] = useState('custom');
    // --- (NEW) State for mobile summary ---
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);

    const shippingCost = shippingMethod === 'custom' ? 0.00 : 6.95;
    const total = subtotal + shippingCost;

    // --- (NEW) Reusable Order Summary Component ---
    // This avoids duplicating code and logic
    const OrderSummary = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={isMobile ? "bg-gray-50 dark:bg-gray-800 p-4" : "max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 lg:sticky lg:top-0"}>
            {/* Cart Items */}
            <div className="space-y-4 border-b border-gray-300 dark:border-gray-700 pb-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                        <div className="relative">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={64}
                                height={80}
                                // --- (MODIFIED) Use object-contain ---
                                className="w-16 h-20 object-contain rounded-lg border border-gray-200 dark:border-gray-700 bg-white"
                            />
                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-700 text-white text-xs
                                             font-semibold rounded-full flex items-center justify-center">
                                {item.quantity}
                            </span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium text-sm">{item.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.color} / {item.storage}</p>
                        </div>
                        <span className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
            </div>

            {/* Discount Code */}
            <div className="py-6 border-b border-gray-300 dark:border-gray-700">
                <div className="flex space-x-3">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            id={`discount-${isMobile ? 'mobile' : 'desktop'}`}
                            placeholder="Discount code"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg peer placeholder-transparent
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label
                            htmlFor={`discount-${isMobile ? 'mobile' : 'desktop'}`}
                            // --- (MODIFIED) Background matches container ---
                            className="absolute left-3.5 -top-2.5 text-sm text-gray-600 bg-gray-50 dark:bg-gray-800 px-1
                                       transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                                       peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                        >
                            Discount code
                        </label>
                    </div>
                    <button className="px-5 py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                        Apply
                    </button>
                </div>
            </div>

            {/* Totals */}
            <div className="py-6 space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                    <span className="font-medium">
                        {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                </div>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-2xl font-semibold">${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );


    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="flex flex-col lg:flex-row">

                {/* Left Side: Form */}
                <div className="w-full lg:w-3/5 lg:order-1 border-r border-gray-200 dark:border-gray-800">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

                        <Link href="/" className="mb-8 block">
                            <Image
                                src="/images/logo.png"
                                alt="IDesignGold Logo"
                                width={150}
                                height={60}
                                className="h-auto dark:invert" // Added dark:invert for dark mode
                            />
                        </Link>

                        {/* --- (NEW) Mobile Order Summary --- */}
                        <div className="lg:hidden w-full border-b border-t border-gray-200 dark:border-gray-700">
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => setIsSummaryOpen(!isSummaryOpen)}
                            >
                                <div className="flex items-center space-x-3">
                                    <ChevronDown
                                        className={`w-5 h-5 text-blue-600 transition-transform ${isSummaryOpen ? 'rotate-180' : ''}`}
                                    />
                                    <span className="text-blue-600 font-medium">
                                        {isSummaryOpen ? 'Hide' : 'Show'} order summary
                                    </span>
                                </div>
                                <span className="font-semibold text-lg">${total.toFixed(2)}</span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${isSummaryOpen ? 'max-h-screen' : 'max-h-0'}`}
                            >
                                <OrderSummary isMobile={true} />
                            </div>
                        </div>
                        {/* --- End Mobile Summary --- */}


                        {/* Express Checkout */}
                        <div className="mb-8 mt-8 lg:mt-0"> {/* Add margin-top for mobile */}
                            <h2 className="text-lg font-medium mb-3">Express checkout</h2>
                            <button className="w-full h-12 bg-black text-white rounded-lg flex items-center justify-center transition-opacity hover:opacity-90">
                                <img
                                    src="/images/g-pay.svg"
                                    alt="Google Pay"
                                    width={32}
                                    height={20}
                                    className="w-8 h-5 object-contain text-white"
                                />
                            </button>
                        </div>

                        <div className="flex items-center my-6">
                            <span className="flex-grow border-t border-gray-300 dark:border-gray-700"></span>
                            <span className="mx-4 text-sm text-gray-500">OR</span>
                            <span className="flex-grow border-t border-gray-300 dark:border-gray-700"></span>
                        </div>

                        <form>
                            <div className="space-y-6">
                                {/* Contact */}
                                <section>
                                    <h2 className="text-lg font-medium mb-3">Contact</h2>
                                    <Input label="Email" placeholder="Enter your email" id="email" type="email" />
                                    <div className="mt-3 flex items-center">
                                        <input type="checkbox" id="newsletter" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                        <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Email me with news and offers</label>
                                    </div>
                                </section>

                                {/* Delivery */}
                                <section>
                                    <h2 className="text-lg font-medium mb-3">Delivery</h2>
                                    <div className="space-y-5">
                                        <Select label="Country/Region" id="country">
                                            <option value="" disabled>Select a country</option>
                                            <option value="ae">United Arab Emirates</option>
                                            <option value="us">United States</option>
                                            <option value="gb">United Kingdom</option>
                                        </Select>
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input label="First name" placeholder="First name" id="first-name" />
                                            <Input label="Last name" placeholder="Last name" id="last-name" />
                                        </div>
                                        <Input label="Address" placeholder="Address" id="address" />
                                        <Input label="Apartment, suite, etc. (optional)" placeholder="Apartment, suite, etc." id="apartment" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input label="City" placeholder="City" id="city" />
                                            <Select label="Emirate" id="emirate">
                                                <option value="" disabled>Select an emirate</option>
                                                <option value="dubai">Dubai</option>
                                                <option value="abu-dhabi">Abu Dhabi</option>
                                            </Select>
                                        </div>
                                        <Input label="Phone" placeholder="Phone" id="phone" type="tel" />
                                    </div>
                                </section>

                                {/* Shipping Method */}
                                <section>
                                    <h2 className="text-lg font-medium mb-3">Shipping method</h2>
                                    <div className="space-y-4">
                                        <ShippingOption
                                            id="shipping-custom"
                                            label="Customised Orders - Up to 3 weeks"
                                            price="FREE"
                                            checked={shippingMethod === 'custom'}
                                            onChange={() => setShippingMethod('custom')}
                                        />
                                        <ShippingOption
                                            id="shipping-standard"
                                            label="Standard Tracked 3-5 Working Days"
                                            price="$6.95"
                                            checked={shippingMethod === 'standard'}
                                            onChange={() => setShippingMethod('standard')}
                                        />
                                    </div>
                                </section>

                                {/* Payment */}
                                <section>
                                    <h2 className="text-lg font-medium mb-3">Payment</h2>
                                    <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>

                                    <div className="border border-gray-300 dark:border-gray-700 rounded-lg">
                                        <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                            <span className="font-medium">Credit card</span>

                                            {/* --- (MODIFIED) Replaced SVGs with your images --- */}
                                            <div className="flex flex-wrap gap-2">
                                                <div className="px-2 py-1 bg-white border border-gray-200 dark:bg-gray-700 rounded-md">
                                                    <img
                                                        src="/images/visa.svg"
                                                        alt="Visa"
                                                        width={32}
                                                        height={20}
                                                        className="w-8 h-5 object-contain"
                                                    />
                                                </div>
                                                <div className="px-2 py-1 bg-white border border-gray-200 dark:bg-gray-700 rounded-md">
                                                    <img
                                                        src="/images/master-card.svg"
                                                        alt="Mastercard"
                                                        width={32}
                                                        height={20}
                                                        className="w-8 h-5 object-contain"
                                                    />
                                                </div>
                                                <div className="px-2 py-1 bg-white border border-gray-200 dark:bg-gray-700 rounded-md">
                                                    <img
                                                        src="/images/apple-pay.svg"
                                                        alt="Apple Pay"
                                                        width={32}
                                                        height={20}
                                                        className="w-8 h-5 object-contain"
                                                    />
                                                </div>
                                                <div className="px-2 py-1 bg-white border border-gray-200 dark:bg-gray-700 rounded-md">
                                                    <img
                                                        src="/images/g-pay.svg"
                                                        alt="Google Pay"
                                                        width={32}
                                                        height={20}
                                                        className="w-8 h-5 object-contain"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="p-4 space-y-4">
                                            <Input label="Card number" placeholder="Card number" id="card-number" />
                                            <Input label="Name on card" placeholder="Name on card" id="card-name" />
                                            <div className="grid grid-cols-2 gap-4">
                                                <Input label="Expiration date (MM / YY)" placeholder="MM / YY" id="card-expiry" />
                                                <Input label="Security code" placeholder="CVC" id="card-cvc" />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg"
                            >
                                Pay now
                            </button>
                        </form>

                        <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
                            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                                <Link href="/refund-policy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">Refund policy</Link>
                                <Link href="/shipping" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">Shipping policy</Link>
                                <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">Privacy policy</Link>
                                <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">Terms of service</Link>
                            </nav>
                        </footer>
                    </div>
                </div>

                {/* --- (MODIFIED) Right Side: Order Summary (Desktop only) --- */}
                <div className="w-full lg:w-2/5 lg:order-2 bg-gray-50 dark:bg-gray-800 hidden lg:block">
                    <OrderSummary isMobile={false} />
                </div>

            </div>
        </div>
    );
}