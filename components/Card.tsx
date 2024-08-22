import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import CustomButton from './CustomButton'

type CardPropsType={
    resultSentiment:Number,
    image:string,
    summary:string,
    comments:string
}


export default function Card({resultSentiment,image,summary,comments}:CardPropsType) {
  return (
    <div className="card translate-y-7 overflow-hidden">
            <Image src={image} alt="dummy image" width={350} height={350} className='w-full h-[50%] object-cover'/>
            <div className={`result ${resultSentiment==1?"bg-green-700":"bg-red-400"} p-3`}>
                <p className='font-semibold'>{resultSentiment==1?"GENUINE":"FAKE"}</p>
                <div className="bg-white text-black px-3 py-2 w-fit rounded">
                    87%
                </div>
            </div>
            <div className="p-5 flex flex-col gap-7">
              <p className='text-md'>{summary}</p>
              <p>{comments}</p>
              <div className="flex justify-between">
                <div className=""></div>
                <CustomButton className={"bg-red-400"}>Report</CustomButton>
              </div>
            </div>
        </div>
  )
}
