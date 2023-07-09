import React, { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsFillPersonFill } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";

const HeaderSearch = () => {
  const [destination, setDestination] = useState("");
  // date selection
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // options selection
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // options handle
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const {dispatch} = useContext(SearchContext)

  // handle search
  const navigate = useNavigate();
  const handleSearch = () => {
    dispatch({type:"NEW_SEARCH", payload: {destination, dates, options}});
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="h-9 bg-white text-gray-400 flex items-center justify-between border-2 border-secondary py-7 px-2 rounded-md absolute -bottom-8 width">
      <div className="flex items-end gap-x-3 ">
        <FaBed className="text-3xl" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="outline-none"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      {/* date */}
      <div
       
        className="flex items-center gap-x-3 cursor-pointer"
      >
        <FaCalendarAlt className="text-2xl" />
        <p  onClick={() => setOpenDate(!openDate)} className="-mb-[7px]">{`${format(
          dates[0].startDate,
          "MM/dd/yyyy"
        )} To ${format(dates[0].endDate, "MM/dd/yyyy")}`}</p>
        {openDate && (
          <div className="absolute top-14 z-[999] shadow-md rounded-md">
             <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            minDate={new Date()}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            
          />
         </div>
        )}
      </div>

      {/* options */}
      <div className="cursor-pointer">
        <div
          onClick={() => setOpenOptions(!openOptions)}
          className="flex items-end"
        >
          <BsFillPersonFill className="text-3xl" />
          <p className="w-[279px] text-center -mb-[3px]">{`${options.adult} Adult ∙ ${options.children} Children ∙ ${options.room} Room`}</p>
        </div>
        {openOptions && (
          <div className="absolute top-14 lg:w-72 shadow-md space-y-3 p-4 z-[999] bg-white rounded-md">
            <div className="flex justify-between">
              <p className="font-semibold">Adult</p>

              <div className="flex gap-x-4">
                <button
                  onClick={() => handleOption("adult", "d")}
                  disabled={options.adult <= 1}
                  className="bg-primary px-3 shadow-lg text-white disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                  -
                </button>
                <p className="text-black font-semibold w-8 text-center">
                  {options.adult}
                </p>
                <button
                  onClick={() => handleOption("adult", "i")}
                  className="bg-primary px-3 shadow-lg text-white"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="font-semibold">Children</p>

              <div className="flex gap-x-4">
                <button
                  onClick={() => handleOption("children", "d")}
                  disabled={options.children <= 0}
                  className="bg-primary px-3 shadow-lg text-white disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                  -
                </button>
                <p className="text-black font-semibold w-8 text-center">
                  {options.children}
                </p>
                <button
                  onClick={() => handleOption("children", "i")}
                  className="bg-primary px-3 shadow-lg text-white"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="font-semibold">Rooms</p>

              <div className="flex gap-x-4">
                <button
                  onClick={() => handleOption("room", "d")}
                  disabled={options.room <= 1}
                  className="bg-primary px-3 shadow-lg text-white disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                  -
                </button>
                <p className="text-black font-semibold w-8 text-center">
                  {options.room}
                </p>
                <button
                  onClick={() => handleOption("room", "i")}
                  className="bg-primary px-3 shadow-lg text-white"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="">
        <button
          onClick={handleSearch}
          className="px-3 py-2 bg-primary text-white flex gap-x-2 rounded-md"
        >
          SEARCH <TbMapSearch className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
