import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { Search } from "lucide-react";

const Sell = () => {
  const [sellProperty, setSellProperty] = useState([]);
  const [movingMonth, setMovingMonth] = useState("");

  const [seletedLocation, setSelectedLocation] = useState(" ");
  const handleLocationset = (e) => {
    setSelectedLocation(e.target.value);
  };
  const handleMovingMonthChange = (e) => {
    setMovingMonth(e.target.value);
  };

  useEffect(() => {
    fetch("https://estatery-backend-server.vercel.app/sell")
      .then((res) => res.json())
      .then((data) => {
        setSellProperty(data.data);
      });
  }, []);
  return (
    <>
      {/* page details to and search box */}
      <div className="px-16 py-6 flex justify-between">
        <div>
          <h2 className="text-4xl font-bold ">Search properties to sell </h2>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square bg-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              </svg> */}
              <Search />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-16 flex gap-12 p-4 bg-white rounded-md">
        {/* location,date,input,search */}
        <div>
          <h2 className="text-sm">Location</h2>
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={seletedLocation}
            onChange={handleLocationset}
          >
            <option value="">Select Location</option>
            <option value="dhaka">Dhaka</option>
            <option value="chattogram">Chattogram</option>
            <option value="khulna">Khulna</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="rangpur">Rangpur</option>
            <option value="sylhet">Sylhet</option>
            <option value="mymensingh">Mymensingh</option>
            <option value="barisal">Barisal</option>
          </select>
        </div>
        <div>
          <h2 className="text-sm">Moving Month</h2>

          {/* <input
            type="month"
            min="2023-03"
            name="location"
            className="font-bold text-lg"
            id=""
          /> */}
          {/* <input
            type="month"
            min="2023-03"
            name="movingMonth"
            className="font-bold text-lg"
            id="movingMonth"
            value={movingMonth}
            onChange={handleMovingMonthChange}
          /> */}

          {movingMonth && <p>moving month {movingMonth}</p>}
        </div>
      </div>

      {/* all the sell property */}
      <div className="px-16 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellProperty.map((singleProperty) => (
          <Card key={singleProperty._id} singleProperty={singleProperty}></Card>
        ))}
      </div>
    </>
  );
};

export default Sell;
