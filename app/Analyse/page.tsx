"use client"
import Card from '@/components/Card';
import CustomButton from '@/components/CustomButton';
import ScanAnimation from '@/components/ScanAnimation';
import { Button } from '@/components/ui/button';
import { CameraCapture } from '@/components/ui/camcapture';
import { FileUpload } from '@/components/ui/file-upload';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function Analyse() {
  
  const handleFileCapture = (file: File) => {
    console.log('Captured file:', file);
    // Handle the captured file (upload it, display it, etc.)
  };

  const [resultSentiment,setResultSentiment]=useState(0)

  return (
    <div className="">
      {/* <div className='mb-5'>
        <CameraCapture onCapture={handleFileCapture} />
      </div>
      <div>
        <FileUpload />
      </div> */}

      <div className="w-[60vw] h-[90vh] top-24 left-0 p-5 flex flex-col gap-7 items-center justify-center relative">
          <ScanAnimation/>
          <CustomButton className='bg-blue-700 w-[600px]'>UPLOAD MEDIA</CustomButton>
         
          <CustomButton className='border-2 border-blue-700 text-blue-700 absolute bottom-10 right-7'>Anlaysis Media</CustomButton>
      </div>
      <div className="w-[40vw] h-full bg-black absolute top-0 right-0 -z-20 flex justify-center items-center">
          <Card resultSentiment={resultSentiment} image={"/assets/nightforest.avif"} summary={"The video was detected to be possibly a deepfake video because of the following reasons:"} comments={"Inconsistent Facial Movements - 00:10 Anomalies in Lighting - 00:16"} />
      </div>

    </div>
  )
} 
