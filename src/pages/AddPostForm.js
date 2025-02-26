import React, { useState, useRef } from "react";
import { postData } from "../helper/data";
import imageFour from "../images/Rectangle 38 (4).svg";
import jonathan from "../images/Image (1).svg";
import { AddPostModal, Modal } from "../components/Modal";

const AddPostForm = () => {
  const [postType, setPostType] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isOpenSuccess, setIsOpenSuccess] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpenSuccess(true);
  };

  const redirectClick = () => {
    let createdDate = new Date();
    let options = { year: "numeric", month: "long", day: "numeric" };
    let formattedDate = createdDate.toLocaleDateString("en-US", options);
    postData.push({
      id: postData.length + 1,
      type: postType,
      title: title,
      createdBy: "Jonathan Doe",
      createdAt: formattedDate,
      image: imageFour,
      avatar: jonathan,
      content: content,
    });
    setIsOpenSuccess(false)
  };
  return (
    <div className="w-full flex justify-center bg-white h-full">
      <Modal variant="primary" isOpen={isOpenSuccess} closeModal={() => setIsOpenSuccess(false)} description="Are you sure?" rightButtonText="Submit" onClickRight={redirectClick} leftButtonText="Cancel"/>
      <div className="max-w-3xl w-full h-full py-12">
        <div className="w-full flex justify-center shadow-lg border bg-white h-full">
          <div className="container mx-auto p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="postType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type of Post
                </label>
                <select
                  id="postType"
                  value={postType}
                  onChange={(e) => setPostType(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a type</option>
                  <option value="technology">Technology</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="business">Business</option>
                  <option value="uiux">UI/UX</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the title of the post"
                />
              </div>
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={5}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the content of the post"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;
