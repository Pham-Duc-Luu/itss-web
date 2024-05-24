'use client'

import React, { useEffect } from 'react';
import { FakeCollectionData, FakeClassData } from '../../API/FakeData';
import CollectionCard from '@/components/Collection/CollectionCard';
import ClassCard from '@/components/Class/ClassCard';

// * search bar
// * logo + user avatar + settings button + create new collection button

// * list of public class
// * list of collection

const Page = () => {
  useEffect(() => {
        window.localStorage.setItem('user','1')
  },[]) 

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

export default Page;

/**/
