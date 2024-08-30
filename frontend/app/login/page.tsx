"use client";

import React from "react";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";

import { title } from "@/components/primitives";

export default function LoginPage() {
  return (
    <div>
      <h1 className={title()}>Welcome Back</h1>
      <form action="" className="mt-5">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 flex-col text-left">
          {/* <label htmlFor="email">Email</label> */}
          <Input label="Email" type="email" />
          {/* <label htmlFor="password">Password</label> */}
          <Input label="Password" type="password" />
          <span>
            Forgot password?&nbsp;
            <Link className="underline" href="/reset-password">
              Reset
            </Link>
          </span>
          <Button color="primary">Login</Button>
          <div className="text-center">
            <p>
              Don&apos;t have an account?&nbsp;
              <Link className="underline" href="/register">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
