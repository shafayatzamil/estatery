import React from "react";

import House from "../../../assets/images/house1.jpg";

const HeroSection = () => {
  return (
    <div className="pt-12 mx-auto bg-gradient-to-b from-violet-200 to-violet-100">
      <div className=" grid grid-cols-2  mx-auto">
        {/* written section */}
        <div className="ml-16">
          <h2 className="text-5xl font-bold text-[#000929]">
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

          <div className=" mb-6">
            <button className="bg-white  rounded-s-md px-4 py-1">Rent</button>
            <button className="bg-white rounded-sm px-4 py-1">Buy</button>
            <button className="bg-white rounded-e-md px-4 py-1 ">Sell</button>
          </div>

          {/* icons */}
          <div className=" flex gap-12">
            <div className="">
              <span className="  mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7065F0"
                  className="w-12 h-12 p-2 ring-2 bg-gray-200 ring-blue-500/50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </span>
              <h4 className="text-xl font-semibold text-[#7065F0]">
                50k+ renters
              </h4>
              <p>believe in our service</p>
            </div>
            <div className="">
              <span className="  mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7065F0"
                  className="w-12 h-12 p-2 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>
              </span>
              <h4 className="text-xl font-semibold text-[#7065F0]">
                10k+ properties
              </h4>
              <p>and house ready for occupancy</p>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="">
          <img src={House} className="relative " alt="" />

          {/* <div className=" absolute right-12 bottom-72 bg-[#023047] h-22 w-52 p-4">
            <div className="flex justify-between gap-4">
              <h2 className="text-white">Excellent</h2>
              <p className="text-white flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#00b4d8"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                 stroke="#7065F0"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span className="">Trustpilot</span>
              </p>
            </div>

            <div className="flex mt-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffb703"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                 stroke="#7065F0"
                  className="w-6 h-6"
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
                  strokeWidth={1.5}
                 stroke="#7065F0"
                  className="w-6 h-6"
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
                  strokeWidth={1.5}
                 stroke="#7065F0"
                  className="w-6 h-6"
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
                  strokeWidth={1.5}
                 stroke="#7065F0"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </p>
            </div>

            <p className="text-white mt-4">From 3,264 reviews</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
