import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Search } from "lucide-react";

const Rent = () => {
  const [rentProperty, setRentProperty] = useState([]);
  useEffect(() => {
    fetch("https://estatery-backend-server.vercel.app/rent")
      .then((res) => res.json())
      .then((data) => {
        setRentProperty(data.data);
      });
  }, []);

  return (
    <>
      {/* page details to and search box */}
      <div className="px-16 py-6 flex justify-between">
        <div>
          <h2 className="text-4xl font-bold ">Search properties to rent </h2>
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

      <div></div>

      <div className="px-16 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {rentProperty.map((singleProperty) => (
          <Card key={singleProperty._id} singleProperty={singleProperty}></Card>
        ))}
      </div>
    </>
  );
};

export default Rent;
