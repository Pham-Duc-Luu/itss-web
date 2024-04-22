'use client';
import React, { FC, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import ProfileForm from './loginForm';
// * email + password form
const page: FC = () => {
  let imgURl = "https://img.freepik.com/free-photo/cute-puppy-sitting-outdoors-looking-camera-surrounded-by-flowers-generated-by-artificial-intelligence_188544-84977.jpg?t=st=1713540957~exp=1713544557~hmac=a159e3531eb071cae1c7eaae258fde8f7b509b32d46ee0388dc19a9d83a88ce6&w=2000"

  return <div className='bg-gradient-to-r from-red-400 via-yellow-400 to-pink-400 w-screen h-screen flex'>
    <div className='w-3/5  h-auto container rounded-lg shadow-lg bg-white flex m-auto px-0 animate-[ping_0.5s_ease-in-out_0s]'>
      <Card className='w-1/2 text-black bg-white border-none max-sm:w-full'>
          <CardHeader className='text-center'>
            <CardTitle>Anki</CardTitle>
            <CardDescription>Member Login</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm />
          </CardContent>

          <CardFooter className='max-w-md w-full flex flex-col gap-3'>
            <Link href="\auth\sign-up" className='bg-white text-pink font-semibold shadow rounded-full py-2 border-pink-500 border-2 hover:bg-pink-500 hover:text-white w-full text-center'>Sign up</Link>
            <Link href="\auth\forgotpassword" className='underline underline-offset-2'>Forgot password?</Link>
          </CardFooter>
      </Card>
    <img src={imgURl} className='w-1/2 object-cover rounded-r-lg max-sm:hidden' alt='login-picture'/>
    </div>
  </div>;
};

export default page;
