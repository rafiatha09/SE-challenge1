import React from "react";
import { FaPlus } from "react-icons/fa";

export const SubscribeButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center w-full rounded-lg"
      onClick={onClick}
    >
      Subscribe
    </button>
  );
};

export const AddPost = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center  rounded-lg flex items-center text-sm"
      onClick={onClick}
    >
      <FaPlus className="mr-2" /> 
      <span>Add Post</span>
    </button>
  );
};
