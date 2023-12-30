import React , { useState } from "react";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { PiSquareLogo } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";

export default function Listing() {
//   const ScrollableList = ({ items }) => {
//     const [scrollPosition, setScrollPosition] = useState(0);

//     const scrollLeft = () => {
//       setScrollPosition((prevPosition) => prevPosition - 100); // Adjust scroll distance as needed
//     };

//     const scrollRight = () => {
//       setScrollPosition((prevPosition) => prevPosition + 100); // Adjust scroll distance as needed
//     };

    return (
      <div className=" mt-8 pl-6 md:pl-3">
        <div
          className=" w-72 bg-slate-100 rounded-lg shadow-lg"
        >
          <div>
          {/* {items.map((item, index) => ( */}
            <div>
              <div className=" relative">
              <img
                src="https://i.im.ge/2023/12/29/xccZdh.pexels-expect-best-323780-1.jpg"
                alt="House for sale"
                className=" rounded-t-xl"
              />
              <h5 className=" absolute bottom-0 bg-amber-50/75 px-2 py-1 rounded-e-lg text-sm font-bold">
                N1,000,000/yr
              </h5>
              <h5 className="absolute bottom-0 right-0 bg-amber-400/75 px-2 py-1 rounded-s-lg text-sm font-bold">
                Rent
              </h5>
            </div>
            <div className=" p-3">
              <div className=" font-bold">Title</div>
              <div className=" text-sm text-gray-500">location</div>
              <div className=" mt-2 flex justify-between items-center pb-2 border-b-2 border-amber-400">
                <div className=" flex items-center">
                  <LuBed className=" text-base" />{" "}
                  <div className=" text-xs ml-1">5 bed</div>
                </div>
                <div className=" mt-2 flex justify-between items-center">
                  <LuBath className=" text-base" />{" "}
                  <div className=" text-xs ml-1">5 bath</div>
                </div>
                <div className=" mt-2 flex justify-between items-center">
                  <PiSquareLogo className=" text-base" />
                  <div className=" text-xs ml-1">100 sqft</div>
                </div>
              </div>
              <div className=" pb-2 flex justify-between items-center mt-3">
                <div className=" flex flex-col items-center">
                  <MdFavoriteBorder />
                  <div className=" text-xs">120</div>
                </div>
                <div className=" flex flex-col items-center">
                  <IoEyeOutline />
                  <div className=" text-xs">233</div>
                </div>
                <div className=" flex flex-col items-center">
                  <PiShareFat />
                  <div className=" text-xs">202</div>
                </div>
              </div>
            </div>
            </div>
          {/* ))} */}

          </div>
          {/* <button onClick={scrollLeft}>&lt;</button>
          <button onClick={scrollRight}>&gt;</button> */}
        </div>
      </div>
    );
  };

