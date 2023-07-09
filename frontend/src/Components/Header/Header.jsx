import React from "react";
import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa";
import HeaderBanner from "./HeaderBanner";
import HeaderSearch from "./HeaderSearch";

export const Header = ({ type }) => {
  const activeClass = "border-b-2 px-1";

  return (
    <div className="bg-primary flex justify-center text-white transition-all duration-300 relative">
      <div className={`{type !== "hotelsList" ? " width mb-[100px]" : "width"`}>
        {/* header nav section */}
        <div className="flex gap-10 my-7">
          <div className="flex items-center gap-2">
            <FaBed />
            <span>Stays</span>
          </div>

          <div className="flex items-center gap-2 ">
            <FaPlane />
            <span>Flights</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCar />
            <span>Car Rentals</span>
          </div>

          <div className="flex items-center gap-2">
            <FaBed />
            <span>Attractions</span>
          </div>

          <div className="flex items-center gap-2">
            <FaTaxi />
            <span>Airport Taxis</span>
          </div>
        </div>

        {/* header info section */}
        {type !== "hotelsList" && (
          <>
            {/* banner section in header */}
            <HeaderBanner />
            {/* search section in header */}
            <div className="mt-[100px]">
              <HeaderSearch/>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
