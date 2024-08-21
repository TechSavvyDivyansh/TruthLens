import Image from 'next/image'
import React from 'react'

export default function ScanAnimation() {
  return (
    <div className='w-[600px] h-[500px] bg-gradient-to-b from-[#242424] to-[#24242437] rounded-xl flex flex-col items-center justify-evenly'>
        <div className="w-full flex flex-col items-center scan-animation -translate-y-10">
            <div className="w-[120%] h-[2px] bg-blue-700"></div>
            <div className="w-[120%] h-[30px] bg-gradient-to-b from-[#4d49ca] to-transparent blur-lg"></div>
        </div>
        <Image src="/assets/gallery.png" alt="gallery" width={100} height={100} className='w-[200px] h-[200px]'/>
        <p className='w-[60%] text-center text-gray-500'>Upload an image or video to begin detection</p>
    </div>
  )
}
