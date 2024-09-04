/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client"

import ProfileStats from "@/components/ProfileStats";

import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="px-16">
            <div className='flex flex-col lg:flex-row justify-between items-start md:gap-12 gap-8'>
                <div className='lg:w-1/3 w-full bg-slate-900 rounded-lg pt-8 p-4 flex flex-col items-center'>
                    <Avatar className="w-20 h-20 lg:w-40 lg:h-40 text-large" src="https://i.ytimg.com/vi/KwsQq7Ci20Y/maxresdefault.jpg" />
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                            John Cena
                        </h1>
                        <p className="text-gray-600">@johncena</p>
                        <Button color="primary" className="mt-3">
                            Edit Profile
                        </Button>
                    </div>
                    <div className="mt-10">
                        <p className="text-gray-400">Joined 1 year ago</p>
                    </div>

                    <Link href="/category" className="text-xl bg-white text-black py-2 px-4 mt-10 mb-5 rounded-lg">
                        Attempt Quiz Now!!!
                    </Link>
                </div>
                <div className='lg:w-2/3 w-full pt-0 p-4 rounded-lg'>
                    <h2 className="text-2xl lg:text-3xl font-bold">John Cena&apos;s Records</h2>
                    <ProfileStats />
                </div>
            </div>
        </div>
    );
}
