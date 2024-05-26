'use client'

import React from 'react';
import { FakeClassData } from '@/API/FakeData';
import { FakeCollectionData } from '@/API/FakeData';
import CollectionCard from '@/components/Collection/CollectionCard';
import ClassCard from '@/components/Class/ClassCard';
import { useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import Class from '@/components/Svg/Class';
const Page = () => {

    const sreach = useSearchParams()
    const sreachQuery = sreach?.get('q')

  return (
    <div className="px-16 py-12 flex flex-col gap-12 w-5/6 mx-auto">
        <h1 className='text-xl font-bold'>Results for &quot;{sreachQuery}&quot;</h1>

        <Tabs defaultValue="All result" className="">
            <TabsList className="grid w-full grid-cols-3 pb-9 border-b-2 border-slate-300 mb-10">
                <TabsTrigger value="All result">All result</TabsTrigger>
                <TabsTrigger value="Collections">
                    Collections
                </TabsTrigger>
                <TabsTrigger value="Classes">Classes</TabsTrigger>
            </TabsList>

            <TabsContent value="All result">
                <div className='flex flex-col gap-10 mt-10'>
                    <div className=''>
                        <h1 className='text-base font-bold mb-5'>Collections</h1>
                        <div className='flex gap-10'>
                            {FakeCollectionData.slice(0,3).map((collection, index) => <CollectionCard key={index} collection={collection}/>)}
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='text-base font-bold mb-5'>Classes</h1>
                        <div className='flex gap-10'>
                            {FakeClassData.map((c,i) => <ClassCard key={i} classes={c}/>)}
                        </div>
                    </div>
                </div>
            </TabsContent>
            
            <TabsContent value="Collections">
                <div className='flex gap-20 mt-10'>
                    <div className='w-1/3 flex flex-col gap-10'>
                        <h1 className='text-2xl font-bold'>Collections</h1>
                        {FakeCollectionData.map((collection, index) => <CollectionCard key={index} collection={collection} />)}
                    </div>

                    <div className='w-2/3 gap-10 flex flex-col'>
                        <h1 className='text-2xl font-bold'>Preview</h1>
                        <div className='min-h-96 bg-white shadow-lg rounded-lg w-full px-9 py-7 flex flex-col gap-5'>
                            <div className='flex justify-between'>
                                <h2 className='font-black text-lg'>{FakeCollectionData[0].title}</h2>
                                <Link href={`/home/collection/1`} className='bg-cyan-400 rounded-lg px-4 py-2 font-semibold text-white'>Study</Link>
                            </div>
                            {FakeCollectionData[0].flashcard.map((word,index) => 
                                <div key={index}>
                                    <h2 className='font-bold text-lg text-gray-600'>{word.word}</h2>
                                    <p>{word.meaning}</p>
                                </div>
                            
                            )}
                        </div>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="Classes">
                <div className='flex flex-wrap gap-10'>
                    {FakeClassData.map((myClass,index) => 
                        <div 
                        className='w-[48%] h-20 bg-white rounded-lg px-5 py-3 flex justify-between'
                        key={index}>
                            <div>
                                <h1 className='font-bold'>{myClass.className}</h1>
                            </div>
                            <Class />
                        </div>
                    )}
                </div>
            </TabsContent>



        </Tabs>                
    </div>
  )
};

export default Page;
