'use client' ;
import React, {useState, useEffect} from 'react';
import { LayoutDashboard } from 'lucide-react';
import { UserCog } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Presentation } from 'lucide-react';

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import Link from 'next/link';
  import { useRouter } from 'next/navigation'
  
  
export default function Sidebar(){
    const router = useRouter();

    return <div className='bg-white flex flex-col w-[240px] min-w-[240px] border-r min-h-screen p-4'>
        <div className='ml-3 mb-4 font-bold text-xl'>ADMIN MENU</div>
    <div className='grow'>
        <Command style={{overflow:'visible'}}>
  <CommandList style={{overflow:'visible'}}>
    <CommandGroup >
      <CommandItem className='font-bold'><LayoutDashboard className='mr-2 mb-2'/><button onClick={() => router.push('/admin/dashboard')}>Dashboard</button></CommandItem>
      <CommandItem className='font-bold'><UserCog className='mr-2 mb-2'/><button onClick={() => router.push('/admin/edituser')}>Edit User</button></CommandItem>
      <CommandItem className='font-bold'><Presentation className='mr-2 mb-2'/><button onClick={() => router.push('/admin/editclass')}>Edit class</button></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
</div>
    <div className='flex'> <LogOut className='mr-2'/><button>Log out</button></div>
    </div>
    ;
}

