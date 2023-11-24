import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HouseIamge from "../../assets/images/house1.jpg";
import { Bath, BedSingle, Diamond } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

const TenecyApplication = () => {
  const tenceyProduct = useParams();
  const [tenancyItem, setTenancyItem] = useState({});
  const [tenecyImage, setTenencyImage] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://estatery-backend-server.vercel.app/${tenceyProduct.propertyType}/${tenceyProduct.id}`
      )
      .then((response) => {
        setTenancyItem(response.data.data);
        setTenencyImage(response.data.data.imageURL);
      })
      .catch((error) => {
        console.error("Error fetching property images:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const fatherName = form.fathername.value;
    const email = form.email.value;
    const date = form.date.value;
    const maritalstatus = form.maritalstatus.value;
    const nid = form.nid.value;
    const member = form.member.value; // Moved inside the form

    const OrderItem = {
      tenancyName: name,
      tenancyFatherName: fatherName,
      tenancyEmail: email,
      tenancyMaritalStatus: maritalstatus,
      tenancyNid: nid,
      tenancyMovingDate: date,
      tenancyProductId: tenancyItem._id,
      tenancyNumber: phoneNumber,
      tenancyMember: member,
      propertyName: tenancyItem.name,
      PropertyPrice: tenancyItem,
    };

    console.log(OrderItem);

    fetch("https://estatery-backend-server.vercel.app/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(OrderItem),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });

    form.reset();
    setPhoneNumber(" ");
  };

  return (
    <div className="p-8 w-2/3 mx-auto">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        Tenancy application
      </h2>
      {/* menu bar */}
      <ol className="flex items-center w-full">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
          <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg
              className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
        </li>
        <li className="flex items-center w-full">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
            </svg>
          </span>
        </li>
      </ol>
      {/* Items is */}
      <div className="card lg:card-side bg-base-100 shadow-xl mt-6 mb-8">
        <figure>
          <img
            // src={tenancyItem.imageURl ? tenancyItem.imageURl : HouseIamge}
            src={tenecyImage[0]}
            alt="property"
            className="w-72 h-52"
          />
        </figure>
        <div className="card-body">
          <div className=" -mb-2">
            <span className="text-[#7065F0]  text-sm font-semibold">
              ${tenancyItem.price}
            </span>
            /Month
          </div>
          <h2 className=" card-title -mb-2">{tenancyItem.name}</h2>
          <p className="text-gray-400 text-sm ">{tenancyItem.location}</p>
          <hr />

          {/* icons */}
          <div className="flex gap-8 rounded-md -mb-3">
            <div>
              Bedroom
              <div className="flex gap-2 items-center ">
                <BedSingle color="#4f5459" strokeWidth={1.25} />
                <p className="font-bold text-sm">{tenancyItem.bed}</p>
              </div>
            </div>
            <div>
              Bathroom
              <div className="flex gap-2 items-center ">
                <Bath color="#4f5459" strokeWidth={1.25} />
                <p className="font-bold text-sm">{tenancyItem.bathroom}</p>
              </div>
            </div>
            <div>
              Square fit
              <div className="flex gap-2 items-center ">
                <Diamond color="#4f5459" strokeWidth={1.25} />
                <p className="font-bold text-sm">{tenancyItem.squarefit}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 border-slate-300"></div>

      <div className="my-4">
        <h2 className="text-2xl font-bold text-black ">Personal Details</h2>
        <p className="text-sm text-slate-400">
          Please select your profile below by filling in your personal
          information{" "}
        </p>

        <div className="border rounded-lg p-2">
          <h2 className="font-bold text-lg">Applicant Details</h2>

          {/* tenent form  */}
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2 w-full">
              {/* NAME */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="full-name"
                  className="input input-bordered"
                />
              </div>
              {/* father name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Father Name</span>
                </label>
                <input
                  type="text"
                  name="fathername"
                  placeholder="Father-name"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {/* EMAIL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              {/* PHONE */}
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">phone</span>
                  </label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="input input-bordered"
                    defaultCountry="BD" // Set the default country code if needed
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Moving Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {/* marital status */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Marital Status</span>
                </label>
                <input
                  type="text"
                  name="maritalstatus"
                  placeholder="Marital status"
                  className="input input-bordered"
                />
              </div>
              {/* NID NO */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">NID NO:</span>
                </label>
                <input
                  type="text"
                  name="nid"
                  placeholder="NID NO:"
                  className="input input-bordered"
                />
              </div>
              {/* member of living */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Member of living</span>
                </label>
                <input
                  type="text"
                  name="member"
                  placeholder="member"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control mt-3">
              <input
                className="btn btn-outline btn-success"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TenecyApplication;
