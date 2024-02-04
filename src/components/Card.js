import React from 'react';

const Card = ({ title, author, date, tag, imageUrl, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imageUrl} alt="Article" />
      <div className="px-6 py-4">
        <div className="font-bold text-xs text-indigo-600 uppercase tracking-wide">{tag}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{author}</div>
        <p className="text-gray-600 text-xs">{date}</p>
      </div>
    </div>
  );
};

export default Card;
