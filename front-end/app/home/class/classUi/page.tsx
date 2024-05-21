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
// * name
// * list of posts
// * list of assignments
// * list of documents

// * button to add members, collections, edit className
const page = () => {
    return (
        <>
            <div className="flex mt-32 pl-2">
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex text-4xl font-bold mb-4 ml-4">
                    Class name
                </div>
            </div>
            <div>
                <Tabs defaultValue="post" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="post">Post</TabsTrigger>
                        <TabsTrigger value="assignment">Assignment</TabsTrigger>
                        <TabsTrigger value="document">Document</TabsTrigger>
                    </TabsList>
                    {/* Post Part */}
                    <TabsContent value="post">
                        <Card className="flex flex-col h-screen">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold">
                                    Post
                                </CardTitle>
                                <CardDescription></CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2 flex-grow overflow-auto">
                                <div className="justify-center">
                                    {/* Card Post */}
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
                                </div>
                            </CardContent>
                            <div className="box pl-6 pr-10 mb-2 mr-4 flex justify-center whitespace-pre-line bottom-0 w-full bg-white">
                                <Input
                                    className="mr-4 whitespace-pre-line"
                                    placeholder="Type a post"
                                />
                                <Button>Add</Button>
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
        </>
    );
};

export default page;
