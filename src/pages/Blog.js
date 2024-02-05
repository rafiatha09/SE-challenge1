import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DeleteButton, EditButton } from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../helper/postAction.js";
import { postData } from "../helper/data.js";
import { Modal } from "../components/Modal.js";

const Post = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [name_id, setNameId] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const [post, setPost] = useState([]);

  const [isOpenSuccess, setIsOpenSuccess] = useState(false); 

  const redirectClick = () => {
    console.log("Delete post with id: ", postId)
    setIsOpenSuccess(false)
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setIsOpenSuccess(true);
  };


  useEffect(() => {
    setNameId(localStorage.getItem("name_id"));
    dispatch(setPosts(postData));
    for (let index = 0; index < posts.length; index++) {
      const post = posts[index];
      if (post.id == postId) {
        if (typeof post.content === "string") {
          post.content = post.content.split("\n");
        }
        setPost(post);
        break;
      }
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      <Modal
        variant="danger"
        isOpen={isOpenSuccess}
        closeModal={() => setIsOpenSuccess(false)}
        description="Are you sure?"
        rightButtonText="Delete"
        onClickRight={redirectClick}
        leftButtonText="Cancel"
      />
      <div className="flex flex-col max-w-3xl gap-5">
        <div className="text-xs p-2 bg-[#4B6BFB] text-white w-fit rounded-lg">
          <p>{post.type}</p>
        </div>
        <p className="text-2xl font-semibold">{post.title}</p>
        <div className="flex gap-5 items-center text-xs text-[#696A75]">
          <img className="w-8" src={post.avatar}></img>
          <p>{name_id}</p>
          <p>{post.createdAt}</p>
        </div>
        <img className="h-[520px] bg-cover" src={post.image} alt="Author" />
        <div className="flex flex-col gap-8 pb-4 text-base">
          {post.content?.map((paragraph, index) => (
            <p key={index} className="">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="pb-8 space-x-4 w-full">
          <EditButton postId={post.id} />
          <DeleteButton onDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};

export default Post;
