import React from 'react'
import classImg from "../../assets/portrait-young-girl-student-attending-school.jpg"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function ClassCard( {classes}: {classes : any}) {
  const route = useRouter()
  
  return (
    <div className='relative w-1/3 h-80 group rounded-2xl shadow-md flex flex-col classCard transition-all duration-300 ease-in-out' onClick={() => route.push(`/home/class/${classes.id}`)}>
       <Image src={classImg} alt='class image' className='w-full rounded-2xl h-full object-cover group-hover:brightness-110'/>
       <div className='py-3 px-5 absolute top-2/3 bg-[rgba(255,255,255,0.9)] h-1/3 rounded-b-xl group-hover:bg-[rgba(255,255,255,0.6)] transition-all duration-500 ease-in-out delay-50'>
        <h1 className='font-semibold'>{classes.className}</h1>
        <p className=" text-ellipsissis text-sm">{classes.description}</p>
       </div>
    </div>
  )
}

export default ClassCard