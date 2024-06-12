"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import Logo from "../../assets/quiz-logo.png";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [searching, setSearching] = useState<string>();

  useEffect(() => {
    searching && router.push(`/home/Searching?q=${searching}`);
  }, [searching]);

  return (
    <>
      <div className="w-screen fixed top-0 z-50 bg-white">
        <div className="h-full w-full shadow-md flex justify-between items-center align-baseline px-10">
          <div className="pl-10 h-full flex gap-1 items-center select-none col-span-2">
            <img src={Logo.src} alt="" className=" block h-20" />

            <Button variant="link" className="font-bold">
              {" "}
              <Link href="/home">Home</Link>
            </Button>
            <Button variant="link" className="font-bold">
              {" "}
              <Link href="/home/user-library">Library</Link>
            </Button>
          </div>

          <form className="relative flex w-full max-w-[24rem]">
            <Input
              type="text"
              placeholder="Study sets, class"
              className="rounded-full"
              onChange={(e) => {
                setSearching(e.target.value);
              }}
            />
            <Button
              type="submit"
              size="sm"
              disabled={false}
              className="!absolute right-1 top-[3px] rounded-full flex items-center justify-center bg-gray-700"
            >
              <MagnifyingGlassIcon className=" text-lg text-white h-4 w-4 " />
            </Button>
          </form>

          <div className="flex gap-10">
            <div className="flex gap-6">
              <Button
                className="w-auto"
                onClick={() => router.push("/home/collection/create")}
              >
                Create collection
              </Button>
              <Button
                className="w-auto"
                onClick={() => router.push("/home/class/create-class")}
              >
                Create class
              </Button>
            </div>

            <div className="flex justify-start items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    color="blue-gray"
                    className=" rounded-full h-10 w-10 bg-blue-100/20 py-0 pr-0 pl-0 "
                  >
                    <User className=" h-10 w-10 text-blue-300 fill-blue-300  rounded-full p-1.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span
                        onClick={() => router.push("/home/profile/profile")}
                      >
                        Profile
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>
                        <Link href="\auth\login">Log out</Link>
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
