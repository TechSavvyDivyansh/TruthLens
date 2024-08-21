"use client"
import { useTheme } from 'next-themes';
import React from 'react'

export default function report() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`w-[99%] h-[550px] rounded-xl ml-5 p-5 overflow-y-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <div className='flex items-center justify-center h-10'>Add filters here</div>
      <div>report</div>
    </div>
  )
} 
