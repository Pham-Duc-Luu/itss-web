'use client'
import React, { useEffect } from 'react';
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
import WordEditCard from '@/components/Collection/WordEditCard';
import { FakeCollectionData } from '@/API/FakeData';
import collectionApi, { ICollection, IFlashCardRequest } from '@/lib/CollectionApi';
// * name field
// * description field
// * summary field
// * list of created flashcards
// * fields to create new flashcards : frond image + frond text + back image + back text
// * create new buttons



const Page = ({params} :{params : {collectionId : string}}) => {
    const [collection, setCollection] = useState<ICollection>()
 useEffect(() => {
    collectionApi.viewCollection().then((res) => {
      setCollection(res.data.data.find((item) => {return item.id == Number(params.collectionId)}))
    })
 },[])

  useEffect(() => {
    console.log(collection)
    if(collection) {
      setWordList(collection?.flashcards) 
    }
  },[collection])

  const [wordList, setWordList] = useState<IFlashCardRequest[]>()
  const [word, setWord] = useState<string>()
  const [mean, setMean] = useState<string>()

  const addWord = () => {
    wordList && word && mean && setWordList([...wordList,{back_text: mean, front_text: word}])
    setWord('')
    setMean('')
    }


  return (
    <form className='px-16 py-10'>
      <h1 className='font-black text-2xl mb-10'>Create new collection</h1>
      <div className='w-1/2 flex flex-col gap-7 mb-10'>
        <CreateCollectionInput name={'Title'} label={'Title'} placeholder={'Enter title, example: Unit 11...'} defaultValue={collection?.name}/>
        <CreateCollectionInput name={'Description'} label={'Description'} placeholder={'Enter description...'}  defaultValue={collection?.description}/>
        </div>
      <div className="flex justify-center gap-10 mb-10">
        <input type="text" name="" id="" value={word} onChange={ (e) => setWord(e.target.value)} placeholder='Word' className='px-3 border-2 rounded-lg border-gray-300'/>
        <input type="text" name="" id="" value={mean} onChange={ (e) => setMean(e.target.value)} placeholder='Definition' className='px-3 border-2 rounded-lg border-gray-300'/>
        <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg flex gap-3" onClick={() => addWord()}>
          <div className='mt-1'>
            <Plus />
          </div>
          Add
        </button>
      </div>

      <div className='flex flex-col gap-5'>
          { wordList && (wordList.map( (word, index) => <WordEditCard key={index} word={word} index={index+1}/>))}
          <div className='w-full h-32 rounded-lg bg-white flex items-center'>
              <button className='mx-auto flex gap-2 uppercase font-bold text-lg pb-2 border-b-4 border-cyan-400 hover:border-yellow-400' onClick={() => setWordList([...wordList,{word: '', meaning: ''}])}>
                <div className='my-auto'><Plus /></div>
                Add word
                </button>
          </div>
          <div className='flex justify-end w-full'>
              <button className='px-5 py-3 bg-cyan-300 rounded-lg font-bold hover:bg-cyan-400' type='submit'>Create</button>
          </div>
      </div>
    </form>
  );
};

export default Page