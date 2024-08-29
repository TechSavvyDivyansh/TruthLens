"use client"
import { ExpandableCardDemo } from '@/components/ui/expandable-card';
import React from 'react'

export default function History() {
  return (
    <div className={`fixed top-[9vh] w-full h-[90vh]`}>
        {/* <div className='flex items-center justify-center h-10'>Add filters here</div> */}
        <div className="w-full flex"> 
          <div className="w-[600px] h-[100vh] bg-[#00000052] p-5">
            Filter
          </div>
          <div className='overflow-y-scroll remove-scrollbar h-[90vh] w-full p-8'>
            <ExpandableCardDemo />
          </div>
        </div>
    </div>
  )
}
