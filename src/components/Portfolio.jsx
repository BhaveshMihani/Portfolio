import React from "react";

import java from "/java.png";
import python from "/python.webp";
import mongoDB from "/mongodb.jpg";
import express from "/express.png";
import reactjs from "/reactjs.png";
import nodejs from "/node.png";

const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "React Js",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Node JS",
    },
    {
      id: 5,
      logo: java,
      name: "Java",
    },
    {
      id: 6,
      logo: python,
      name: "Python",
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi, adipisci.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button> */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Sourse Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
