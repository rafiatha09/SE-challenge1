import React from "react";

const Card = ({ title, author, date, tag, imageUrl, imageAuthor }) => {
  return (
    <div className="max-w-sm overflow-hidden border bg-white rounded-xl cursor-pointer">
      <img className="w-full p-4" src={imageUrl} alt="Article" />
      <div className="px-4 space-y-3">
        <div className="bg-[#4B6BFB0D] w-fit p-2 rounded-md">
          <div className="font-bold text-xs text-[#4B6BFB] tracking-wide">
            {tag}
          </div>
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <div className="px-4 flex py-6 text-[#97989F] justify-start gap-4 items-center">
        <img className="w-lg" src={imageAuthor} alt="Author" />
        <div className="text-sm ">{author}</div>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
};

export default Card;
