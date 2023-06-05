import React from "react";
import newHouse from "../../../assets/images/newhouse.jpg";

const NewWayHome = () => {
  return (
    <div className=" flex flex-row justify-center  gap-12 py-12">
      <div className="bg-violet-100  rounded-lg border basis-1/4">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#100A55] py-4">
            The new way to find <br /> your new home
          </h2>
          <p className="mb-4">
            Find your dream place to live in with <br /> more than 10k+
            properties listed.
          </p>
          <button className=" btn bg-[#100A55] text-white">
            Browse Properties
          </button>
        </div>
        <div>
          <img src={newHouse} className="rounded-b-lg" alt="" />
        </div>
      </div>

      {/* section of details */}
      <div className="basis-3/5 ">
        <div className="grid grid-cols-2 gap-24">
          <div>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-12 h-12 p-2 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            <h2 className="text-2xl font-bold my-3">Property Insurance</h2>
            <p className="text-[#4D5461] mt-3">
              We offer our customer property <br /> protection of liability
              coverage and <br />
              insurance for their better life.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="w-12 h-12 p-2 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h2 className="text-2xl font-bold my-3">Best Price</h2>
            <p className="text-[#4D5461] mt-3">
              Not sure what you should be charging <br /> for your property? No
              need to worry, let <br /> us do the numbers for you.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="w-12 h-12 p-2 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>

            <h2 className="text-2xl font-bold my-3">Lowest Commission</h2>
            <p className="text-[#4D5461] mt-3">
              You no longer have to negotiate <br /> commissions and haggle with
              other <br />
              agents it only cost 2%!
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="w-12 h-12 p-2 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <h2 className="text-2xl font-bold my-3">Overall Control</h2>
            <p className="text-[#4D5461] mt-3">
              Get a virtual tour, and schedule visits <br /> before you rent or
              buy any properties. <br /> You get overall control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWayHome;
