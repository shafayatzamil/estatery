import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import PhoneInput from "react-phone-number-input";
import addPropertyIcons from "../../assets/images/property_9202471.png";
import toast from "react-hot-toast";

const AddProperty = () => {
  const { user } = useContext(AuthContext);
  const [contactNumber, setContractNumber] = useState("");
  const [propertyType, setPropertyType] = useState("rent");
  const [imageInfo, setImageInfo] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  // handle phone number change
  const handlePhoneNumberChange = (value) => {
    setContractNumber(value);
  };

  // handle image change
  const handleFileChange = async (event) => {
    const files = event.target.files;
    setSelectedImages([...selectedImages, ...files]);

    // chnaged after the multiple image
    // const file = event.target.files[0];
    // const base64 = await convertToBase64(file);
    // setImageInfo(base64);
  };

  // handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const location = form.location.value;
    const bed = form.bed.value;
    const bathroom = form.bathroom.value;
    const squarefit = form.squarefit.value;
    const number = contactNumber;
    const price = form.price.value;
    const description = form.description.value;
    // const imageURl = imageInfo;

    // imageHosting
    // const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
    // const formData = new FormData();
    // formData.append("image", imageInfo);
    // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;

    // fetch the hoasting
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imageData) => {
    //     console.log(imageData);
    //     if (imageData.success) {
    // imageurl take after hoasting
    // const imageURl = imageData.data.url;
    // console.log(imageURl);

    // property information
    // const propertyInformation = {
    //   email: user?.email,
    //   // imageURl,
    //   selectedImages,
    //   name,
    //   location,
    //   bed,
    //   bathroom,
    //   squarefit,
    //   number,
    //   price,
    //   propertyType,
    //   description,
    // };

    // try in form data method
    const formData = new FormData();
    formData.append("email", user?.email);
    formData.append("selectedImages", selectedImages);
    formData.append("name", name);
    formData.append("location", location);
    formData.append("bed", bed);
    formData.append("bathroom", bathroom);
    formData.append("squarefit", squarefit);
    formData.append("number", number);
    formData.append("price", price);
    formData.append("propertyType", propertyType);
    formData.append("description", description);

    for (let i = 0; i < selectedImages.length; i++) {
      formData.append("selectedImages", selectedImages[i]);
    }
    fetch("https://estatery-backend-server.vercel.app/addproperty", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        toast(`${data.message}`, {
          icon: "✔",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });

    // console.log(propertyInformation);

    setContractNumber(" ");
    form.reset();
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <div className="p-8 bg-gray-200  shadow-xl grid grid-cols-5 gap-3 mx-auto">
        {/* form site */}
        <div className="col-span-3 ">
          <h2 className="text-3xl">Property info</h2>

          <form onSubmit={handleSubmit}>
            {/* image */}
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <div>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold text-xl">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                </div>

                {/* changed after multiple image */}
                <input
                  id="dropzone-file"
                  type="file"
                  name="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* selected image div */}
            <div>
              {/* <div className="flex gap-1 mt-4">
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Image ${index}`}
                      className="w-12 h-12 "
                    />
                  </div>
                ))}
              </div> */}
              <div className="flex gap-1 mt-4">
                {selectedImages.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index}`}
                    className="w-12 h-12 "
                  />
                ))}
              </div>
            </div>

            {/* name of property */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Property Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Property Name"
                className="input input-bordered font-bold"
              />
            </div>

            {/* location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location:</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="road,
                district,country"
                className="input input-bordered"
              />
            </div>

            {/* nessasery things */}
            <div className="flex  gap-2">
              <div className="form-control w-1/3">
                <label className="label">
                  <span className="label-text">Bed</span>
                </label>
                <input
                  type="number"
                  name="bed"
                  placeholder="Bed"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/4">
                <label className="label">
                  <span className="label-text">Bathroom</span>
                </label>
                <input
                  type="number"
                  name="bathroom"
                  placeholder="Bathroom"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Square fit</span>
                </label>
                <input
                  type="text"
                  name="squarefit"
                  placeholder="square fit"
                  className="input input-bordered"
                />
              </div>
            </div>

            {/* number and price /property type  */}
            <div className="grid grid-cols-3 gap-2">
              {/* phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">phone</span>
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={contactNumber}
                  onChange={handlePhoneNumberChange}
                  className="input input-bordered"
                  defaultCountry="BD" // Set the default country code if needed
                />
              </div>
              {/* price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>

              {/* property type */}
              <div className="mt-9">
                <select
                  className="py-3 px-4  bg-[#c6c1f9]   text-[#1B1A1A]  block border-gray-200 rounded-full text-sm focus:border-blue-500 "
                  value={propertyType}
                  required
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option>choose your property type</option>
                  <option defaultValue={propertyType}>rent</option>
                  <option>sell</option>
                </select>
              </div>
            </div>

            {/* description */}
            <div>
              <label
                htmlFor="Description"
                className="block text-sm text-gray-800 dark:text-gray-300"
              >
                Description
              </label>

              <textarea
                placeholder="Description of your house..."
                name="description"
                className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              ></textarea>
            </div>

            <div className="mt-4  card-actions justify-end">
              {/* accunt role */}
              <div>
                {/* <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Rent or sell</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option defaultValue={propertyType}>Rent</option>
                    <option>sell</option>
                  </select>
                </div> */}
              </div>

              <button className="bg-[#7065F0]  text-white px-8 py-2  rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* icons of add property */}
        <div className=" card  bg-base-100 shadow-xl flex justify-center items-center  border-2 col-span-2 mt-8 text-center ">
          <div className="">
            <img src={addPropertyIcons} className="w-40 mx-auto" alt="" />

            <h2 className="text-2xl font-bold my-2 ">Estatery House info</h2>
            <h2>
              Include the contact details of the property agent <br /> or owner,
              including their name, phone number, <br /> email address, and any
              other preferred <br /> method of contact.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
