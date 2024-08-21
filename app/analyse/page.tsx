"use client"
import { CameraCapture } from '@/components/ui/camcapture';
import { FileUpload } from '@/components/ui/file-upload';
import { useTheme } from 'next-themes';
import React from 'react'

export default function analyse() {
  const { theme, setTheme } = useTheme();
  
  const handleFileCapture = (file: File) => {
    console.log('Captured file:', file);
    // Handle the captured file (upload it, display it, etc.)
  };
  return (
    <div className={`w-[99%] h-[550px] rounded-xl ml-5 p-5 overflow-y-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <div className='mb-5'>
        <CameraCapture onCapture={handleFileCapture} />
      </div>
      <div>
        <FileUpload />
      </div>
    </div>
  )
} 
