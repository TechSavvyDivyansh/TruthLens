"use client"
import { useTheme } from 'next-themes';
import React from 'react'

export default function profile() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`w-[99%] h-[88%] rounded-xl ml-5 p-5 ${theme === 'dark' ? 'darkThemeForeground' : 'lightThemeForeground'}`}>
      profile
    </div>
  )
}
