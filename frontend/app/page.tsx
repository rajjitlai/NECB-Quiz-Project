/* eslint-disable prettier/prettier */
"use client"

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { categories, leaderboardData } from "./constants";

import { title, subtitle } from "@/components/primitives";
import LeaderboardTable from "@/components/LeaderboardTable";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="mt-20 flex flex-col items-center justify-center gap-5">
        <div className="inline-block max-w-xl text-center justify-center">
          <h1 className={title()}>Quizzies&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Quiz App&nbsp;</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Test your knowledge!!!
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/login"
          >
            Get Started
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="/category"
          >
            Browse Categories
          </Link>
        </div>
      </div>

      <div className="mt-40 flex flex-col md:flex-row items-center justify-between w-full gap-10">
        <div className="w-full md:w-1/2 bg-slate-900 py-5 px-8 rounded-lg">
          <h2 className="text-4xl font-bold">Global Leaderboard</h2>
          <p className="text-gray-500">
            See who&apos;s scored the most points across all categories!
          </p>

          <div className="mt-5">
            <LeaderboardTable />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-slate-900 py-5 px-8 rounded-lg">
          <h2 className="text-4xl font-bold">Category</h2>
          <p className="text-gray-500">
            Explore various quiz categories to test your knowledge and earn
            points!
          </p>
        </div>
      </div>
    </section>
  );
}
