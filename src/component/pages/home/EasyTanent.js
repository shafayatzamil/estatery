import React from "react";

const EasyTanent = () => {
  return (
    <div className="bg-[#100A55] text-white px-16 py-12 ">
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-semibold">
          We make it easy for <br />{" "}
          <span className="text-[#7065F0]">tenants</span> and{" "}
          <span className="text-[#7065F0]">landlords</span>
        </h2>

        <p className="text-gray-300 font-semibold mr-12">
          Whether it’s selling your current home, getting <br /> financing, or
          buying a new home, we make it easy and <br /> efficient. The best
          part? you’ll save a bunch of money <br /> and time with our services.
        </p>
      </div>

      {/* 3 section box */}
      <div className="flex gap-4 justify-between ">
        <div className="flex gap-2 p-4 bg-[#403b77] rounded-md">
          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 p-2 ring-2 bg-[#100A55] rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl mb-2 font-semibold">Virtual home tour</h2>
            <p className="text-xs text-gray-300 font-semibold">
              You can communicate directly with landlords and <br /> we provide
              you with virtual tour before you buy or <br /> rent the property.
            </p>
          </div>
        </div>
        <div className="flex gap-2 p-4 bg-[#FFFFFF] rounded-md">
          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#7065F0"
              className="w-10 h-10 p-2 ring-2 bg-[#E8E6F9] rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl text-[#000929] mb-2 font-semibold">
              Find the best deal
            </h2>
            <p className="text-xs text-gray-300 font-semibold">
              Browse thousands of properties, save your <br /> favorites and set
              up search alerts so you don’t miss <br /> the best home deal!
            </p>
          </div>
        </div>
        <div className="flex gap-2 p-4 bg-[#7065F0] rounded-md">
          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#7065F0"
              className="w-10 h-10 p-2 ring-2 bg-[#E8E6F9] rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl mb-2 font-semibold">Get ready to apply </h2>
            <p className="text-xs text-gray-300 font-semibold">
              Find your dream house? You just need <br /> to do a little to no
              effort and you can start move <br /> in to your new dream home!
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-12 " />

      <div className="flex justify-around my-12">
        <div className="border-r-4 border-indigo-500 ">
          <h2 className="text-4xl font-bold">7.4%</h2>
          <p className="text-gray-400 mr-12">Property Return Rate</p>
        </div>
        <div className="border-r-4 border-indigo-500 ">
          <h2 className="text-4xl font-bold">3,856</h2>
          <p className="text-gray-400 mr-12">Property in Sell & Rent</p>
        </div>
        <div className="">
          <h2 className="text-4xl font-bold">2,540</h2>
          <p className="text-gray-400 ">Daily Completed Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default EasyTanent;
