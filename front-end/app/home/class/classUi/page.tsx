import React from "react";
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
const Page = () => {
    return (
        <div className="flex w-full flex-col py-10 px-16">
            <div className="mb-5 borber-4 border-slate-200">
                <div className="flex mb-2">
                <Class />
                    <div className="flex text-4xl font-bold ml-4">
                        Class name
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className='py-auto px-3 border-[3px] border-gray-300 rounded-full h-10 w-10 font-semibold flex hover:bg-slate-100'>
                        <Plus />
                    </button>
                    <button className='py-auto px-3 border-[3px] border-gray-300 rounded-full h-10 w-10 font-semibold flex hover:bg-slate-100'>
                        <div className="m-auto"><Addmember /></div>
                    </button>
                    <button className='p-2 border-[3px] border-gray-300 rounded-full h-10 w-10 font-semibold flex hover:bg-slate-100'>
                        <Three_dot />
                    </button>
                </div>
            </div>

            <div className="mx-auto w-11/12">
                <Tabs defaultValue="post" className="">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="post">Post</TabsTrigger>
                        <TabsTrigger value="assignment">Assignment</TabsTrigger>
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
                                    {FakePostData.map((post,index) => 
                                    <Card className="w-full mb-4 flex flex-col" key={index}>
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
                                                    <Badge className="bg-cyan-400 px-5 leading-none h-auto">{post.author}</Badge>
                                                    <p className="text-xs font-medium leading-loose my-auto italic">{post.post_at.toDateString()}</p>
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
                                
                                )}
                                  
                                </div>
                            </CardContent>
                            <div className="flex gap-5 w-full bg-white px-7">
                                <CreateCollectionInput
                                    placeholder={'Add new post'}
                                    label={''}
                                    name={'newPost'}
                                />
                                <button className="mt-1 px-3 py-2 bg-cyan-400 rounded-2xl font-semibold hover:bg-gray-500"><Send /></button>
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
                                <Tabs defaultValue="upcoming" className="w-[340px]">
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
                                                <div className="text-1xl">Assignment X</div>
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
        </div>
    );
};

export default Page;
