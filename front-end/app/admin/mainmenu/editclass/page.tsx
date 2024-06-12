"use client";
import React, { Children, useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { Edit } from "lucide-react";
import adminApi from "@/lib/AdminApi";

export default function DemoPage() {
    const [data, setData] = useState<Payment[]>([]);

    useEffect(() => {
        adminApi.getClassData().then((res) => {
            const dataClass = res.data.data;
            setData(
                dataClass.map((rac) => {
                    return {
                        id: rac.id,
                        name: rac.name,
                        images: rac.images,
                        hostId: rac.hostId,
                        description: rac.description,
                    };
                })
            );
        });
    }, []);

    return (
        <div className="container mx-auto py-10">
            <div className="font-extrabold text-2xl mt-6"> Edit user</div>
            {/* <DataTable columns={columns} data={data} /> */}
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">
                                {item.name}
                            </TableCell>
                            <TableCell>{item.hostId}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell className="text-right"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
