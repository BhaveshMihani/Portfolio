import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped, Typed } from "react-typed";
import pic from '/photo.avif'

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl"> Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped className="text-red-700 font-bold"
                strings={["Developer","Coder","Programmer"]}
                typeSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              tempora reprehenderit voluptates inventore nostrum officia nemo ab
              quasi repellendus eos, ipsum consequatur, quas laudantium odio sed
              quia quod ut alias? Impedit consequuntur commodi, illum ullam
              nihil possimus dicta autem rem ipsam veritatis, molestiae quam
              repellat cupiditate molestias voluptas eaque quo illo voluptate
              saepe earum dolores aliquid obcaecati! Assumenda, blanditiis
              eaque! Cumque commodi magnam, quasi placeat error eum aliquam
              vitae corrupti praesentium reiciendis quod nostrum laudantium?
              Incidunt nobis vitae optio voluptatum vel, facere natus totam!
              Aperiam at excepturi ipsum ipsa quibusdam.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available On</h1>
                <ul className="flex space-x-5">
                <li>
                  <a href="">
                    {" "}
                    <FaWhatsapp className="text-2xl cursor-pointer" />
                  </a>
                  </li>
                  <li>
                  <a href="">
                    {" "}
                    <FaSquareFacebook className="text-2xl cursor-pointer" />
                  </a>
                  </li>
                  <li>
                    <a href="">
                    {" "}
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                    {" "}
                    <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold ">Currently Working On</h1>
                <ul className="flex space-x-5">
                  <li>
                    {" "}
                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]" />
                  </li>
                  <li>
                    {" "}
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    {" "}
                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    {" "}
                    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 md:order-2">
          <img src={pic} alt="" className="rounded-full  md:w-[450px] md:h-[450px]"/>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
