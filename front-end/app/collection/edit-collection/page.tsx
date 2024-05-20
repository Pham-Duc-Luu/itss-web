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

// * name field
// * description field
// * summary field
// * list of created flashcards
// * fields to create new flashcards : frond image + frond text + back image + back text
// * create new buttons



const WordsList = () => {
  const [Words, setWords] = useState([]);
  const [inputTerm, setInputTerm] = useState('');
  const [inputDef, setInputDef] = useState('');

  const handleAddWords = () => {
    setWords([...Words, {term: inputTerm, definition: inputDef}]);
    setInputTerm('');
    setInputDef('');
  };

  return (
    <>
      <h3>"collection name"</h3>
      <div>add new word</div>
      <div className="flex justify-center">
        <Input 
          className="mr-4"
          placeholder="term" 
          value={inputTerm} 
          onChange={(e) => setInputTerm(e.target.value)} 
        />
        <Input 
          placeholder="definition" 
          value={inputDef} 
          onChange={(f) => setInputDef(f.target.value)} 
        />
        <Button onClick={handleAddWords}disabled={!inputTerm.trim()}>add</Button>
        </div>
      {Words.map((word, index) => (
        <div className="flex items-center justify-center mt-4" key={index}>
          <div className="w-96 bg-black p-4 rounded-lg flex items-center justify-between text-white">
            <div className="flex items-center">
              <span className="w-24 text-center">{word.term}</span>
              <div className="flex flex-col items-center justify-center mx-4">
                <div className="bg-gray-300 h-6 w-6 flex items-center justify-center rounded-full">
                  <span className="text-black">:</span>
                </div>
              </div>
              <span className="w-24 text-center">{word.definition}</span>
            </div>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Edit</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default WordsList;