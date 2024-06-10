"use client"

import { ColumnDef } from "@tanstack/react-table"
import { LinkProps } from "next/link"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  class_id: string
  name: string
  class_code: string
  number_of_student: number
  
}

export const columns: ColumnDef<Payment>[] = [
  
  {
    accessorKey: "class_id",
    header: "class id",
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "class_code",
    header: "class code",
  },
  {
    accessorKey: "number_of_student",
    header: "number of student",
  },

  {
    id: "Actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="">
              edit
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              Change class code
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Change name</DropdownMenuItem>
            <DropdownMenuItem>Remove class</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

]
