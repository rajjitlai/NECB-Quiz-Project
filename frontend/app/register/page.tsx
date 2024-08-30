/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";

import { title } from "@/components/primitives";


export default function RegisterPage() {
    return (
        <div>
            <h2 className="text-4xl">Welcome to <br /> Quizzies Quiz <br />
                <span className={title({ color: "violet" })}>
                    Register now!!
                </span>
            </h2>
            <form action="" className="mt-5">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 flex-col text-left">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <Input label="First Name" type="text" />
                        <Input label="Last Name" type="text" />
                    </div>
                    <Input label="Username" type="text" />
                    <Input label="Email" type="email" />
                    <Input label="Password" type="password" />
                    <Button color="primary">Register</Button>
                    <div className="text-center">
                        <p>
                            Already have an account?&nbsp;
                            <Link className="underline" href="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
