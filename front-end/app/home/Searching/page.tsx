//'use client'

import React from 'react';
import { FakeClassData } from '@/API/FakeData';
import { FakeCollectionData } from '@/API/FakeData';
import CollectionCard from '@/components/Collection/CollectionCard';
import ClassCard from '@/components/Class/ClassCard';


const page = () => {
  return (
    <div className="px-16 py-12 flex flex-col gap-12">
        <div className=''>
            <h1 className='text-2xl font-bold mb-10'>Collections</h1>
            <div className='flex gap-10'>
                {FakeCollectionData.map((collection, index) => <CollectionCard key={index} collection={collection}/>)}
            </div>
        </div>

        <div className=''>
            <h1 className='text-2xl font-bold mb-10'>Classes</h1>
            <div className='flex gap-10'>
                {FakeClassData.map((c,i) => <ClassCard key={i} classes={c}/>)}
            </div>
        </div>
    </div>
  )
};

export default page;
