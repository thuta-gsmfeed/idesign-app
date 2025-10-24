"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ChevronDown, Search } from "lucide-react";
// --- FIX: Replaced Next.js components with standard HTML ---
// import Image from "next/image";
// import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
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

    const [countries, setCountries] = useState<Country[]>([
        { name: "Afghanistan", code: "+93", flag: "https://flagcdn.com/w40/af.png" },
        { name: "Albania", code: "+355", flag: "https://flagcdn.com/w40/al.png" },
        { name: "Algeria", code: "+213", flag: "https://flagcdn.com/w40/dz.png" },
        { name: "Andorra", code: "+376", flag: "https://flagcdn.com/w40/ad.png" },
        { name: "Angola", code: "+244", flag: "https://flagcdn.com/w40/ao.png" },
        { name: "Antigua and Barbuda", code: "+1-268", flag: "https://flagcdn.com/w40/ag.png" },
        { name: "Argentina", code: "+54", flag: "https://flagcdn.com/w40/ar.png" },
        { name: "Armenia", code: "+374", flag: "https://flagcdn.com/w40/am.png" },
        { name: "Australia", code: "+61", flag: "https://flagcdn.com/w40/au.png" },
        { name: "Austria", code: "+43", flag: "https://flagcdn.com/w40/at.png" },
        { name: "Azerbaijan", code: "+994", flag: "https://flagcdn.com/w40/az.png" },
        { name: "Bahamas", code: "+1-242", flag: "https://flagcdn.com/w40/bs.png" },
        { name: "Bahrain", code: "+973", flag: "https://flagcdn.com/w40/bh.png" },
        { name: "Bangladesh", code: "+880", flag: "https://flagcdn.com/w40/bd.png" },
        { name: "Barbados", code: "+1-246", flag: "https://flagcdn.com/w40/bb.png" },
        { name: "Belarus", code: "+375", flag: "https://flagcdn.com/w40/by.png" },
        { name: "Belgium", code: "+32", flag: "https://flagcdn.com/w40/be.png" },
        { name: "Belize", code: "+501", flag: "https://flagcdn.com/w40/bz.png" },
        { name: "Benin", code: "+229", flag: "https://flagcdn.com/w40/bj.png" },
        { name: "Bhutan", code: "+975", flag: "https://flagcdn.com/w40/bt.png" },
        { name: "Bolivia", code: "+591", flag: "https://flagcdn.com/w40/bo.png" },
        { name: "Bosnia and Herzegovina", code: "+387", flag: "https://flagcdn.com/w40/ba.png" },
        { name: "Botswana", code: "+267", flag: "https://flagcdn.com/w40/bw.png" },
        { name: "Brazil", code: "+55", flag: "https://flagcdn.com/w40/br.png" },
        { name: "Brunei", code: "+673", flag: "https://flagcdn.com/w40/bn.png" },
        { name: "Bulgaria", code: "+359", flag: "https://flagcdn.com/w40/bg.png" },
        { name: "Burkina Faso", code: "+226", flag: "https://flagcdn.com/w40/bf.png" },
        { name: "Burundi", code: "+257", flag: "https://flagcdn.com/w40/bi.png" },
        { name: "Cambodia", code: "+855", flag: "https://flagcdn.com/w40/kh.png" },
        { name: "Cameroon", code: "+237", flag: "https://flagcdn.com/w40/cm.png" },
        { name: "Canada", code: "+1", flag: "https://flagcdn.com/w40/ca.png" },
        { name: "Cape Verde", code: "+238", flag: "https://flagcdn.com/w40/cv.png" },
        { name: "Central African Republic", code: "+236", flag: "https://flagcdn.com/w40/cf.png" },
        { name: "Chad", code: "+235", flag: "https://flagcdn.com/w40/td.png" },
        { name: "Chile", code: "+56", flag: "https://flagcdn.com/w40/cl.png" },
        { name: "China", code: "+86", flag: "https://flagcdn.com/w40/cn.png" },
        { name: "Colombia", code: "+57", flag: "https://flagcdn.com/w40/co.png" },
        { name: "Comoros", code: "+269", flag: "https://flagcdn.com/w40/km.png" },
        { name: "Congo (Brazzaville)", code: "+242", flag: "https://flagcdn.com/w40/cg.png" },
        { name: "Congo (Kinshasa)", code: "+243", flag: "https://flagcdn.com/w40/cd.png" },
        { name: "Costa Rica", code: "+506", flag: "https://flagcdn.com/w40/cr.png" },
        { name: "Croatia", code: "+385", flag: "https://flagcdn.com/w40/hr.png" },
        { name: "Cuba", code: "+53", flag: "https://flagcdn.com/w40/cu.png" },
        { name: "Cyprus", code: "+357", flag: "https://flagcdn.com/w40/cy.png" },
        { name: "Czech Republic", code: "+420", flag: "https://flagcdn.com/w40/cz.png" },
        { name: "Denmark", code: "+45", flag: "https://flagcdn.com/w40/dk.png" },
        { name: "Djibouti", code: "+253", flag: "https://flagcdn.com/w40/dj.png" },
        { name: "Dominica", code: "+1-767", flag: "https://flagcdn.com/w40/dm.png" },
        { name: "Dominican Republic", code: "+1-809", flag: "https://flagcdn.com/w40/do.png" },
        { name: "Ecuador", code: "+593", flag: "https://flagcdn.com/w40/ec.png" },
        { name: "Egypt", code: "+20", flag: "https://flagcdn.com/w40/eg.png" },
        { name: "El Salvador", code: "+503", flag: "https://flagcdn.com/w40/sv.png" },
        { name: "Equatorial Guinea", code: "+240", flag: "https://flagcdn.com/w40/gq.png" },
        { name: "Eritrea", code: "+291", flag: "https://flagcdn.com/w40/er.png" },
        { name: "Estonia", code: "+372", flag: "https://flagcdn.com/w40/ee.png" },
        { name: "Eswatini", code: "+268", flag: "https://flagcdn.com/w40/sz.png" },
        { name: "Ethiopia", code: "+251", flag: "https://flagcdn.com/w40/et.png" },
        { name: "Fiji", code: "+679", flag: "https://flagcdn.com/w40/fj.png" },
        { name: "Finland", code: "+358", flag: "https://flagcdn.com/w40/fi.png" },
        { name: "France", code: "+33", flag: "https://flagcdn.com/w40/fr.png" },
        { name: "Gabon", code: "+241", flag: "https://flagcdn.com/w40/ga.png" },
        { name: "Gambia", code: "+220", flag: "https://flagcdn.com/w40/gm.png" },
        { name: "Georgia", code: "+995", flag: "https://flagcdn.com/w40/ge.png" },
        { name: "Germany", code: "+49", flag: "https://flagcdn.com/w40/de.png" },
        { name: "Ghana", code: "+233", flag: "https://flagcdn.com/w40/gh.png" },
        { name: "Greece", code: "+30", flag: "https://flagcdn.com/w40/gr.png" },
        { name: "Grenada", code: "+1-473", flag: "https://flagcdn.com/w40/gd.png" },
        { name: "Guatemala", code: "+502", flag: "https://flagcdn.com/w40/gt.png" },
        { name: "Guinea", code: "+224", flag: "https://flagcdn.com/w40/gn.png" },
        { name: "Guinea-Bissau", code: "+245", flag: "https://flagcdn.com/w40/gw.png" },
        { name: "Guyana", code: "+592", flag: "https://flagcdn.com/w40/gy.png" },
        { name: "Haiti", code: "+509", flag: "https://flagcdn.com/w40/ht.png" },
        { name: "Honduras", code: "+504", flag: "https://flagcdn.com/w40/hn.png" },
        { name: "Hungary", code: "+36", flag: "https://flagcdn.com/w40/hu.png" },
        { name: "Iceland", code: "+354", flag: "https://flagcdn.com/w40/is.png" },
        { name: "India", code: "+91", flag: "https://flagcdn.com/w40/in.png" },
        { name: "Indonesia", code: "+62", flag: "https://flagcdn.com/w40/id.png" },
        { name: "Iran", code: "+98", flag: "https://flagcdn.com/w40/ir.png" },
        { name: "Iraq", code: "+964", flag: "https://flagcdn.com/w40/iq.png" },
        { name: "Ireland", code: "+353", flag: "https://flagcdn.com/w40/ie.png" },
        { name: "Israel", code: "+972", flag: "https://flagcdn.com/w40/il.png" },
        { name: "Italy", code: "+39", flag: "https://flagcdn.com/w40/it.png" },
        { name: "Jamaica", code: "+1-876", flag: "https://flagcdn.com/w40/jm.png" },
        { name: "Japan", code: "+81", flag: "https://flagcdn.com/w40/jp.png" },
        { name: "Jordan", code: "+962", flag: "https://flagcdn.com/w40/jo.png" },
        { name: "Kazakhstan", code: "+7", flag: "https://flagcdn.com/w40/kz.png" },
        { name: "Kenya", code: "+254", flag: "https://flagcdn.com/w40/ke.png" },
        { name: "Kiribati", code: "+686", flag: "https://flagcdn.com/w40/ki.png" },
        { name: "Kuwait", code: "+965", flag: "https://flagcdn.com/w40/kw.png" },
        { name: "Kyrgyzstan", code: "+996", flag: "https://flagcdn.com/w40/kg.png" },
        { name: "Laos", code: "+856", flag: "https://flagcdn.com/w40/la.png" },
        { name: "Latvia", code: "+371", flag: "https://flagcdn.com/w40/lv.png" },
        { name: "Lebanon", code: "+961", flag: "https://flagcdn.com/w40/lb.png" },
        { name: "Lesotho", code: "+266", flag: "https://flagcdn.com/w40/ls.png" },
        { name: "Liberia", code: "+231", flag: "https://flagcdn.com/w40/lr.png" },
        { name: "Libya", code: "+218", flag: "https://flagcdn.com/w40/ly.png" },
        { name: "Liechtenstein", code: "+423", flag: "https://flagcdn.com/w40/li.png" },
        { name: "Lithuania", code: "+370", flag: "https://flagcdn.com/w40/lt.png" },
        { name: "Luxembourg", code: "+352", flag: "https://flagcdn.com/w40/lu.png" },
        { name: "Madagascar", code: "+261", flag: "https://flagcdn.com/w40/mg.png" },
        { name: "Malawi", code: "+265", flag: "https://flagcdn.com/w40/mw.png" },
        { name: "Malaysia", code: "+60", flag: "https://flagcdn.com/w40/my.png" },
        { name: "Maldives", code: "+960", flag: "https://flagcdn.com/w40/mv.png" },
        { name: "Mali", code: "+223", flag: "https://flagcdn.com/w40/ml.png" },
        { name: "Malta", code: "+356", flag: "https://flagcdn.com/w40/mt.png" },
        { name: "Marshall Islands", code: "+692", flag: "https://flagcdn.com/w40/mh.png" },
        { name: "Mauritania", code: "+222", flag: "https://flagcdn.com/w40/mr.png" },
        { name: "Mauritius", code: "+230", flag: "https://flagcdn.com/w40/mu.png" },
        { name: "Mexico", code: "+52", flag: "https://flagcdn.com/w40/mx.png" },
        { name: "Micronesia", code: "+691", flag: "https://flagcdn.com/w40/fm.png" },
        { name: "Moldova", code: "+373", flag: "https://flagcdn.com/w40/md.png" },
        { name: "Monaco", code: "+377", flag: "https://flagcdn.com/w40/mc.png" },
        { name: "Mongolia", code: "+976", flag: "https://flagcdn.com/w40/mn.png" },
        { name: "Montenegro", code: "+382", flag: "https://flagcdn.com/w40/me.png" },
        { name: "Morocco", code: "+212", flag: "https://flagcdn.com/w40/ma.png" },
        { name: "Mozambique", code: "+258", flag: "https://flagcdn.com/w40/mz.png" },
        { name: "Myanmar", code: "+95", flag: "https://flagcdn.com/w40/mm.png" },
        { name: "Namibia", code: "+264", flag: "https://flagcdn.com/w40/na.png" },
        { name: "Nauru", code: "+674", flag: "https://flagcdn.com/w40/nr.png" },
        { name: "Nepal", code: "+977", flag: "https://flagcdn.com/w40/np.png" },
        { name: "Netherlands", code: "+31", flag: "https://flagcdn.com/w40/nl.png" },
        { name: "New Zealand", code: "+64", flag: "https://flagcdn.com/w40/nz.png" },
        { name: "Nicaragua", code: "+505", flag: "https://flagcdn.com/w40/ni.png" },
        { name: "Niger", code: "+227", flag: "https://flagcdn.com/w40/ne.png" },
        { name: "Nigeria", code: "+234", flag: "https://flagcdn.com/w40/ng.png" },
        { name: "North Korea", code: "+850", flag: "https://flagcdn.com/w40/kp.png" },
        { name: "North Macedonia", code: "+389", flag: "https://flagcdn.com/w40/mk.png" },
        { name: "Norway", code: "+47", flag: "https://flagcdn.com/w40/no.png" },
        { name: "Oman", code: "+968", flag: "https://flagcdn.com/w40/om.png" },
        { name: "Pakistan", code: "+92", flag: "https://flagcdn.com/w40/pk.png" },
        { name: "Palau", code: "+680", flag: "https://flagcdn.com/w40/pw.png" },
        { name: "Panama", code: "+507", flag: "https://flagcdn.com/w40/pa.png" },
        { name: "Papua New Guinea", code: "+675", flag: "https://flagcdn.com/w40/pg.png" },
        { name: "Paraguay", code: "+595", flag: "https://flagcdn.com/w40/py.png" },
        { name: "Peru", code: "+51", flag: "https://flagcdn.com/w40/pe.png" },
        { name: "Philippines", code: "+63", flag: "https://flagcdn.com/w40/ph.png" },
        { name: "Poland", code: "+48", flag: "https://flagcdn.com/w40/pl.png" },
        { name: "Portugal", code: "+351", flag: "https://flagcdn.com/w40/pt.png" },
        { name: "Qatar", code: "+974", flag: "https://flagcdn.com/w40/qa.png" },
        { name: "Romania", code: "+40", flag: "https://flagcdn.com/w40/ro.png" },
        { name: "Russia", code: "+7", flag: "https://flagcdn.com/w40/ru.png" },
        { name: "Rwanda", code: "+250", flag: "https://flagcdn.com/w40/rw.png" },
        { name: "Saint Kitts and Nevis", code: "+1-869", flag: "https://flagcdn.com/w40/kn.png" },
        { name: "Saint Lucia", code: "+1-758", flag: "https://flagcdn.com/w40/lc.png" },
        { name: "Saint Vincent and the Grenadines", code: "+1-784", flag: "https://flagcdn.com/w40/vc.png" },
        { name: "Samoa", code: "+685", flag: "https://flagcdn.com/w40/ws.png" },
        { name: "San Marino", code: "+378", flag: "https://flagcdn.com/w40/sm.png" },
        { name: "Sao Tome and Principe", code: "+239", flag: "https://flagcdn.com/w40/st.png" },
        { name: "Saudi Arabia", code: "+966", flag: "https://flagcdn.com/w40/sa.png" },
        { name: "Senegal", code: "+221", flag: "https://flagcdn.com/w40/sn.png" },
        { name: "Serbia", code: "+381", flag: "https://flagcdn.com/w40/rs.png" },
        { name: "Seychelles", code: "+248", flag: "https://flagcdn.com/w40/sc.png" },
        { name: "Sierra Leone", code: "+232", flag: "https://flagcdn.com/w40/sl.png" },
        { name: "Singapore", code: "+65", flag: "https://flagcdn.com/w40/sg.png" },
        { name: "Slovakia", code: "+421", flag: "https://flagcdn.com/w40/sk.png" },
        { name: "Slovenia", code: "+386", flag: "https://flagcdn.com/w40/si.png" },
        { name: "Solomon Islands", code: "+677", flag: "https://flagcdn.com/w40/sb.png" },
        { name: "Somalia", code: "+252", flag: "https://flagcdn.com/w40/so.png" },
        { name: "South Africa", code: "+27", flag: "https://flagcdn.com/w40/za.png" },
        { name: "South Korea", code: "+82", flag: "https://flagcdn.com/w40/kr.png" },
        { name: "South Sudan", code: "+211", flag: "https://flagcdn.com/w40/ss.png" },
        { name: "Spain", code: "+34", flag: "https://flagcdn.com/w40/es.png" },
        { name: "Sri Lanka", code: "+94", flag: "https://flagcdn.com/w40/lk.png" },
        { name: "Sudan", code: "+249", flag: "https://flagcdn.com/w40/sd.png" },
        { name: "Suriname", code: "+597", flag: "https://flagcdn.com/w40/sr.png" },
        { name: "Sweden", code: "+46", flag: "https://flagcdn.com/w40/se.png" },
        { name: "Switzerland", code: "+41", flag: "https://flagcdn.com/w40/ch.png" },
        { name: "Syria", code: "+963", flag: "https://flagcdn.com/w40/sy.png" },
        { name: "Taiwan", code: "+886", flag: "https://flagcdn.com/w40/tw.png" },
        { name: "Tajikistan", code: "+992", flag: "https://flagcdn.com/w40/tj.png" },
        { name: "Tanzania", code: "+255", flag: "https://flagcdn.com/w40/tz.png" },
        { name: "Thailand", code: "+66", flag: "https://flagcdn.com/w40/th.png" },
        { name: "Togo", code: "+228", flag: "https://flagcdn.com/w40/tg.png" },
        { name: "Tonga", code: "+676", flag: "https://flagcdn.com/w40/to.png" },
        { name: "Trinidad and Tobago", code: "+1-868", flag: "https://flagcdn.com/w40/tt.png" },
        { name: "Tunisia", code: "+216", flag: "https://flagcdn.com/w40/tn.png" },
        { name: "Turkey", code: "+90", flag: "https://flagcdn.com/w40/tr.png" },
        { name: "Turkmenistan", code: "+993", flag: "https://flagcdn.com/w40/tm.png" },
        { name: "Tuvalu", code: "+688", flag: "https://flagcdn.com/w40/tv.png" },
        { name: "Uganda", code: "+256", flag: "https://flagcdn.com/w40/ug.png" },
        { name: "Ukraine", code: "+380", flag: "https://flagcdn.com/w40/ua.png" },
        { name: "United Arab Emirates", code: "+971", flag: "https://flagcdn.com/w40/ae.png" },
        { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
        { name: "United States", code: "+1", flag: "https://flagcdn.com/w40/us.png" },
        { name: "Uruguay", code: "+598", flag: "https://flagcdn.com/w40/uy.png" },
        { name: "Uzbekistan", code: "+998", flag: "https://flagcdn.com/w40/uz.png" },
        { name: "Vanuatu", code: "+678", flag: "https://flagcdn.com/w40/vu.png" },
        { name: "Vatican City", code: "+379", flag: "https://flagcdn.com/w40/va.png" },
        { name: "Venezuela", code: "+58", flag: "https://flagcdn.com/w40/ve.png" },
        { name: "Vietnam", code: "+84", flag: "https://flagcdn.com/w40/vn.png" },
        { name: "Yemen", code: "+967", flag: "https://flagcdn.com/w40/ye.png" },
        { name: "Zambia", code: "+260", flag: "https://flagcdn.com/w40/zm.png" },
        { name: "Zimbabwe", code: "+263", flag: "https://flagcdn.com/w40/zw.png" },
    ]);

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
                        className="w-full mt-6 text-white font-bold text-lg py-6 rounded-xl bg-gradient-to-r from-[#D98D12] via-[#EBB639] to-[#EBB639]  hover:opacity-90 transition"
                        type="submit"
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
                    <a href="/login" className="text-[#ae8b3b] font-bold hover:underline">
                        Sign In
                    </a>
                </p>

                {/* --- UI FIX: Removed bottom gold wave image for consistency --- */}
                {/* <div className="mt-8"> ... </div> */}
            </div>
        </div>
    );
};

export default SignUpPage;

