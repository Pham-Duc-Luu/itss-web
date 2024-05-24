"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FakePostData } from "@/API/FakeData";
import Class from "@/components/Svg/Class";
import Plus from "@/components/Svg/Plus";
import Three_dot from "@/components/Svg/Three_dot";
import Addmember from "@/components/Svg/Addmember";
import CreateCollectionInput from "@/components/Input/CreateCollectionInput";
import Send from "@/components/Svg/Send";
import School from "@/components/Svg/School";
import FlashCard from "@/components/Svg/FlashCard";
import { User } from "lucide-react";
import { FakeClassData } from "@/API/FakeData";

const Page = ({ params }: { params: { classId: string } }) => {
    const currentClass = FakeClassData[Number(params.classId)];
    return (
        <div className="flex w-full flex-col py-10 px-16">
            <div className="mb-5 border-b-[1px] border-slate-200 pb-5 flex justify-between">
                <div>
                    <div className="flex mb-2">
                        <Class />
                        <div className="flex text-4xl font-bold ml-4">
                            {currentClass.className}
                        </div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="py-auto px-3 border-[3px] border-gray-300 rounded-full h-10 w-10 font-semibold flex hover:bg-slate-100">
                                <div className="m-auto">
                                    <Addmember />
                                </div>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add member</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="mb-5">
                                    <Label className="w-[120px] mb-3 text-1xl font-bold">
                                        Student code:
                                    </Label>
                                    <Input type="text" placeholder="code" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Add</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="outline">Edit Class Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle className="mb-5 text-3xl font-bold">
                                Edit Class
                            </DialogTitle>
                            <div>
                                <form className="">
                                    <div>
                                        <Label className="w-[120px] mb-3 text-1xl font-bold">
                                            Class Image:
                                        </Label>
                                        <div className="mb-2">
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
                                    </div>
                                    <div className="mb-5">
                                        <Label className="w-[120px] mb-3 text-1xl font-bold">
                                            Class Name:
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Class Name"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <Label className="w-[120px] mb-3 text-1xl font-bold">
                                            Class Code:
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Class Code"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <Label className="mb-3 text-1xl font-bold">
                                            Class Description:
                                        </Label>
                                        <Textarea placeholder="Type your description here." />
                                    </div>
                                    <div className="flex items-center space-x-2 mb-5">
                                        <Checkbox id="terms" />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Allow member to invite new member
                                        </label>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button className="bg-cyan-400 hover:bg-cyan-300 text-black">
                                            Save
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </DialogHeader>

                        <DialogFooter></DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="flex gap-10">
                <div className="w-4/5">
                    <Tabs defaultValue="post" className="">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="post">Post</TabsTrigger>
                            <TabsTrigger value="assignment">
                                Assignment
                            </TabsTrigger>
                            <TabsTrigger value="document">Document</TabsTrigger>
                        </TabsList>
                        {/* Post Part */}
                        <TabsContent value="post">
                            <Card className="flex flex-col pb-5">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-bold">
                                        Post
                                    </CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2 flex-grow overflow-auto">
                                    <div className="justify-center">
                                        {/* Card Post */}
                                        {FakePostData.map((post, index) => (
                                            <Card
                                                className="w-full mb-4 flex flex-col"
                                                key={index}
                                            >
                                                <CardHeader className="px-6 py-4">
                                                    <CardTitle>
                                                        <div className="flex gap-3">
                                                            <Avatar className="mr-2">
                                                                <AvatarImage
                                                                    src="https://github.com/shadcn.png"
                                                                    alt="@shadcn"
                                                                />
                                                                <AvatarFallback>
                                                                    CN
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <Badge className="bg-cyan-400 px-5 leading-none h-auto">
                                                                {post.author}
                                                            </Badge>
                                                            <p className="text-xs font-medium leading-loose my-auto italic">
                                                                {post.post_at.toDateString()}
                                                            </p>
                                                        </div>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="mb-1 text-xl font-bold">
                                                        Title
                                                    </div>
                                                    <div className="w-full items-center gap-4">
                                                        <h2>{post.content}</h2>
                                                    </div>
                                                </CardContent>
                                                <CardFooter className="flex justify-between"></CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </CardContent>
                                <div className="flex gap-5 w-full bg-white px-7">
                                    <CreateCollectionInput
                                        placeholder={"Add new post"}
                                        label={""}
                                        name={"newPost"}
                                    />
                                    <button className="mt-1 px-3 py-2 bg-cyan-400 rounded-2xl font-semibold hover:bg-gray-500">
                                        <Send />
                                    </button>
                                </div>
                            </Card>
                        </TabsContent>
                        {/* Assignment Part */}
                        <TabsContent value="assignment">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Assignment</CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <Tabs
                                        defaultValue="upcoming"
                                        className="w-[340px]"
                                    >
                                        <TabsList className="grid w-full grid-cols-3">
                                            <TabsTrigger value="upcoming">
                                                Upcoming
                                            </TabsTrigger>
                                            <TabsTrigger value="past-due">
                                                Past due
                                            </TabsTrigger>
                                            <TabsTrigger value="completed">
                                                Completed
                                            </TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                    <Card className="w-full mb-4">
                                        <CardHeader>
                                            <CardTitle>
                                                <div className="flex items-center">
                                                    <Avatar className="mr-2">
                                                        <AvatarImage
                                                            src="https://github.com/shadcn.png"
                                                            alt="@shadcn"
                                                        />
                                                        <AvatarFallback>
                                                            CN
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="text-1xl">
                                                        Assignment X
                                                    </div>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent>
                                            <form>
                                                <div className="grid w-full items-center gap-4">
                                                    <div className="flex flex-col space-y-1.5">
                                                        <Label htmlFor="name">
                                                            Description
                                                        </Label>
                                                    </div>
                                                </div>
                                            </form>
                                        </CardContent>
                                        <CardFooter className="flex justify-between"></CardFooter>
                                    </Card>
                                </CardContent>
                                <CardFooter></CardFooter>
                            </Card>
                        </TabsContent>
                        {/* Document Part */}
                        <TabsContent value="document">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Document</CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <Card className="w-full mb-4">
                                        <CardHeader>
                                            <CardTitle>
                                                <div className="flex">
                                                    <Avatar className="mr-2">
                                                        <AvatarImage
                                                            src="https://github.com/shadcn.png"
                                                            alt="@shadcn"
                                                        />
                                                        <AvatarFallback>
                                                            CN
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <Badge>User Name</Badge>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <div className="mb-4 pl-6 text-2xl font-bold">
                                            Title
                                        </div>
                                        <CardContent>
                                            <form>
                                                <div className="grid w-full items-center gap-4">
                                                    <div className="flex flex-col space-y-1.5">
                                                        <Label htmlFor="name">
                                                            Description
                                                        </Label>
                                                    </div>
                                                </div>
                                            </form>
                                        </CardContent>
                                        <CardFooter className="flex justify-between"></CardFooter>
                                    </Card>

                                    <Card className="w-full mb-4">
                                        <CardHeader>
                                            <CardTitle>
                                                <div className="flex">
                                                    <Avatar className="mr-2">
                                                        <AvatarImage
                                                            src="https://github.com/shadcn.png"
                                                            alt="@shadcn"
                                                        />
                                                        <AvatarFallback>
                                                            CN
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <Badge>User Name</Badge>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <div className="mb-4 pl-6 text-2xl font-bold">
                                            Title
                                        </div>
                                        <CardContent>
                                            <form>
                                                <div className="grid w-full items-center gap-4">
                                                    <div className="flex flex-col space-y-1.5">
                                                        <Label htmlFor="name">
                                                            Description
                                                        </Label>
                                                    </div>
                                                </div>
                                            </form>
                                        </CardContent>
                                        <CardFooter className="flex justify-between"></CardFooter>
                                    </Card>
                                </CardContent>
                                <CardFooter></CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="w-1/5 flex flex-col gap-5">
                    <h1 className="tracking-wide uppercase text-gray-500 font-bold text-sm">
                        Invite class id
                    </h1>
                    <div className="flex gap-5 w-full">
                        <h1 className="bg-white px-5 py-2 rounded-lg border-2 border-gray-700 w-3/4">
                            #12345
                        </h1>
                        <button className="rounded-lg px-5 py-2 bg-cyan-400 hover:bg-cyan-300 font-semibold text-sm">
                            Copy
                        </button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="tracking-wide uppercase text-gray-500 font-bold text-sm">
                            Class detail
                        </h1>
                        <div className="flex gap-5 font-semibold leading-loose">
                            <School /> Class name
                        </div>
                        <div className="flex gap-5 font-semibold leading-loose">
                            <FlashCard size={25} /> 3 collections
                        </div>
                        <div className="flex gap-5 font-semibold leading-loose">
                            <div className="rounded-full bg-slate-100">
                                <User className=" h-7 w-7 text-blue-300 fill-blue-300  rounded-full" />
                            </div>
                            5 Member
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
