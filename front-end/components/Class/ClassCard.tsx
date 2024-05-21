import React from 'react'
import classImg from "../../assets/portrait-young-girl-student-attending-school.jpg"
import Image from 'next/image'
import "./class.css"
function ClassCard({classes}) {
  return (
    <div className='relative w-1/3 h-80  rounded-xl shadow-md flex flex-col classCard transition-all duration-300 ease-in-out'>
       <Image src={classImg} alt='class image' className='w-full rounded-xl h-full object-cover hover:brightness-90'/>
       <div className='py-3 px-5 absolute top-2/3 bg-[rgba(255,255,255,0.9)] h-1/3 rounded-b-xl'>
        <h1 className='font-semibold'>{classes.className}</h1>
        <p className=" text-ellipsissis text-sm">{classes.description}</p>
       </div>
    </div>
  )
}

export default ClassCard