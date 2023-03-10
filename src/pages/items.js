/** @format */

import React from "react";

function items() {
  const allItems = [
    {
      id: "01",
      name: "XXXXXXXXXXXXXXXXXXXX",
      hoveredColor: "red-hover",
    },
    {
      id: "02",
      name: "XXXXXXXXXXXXXXXXXXXX",
      hoveredColor: "orange-hover",
    },
    {
      id: "03",
      name: "XXXXXXXXXXXXXXXXXXXX",
      hoveredColor: "yellow-hover",
    },
    {
      id: "04",
      name: "XXXXXXXXXXXXXXXXXXXX",
      hoveredColor: "pink-hover",
    },
    {
      id: "05",
      name: "XXXXXXXXXXXXXXXXXXXX",
      hoveredColor: "green-hover",
    },
    {
      id: "06",
      name: "XXXXXXXXXXXXXXXXXXXX",
      hoveredColor: "blue-hover",
    },
  ];
  return (
    <div
      className="relative w-screen min-h-fit"
      style={{ fontFamily: "Andale Mono" }}
    >
      <header className="flex font-bold text-[5vw] items-center justify-center w-full h-fit">
        <div className="flex items-center justify-center py-4 w-1/2 border border-black">
          <h1>RNDM DEGEN</h1>
        </div>

        <div className="flex items-center justify-center py-4 w-1/2 border border-l-0 border-black">
          <h1>DROPS</h1>
        </div>
      </header>
      <div className="relative flex flex-col text-[#7A7B80] w-full">
        {allItems.map((data) => (
          <div
            key={data.id}
            className={`border-b cursor-pointer border-black flex px-5 group ${data.hoveredColor} fontanimate items-center py-3 text-[5vw] space-x-5 uppercase `}
          >
            <div className="flex flex-col text-[2.5vw] leading-none">
              <span># </span> <span>{data.id}</span>{" "}
            </div>
            <h1>{data.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default items;
