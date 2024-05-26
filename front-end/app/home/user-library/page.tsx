import React from 'react';
import { FakeCollectionData } from '@/API/FakeData';
import Share from '@/components/Svg/Share'
import Plus from '@/components/Svg/Plus';
import Three_dot from '@/components/Svg/Three_dot';
import CollectionCard from '@/components/Collection/CollectionCard';
// * list of collections user have
// * list of class user have
const page = () => {
  return (
    <div className='w-full px-16 py-10 '>
      <div className='w-3/4'>
          <div className='flex justify-between'>
            <h1 className='flex gap-5 font-black text-3xl mb-5'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256" fontStyle="fill:#6B7280">
                <g fill="#6B7280" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" fontStyle="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M4,4c-1.09425,0 -2,0.90575 -2,2v12c0,1.09426 0.90575,2 2,2h16c1.09426,0 2,-0.90574 2,-2v-10c0,-1.09425 -0.90574,-2 -2,-2h-8l-2,-2zM4,6h5.17188l2,2h8.82813v10h-16z"></path></g></g>
            </svg>
              My collections
            </h1>
            
            <div className='flex gap-3'>
              <button className='border-[3px] border-gray-300 rounded-full w-10 h-10 text-gray-500 font-semibold flex gap-3 p-2'>
                          <div className='mx-auto my-auto'><Plus /></div>
              </button>
              <button className='border-[3px] border-gray-300 rounded-full w-10 h-10 text-gray-500 font-semibold flex gap-3 p-2'>
                          <div className='mx-auto my-auto'><Share /></div>
              </button>
              <button className='border-[3px] border-gray-300 rounded-full w-10 h-10 text-gray-500 font-semibold flex gap-3'>
                          <div className='mx-auto my-auto'><Three_dot /></div>
              </button>
            </div>

          </div>

          <div className='flex px-3 mb-10'>
              <h2 className='font-medium mr-10'>{FakeCollectionData.length} collections</h2>
              <div className='flex gap-3'>
                  <p>Created by</p>
                  <div className='h-6 w-6 rounded-full bg-slate-600'></div>
                  <p className='font-bold'>{FakeCollectionData[0].author}</p>
              </div>
          </div>
        </div>
        <div className='flex gap-5 flex-wrap'>
                  {FakeCollectionData.map((collection, index) => <CollectionCard key={index} collection={collection}/>)}
        </div>

    </div>
  )
};

export default page;
