import React from 'react'
import { Button } from './ui/button'


type ButtonProps={
    className?:string,
    children:React.ReactNode
}


export default function CustomButton({className,children}:ButtonProps) {
  return (
    <div>
        <Button className={`cursor-pointer ${className}`}>{children}</Button>
    </div>
  )
}
