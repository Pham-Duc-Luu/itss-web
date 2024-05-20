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

// * name field
// * description field
// * summary field
// * list of created flashcards
// * fields to create new flashcards : frond image + frond text + back image + back text
// * create new buttons



const CollectionList = () => {
  const [collections, setCollections] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddCollection = () => {
    setCollections([...collections, inputValue]);
    setInputValue('');
  };

  return (
    <>
      <h3>Collection</h3>
      <div>Add New Collection</div>
      <div className="flex justify-center">
        <div className="box">
          <Input 
            className="mr-4"
            placeholder="Collection Name" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
        </div>
        <Button onClick={handleAddCollection} disabled={!inputValue.trim()}>Add</Button>
      </div>
      {collections.map((collection, index) => (
        <div className="flex items-center mt-4" key={index}>
          <div style={{ backgroundColor: 'green'}}></div>
          <span>{collection}</span>
          <div className="flex-1"></div>
          <Link href = "/collection/edit-collection">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Edit</button>
          </Link>        
        </div>
      ))}
    </>
  );
};

export default CollectionList;
