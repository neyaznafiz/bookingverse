import React, { useContext, useState } from "react";
import { Footer, Header, MailList } from "Components";
import { HiLocationMarker } from "react-icons/hi";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { TbCircleX } from "react-icons/tb";
import useFetch from "../../Hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { AuthContext } from "../../Context/AuthContext";
import ReserveModal from "./ReserveModal";

export const HotelInfo = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const [openBookModal, setOpenBookModal] = useState(false);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading } = useFetch(`http://localhost:5000/api/hotels/${id}`);

  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // date to day converter function
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (dae1, date2) => {
    const timeDiff = Math.abs(date2?.getTime() - dae1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };
  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);

  // total price
  const totalPrice = days * data.cheapestPrice * options.room;

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  // for booking
  const handleBook = () => {
    if (user) {
      setOpenBookModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  //   },
  // ];

  return (
    <div>
      <Header type="hotelsList" />

      <div className="flex flex-col items-center relative">
        {loading ? (
          "Loading.."
        ) : (
          <>
            <div>
              {/* //* zoom slider start */}

              {open && (
                <div className="sticky top-0 left-0 flex items-center w-screen h-screen bg-black/50 z-[999]">
                  <TbCircleX
                    onClick={() => setOpen(false)}
                    className="absolute top-10 right-10 text-5xl text-white cursor-pointer"
                  />

                  <BiLeftArrow
                    onClick={() => handleMove("left")}
                    className="m-10 text-5xl cursor-pointer text-white"
                  />

                  <div className="w-full h-full flex justify-center items-center">
                    <img
                      src={data.photos[slideNumber]}
                      alt=""
                      className="w-[80%] h-[80vh]"
                    />
                  </div>

                  <BiRightArrow
                    onClick={() => handleMove("right")}
                    className="m-10 text-5xl text-white cursor-pointer"
                  />
                </div>
              )}
              {/* // * zoom slider end */}

              {/* //* hotel details section start */}
              <div className="width flex flex-col gap-2 relative">
                <button className="absolute right-0 top-2 bg-light text-white font-semibold tracking-wide py-2 px-5 rounded-md">
                  Reserve or Book Now!
                </button>

                <h1 className="text-2xl font-bold">{data.name}</h1>

                <div className="text-base tracking-wider flex items-center gap-2">
                  <HiLocationMarker />
                  <span>{data.address}</span>
                </div>

                <span className="text-primary font-semibold tracking-wider">
                  Excellent location – {data.distance}m from center
                </span>
                <span className="text-green-700 font-semibold tracking-wider">
                  Book a stay over ${data.cheapestPrice} at this property and
                  get a free airport taxi
                </span>

                <div className="flex flex-wrap justify-between gap-y-2">
                  {data.photos?.map((photo, i) => (
                    <div className="w-[33%] rounded-md overflow-hidden">
                      <img
                        src={photo}
                        alt=""
                        onClick={() => handleOpen(i)}
                        className="w-full object-cover rounded-md hover:scale-110 transition-all duration-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between gap-5 my-5">
                  <div className="flex-[4]">
                    <h1 className="text-3xl font-bold tracking-wider">
                      Stay in the {data.title}
                    </h1>
                    <p className="mt-2">
                      {data.desc}
                      {/* Located a 5-minute walk from St. Florian's Gate in Krakow,
                    Tower Street Apartments has accommodations with air
                    conditioning and free WiFi. The units come with hardwood
                    floors and feature a fully equipped kitchenette with a
                    microwave, a flat-screen TV, and a private bathroom with
                    shower and a hairdryer. A fridge is also offered, as well as
                    an electric tea pot and a coffee machine. Popular points of
                    interest near the apartment include Cloth Hall, Main Market
                    Square and Town Hall Tower. The nearest airport is John Paul
                    II International Kraków–Balice, 16.1 km from Tower Street
                    Apartments, and the property offers a paid airport shuttle
                    service. */}
                    </p>
                  </div>
                  <div className="flex-[1.5] bg-[#ebf3ff] flex flex-col gap-5 p-4 ">
                    <h1 className="text-[20px] font-bold tracking-wider text-gray-600">
                      Perfect for a {days}-night stay!
                    </h1>
                    <span className="text-[16px] tracking-wide">
                      Located in the real heart of Krakow, this property has an
                      excellent location score of 9.8!
                    </span>
                    <h2 className="font-semibold tracking-wide">
                      <b>${totalPrice}</b> ({days} nights)
                    </h2>
                    <button
                      onClick={handleBook}
                      className="bg-light text-white font-semibold tracking-wide py-2 px-5 rounded-md"
                    >
                      Reserve or Book Now!
                    </button>
                  </div>
                </div>
              </div>
              {/* //* hotel details section end */}
            </div>
          </>
        )}
        <MailList />
        <Footer />
      </div>
      {openBookModal && (
        <ReserveModal setOpenBookModal={setOpenBookModal} hotelId={id} />
      )}
    </div>
  );
};
