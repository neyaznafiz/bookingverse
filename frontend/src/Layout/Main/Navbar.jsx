import { AuthContext } from "../../Context/AuthContext";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // const activeClass = "border-b border-white px-1";
  // const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <div className="h-[50px] bg-primary flex justify-center uppercase transition-all duration-300 sticky top-0 z-[999]">
      <div className="width text-white flex justify-between items-center relative">
        <div>
          <Link to="/" className="text-2xl uppercase">
            bookingverse
          </Link>
        </div>

        <div className="border-b px-2 text-sm tracking-wider cursor-pointer">
          {/* <Link to="/hotels"> */}
          <p>Book your holiday</p>
          {/* </Link> */}
        </div>

        <div className="flex gap-x-4">
          {/* hotels */}
          {/* <Link
            to="/hotels"
            className={`${
              pathname === "/hotels" ? activeClass : "tracking-wide"
            }`}
          >
            Hotels
          </Link> */}

          {user ? (
            <>
              {/* <div> */}
                <div onClick={() => setOpen(!open)}>
                  <h1 className="uppercase text-xl font-extrabold px-[9px] py-[2px] bg-white text-black rounded-full cursor-pointer">
                    {user?.username?.slice(0, 1)}
                  </h1>
                </div>

                {open && (
                  <div className="absolute top-12 right-0">
                    <div className="bg-white  min-w-max max-w-[322px]">
                      <div className="grid justify-center p-4 rounded-sm">
                        <div className="flex justify-center z-[999]">
                          <span className="">
                            <h1 className="text-6xl text-black font-bold border-2 px-4 py-1 rounded-full bg-white">
                              {user?.username?.slice(0, 1)}
                            </h1>
                          </span>
                        </div>
                        <div className="bg-gray-200 text-black h-24 flex flex-col justify-end items-center p-3 -mt-10 z-[1] tracking-wide">
                          <p className="pt-3 ">{user?.displayName}</p>
                          <p className="pt-3 ">{user?.email}</p>
                        </div>
                      </div>
                      <div className="bg-seaworthy text-center">
                        <button
                          // onClick={handleSignOut}
                          className="uppercase bg-light text-white border-b border-white mt-2 py-2 w-full  tracking-wide hover:text-gray-300 transition-all duration-300"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              {/* </div> */}
            </>
          ) : (
            <>
              <button className="bg-white text-primary px-3 border-none uppercase">
                Register
              </button>
              <Link
                to="/login"
                className="bg-white text-primary px-3 border-none uppercase"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
