"use client"

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import ForgotpasswordForm from './forgotPwForm';

// * email form
// * code | OTP form
const page = () => {
  let imgURl = "https://img.freepik.com/free-photo/cute-puppy-sitting-outdoors-looking-camera-surrounded-by-flowers-generated-by-artificial-intelligence_188544-84977.jpg?t=st=1713540957~exp=1713544557~hmac=a159e3531eb071cae1c7eaae258fde8f7b509b32d46ee0388dc19a9d83a88ce6&w=2000"

  return <div className='bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 w-screen h-screen flex'>
    <div className='w-3/5  h-auto container rounded-lg shadow-lg bg-white flex m-auto px-0 animate-[ping_0.5s_0s]'>
    <img src={imgURl} className='w-1/2 object-cover rounded-l-lg max-sm:hidden ' alt=''/>
      <Card className='w-1/2 text-black bg-white border-none max-sm:w-full'>
          <CardHeader>
            <CardTitle>Reset password</CardTitle>
            <CardDescription>Enter your email and we&apos;&aposll send you instructions on how to reset your password.</CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotpasswordForm />
          </CardContent>

          <CardFooter className='max-w-md w-full flex flex-col'>
            <p>Quay lại trang <Link href="\auth\login" className='underline underline-offset-2'>Đăng nhập</Link></p>
          </CardFooter>
      </Card>
    </div>
  </div>;
};

export default page;
