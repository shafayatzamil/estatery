import React, { useEffect } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HouseIamge from "../../assets/images/house1.jpg";
import {
  Bath,
  BedSingle,
  ChevronLeft,
  Diamond,
  Heart,
  Home,
  Phone,
  Search,
  Share2,
  ShowerHead,
} from "lucide-react";

const CardDetails = () => {
  const singleProperty = useLoaderData();

  const {
    _id,
    name,
    imageURl,
    location,
    bed,
    bathroom,
    squarefit,
    number,
    price,
    propertyType,
    description,
  } = singleProperty.data;
  return (
    <div>
      {/* card details page */}
      <div className=" px-12 py-4  bg-base-100 shadow-xl">
        {/* Header section */}
        <Link to={`/${propertyType}`}>
          <p className="flex items-center text-[#7065F0] m-2 ">
            {" "}
            <span>
              <ChevronLeft size={20} color="#6dadee" strokeWidth={1.25} />
            </span>
            Back to Map
          </p>
        </Link>
        <div className=" flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-semibold py-2 mb-2">{name}</h2>
            <p className="mb-3">{location}</p>
          </div>
          <div className="flex  gap-4 text-[#7065F0]">
            <div className="border rounded-md px-4 py-2">
              <button className="flex justify-around items-center gap-2">
                <Share2 size={20} color="#7065F0" strokeWidth={1.25} />
                Share
              </button>
            </div>
            <div className="border rounded-md px-4 py-2">
              <button className="flex justify-around items-center gap-2">
                <Heart size={20} color="#7065F0" strokeWidth={1.25} />
                Favorite
              </button>
            </div>
            <div className="border rounded-md px-4 py-2">
              <button className="flex justify-around items-center gap-2">
                <Search size={20} color="#7065F0" strokeWidth={1.25} />
                Browse Nearby Listing
              </button>
            </div>
          </div>
        </div>

        {/* image section */}
        <div className="w-full mb-4">
          <img src={imageURl} className="w-7/12 h-[28rem]" alt="" />
        </div>
        {/* information section and price */}
        <div className="flex justify-between gap-12 mb-4">
          <div className="border flex gap-10 px-4 py-8 rounded-md">
            <div>
              Bedroom
              <div className="flex gap-2 items-center ">
                <BedSingle color="#4f5459" strokeWidth={1.25} />
                <p className="font-bold text-lg">{bed}</p>
              </div>
            </div>
            <div>
              Bathroom
              <div className="flex gap-2 items-center ">
                <Bath color="#4f5459" strokeWidth={1.25} />
                <p className="font-bold text-lg">{bathroom}</p>
              </div>
            </div>
            <div>
              Square fit
              <div className="flex gap-2 items-center ">
                <Diamond color="#4f5459" strokeWidth={1.25} />
                <p className="font-bold text-lg">{squarefit}</p>
              </div>
            </div>
            <div>
              propertyType
              <div className="flex gap-2 items-center ">
                <Home color="#4f5459" strokeWidth={1.25} />
                <p className="font-bold text-lg">{propertyType}</p>
              </div>
            </div>
            <div>
              contact information
              <div className="flex gap-2 items-center ">
                <Phone color="#4f5459" strokeWidth={1.25} />
                <p className="font-bold text-lg">{number}</p>
              </div>
            </div>
          </div>

          {/* price section */}
          <div className="border-2 p-6 basis-1/4 ">
            <h2>Rent Price</h2>
            <div>
              <span className="text-[#7065F0] text-xl font-semibold">
                ${price}
              </span>
              <span>/month</span>
            </div>

            <Link to={`/tenecy/${propertyType}/${_id}`}>
              <button className="bg-[#7065F0]  text-center px-10 py-3 mt-2 text-white font-medium   rounded-md">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-4 border py-4 px-4 ">
          <h2 className="text-4xl">About this House</h2>
          <p className="text-lg mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
