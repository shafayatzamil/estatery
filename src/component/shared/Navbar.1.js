import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import LoginUserImage from "../../assets/images/user1.png";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [nav, setNav] = useState(false);

  const links = [
    { to: "rent", name: "Rent" },
    { to: "sell", name: "Sell" },
    { to: "manageproperty", name: "Manage Property" },
    { to: "addproperty", name: "addproperty" },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("estatery-token");
        toast.success("logout successful");
      })
      .catch((error) => toast.error("unable to logout", error.message));
  };

  return (
    <div>
      <nav className="flex flex-col md:flex-col lg:flex-row md:items-center  gap-10 items-center justify-between p-4 bg-violet-100">
        {/* navbar link */}
        <div className="flex flex-col md:flex-col lg:flex-row  justify-center items-center  gap-4 mx-8">
          <div className="flex  gap-32 justify-around">
            <Link to="/">
              <div className="">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  beatFade
                  size="lg"
                  style={{ color: "#4f6da1" }}
                />
                <span className="font-bold text-xl tracking-tight text-primary-light font-kumbh-sans cursor-pointer mr-4">
                  Estatery
                </span>
              </div>
            </Link>

            <span
              onClick={toggleNav}
              className="justify-self-end md:hidden lg:hidden"
            >
              <FontAwesomeIcon icon={nav === true ? faXmark : faBars} />
            </span>
          </div>

          <div className="hidden md:flex space-x-4">
            <ul className="flex lg:flex-row md:flex-col flex-col  gap-6 justify-center items-center text-base ">
              {links.map(({ to, name }) => (
                <Link to={to} key={name} className="nav-link">
                  {name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {/* navbar button */}
        <div className="text-base mx-8 hidden md:flex space-x-4">
          {user ? (
            <>
              <div className="flex gap-2  ">
                <button
                  className="bg-[#7065F0] text-white font-medium  px-3 py-1 rounded-md"
                  onClick={handleLogOut}
                >
                  {" "}
                  Logout
                </button>
                <div>
                  <img
                    src={user.photoURL ? user.photoURL : LoginUserImage}
                    className="w-6 h-8"
                    alt="user"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                {" "}
                <button className="border border-black py-1 font-medium px-3 rounded-md mr-3">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-[#7065F0] text-white font-medium  px-3 py-1 rounded-md">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
        {/* responsive navbar button */}
        {/*
                    {nav && (
                      // absolute w-full  bg-slate-100 shadow-md lg:hidden md:hidden p-4 z-1
                      <>
                        <div className="md:hidden  ">
                          <ul className="flex lg:flex-row md:flex-col flex-col  gap-6 justify-center items-center text-base ">
                            {links.map(({ to, name }) => (
                              <Link to={to} key={name} className="nav-link">
                                {name}
                              </Link>
                            ))}
                          </ul>
                        </div>
                        {/* navbar button */}
        {/*
                        <div className="text-base mx-8">
                          {user ? (
                            <>
                              <div className="flex gap-2">
                                <div>
                                  <img
                                    src={user.photoURL ? user.photoURL : LoginUserImage}
                                    alt="user"
                                    className="w-6 h-8"
                                  />
                                </div>
                                <button
                                  className="bg-[#7065F0] text-white font-medium  px-3 py-1 rounded-md"
                                  onClick={handleLogOut}
                                >
                                  {" "}
                                  Logout
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              <Link to="/login">
                                {" "}
                                <button className="border border-black py-1 font-medium px-3 rounded-md mr-3">
                                  Login
                                </button>
                              </Link>
                              <Link to="/register">
                                <button className="bg-[#7065F0] text-white font-medium  px-3 py-1 rounded-md">
                                  Signup
                                </button>
                              </Link>
                            </>
                          )}
                        </div>
                      </>
                    )} */}
        {
          nav && (
            <div className="md:hidden  ">
              <ul className="flex lg:flex-row md:flex-col flex-col  gap-6 justify-center items-center text-base ">
                {links.map(({ to, name }) => (
                  <Link to={to} key={name} className="nav-link">
                    {name}
                  </Link>
                ))}
              </ul>
            </div>
          ) /* navbar button */
        }
        /* navbar button */
        {/* navbar button */}
        <div className="text-base mx-8">
          {user ? (
            <>
              <div className="flex gap-2">
                <div>
                  <img
                    src={user.photoURL ? user.photoURL : LoginUserImage}
                    alt="user"
                    className="w-6 h-8"
                  />
                </div>
                <button
                  className="bg-[#7065F0] text-white font-medium  px-3 py-1 rounded-md"
                  onClick={handleLogOut}
                >
                  {" "}
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                {" "}
                <button className="border border-black py-1 font-medium px-3 rounded-md mr-3">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-[#7065F0] text-white font-medium  px-3 py-1 rounded-md">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
        )}
      </nav>
    </div>
  );
};
