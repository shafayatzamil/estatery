import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "rent", name: "Rent" },
    { to: "buy", name: "Buy" },
    { to: "sell", name: "Sell" },
    { to: "manageproperty", name: "Manage Property" },
    { to: "resource", name: "Resource" },
  ];
  return (
    <div>
      <nav className="flex gap-10 items-center justify-between p-4 bg-violet-100">
        {/* navbar link */}
        <div className="flex justify-center items-center  gap-4">
          <Link to="/">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
              <span className="font-bold text-xl tracking-tight text-primary-light font-kumbh-sans cursor-pointer mr-4">
                Estatery
              </span>
            </div>
          </Link>
          <ul className="flex gap-6 justify-center items-center text-base ">
            {links.map(({ to, name }) => (
              <Link to={to} key={name} className="nav-link">
                {name}
              </Link>
            ))}
          </ul>
        </div>

        {/* navbar button */}

        <div className="text-base mr-4">
          <Link to="login">
            {" "}
            <button className="border border-black py-1 font-medium px-3 rounded-md mr-3">
              Login
            </button>
          </Link>
          <button className="bg-[#7065F0] text-white font-medium  px-3 py-1 rounded-md">
            Signup
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
