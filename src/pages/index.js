/** @format */

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative h-screen w-screen py-1 px-1 overflow-hidden">
      <div
        className="flex relative items-center border-dotted border-[8px] border-black justify-start w-full h-full py-[10vh] flex-col text-center space-y-6 text-black"
        style={{ fontFamily: "consolas" }}
      >
        <h1 className="text-4xl font-bold">rn dm de gen</h1>
        <div>
          <p>We just cause scenes in web3.</p>

          <p>We also a solananana.</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          some might say {"we're"} an marketing <br /> company, others might say
          we make <br /> we belive, {"we're"} an idea house. <br /> noothing is
          off-limits
        </div>
        <div>Happy ヘ( ^o^)ノ＼(^_^ )</div>
        <div className="space-x-5 py-5 ">
          <input
            type="text"
            name=""
            id=""
            className="border-2 focus:ring-0 outline-none rounded-lg py-2  px-4 text-base w-80 border-black text-black"
            placeholder="Your email here, please."
          />
          <button className="text-white bg-black py-2 px-8 font-bold uppercase rounded-lg">
            Sign up
          </button>
        </div>
        <div className="absolute bottom-0 text-xl right-0 w-52 h-52 rounded-full translate-x-20 translate-y-20  bg-[#101010] flex items-center justify-center text-white">
          <Link href="/items">
            <div className="-translate-x-4 -translate-y-4">items</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
