import React from "react";
import House from "../../../assets/images/house2.jpg";
import userimage from "../../../assets/images/userimage.jpg";
import userimage1 from "../../../assets/images/zamil.jpg";
import { faBuildingUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <div className="pt-12 mx-auto bg-gradient-to-b from-violet-200 to-violet-100">
      <div className=" grid  lg:grid-cols-2 sm:grid-cols-1  gap-2 mx-auto">
        {/* written section */}
        <div className=" m-6 md:ml-16lg:ml-16 p-2">
          <h2 className="text-5xl  font-bold text-[#000929]">
            Buy, rent, or sell
            <br />
            your property
            <br />
            easily
          </h2>

          <p className="text-lg my-4">
            A great platform to buy, sell, or even rent your <br /> properties
            without any commisions.
          </p>

          <div className="">
            <button className="bg-white  rounded-s-md px-6 py-2 border-b-2 border-indigo-500">
              Rent
            </button>
            <button className="bg-white rounded-sm px-6 py-2">Buy</button>
            <button className="bg-white rounded-e-md px-6 py-2 ">Sell</button>
          </div>
          {/* drowpdown button */}
          <div className="bg-slate-50 mb-8  hidden md:hidden lg:grid grid-cols-3 p-4 rounded-md ">
            <div>
              <h2 className="text-sm  text-gray-400 ">Location</h2>
              <p className="font-bold text-sm ">Barcelona, Spain</p>
            </div>
            <div>
              <h2 className="text-sm  text-gray-400 ">When</h2>
              <p className="font-bold text-sm ">Select Move-in Date</p>
            </div>
            <div>
              <button className="text-sm  bg-[#7065F0] text-white px-5 py-3 rounded-lg">
                Browse Properties
              </button>
            </div>
          </div>

          {/* mobile responsive search */}
          <div className="block md:hidden lg:hidden mb-6 ">
            <div className="form-control ">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-48"
                />
                <button className="btn btn-square bg-[#7065F0]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* icons */}
          <div className=" flex items-center gap-12 mb-12">
            <div className="mt-4">
              <span className=" border-2 rounded-3xl  py-4 px-2 border-indigo-300  mt-6">
                <FontAwesomeIcon
                  icon={faUsers}
                  shake
                  size="xl"
                  style={{ color: "#4f6da1" }}
                />
              </span>
              <h4 className="text-xl mt-4 font-semibold text-[#7065F0]">
                50k+ renters
              </h4>
              <p>believe in our service</p>
            </div>
            <div className="mt-4">
              <span className="  border-2 rounded-3xl  py-4 px-2 border-indigo-300  mt-6">
                <FontAwesomeIcon
                  icon={faBuildingUser}
                  shake
                  size="xl"
                  style={{ color: "#4f6da1" }}
                />
              </span>
              <h4 className="text-xl mt-4 font-semibold text-[#7065F0]">
                10k+ properties
              </h4>
              <p>and house ready for occupancy</p>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="relative lg:block md:hidden hidden ">
          <div className="absolute bottom-0 ">
            <img src={House} className="w-full" alt="" />
          </div>

          {/* excilence section */}
          <div className=" absolute bottom-0  overflow-hidden right-0 rounded-tl-lg  bg-[#023047] h-22 w-48 p-4">
            <div className="flex justify-between gap-4 text-center">
              <h2 className="text-gray-200 font-semibold text-sm">Excellent</h2>
              <p className="text-white flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#00b4d8"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="#7065F0"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span className="text-xs">Trustpilot</span>
              </p>
            </div>

            <div className="flex mt-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffb703"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="#7065F0"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffb703"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="#7065F0"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffb703"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="#7065F0"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffb703"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="#7065F0"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffb703"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="#7065F0"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </p>
            </div>

            <p className="text-white mt-4 text-xs">From 3,264 reviews</p>
          </div>

          {/* users Section */}
          <div className=" absolute top-0 left-1  bg-slate-100 p-6 rounded-lg">
            <div>
              <div className="flex gap-2 ">
                <div className="">
                  <img src={userimage1} className="w-16  rounded-full" alt="" />
                </div>
                <div>
                  <h2 className="text-xl  font-bold">Shafayat zamil</h2>
                  <p className="text-xs text-gray-400">Renter</p>
                  <div className="flex gap-2">
                    <p className="text-sm text-gray-400 ">Moved with</p>
                    <p className="text-primary-light font-bold">Estatery</p>
                  </div>
                </div>
              </div>
              <p className="my-2 text-sm">
                I loved how smooth the move <br /> was, and finally got the
                house <br /> we wanted.
              </p>

              <hr />

              <div className="flex justify-between items-center mt-4 ">
                <div>
                  <h2 className="text-xl font-bold ">$1,500</h2>
                  <p className="text-xs">Saved up to</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">-24 hrs</h2>
                  <p className="text-xs">Process time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
