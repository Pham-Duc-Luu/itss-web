import React from 'react'
import Star from '../Svg/Star'
function WordCard({word}: {word: any}) {
  return (
    <div className='w-full h-autp py-5 px-3 shadow-md flex rounded-lg justify-between bg-white'>
        <div className='w-3/4 flex'>
            <div className='border-r-2 border-slate-300 w-1/3 px-5'>
                <p className='font-semibold leading-loose'>{word.word}</p>
            </div>
            <div className='px-10'>
                <p className='font-semibold leading-loose'>{word.meaning}</p>
            </div>
        </div>
        <div className='p-2 rounded-lg hover:bg-slate-200'>
            <Star size={20} color='#6B7280'/>
        </div>
    </div>
  )
}

export default WordCard