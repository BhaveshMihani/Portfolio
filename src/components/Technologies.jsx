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
import clerk from "/clerk.webp";
import openrouter from "/openrouter.png";
import n8n from "/n8n-icon.webp";

const Technologies = () => {
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
    {
      id: 13,
      logo: clerk,
      name: "Clerk",
    },
    {
      id: 14,
      logo: openrouter,
      name: "OpenRouter",
    },
    {
      id: 15,
      logo: n8n,
      name: "n8n",
    },
  ];
  return (
    <div name="Technologies" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Technologies & FrameWorks</h1>
        <p className="">
          I've used the following Technologies and Framworks in my recent
          projects
        </p>
        <div className="flex flex-wrap justify-center gap-7 my-3">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-full w-[150px] h-[150px] md:w-[180px] md:h-[180px] shadow-md p-4 cursor-pointer hover:scale-110 duration-300"
            >
              <img src={logo} alt={name} className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] object-contain" />
              <div className="mt-2 text-sm font-medium">
                <div>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;