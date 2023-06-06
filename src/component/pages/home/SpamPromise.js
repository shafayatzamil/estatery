import React from "react";

const SpamPromise = () => {
  return (
    <div className="py-12 text-center">
      <h2 className="text-[#7065F0] font-bold text-2xl mb-1">
        No Spam Promise
      </h2>
      <h1 className="text-4xl font-semibold text-black mb-5">
        Are you a landlord?
      </h1>
      <p className="text-gray-500">
        Discover ways to increase your home's value and get listed. No Spam.
      </p>
      <div className="py-4 ">
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-16 py-2 rounded-md"
        />
        <button className="bg-[#7065F0]  text-white px-6 py-2  rounded-md">
          Submit
        </button>
      </div>

      <p className="text-xs">
        Join <span className="text-[#7065F0]"> 10,000+</span> other landlords in
        our estatery community.
      </p>
    </div>
  );
};

export default SpamPromise;
