import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  return (
    <div className="flex flex-col">
      {/* Blog {postId} */}
      <div>
        <p>Technology</p>
      </div>
      <p>
        The Impact of Technology on the Workplace: How Technology is Changing
      </p>
      <div className="flex">
        <p>Tracey Wilson</p>
        <p>August 20, 2022</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Blog;
