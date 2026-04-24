import React from "react";
import SyntaxLab from "/syntaxlab.svg";
import CHATTERTUNES from "/headphone1.png";
import Pycord from "/icons8-google-chat.svg";
const Portfolio = () => {
  const cardItems = [
    {
      id: 3,
      logo: SyntaxLab,
      name: "SyntaxLab",
      website: "https://syntaxlab-5sfs.onrender.com/",
      github: "https://github.com/BhaveshMihani/SyntaxLab",
      desc: `SyntaxLab is a full-stack platform for testing and optimizing prompts across multiple LLMs using automated scoring, AI insights, and similarity analysis`
    },
    {
      id: 2,
      logo: CHATTERTUNES,
      name: "CHATTERTUNES",
      website: "https://chattertunes.onrender.com",
      github: "https://github.com/BhaveshMihani/CHATTERTUNES",
      desc: `CHATTERTUNES a MERN Stack based Audio streaming platform with Real time Chatting Features.`
    },
    {
      id: 1,
      logo: Pycord,
      name: "Pycord",
      website: "https://pycord-zob7.onrender.com/",
      github: "https://github.com/BhaveshMihani07/Pycord",
      desc: `Pycord is a real-time chat application that lets users create private chatrooms and communicate.`
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
          {cardItems.map(({ id, logo, name, website, github, desc }) => (
            <div
              key={id}
              className="md:w-[350px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-[100px] h-[100px] p-2 rounded-full border-[2px] object-contain bg-white"
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 dark:text-gray-400">
                  {desc}
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a href={website} target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Website
                  </button>
                </a>

                <a href={github} target="_blank">
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