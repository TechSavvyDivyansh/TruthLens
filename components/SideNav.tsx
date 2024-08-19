import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SideNav() {
  return (
    <div className='sidebar'>
        <Image src="/assets/logo.png" width={170} height={170} alt="logo" className=''/>
        <div className="flex flex-col gap-7 my-20">
           <Link href="/">
              <div className="sidebarItem">
                <i className='bx bxs-analyse  text-2xl'></i>
                <p className=''>Analyse Media</p>
              </div>
           </Link>
           <Link href="/history">
              <div className="sidebarItem">
                  <i className='bx bx-history  text-2xl' ></i>
                  <p className=''>History</p>
              </div>
           </Link>
           <Link href="/report">
            <div className="sidebarItem">
                <i className='bx bx-line-chart  text-2xl' ></i>
                <p className=''>Report</p>
              </div>
           </Link>
           <Link href="/profile">
              <div className="sidebarItem">
                  <i className='bx bxs-user  text-2xl' ></i>
                  <p className=''>Profile</p>
              </div>
           </Link>
        </div>
        <div className="">hello</div>
    </div>
  )
}
