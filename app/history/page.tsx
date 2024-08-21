"use client"
import { ExpandableCardDemo } from '@/components/ui/expandable-card';
import { useTheme } from 'next-themes';
import React from 'react'

export default function history() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`w-[99%] h-[88%] rounded-xl ml-5 p-5 ${theme === 'dark' ? 'darkThemeForeground' : 'lightThemeForeground'}`}>
      <div className="overflow-y-scroll h-[96%]">
        <div className='flex items-center justify-center h-10'>Add filters here</div>
        <div><ExpandableCardDemo /></div>
      </div>
    </div>
  )
}
