/** @format */

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import icon from "public/icon2.png";
export default function Home() {
  const fields = [];
  const numberOffields = 1500;
  for (let i = 1; i <= numberOffields; i++) {
    fields.push(<div className="w-[3px] h-[3px] bg-black rounded-full "></div>);
  }
  return (
    <div className="relative h-screen w-screen bg-[#FCFAFA] py-1 px-1 overflow-hidden">
      <div
        className="flex relative items-center justify-start w-full h-full py-14 flex-col text-center space-y-6 text-[#7A7B80]"
        style={{ fontFamily: "consolas" }}
      >
        <div></div>
        <h1 className="text-4xl text-black font-bold">rn dm de gen</h1>
        <div className="px-2">
          <p>We cause scenes on the internet.</p>
          <p>We love controversy.</p>
          <p>We B 3.</p>
        </div>
        <div className="px-2">
          <p>Some people might say {"we’re"} a marketing company,</p>
          <p>Some people might say {"we’re"} an art company, </p>
          <p className="flex items-center space-x-2 justify-center">
            <span> we believe {"we’re"} an </span>
            <div className="w-1 h-4  bg-black cursor-blink"></div>{" "}
          </p>{" "}
        </div>
        <div className=" px-2 ">
          <p>nothing is off-limits.</p>{" "}
        </div>
        <div className="space-x-2 sm:space-x-5 px-2 flex items-center justify-center relative py-5">
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              className="border-2 focus:ring-0 outline-none rounded-lg py-2  px-4 text-base w-64 sm:w-80 border-[#838383] text-black"
              placeholder="Your email here, please."
            />

            <span className="absolute -bottom-5 left-1 text-xs">
              *Get notified when we do random stuff.
            </span>
          </div>
          <a href="mailto:labs@randomdegen.xyz">
            <button className="text-white border-2 border-[#838383] bg-[#838383] py-2 px-3 sm:px-8  font-bold uppercase rounded-lg">
              Sign up
            </button>
          </a>
        </div>
        <div>
          <a href="mailto:labs@randomdegen.xyz" className="opacity-75">
            labs@randomdegen.xyz
          </a>
        </div>

        <div className="absolute bottom-0 text-xl right-0 ">
          <Link href="/items">
            {/* <div className="-translate-x-4 -translate-y-4">items</div> */}
            <Image
              src={icon}
              className=" w-20 md:w-40 object-contain"
              alt="icon
            "
            />
          </Link>
        </div>
      </div>
      {/* <div className="flex absolute top-0 items-center justify-center py-1 space-x-10">
        {fields}
      </div>
      <div className="flex absolute flex-col  py-1 px-1 top-0 left-0 items-center justify-center space-y-10">
        {fields}
      </div>
      <div className="flex absolute bottom-0 py-1  items-center justify-center space-x-10">
        {fields}
      </div>
      <div className="flex absolute  py-1 px-1 right-0 top-0 flex-col items-center justify-center space-y-10">
        {fields}
      </div> */}
    </div>
  );
}

// m sc 11 n s m sch f
// he cause scenes on the internet.
// _ike this iMessage gif that crushed the spirit of every iphone user. Or this au to join the mile-high club. Or this sexist tip calculator. Or this app that finds you meal-worthy food for under $5 in NYC.
// Other things too, but you have to ask for those.
// Our ,ork ras seer seen in
// . dnC
// ( Your email here, please.
// 'Get notified when we do mischievous stuff
// SIGN UP
// labsgmiscellaneousmischief.com
