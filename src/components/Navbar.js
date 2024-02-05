import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Logo from "../images/Logo.svg";
import { FiSun } from "react-icons/fi";
import { FaSearch } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

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
          <Link className="flex-none" to="/">
            <h6>Home</h6>
          </Link>
          <Link className=" flex-none" to="/">
            <h6>Blog</h6>
          </Link>
          <Link className=" flex-none" to="/">
            <h6>Single Post</h6>
          </Link>
          <Link className=" flex-none" to="/">
            <h6>Pages</h6>
          </Link>
          <Link className=" flex-none" to="/">
            <h6>Contact</h6>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center border-2 border-gray-100 rounded-lg p-2 text-xs w-[150px] bg-gray-100">
            <input
              className="outline-none w-full bg-gray-100"
              type="text"
              placeholder="Search"
            />
            <button className="p-1 rounded-r-full">
              <FaSearch className={`w-3 h-3 text-gray-400`}/>
            </button>
          </div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-500" : "bg-gray-100"
            } relative inline-flex items-center h-10 rounded-full w-20 transition-colors focus:outline-none border-gray-100`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-1" : "translate-x-11"
              } inline-block w-8 h-8 transform bg-white rounded-full transition-transform absolute`}
            >
              {enabled ? 
              <FiSun className={`text-black relative top-2 left-2 ${enabled ? "" : "hidden"}`} /> :
              <FaMoon className={`text-black relative top-2 left-2 ${enabled ? "hidden" : ""}`} /> 
              }
            </span>
          </Switch>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
