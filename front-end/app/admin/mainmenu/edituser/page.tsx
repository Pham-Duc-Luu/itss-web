'use client' ;
import React, { Children } from 'react';
import Sidebar from '@/components/ui/sidebar';
import {Button} from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { Edit } from 'lucide-react';

async function getData(): Promise<Payment[]> {


                          // Fetch data from your API here.

  return [
    {
      id: "728ed52f",
      name: "rac",
      password: "123467",
      email: "m@example.com",
      phonenumber:123456,
    },
    {
      id: "728ed52f",
      name: "ruoi",
      password: "123467",
      email: "m@example.com",
      phonenumber:123456,
      
    },
    // ................................................................................
  ]
}
 
export default async function DemoPage() {
  const data = await getData()
 
  return (
    <div className="container mx-auto py-10">
      <div className='font-extrabold text-2xl mt-6'> Edit user</div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}