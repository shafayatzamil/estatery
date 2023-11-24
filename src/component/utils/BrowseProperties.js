import React, { useState } from "react";

const BrowseProperties = () => {
  const [seletedLocation, setSelectedLocation] = useState(" ");
  const [movingDate, setMovingDate] = useState("");

  const handleLocationset = (e) => {
    setSelectedLocation(e.target.value);
    console.log(seletedLocation);
  };

  const handleMovingDate = (e) => {
    setMovingDate(e.target.value);
    console.log("moving date is", movingDate);
  };
  return (
    <div className="bg-slate-50   mb-8 p-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 rounded-md">
      <div className="mb-4 md:mb-0">
        <h2 className="text-sm text-gray-400">Location</h2>
        <select
          className="appearance-none text-sm text-center md:text-md lg:text-md bg-white border border-blue-100 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
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
        {/* <p className="font-bold text-sm">Barcelona, Spain</p> */}
      </div>
      <div className="mb-4 md:mb-0">
        <h2 className="text-sm text-gray-400">When</h2>
        <input
          type="date"
          className="w-full px-2 border border-blue-100 rounded"
          onChange={handleMovingDate}
          value={movingDate}
        />
        {/* <p className="font-bold text-sm">Select Move-in Date</p> */}
      </div>
      <div>
        <button className="text-sm bg-[#7065F0] text-white px-5 py-3 rounded-lg w-full md:w-auto">
          Browse Properties
        </button>
      </div>
    </div>
  );
};

export default BrowseProperties;
