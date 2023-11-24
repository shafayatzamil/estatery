import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import LoginUserImage from "../../assets/images/user1.png";

const Navbar = () => {
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
    <nav className=" relative bg-gradient-to-r from-violet-100 to-violet-200">
      <div className="flex items-center justify-between py-4 text-gray-700  text-md mx-8">
        <Link to="/">
          <div className="flex items-center justify-between gap-1">
            <FontAwesomeIcon
              icon={faEnvelope}
              beatFade
              size="lg"
              style={{ color: "#4f6da1" }}
            />
            <span className="font-bold text-2xl text-[#1d1160] tracking-tight text-primary-light font-kumbh-sans cursor-pointer mr-6">
              Estatery
            </span>
          </div>
        </Link>
        <div
          onClick={toggleNav}
          className="justify-self-end md:hidden lg:hidden"
        >
          <FontAwesomeIcon icon={nav === true ? faXmark : faBars} />
        </div>

        {/* nav link */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            {links.map(({ to, name }) => (
              <Link to={to} key={name} className="nav-link text-black text-md">
                {name}
              </Link>
            ))}
          </ul>
        </div>

        {/* sign up button */}
        <div className="hidden md:hidden lg:block">
          {user ? (
            <>
              <div className="flex gap-2  ">
                <button
                  className="bg-[#7065F0] text-white font-medium  px-3 py-2 rounded-md"
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
      </div>

      {/* responsibe navbar */}
      {nav && (
        <div className=" absolute w-full  bg-slate-100 shadow-md lg:hidden md:hidden p-4 z-1">
          <ul className="flex  items-center flex-col justify-center gap-6">
            {links.map(({ to, name }) => (
              <Link to={to} key={name} className="nav-link">
                {name}
              </Link>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-3 mt-5  md:hidden lg:hidden">
            {user ? (
              <>
                <div className="flex gap-2 ">
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
                  <button className="border border-black py-1 font-medium px-3 rounded-md ">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
