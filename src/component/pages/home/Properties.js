import React from "react";

import HouseIamge from "../../../assets/images/house2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faHandshake,
  faKey,
  faSquare,
  faStamp,
  faToilet,
} from "@fortawesome/free-solid-svg-icons";

const Properties = () => {
  return (
    <div>
      <div className=" text-center">
        <h2 className="text-4xl font-bold">Based on Your location</h2>
        <p className="mt-2">Some of our picked properties near you location.</p>
      </div>

      <div className="  grid grid-cols-2   justify-items-start px-8 md:px-16  lg:px-16 py-8">
        <div className="px-4 grid grid-cols-3 py-2 rounded-md bg-[#E0DEF7]">
          <button className="btn text-[#7065F0]">
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faKey}
                style={{ color: "#4f6da1" }}
                flip
                size="sm"
                // className="hidden md:block lg:block"
              />
            </span>
            Rent
          </button>
          <button className="mx-4">
            <span className="m-1">
              <FontAwesomeIcon
                icon={faHandshake}
                style={{ color: "#4f6da1" }}
                size="sm"
                // className="hidden md:block lg:block"
              />
            </span>
            Buy
          </button>
          <button className="">
            <span className="m-1">
              <FontAwesomeIcon
                icon={faStamp}
                style={{ color: "#4f6da1" }}
                size="sm"
                // className="hidden md:block lg:block"
              />
            </span>
            Sell
          </button>
        </div>
        <div className="form-control justify-self-end">
          {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          /> */}
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="location"
                className="input input-bordered hidden md:hidden lg:block"
              />
              <button className="btn btn-square bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  "
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
      </div>

      {/* card section */}

      <div className="px-16 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={HouseIamge} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#7065F0] text-xl font-semibold">
                  $2,095
                </span>
                <span>/month</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7065F0"
                  className="w-8 h-8  p-1 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="card-title text-black">Palm Harbor</h2>
            <p className="text-gray-400">
              2699 Green Valley, Highland Lake, FL
            </p>

            <hr className="mt-4" />

            <div className="flex justify-between">
              <div className=" flex items-center  gap-1">
                <FontAwesomeIcon
                  icon={faBed}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p className="">4 Beds</p>
              </div>
              <div className="flex  items-center gap-1">
                <FontAwesomeIcon
                  icon={faToilet}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>2 Bathrooms</p>
              </div>
              <div className="flex  items-center gap-1">
                <FontAwesomeIcon
                  icon={faSquare}
                  style={{ color: "#4f6da1" }}
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>6x8 m²</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={HouseIamge} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#7065F0] text-xl font-semibold">
                  $2,700
                </span>
                <span>/month</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7065F0"
                  className="w-8 h-8  p-1 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="card-title text-black">Beverly Springfield</h2>
            <p className="text-gray-400">
              2699 Green Valley, Highland Lake, FL
            </p>

            <hr className="mt-4" />
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faBed}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p className="">4 Beds</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faToilet}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>2 Bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faSquare}
                  style={{ color: "#4f6da1" }}
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>6x7.5m²</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={HouseIamge} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#7065F0] text-xl font-semibold">
                  $4,500
                </span>
                <span>/month</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7065F0"
                  className="w-8 h-8  p-1 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="card-title text-black">Faulkner Ave</h2>
            <p className="text-gray-400">
              2699 Green Valley, Highland Lake, FL
            </p>

            <hr className="mt-4" />

            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faBed}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p className="">4 Beds</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faToilet}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>3 Bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faSquare}
                  style={{ color: "#4f6da1" }}
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>8x10 m²</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={HouseIamge} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#7065F0] text-xl font-semibold">
                  $4,500
                </span>
                <span>/month</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7065F0"
                  className="w-8 h-8  p-1 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="card-title text-black">Faulkner Ave</h2>
            <p className="text-gray-400">
              2699 Green Valley, Highland Lake, FL
            </p>

            <hr className="mt-4" />

            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faBed}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p className="">4 Beds</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faToilet}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>3 Bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faSquare}
                  style={{ color: "#4f6da1" }}
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>8x10 m²</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={HouseIamge} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#7065F0] text-xl font-semibold">
                  $4,500
                </span>
                <span>/month</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7065F0"
                  className="w-8 h-8  p-1 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="card-title text-black">Faulkner Ave</h2>
            <p className="text-gray-400">
              2699 Green Valley, Highland Lake, FL
            </p>

            <hr className="mt-4" />

            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faBed}
                  style={{ color: "#4f6da1" }}
                  fade
                  className=" hidden md:hidden lg:block"
                  size="sm"
                />
                <p className="">4 Beds</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faToilet}
                  style={{ color: "#4f6da1" }}
                  fade
                  className=" hidden md:hidden lg:block"
                  size="sm"
                />
                <p>3 Bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faSquare}
                  style={{ color: "#4f6da1" }}
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>8x10 m²</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={HouseIamge} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#7065F0] text-xl font-semibold">
                  $4,500
                </span>
                <span>/month</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7065F0"
                  className="w-8 h-8  p-1 ring-2 bg-[#E0DEF7] ring-blue-500/50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="card-title text-black">Faulkner Ave</h2>
            <p className="text-gray-400">
              2699 Green Valley, Highland Lake, FL
            </p>

            <hr className="mt-4" />

            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faBed}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p className="">4 Beds</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faToilet}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>3 Bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faSquare}
                  style={{ color: "#4f6da1" }}
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>8x10 m²</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* browse more Properties */}

      <div className="flex justify-center items-center my-4">
        <button className="bg-[#100A55] font-semibold  text-white px-6 py-3 rounded-md ">
          Browse more properties
        </button>
      </div>
    </div>
  );
};

export default Properties;
