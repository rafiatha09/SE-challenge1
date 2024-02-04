import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Logo from "../images/Logo.svg";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <nav className="flex justify-center bg-white">
      <div className="flex max-w-7xl p-6 justify-between w-full">
        <div className="flex justify-start items-center pr-20">
          <Link to="/">
            <img src={Logo} alt="" className="flex-shrink-0" />
          </Link>
        </div>
        <div className="text-sm flex justify-between items-center gap-6">
          <Link className="flex-none" to="/?cat=art">
            <h6>Home</h6>
          </Link>
          <Link className=" flex-none" to="/?cat=science">
            <h6>Blog</h6>
          </Link>
          <Link className=" flex-none" to="/?cat=technology">
            <h6>Single Post</h6>
          </Link>
          <Link className=" flex-none" to="/?cat=cinema">
            <h6>Pages</h6>
          </Link>
          <Link className=" flex-none" to="/?cat=design">
            <h6>Contact</h6>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4">
          {/* <input></input> */}
          <div className="flex items-center border-2 border-gray-300 rounded-full p-1">
            <input
              className="pl-2 outline-none rounded-l-full w-full"
              type="text"
              placeholder="Search"
            />
            <button className="p-1 rounded-r-full">
              {/* <svg className="h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <!-- Your search icon SVG path goes here -->
      <path d="..." />
    </svg> */}
            </button>
          </div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-500" : "bg-gray-300"
            } relative inline-flex items-center h-10 rounded-full w-20 transition-colors focus:outline-none`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-2" : "translate-x-10"
              } inline-block w-8 h-8 transform bg-white rounded-full transition-transform`}
            >
              {/* <FiSun className={`text-gray-600 ${enabled ? "" : "hidden"}`} /> */}
            </span>
          </Switch>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
