import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageOne from "../images/Rectangle 38 (1).svg";
import Avatar from "../images/Image.svg";
import { DeleteButton, EditButton } from "../components/Button";

const Post = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [name_id, setNameId] = useState("");

  useEffect(() => {
    setNameId(localStorage.getItem("name_id"));
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col max-w-3xl gap-5">
        <div className="text-xs p-2 bg-[#4B6BFB] text-white w-fit rounded-lg">
          <p>Technology</p>
        </div>
        <p className="text-2xl font-semibold">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
        <div className="flex gap-5 items-center text-xs text-[#696A75]">
          <img className="w-8" src={Avatar}></img>
          <p>{name_id}</p>
          <p>August 20, 2022</p>
        </div>
        <img className="h-[520px] bg-cover" src={ImageOne} alt="Author" />
        <div className="flex flex-col gap-8 pb-4 text-base">
          <p>
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <p>
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
          <p>
            Finally, don't forget to capture memories of your journey. Whether
            it's through photographs, journaling, or souvenirs, preserving the
            moments and experiences of your travels can bring joy and nostalgia
            for years to come. However, it's also essential to be present in the
            moment and not let technology distract you from the beauty of your
            surroundings.
          </p>
        </div>
        <div className="pb-8 space-x-4 w-full">
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default Post;
