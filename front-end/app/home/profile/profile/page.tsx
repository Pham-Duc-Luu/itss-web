import React from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className="min-h-screen text-white flex justify-center items-start pt-16">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Profile</h2>

        <div className="bg-gray-700 rounded-lg p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <img
                className="w-24 h-24 rounded-full border-4 border-gray-600"
                src="https://via.placeholder.com/96"
                alt="avatar"
              />
              <label
                htmlFor="upload-file"
                className="absolute bottom-0 right-0 bg-yellow-500 text-gray-900 p-2 rounded-full cursor-pointer hover:bg-yellow-600"
              >
                +
              </label>
              <input
                type="file"
                id="upload-file"
                className="hidden"
                accept="image/png, image/jpeg"
              />
            </div>

            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold">Username</h4>
                  <p className="text-gray-400">Trung269</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="text-yellow-500 hover:text-yellow-600">
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Username</DialogTitle>
                      <DialogDescription>
                        Make changes to your username here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center gap-4">
                        <Input
                          id="name"
                          placeholder="New username"  
                          className="col-span-3"
                        />
                      </div>
            
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                      <Button type="submit">Save changes</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-400">trungnguyen26903@gmail.com</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="text-yellow-500 hover:text-yellow-600">
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit email</DialogTitle>
                      <DialogDescription>
                        Make changes to your email here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center gap-4">
                        <Input
                          id="email"
                          placeholder="New email"  
                          className="col-span-3"
                        />
                      </div>
            
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                      <Button type="submit">Save changes</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Account type</h4>
                </div>
                <select className="bg-gray-600 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;