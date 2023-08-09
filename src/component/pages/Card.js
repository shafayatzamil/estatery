import React from "react";
import HouseIamge from "../../assets/images/house1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faHandshake,
  faKey,
  faSquare,
  faStamp,
  faToilet,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ singleProperty }) => {
  const {
    _id,
    name,
    imageURL,
    location,
    bed,
    bathroom,
    squarefit,
    number,
    price,
    propertyType,
    description,
  } = singleProperty;

  return (
    <div>
      <Link to={`/${singleProperty.propertyType}/${singleProperty._id}`}>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={imageURL[0]} className="w-full h-72" alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#7065F0] text-xl font-semibold">
                  {/* $2,095 */}${price}
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

            <h2 className="card-title text-black">{name}</h2>
            <p className="text-gray-400">{location.slice(0, 30)}...</p>

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
                <p className="">{bed} Beds</p>
              </div>
              <div className="flex  items-center gap-1">
                <FontAwesomeIcon
                  icon={faToilet}
                  style={{ color: "#4f6da1" }}
                  fade
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>{bathroom} Bathrooms</p>
              </div>
              <div className="flex  items-center gap-1">
                <FontAwesomeIcon
                  icon={faSquare}
                  style={{ color: "#4f6da1" }}
                  size="sm"
                  className=" hidden md:hidden lg:block"
                />
                <p>{parseFloat(squarefit)} m²</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
