import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../helper/postAction.js";
import { postData } from "../helper/data.js";
import { Modal } from "../components/Modal.js";

const EditPostForm = () => {
  const [postType, setPostType] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const location = useLocation();

  const postId = location.pathname.split("/")[2];
  const [name_id, setNameId] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  const [isOpenSuccess, setIsOpenSuccess] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpenSuccess(true)
  };

  const redirectClick = () => {
    console.log("update post with id: " , postId)
    setIsOpenSuccess(false)
  };

  useEffect(() => {
    setNameId(localStorage.getItem("name_id"));
    dispatch(setPosts(postData));
    for (let index = 0; index < posts.length; index++) {
      const post = posts[index];
      if (post.id == postId) {
        setPostType(post.type);
        setTitle(post.title);
        setContent(post.content);
        break;
      }
    }
  }, []);

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
                  <option value="Technology">Technology</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Business">Business</option>
                  <option value="UI/UX">UI/UX</option>
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
                  Edit Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostForm;
