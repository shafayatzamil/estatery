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
      <div className="bg-white">
        <input type="email" />
        <button>Submit</button>
      </div>

      <p className="text-xs">
        Join 10,000+ other landlords in our estatery community.
      </p>
    </div>
  );
};

export default SpamPromise;
