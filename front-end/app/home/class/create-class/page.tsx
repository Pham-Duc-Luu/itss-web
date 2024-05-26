"use client";
import React from "react";
import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import CreateCollectionInput from "@/components/Input/CreateCollectionInput";
import Plus from "@/components/Svg/Plus";
import WordEditCard from "@/components/Collection/WordEditCard";
import { Label } from "@radix-ui/react-dropdown-menu";

const page = () => {
    return (
        <form className="px-16 py-10">
            <h1 className="font-black text-4xl mb-10">Create New Class</h1>
            <div className="w-1/2 flex flex-col gap-7 mb-10">
                <div>
                    <div className="mb-2 w-full border-b-2 border-gray-600">
                        <input
                            className="hidden"
                            type="file"
                            id="image-upload"
                            name="image-upload"
                        />
                        <label
                            htmlFor="image-upload"
                            className=" mb-4 bg-cyan-300 font-bold rounded-lg text-black px-4 py-2 cursor-pointer hover:bg-blue-300 transition-colors duration-200 inline-block"
                        >
                            Choose file
                        </label>
                    </div>
                    <Label className="mt-2 block text-xs text-gray-400 font-medium uppercase tracking-wider">
                        Avatar
                    </Label>
                </div>
                <CreateCollectionInput
                    name="classname"
                    label="Class name"
                    placeholder="Enter class name"
                />
                <CreateCollectionInput
                    name="classcode"
                    label="Class code"
                    placeholder="Enter Class code"
                />
                <CreateCollectionInput
                    name="description"
                    label="Description"
                    placeholder="Enter Description"
                />
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex justify-end w-full">
                    <button
                        className="px-5 py-3 bg-cyan-300 rounded-lg font-bold hover:bg-cyan-400"
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </div>
        </form>
    );
};

export default page;
