'use client'
import React from 'react';
import { useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import CreateCollectionInput from '@/components/Input/CreateCollectionInput';
import Plus from '@/components/Svg/Plus';
// * name field
// * description field
// * summary field
// * list of created flashcards
// * fields to create new flashcards : frond image + frond text + back image + back text
// * create new buttons



const WordsList = () => {
  const [wordList, setWordList] = useState([])



  return (
    <div className='px-16 py-10'>
      <h1 className='font-black text-2xl mb-10'>Create new collection</h1>
      <div className='w-1/2 flex flex-col gap-7 mb-10'>
        <CreateCollectionInput name={'Title'} label={'Title'} placeholder={'Enter title, example: Unit 11...'}/>
        <CreateCollectionInput name={'Description'} label={'Description'} placeholder={'Enter description...'}/>
        </div>
      <div className="flex justify-center">
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded flex gap-3">
          <div className='mt-1'>
            <Plus />
          </div>
          Add
        </button>
      </div>
    </div>
  );
};

export default WordsList;