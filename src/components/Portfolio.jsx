import React from "react";
import CHATTERTUNES from "/headphone1.png";
const Portfolio = () => {
  const cardItems = [
    {
      id: 2,
      logo: CHATTERTUNES,
      name: "CHATTERTUNES",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[350px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-[100px] h-[100px] p-1 rounded-full border-[2px]"
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  CHATTERTUNES a MERN Stack based Audio streaming platform with Real time Chatting Features.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a href="https://chattertunes.onrender.com" target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Website
                  </button>
                </a>

                <a href="https://github.com/BhaveshMihani/CHATTERTUNES" target="_blank">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Sourse Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
