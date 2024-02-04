import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
    const location = useLocation();
    const postId = location.pathname.split("/")[2];
    return (
        <div>
            Blog {postId}
        </div>
    )
}

export default Blog;