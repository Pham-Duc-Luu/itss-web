"use client";

import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";
import { api_class } from "@/config/axios.config";
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
import { Route, User } from "lucide-react";
import { FakeClassData } from "@/API/FakeData";
import classApi, { IClass, IClassDetails } from "@/lib/ClassApi";
import ClassCard from "@/components/Class/ClassCard";
import authApi from "@/lib/authApi";
import Image from "next/image";
import errorImg from "../../../../assets/404.png"
import { useRouter } from "next/navigation";
import classImage from "../../../../assets/class.png"
const Page = ({ params }: { params: { classId: string } }) => {
  const route = useRouter()
  const [currentClass, setcurrentClass] = useState<{
    hostID: number;
    id: number;
    className: string;
    description: string;
  }>(FakeClassData[Number(params.classId)]);

  const [requested, setRequested] = useState<boolean>(false);
  const [classDetails, setclassDetails] = useState<IClassDetails>();
  const [classes, setClasses] = useState<IClass[]>();
  const [userId, setUserId] = useState<number>();
  const [classImg, setClassImg] = useState<string>();

  const [isInClass, setisInClass] = useState<boolean>(false);
  useEffect(() => {
    classApi
      .viewDetailClass(Number(params.classId))
      .then((res) => {
        setclassDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (classDetails?.studyAt.find((item) => item.studentId === userId)) {
      setisInClass(true);
    }
    console.log(classDetails?.hostId === userId);

    setisInClass(classDetails?.hostId === userId);
  }, [classDetails, userId]);

  const [createPost_content, setcreatePost_content] = useState<string>();
  useEffect(() => {
    let a = classes?.find((e) => e.id === Number(params.classId));
    if (a) {
      setcurrentClass({
        hostID: Number(a.hostId),
        id: a.id,
        className: a.name,
        description: String(a.description),
      });
    }
  }, [classes]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserId(Number(localStorage.getItem("user")));
    }
  }, []);

  const createPost = () => {
    console.log({
      hostId: currentClass.hostID,
      classId: currentClass.id,
      content: createPost_content,
      createrId: userId,
    });

    userId &&
      createPost_content &&
      classApi
        .createPost({
          hostId: currentClass.hostID,
          classId: currentClass.id,
          content: createPost_content,
          createrId: userId,
        })
        .then((res) => {
          classApi
            .viewDetailClass(Number(params.classId))
            .then((res) => {
              setclassDetails(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });

          setcreatePost_content("");
        })
        .catch((err) => {
          console.log(err);
        });
  };

  if (!userId) {
    return (
      <div className="w-full flex flex-col p-20 items-center gap-5">
        <h1 className="text-lg text-center">You can&apos;t join class if you don&apos;t have an account yet.<br></br> 
        Do you want to login ?</h1>
        <Image src={errorImg.src} alt="Not found" width={400} height={300}/>
        <Button className="w-32 bg-yellow-400 font-semibold text-black hover:bg-yellow-300"
        onClick={() => route.push('/auth/login')}
        >Please Login</Button>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col py-10 px-16">
      <div className="mb-5 border-b-[1px] border-slate-200 pb-5 flex justify-between">
        <div>
          <div className="flex mb-2">
            <Class />
            <div className="flex text-4xl font-bold ml-4 ">
              {classDetails?.name}
            </div>
          </div>
          <div className="flex gap-2">
            {userId === classDetails?.hostId && (
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
                      <Label className="w-[120px] mb-5 text-1xl font-bold">
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
            )}
            {userId === classDetails?.hostId && (
              <Dialog>
                <DialogTrigger asChild>
                  <button className="py-auto border-[3px] border-gray-300 rounded-full h-10 w-10 font-semibold flex hover:bg-slate-100">
                    <div className="m-auto">
                      <Plus />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Collection</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="mb-5">
                      <Label className="w-[120px] mb-5 text-1xl font-bold">
                        Collection Name:
                      </Label>
                      <Input type="text" placeholder="Name" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Add</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
            {userId === classDetails?.hostId && (
              <Dialog>
                <DialogTrigger asChild>
                  <button className="py-auto border-[3px] border-gray-300 rounded-full h-10 w-10 font-semibold flex hover:bg-slate-100">
                    <div className="m-auto">
                      <Three_dot />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold">
                      request
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="mb-5">
                      <Label className="w-[120px] mb-5 text-1xl font-bold"></Label>
                      <div>
                        {classDetails?.requests?.map((request, index) => (
                          <div
                            className="flex mb-2 mt-2 ml-auto"
                            key={index}
                            onClick={() => {
                              authApi.addStundet(
                                classDetails.id,
                                request.fromUserId
                              );
                            }}
                          >
                            <Avatar className="mr-2">
                              <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                              />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Badge className="bg-cyan-400 px-5 leading-none h-auto">
                              {request.id}
                            </Badge>
                            <Button className="flex ml-auto"> accept</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}

            {/* end */}

            <Dialog>
              <DialogTrigger asChild>
                <button className="py-auto border-[3px] border-gray-300 rounded-full h-10 w-10 font-semibold flex hover:bg-slate-100">
                  <div className="m-auto">
                    <Three_dot />
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">
                    Member list
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="mb-5">
                    <Label className="w-[120px] mb-5 text-1xl font-bold"></Label>
                    <div>
                      {classDetails?.studyAt?.map((user, index) => (
                        <div className="flex item-center mb-2 mt-2" key={index}>
                          <Avatar className="mr-2">
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="px-5 flex font-bold items-center ">
                            {user.student.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {userId === classDetails?.hostId &&
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
                    <Input type="text" placeholder="Class Name" />
                  </div>
                  <div className="mb-5">
                    <Label className="w-[120px] mb-3 text-1xl font-bold">
                      Class Code:
                    </Label>
                    <Input type="text" placeholder="Class Code" />
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
      }
      </div>
      <div className="flex gap-10">
        
      <div className="w-4/5">
          {(!isInClass && classDetails) ?
          <div className="px-7 py-5 flex flex-col items-center">
            <Image src={classImage.src} width={300} height={300} alt="join class"/>
            <h1 className="mb-7 font-semibold font-lg">Join class to view class&apos;information</h1>
            <Button className="w-auto ml-3 bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:scale-110 transition-all ease-in-out" 
              onClick={() => {
                authApi.requestToClass(Number(params.classId), userId).then(() => {
                  setRequested(true);
                });
              }}
            >
              {requested ? "Your request have be make" : "Join class"}
            </Button>
      </div>:            
          <Tabs defaultValue="post" className="">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="post">Post</TabsTrigger>
              <TabsTrigger value="assignment">Assignment</TabsTrigger>
              <TabsTrigger value="Collection">Collection</TabsTrigger>
            </TabsList>
            {/* Post Part */}
            <TabsContent value="post">
              <Card className="flex flex-col pb-5">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Post</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 flex-grow overflow-auto">
                  <div className="justify-center">
                    {/* Card Post */}
                    {classDetails?.posts?.map((post, index) => (
                      <Card className="w-full mb-4 flex flex-col" key={index}>
                        <CardHeader className="px-6 py-4">
                          <CardTitle>
                            <div className="flex gap-3">
                              <Avatar className="mr-2">
                                <AvatarImage
                                  src="https://github.com/shadcn.png"
                                  alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <Badge className="bg-cyan-400 px-5 leading-none h-auto">
                                {post.content}
                              </Badge>
                              <p className="text-xs font-medium leading-loose my-auto italic">
                                {post.date}
                              </p>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-1 text-xl font-bold">Title</div>
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
                  <div className="w-full">
                    <input
                      type="text"
                      name={"name"}
                      value={createPost_content}
                      onChange={(e) => {
                        setcreatePost_content(e.target.value);
                      }}
                      id=""
                      placeholder={"any"}
                      className="bg-transparent w-full border-b-2 border-gray-600 focus:outline-0 mb-2 placeholder:text-slate-300 py-3 focus:border-b-4 focus:border-cyan-500"
                    />
                    <label
                      htmlFor={"name"}
                      className="block text-xs text-gray-400 font-medium uppercase tracking-wider"
                    ></label>
                  </div>

                  <button
                    className="mt-1 px-3 py-2 bg-cyan-400 rounded-2xl font-semibold hover:bg-gray-500"
                    onClick={() => {
                      createPost();
                    }}
                  >
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
                  <Tabs defaultValue="upcoming" className="w-[340px]">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="past-due">Past due</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  {classDetails?.assignments?.map((item,i) => (
                    <Card className="w-full mb-4" key={i}>
                      <CardHeader>
                        <CardTitle>
                          <div className="flex items-center">
                            <Avatar className="mr-2">
                              <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                              />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="text-1xl">{item.question}</div>
                          </div>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <form>
                          <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">{item.description}</Label>
                            </div>
                          </div>
                        </form>
                      </CardContent>
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="ml-auto grid">
                            <button className="justify-self-end mx-8 rounded-lg px-5 py-2 bg-cyan-400 hover:bg-cyan-300 font-semibold text-sm ">
                              Turn in
                            </button>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>turn in</DialogTitle>
                          </DialogHeader>

                          <DialogFooter>
                            <div className="mb-2 w-full border-b-2 border-gray-600">
                              <input
                                className="hidden"
                                type="file"
                                id="image-upload"
                                name="image-upload"
                              />
                              <CldUploadWidget
                                uploadPreset="tniqb9sb"
                                onSuccess={(results: any) => {
                                  setClassImg(results.info.public_id);
                                }}
                              >
                                {({ open }) => {
                                  return (
                                    <Button
                                      className=" mb-4 bg-cyan-300 font-bold rounded-lg text-black px-4 py-2 cursor-pointer hover:bg-blue-300 transition-colors duration-200 inline-block"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        open();
                                      }}
                                    >
                                      Upload
                                    </Button>
                                  );
                                }}
                              </CldUploadWidget>
                            </div>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <CardFooter className="flex justify-between"></CardFooter>
                    </Card>
                  ))}
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>

            {/* Collection Part */}
            <TabsContent value="Collection">
              <Card>
                <CardHeader>
                  <CardTitle>Collection</CardTitle>
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
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <Badge>Collection Name</Badge>
                        </div>
                      </CardTitle>
                    </CardHeader>

                    <div className="grid">
                      <button className="justify-self-end mx-8 mb-4 pl-6 text-2xl font-bold rounded-lg px-5 py-2 bg-cyan-400 hover:bg-cyan-300">
                        View
                      </button>
                    </div>

                    <CardFooter className="flex justify-between"></CardFooter>
                  </Card>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
      }
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
              <School /> {classDetails?.name}
            </div>
            <div className="flex gap-5 font-semibold leading-loose">
              <FlashCard size={25} /> {classDetails?.collections.length}{" "}
              collections
            </div>
            <div className="flex gap-5 font-semibold leading-loose">
              <div className="rounded-full bg-slate-100">
                <User className=" h-7 w-7 text-blue-300 fill-blue-300  rounded-full" />
              </div>
              {classDetails?.studyAt.length} Member
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
