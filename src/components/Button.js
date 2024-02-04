import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-post'); // Use navigate function to redirect
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center  rounded-lg flex items-center text-sm"
      onClick={handleClick}
    >
      <FaPlus className="mr-2" />
      <span>Add Post</span>
    </button>
  );
};

export const EditButton = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    // Navigate to the edit post page
    navigate('/edit-post');
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleEdit}
    >
      Edit Post
    </button>
  );
};

export const DeleteButton = ({ onDelete }) => {
  return (
    <button
      className="bg-white hover:bg-red-500 text-red-500 hover:text-white font-semibold py-2 px-4 rounded"
      onClick={onDelete}
    >
      Delete Post
    </button>
  );
};

