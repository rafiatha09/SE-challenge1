import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { SubscribeButton } from "./Button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font flex justify-center">
      <div className="flex flex-col max-w-7xl ">
        <div className="flex justify-center">
          <div className="flex justify-between py-12">
            <div className="w-[30%] flex-col flex justify-between">
              <p className="text-base font-semibold">About</p>
              <div className="pb-4">
                <p className="text-gray-600 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing edivt, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adivqua. Ut enim ad minim veniam
                </p>
              </div>
              <div>
                <a href="mailto:info@sjtemplate.net">
                  <span className="font-semibold text-black">Email</span>
                  <span className="text-gray-600">: info@sjtemplate.net</span>
                </a>
              </div>
              <div>
                <a href="tel:880123456789">
                  <span className="font-semibold text-black">Phone</span>
                  <span className="text-gray-600">: 880 123 456789</span>
                </a>
              </div>
            </div>
            <div className="w-[15%] flex flex-col justify-between">
              <p className="text-base font-semibold">Quick Link</p>
              <div>
                <a href="home">
                  <span className="text-gray-600">Home</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">About</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Blog</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Archived</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Author</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Contact</span>
                </a>
              </div>
            </div>
            <div className="w-[15%] flex flex-col justify-between">
              <p className="text-base font-semibold">Category</p>
              <div>
                <a href="home">
                  <span className="text-gray-600">Lifestyle</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Technology</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Travel</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Business</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Economy</span>
                </a>
              </div>
              <div>
                <a href="home">
                  <span className="text-gray-600">Sports</span>
                </a>
              </div>
            </div>
            <div className="w-[400px] h-[240px] flex flex-col bg-white items-center justify-center gap-8 rounded-lg">
              <div className="flex flex-col items-center gap-2">
                <p className="text-base font-semibold">Weekly Newsletter</p>
                <p className="text-gray-600 text-xs">
                  Get blog articles and offers via email
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-64">
                <input
                  className="rounded-lg py-2 px-4 border-2 border-gray-300 w-full"
                  type="text"
                  placeholder="Your Email"
                />
                <SubscribeButton />
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 border-t-2" />
        <div className="flex w-full justify-between py-6">
          <Link to="/">
            <img src={Logo} alt="" className="flex-shrink-0" />
          </Link>
          <div className="flex justify-between gap-4">
            <a href="#" className="text-gray-500">
              Terms of Use
            </a>
            <a href="#" className="ml-3 text-gray-500">
              Privacy Policy
            </a>
            <a href="#" className="ml-3 text-gray-500">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
