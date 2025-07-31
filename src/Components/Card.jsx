import React from 'react';

const Card = ({ data = [] }) => {
  console.log(data);

  return (
    <div className='flex justify-center gap-10 flex-wrap mt-3'>
      {Array.isArray(data) && data.map((curItem, index) => (
        <div key={index}>
          <img className='w-full h-[180px]' src={curItem.urlToImage} alt="news" />
          <div className="card w-80 bg-white mt-5 border-black">
            <a
              className='font-medium size-[18px] mt-[-7px] hover:[border-bottom] cursor-pointer'
              onClick={() => window.open(curItem.url)}
            >
              {curItem.title}
            </a>
            <p className='p-2'>{curItem.description}</p>
            <button
              onClick={() => window.open(curItem.url)}
              className="cursor-pointer rounded-md bg-blue-700 text-white px-2 py-1 hover:bg-blue-800 transition"
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
