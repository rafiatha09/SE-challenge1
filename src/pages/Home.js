import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPlay } from "react-icons/fa";
import Avatar from "../images/Image.svg";

const Home = () => {
  return (
    <div className="w-full flex justify-center shadow py-6 bg-white">
      <div className="max-w-7xl w-full">
        <div className="h-[350px] bg-[#F6F6F7] rounded-xl">
          <div className="rounded-lg p-6 flex flex-col items-center text-center gap-4 h-full">
            <div className="flex gap-4 justify-center items-center mt-5">
              <div className="flex items-center">
                <img
                  className="h-20 w-20 rounded-full mx-auto"
                  src={Avatar}
                  alt="Jonathan Doe"
                />
              </div>
              <div className="flex-col">
                <h1 className="text-lg ">Jonathan Doe</h1>
                <p className="text-gray-600 text-xs">Collaborator & Editor</p>
              </div>
            </div>
            <p className="text-gray-800 mt-3 text-base max-w-2xl">
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </p>
            <div className="flex justify-center mt-2">
              <a
                href="https://facebook.com"
                className="text-gray-200 text-xl mx-2 bg-gray-600 p-2 rounded-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-200 text-xl mx-2 bg-gray-600 p-2 rounded-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-200 text-xl mx-2 bg-gray-600 p-2 rounded-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-200 text-xl mx-2 bg-gray-600 p-2 rounded-xl"
              >
                <FaPlay />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="text-xl py-6">
            <p>Latest Post</p>
          </div>
          <div className="">Card</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
