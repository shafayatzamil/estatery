import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [nav, setnav] = useState(false);

  const links = [
    { to: "rent", name: "Rent" },
    { to: "sell", name: "Sell" },
    { to: "manageproperty", name: "Manage Property" },
    { to: "addproperty", name: "addproperty" },
  ];

  const toggleNav = () => {
    setnav(!nav);
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
              <FontAwesomeIcon icon={nav == true ? faXmark : faBars} />
            </span>
          </div>

          <ul className="flex lg:flex-row md:flex-col flex-col  gap-6 justify-center items-center text-base ">
            {links.map(({ to, name }) => (
              <Link to={to} key={name} className="nav-link">
                {name}
              </Link>
            ))}
          </ul>
        </div>

        {/* navbar button */}

        <div className="text-base mx-8">
          {user ? (
            <>
              <button
                className="bg-[#7065F0] text-white font-medium  px-3 py-1 rounded-md"
                onClick={handleLogOut}
              >
                {" "}
                Logout
              </button>
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
      </nav>
    </div>
  );
};

export default Navbar;
