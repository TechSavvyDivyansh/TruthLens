"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  
  return (
    <div className="navbar shadow-2xl">
      <Image src="/assets/logo.png" width={150} height={150} alt="logo"/>
      <div className="highlighter -top-52 -right-52"></div>

      <div className="flex gap-44">
        <Link href="/analyse" className='text-sm text-slate-500 hover:text-white border-b-2 border-transparent p-1 hover:border-blue-700 transition-all delay-100'>Analysis</Link>
        <Link href="/history" className='text-sm text-slate-500 hover:text-white border-b-2 border-transparent p-1 hover:border-blue-700 transition-all delay-100'>History</Link>
        <Link href="/report" className='text-sm text-slate-500 hover:text-white border-b-2 border-transparent p-1 hover:border-blue-700 transition-all delay-100'>Report</Link>
      </div>

      <div className="">
        <Image src="/assets/profilepic.avif" width={100} height={100} alt="logo" className='rounded-full object-cover w-12 h-12'/>
      </div>
    </div>
  )
} 
