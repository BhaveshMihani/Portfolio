import React from "react";

import html from "/html.png";
import js from "/javascript.png";
import css from "/css.jpg";
import react from "/reactjs.png";
import mongoDB from "/mongodb.jpg";
import express from "/express.png";
import aws from "/AWS.png";
import jquery from "/jQuery.png";
import tailwind from "/Tailwind.png";
import github from "/github.jpeg";

const Experiance = () => {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: js,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: react,
      name: "React JS",
    },
    {
      id: 6,
      logo: express,
      name: "Express JS",
    },
    {
      id: 7,
      logo: mongoDB,
      name: "Mongo DB",
    },
    {
      id: 8,
      logo: aws,
      name: "AWS",
    },
    {
      id: 9,
      logo: jquery,
      name: "jQuery",
    },
    {
      id: 10,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 12,
      logo: github,
      name: "GitHub",
    },
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Technologies & FrameWorks</h1>
        <p className="">
          I've used the following Technologies and Framworks in my recent
          projects
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img src={logo} alt={name} className="w-[150px] rounded-full " />
              <div>
                <div>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;