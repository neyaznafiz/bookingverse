import axios from "axios";
import { SearchContext } from "../../Context/SearchContext";
import useFetch from "../../Hooks/useFetch";
import React, { useContext, useState } from "react";
import { TbCircleX } from "react-icons/tb";

const ReserveModal = ({ setOpenBookModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading } = useFetch(
    `http://localhost:5000/api/hotels/room/${hotelId}`
  );

  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleChecked = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleReserve = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:5000/api/rooms/availability/${roomId}`,
            { dates: allDates }
          );
          return res.data;
        })
      );
      setOpenBookModal(false);
    } catch (err) {}
  };

  return (
    <div className="w-full h-full bg-black/50 fixed top-0 left-0 flex items-center justify-center">
      <div className="bg-white p-5 relative">
        <TbCircleX
          onClick={() => setOpenBookModal(false)}
          className="text-5xl text-red-800 cursor-pointer absolute right-1 top-1"
        />

        <span className="text-2xl font-semibold text-light">
          Select your rooms{" "}
        </span>
        {data.map((item) => (
          <div
            key={item._id}
            className=" flex justify-between items-center gap-12 p-5 "
          >
            <div className="flex flex-col gap-2">
              <div className="font-bold">{item.title}</div>
              <div>{item.desc}</div>
              <div>
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div>
                Price: <span className="font-semibold">${item.price}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 font-sm text-gray-600 -mt-6">
              {item.roomNumbers.map((roomNumber) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm">{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    disabled={!isAvailable(roomNumber)}
                    onChange={handleChecked}
                    className="h-5"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleReserve}
          className="bg-light text-white font-semibold cursor-pointer w-full rounded-md mt-5 py-3 tracking-wider"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default ReserveModal;
