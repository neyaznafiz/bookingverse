import React from "react";
import propertyOne from "../../Assets/FeaturedProperties/Aparthotel Stare Miasto.webp";
import propertyTwo from "../../Assets/FeaturedProperties/Comfort Suites Airport.jpg";
import propertyThree from "../../Assets/FeaturedProperties/Four Seasons Hotel.jpg";
import propertyFour from "../../Assets/FeaturedProperties/Hilton Garden Inn.jpg";
import useFetch from "../../Hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "http://localhost:5000/api/hotels?featured=true&limit=4"
  );

  const image = [propertyOne, propertyTwo, propertyThree, propertyFour];

  return (
    <div className="width mb-10">
      <h1 className="text-black text-2xl font-semibold my-3 border-b-2 border-[#febb02] pb-2 tracking-wide">
        Homes Guests Love
      </h1>

      <div className="flex justify-between gap-5">
        {loading ? (
          "Loading...."
        ) : (
          <>
            {data.map((item) => (
              <div className="" key={item._id}>
                <div className="overflow-hidden rounded-md">
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="w-[700px] h-[270px] rounded-md hover:scale-110 transition-all duration-300"
                  />
                </div>

                <div>
                  <p className="font-bold text-xl tracking-wide my-2">
                    {item.name}
                  </p>
                  <p className="tracking-wide capitalize">
                    <span className="font-semibold">City :</span> {item.city}
                  </p>
                  <p className="tracking-wide">
                    <span className="font-semibold">Price :</span> Starting from
                    ${item.cheapestPrice}
                  </p>
                  {item.rating && (
                    <div className="flex ">
                      {/* <span className="font-semibold">Rating : </span> */}
                      <button className="bg-primary text-white border-none px-3 mr-3 font-bold">
                        {item.rating}
                      </button>
                      <p className="tracking-wide">Excellent</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        )}

        {/* <div className="">
          <div className="overflow-hidden rounded-md">
            <img
              src={propertyTwo}
              alt=""
              className="w-[700px] h-[270px] rounded-md hover:scale-110 transition-all duration-300"
            />
          </div>

          <div>
            <p className="font-bold text-xl tracking-wide my-2">
              Comfort Suites Airport
            </p>
            <p className="tracking-wide">
              <span className="font-semibold">City :</span> Austin
            </p>
            <p className="tracking-wide">
              <span className="font-semibold">Price :</span> Starting from $140
            </p>
            <div className="flex">
              <button className="bg-primary text-white border-none px-3 mr-3 font-bold">
                9.3
              </button>
              <p className="tracking-wide">Exceptional</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="overflow-hidden rounded-md">
            <img
              src={propertyThree}
              alt=""
              className="w-[700px] h-[270px] rounded-md hover:scale-110 transition-all duration-300"
            />
          </div>

          <p className="font-bold text-xl tracking-wide my-2">
            Four Seasons Hotel
          </p>
          <p className="tracking-wide">
            <span className="font-semibold">City :</span> Lisbon
          </p>
          <p className="tracking-wide">
            <span className="font-semibold">Price :</span> Starting from $99
          </p>
          <div className="flex">
            <button className="bg-primary text-white border-none px-3 mr-3 font-bold">
              8.8
            </button>
            <p className="tracking-wide">Excellent</p>
          </div>
        </div>

        <div className="">
          <div className="overflow-hidden rounded-md">
            <img
              src={propertyFour}
              alt=""
              className="w-[700px] h-[270px] rounded-md hover:scale-110 transition-all duration-300"
            />
          </div>

          <p className="font-bold text-xl tracking-wide my-2">
            Hilton Garden Inn
          </p>
          <p className="tracking-wide">
            <span className="font-semibold">City :</span> Berlin
          </p>
          <p className="tracking-wide">
            <span className="font-semibold">Price :</span> Starting from $105
          </p>
          <div className="flex">
            <button className="bg-primary text-white border-none px-3 mr-3 font-bold">
              8.9
            </button>
            <p className="tracking-wide">Excellent</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedProperties;
