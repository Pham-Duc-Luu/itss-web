"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Send } from "lucide-react";

function CreateCollectionInput({
  name,
  label,
  placeholder,
  setpostContent,
  postContent,
  ...inputParams
}: any) {
  return  
  <div className='w-full'>
    <input type="text" name={name} id="" placeholder={placeholder} className='bg-transparent w-full border-b-2 border-gray-600 focus:outline-0 mb-2 placeholder:text-slate-300 py-3 focus:border-b-4 focus:border-sky-700' {...inputParams}/>
    <input type="text" name={name} id="" placeholder={placeholder} className='bg-transparent w-full border-b-2 border-gray-600 focus:outline-0 mb-2 placeholder:text-slate-300 py-3 focus:border-b-4 focus:border-cyan-500' {...inputParams}/>
    <label htmlFor={name} className='block text-xs text-gray-400 font-medium uppercase tracking-wider'>{label}</label>
</div>;
}

export default CreateCollectionInput;
