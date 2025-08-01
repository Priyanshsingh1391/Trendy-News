import React from 'react';

const Card = ({ data = [] }) => {
  return (
    <div className="flex justify-center gap-10 flex-wrap mt-3">
      {data.map((curItem, index) => (
        <div key={index}>
          {curItem.urlToImage && (
            <img
              className="w-full h-[180px] object-cover rounded"
              src={curItem.urlToImage}
              alt="news"
            />
          )}
          <div className="card w-80 bg-white mt-5 border border-black p-4 rounded shadow">
            <a
              className="font-medium text-lg hover:underline cursor-pointer block mb-2"
              onClick={() => window.open(curItem.url)}
            >
              {curItem.title}
            </a>
            <p className="text-gray-700 mb-3">{curItem.description}</p>
            <button
              onClick={() => window.open(curItem.url)}
              className="cursor-pointer rounded-md bg-blue-700 text-white px-3 py-1 hover:bg-blue-800 transition"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
