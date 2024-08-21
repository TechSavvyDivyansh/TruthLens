"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const routes = [
    {
        label: "Analyse Media",
        icon: 'bx bxs-analyse',
        href: "/analyse",
        color: "text-blue-500"
    },
    {
        label: "History",
        icon: 'bx bx-history',
        href: "/history",
        color: "text-green-500"
    },
    {
        label: "Report",
        icon: 'bx bx-line-chart',
        href: "/report",
        color: "text-yellow-500"
    },
    {
        label: "Profile",
        icon: 'bx bxs-user',
        href: "/profile",
        color: "text-red-500"
    }
];

export default function SideNav() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Skip rendering until mounted on client
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`p-5 h-[635px] flex flex-col rounded-xl ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
            <div className="px-3 py-2 flex-1">
                <Image src="/assets/logo.png" width={220} height={170} alt="logo" />
            </div>
            <div className="space-y-1 flex flex-col gap-7 my-20">
                {routes.map((route) => (
                    <Link href={route.href} key={route.href} className={`flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
                        <div className="flex items-center flex-1">
                            <i className={`${route.icon} ${route.color} text-2xl`}></i>
                            <span className="h-5 ml-3">{route.label}</span>
                        </div>
                    </Link>
                ))}
                <button onClick={toggleTheme} className={`flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
                    <div className="flex items-center flex-1">
                        {theme === "dark" ? (
                            <Sun className="h-6 w-6" />
                        ) : (
                            <Moon className="h-6 w-6" />
                        )}
                        <span className="h-5 ml-3">Theme</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
