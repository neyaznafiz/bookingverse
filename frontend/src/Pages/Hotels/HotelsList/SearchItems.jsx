import React from "react";
import { Link } from "react-router-dom";

const SearchItems = ({ searchResult: item }) => {
  return (
    <div className="border border-gray-400 flex justify-between rounded-md gap-5 p-3 mb-5">
      <div className="overflow-hidden rounded-md">
        <img
          src={item.photos[0]}
          alt=""
          className="w-52 h-52 rounded-md hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col flex-[2] gap-2">
        <h1 className="text-2xl font-semibold tracking-wider">
          {item.name}
        </h1>
        <span className="text-sm tracking-wider font-semibold">
          {item.distance}m from center
        </span>
        <span className="text-base bg-green-700 text-white w-max px-2 rounded-sm">
          Free airport taxi
        </span>
        <span className="text-base font-semibold tracking-wider">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-base">{item.desc}</span>
        <span className="text-base text-green-800 font-black tracking-wider">
          Free cancellation
        </span>
        <span className="text-base text-green-800 tracking-wider -mt-2">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="flex-[1] flex flex-col justify-between relative">
        {/* {item.rating && ( */}
          <div className=" flex justify-end gap-x-3 items-end">
            <span className="font-semibold">Excellent</span>
            <button className="bg-primary text-white px-3 font-semibold rounded-md h-9">
              8.9
            </button>
          </div>
        {/* )} */}
        <div className="text-right flex flex-col items-end gap-2 absolute bottom-0 right-0">
          <span className="">${item.cheapestPrice}</span>
          <span className="text-base text-gray-600">
            Includes taxes and fees
          </span>
          <Link to={`/hotels/${item._id}`}>
          <button className="bg-primary text-white py-1 w-[183px] rounded-sm">
            See availability
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
