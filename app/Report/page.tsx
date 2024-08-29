"use client"
import { useTheme } from 'next-themes';
import React from 'react'

export default function report() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`w-[99%] h-full rounded-xl ml-5 p-5 ${theme === 'dark' ? 'darkThemeForeground' : 'lightThemeForeground'}`}>
      <div className='flex items-center justify-center h-10'>Add filters here</div>
      <div>report</div>
    </div>
  )
} 
