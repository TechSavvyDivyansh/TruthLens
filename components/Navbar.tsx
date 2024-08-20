"use client"
import { useTheme } from 'next-themes';
import React from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`w-[99%] h-[10%] rounded-xl ml-5 mb-5 p-5 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      Navbar
    </div>
  )
} 
