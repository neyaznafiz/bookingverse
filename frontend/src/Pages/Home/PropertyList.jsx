import React from "react";
import hotels from "../../Assets/PropertyList/hotels.webp";
import apartments from "../../Assets/PropertyList/apartments.jpg";
import resorts from "../../Assets/PropertyList/resorts.jpg";
import villas from "../../Assets/PropertyList/villas.jpg";
import cabins from "../../Assets/PropertyList/cabins.jpg";
import useFetch from "../../Hooks/useFetch";

const PropertyList = () => {
  const { data, loading,  } = useFetch(
    "http://localhost:5000/api/hotels/count-by-type"
  );

  const images = [hotels, apartments, resorts, villas, cabins];

  return (
    <div className="width">
      <h1 className="text-black text-2xl font-semibold my-3 border-b-2 border-[#febb02] pb-2 tracking-wide mx-4 sm:mx-0">
        Browse By Property Type
      </h1>

      {loading ? (
        "Loading please wait"
      ) : (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 place-items-center gap-x-5">
          {data &&
            images.map((img, i) => (
              <div className="" key={i}>
                <div className="rounded-lg overflow-hidden cursor-pointer">
                  <img
                    src={img}
                    alt=""
                    className="w-[280px] h-36 rounded-lg object-cover hover:scale-110 transition-all duration-300"
                  />
                  <div>
                    <h1 className="text-xl font-semibold tracking-wide capitalize">
                    {data[i]?.type}
                    </h1>
                    <h2>{data[i]?.count}</h2>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
