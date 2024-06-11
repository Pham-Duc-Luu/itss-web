"use client";
import React, { Children } from "react";
import Sidebar from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <div className="">
      <Card className=" pl-4 pr-4 pt-4 pb-8 ml-4 mr-4 mt-4 mb-4 grid grid-rows-1 gap-0 ">
        <div className="font-extrabold text-2xl mt-6"> Dashboard</div>
        <div className=" grid grid-cols-4 ">
          <Card className="h-[100px] ml-2 mr-1">
            <CardHeader>
              <CardTitle className=" text-sm">Number of user</CardTitle>
              <CardDescription className="text-lg font-bold">
                9999999
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className=" h-[100px] ml-2 mr-1">
            <CardHeader>
              <CardTitle className=" text-sm">Active user</CardTitle>
              <CardDescription className="text-lg font-bold">
                9999999
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className=" h-[100px] ml-2 mr-1">
            <CardHeader>
              <CardTitle className=" text-sm">Number of class</CardTitle>
              <CardDescription className="text-lg font-bold">
                9999999
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className=" h-[100px] ml-2 mr-1">
            <CardHeader>
              <CardTitle className=" text-sm">Number of card</CardTitle>
              <CardDescription className="text-lg font-bold">
                9999999
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-4 grid grid-cols-2 ">
          <Card className=" min-h-[500px] ml-2 mr-1">
            <CardHeader>
              <CardTitle className=" text-sm">graph</CardTitle>
              <CardDescription className="text-lg font-bold">
                gr
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className=" min-h-[100px] ml-2 mr-1">
            <CardHeader>
              <CardTitle className=" text-sm">top user</CardTitle>
              <CardDescription className="text-lg font-bold">
                username
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default page;
