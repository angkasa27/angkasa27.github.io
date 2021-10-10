import React from "react";
import Image from "../../assets";
import { Instagram, GitHub, Dribbble, LinkedIn } from "../../assets/SVG";

export default function home({ setLoading = () => {} }) {
  return (
    <section
      name="sec1"
      className="flex justify-center items-center  bg-gradient-to-r from-blue-500  to-indigo-600 dark:from-gray-800 dark:to-gray-800 md:h-screen overflow-hidden pt-20 md:pt-0 "
    >
      {/* <div className="flex justify-center font-nunito  bg-gradient-to-r from-blue-400  to-indigo-500 rounded-xl filter drop-shadow-color m-8 overflow-hidden"> */}
      <div className="md:h-screen90 w-full grid grid-cols-3 sec1">
        <div className="col-span-3 md:col-span-1 text-white flex flex-col justify-center z-30">
          <h4 className="mt-16 md:mt-3 play animate-itemUp show-200 dark:text-primary ">
            Hello! I am
          </h4>

          <h1 className="animate-itemRight play show-600">
            {"Dimas "}
            <br className="hidden md:block" />
            Angkasa
          </h1>
          <div className="flex mt-5 play animate-itemRight show-1200">
            <div className="h-1 w-56 rounded-full bg-primary" />
            <div className="h-1.5 w-1.5 ml-2 rounded-full bg-primary" />
          </div>
          <div className="flex mt-6">
            <a
              href="https://www.linkedin.com/in/dimas-angkasa-nurindra-a1750719b/"
              target="_blank"
              rel="noreferrer"
              className=" play animate-scale show-1400"
            >
              <LinkedIn className="w-6 hover-primary mr-5" />
            </a>
            <a
              href="http://instagram.com/mas.angkasa27"
              target="_blank"
              rel="noreferrer"
              className=" play animate-scale show-1600"
            >
              <Instagram className="w-6 hover-primary mr-5" />
            </a>
            <a
              href="https://github.com/angkasa27"
              target="_blank"
              rel="noreferrer"
              className="play animate-scale show-1800"
            >
              <GitHub className="w-6 hover-primary mr-5 " />
            </a>
            <a
              href="https://dribbble.com/angkasa27"
              target="_blank"
              rel="noreferrer"
              className=" play animate-scale show-2000"
            >
              <Dribbble className="w-6 hover-primary" />
            </a>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 order-first md:order-none  hidden md:flex flex-col  relative justify-center">
          <img
            src={Image.Main}
            alt="main"
            className="play animate-upDown z-20 imgLoad"
            onLoad={() => setLoading(false)}
          />
          <img
            src={Image.Bg}
            alt="main"
            className="absolute transform translate-y-5 -translate-x-12 scale-125 z-10 imgShadow imgLoad"
          />
        </div>
        <div className="col-span-3 md:col-span-1 text-white flex flex-col justify-center z-30 mt-16 mb-16 md:mb-0 ">
          <div>
            <h4
              className={"font-bold text-white play animate-itemUp show-1200 "}
            >
              About
            </h4>

            <h2
              className={
                "text-gray-00 dark:text-gray-100 play animate-itemUp show-1400"
              }
            >
              Graphic Designer,
              <br />
              FrontEnd Developer
            </h2>
            <div
              className={
                "flex my-3 items-center play animate-itemLeft show-1600"
              }
            >
              <div className="h-1 w-56 rounded-full bg-primary" />
              <div className="h-1.5 w-1.5 ml-2 rounded-full bg-primary" />
            </div>
          </div>

          <h4 className="play animate-itemLeft show-1800">
            Im a fresh graduate from SMK Telkom Malang. Right now im working at
            Telkom Indonesia Tribe EWD as Front End Web Developer
          </h4>
        </div>

        <div className="col-span-3 md:hidden order-first md:order-none  play animate-itemDown flex flex-col  relative justify-center mt-12">
          <img
            src={Image.Main}
            alt="main"
            className="play animate-upDownRes z-20 imgLoad"
          />
          <img
            src={Image.Bg}
            alt="main"
            className="absolute transform translate-y-2 z-10 imgShadow imgLoad"
          />
        </div>
      </div>
    </section>
  );
}
