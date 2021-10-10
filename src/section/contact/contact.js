import React from "react";
import Image from "../../assets";
import {
  Instagram,
  GitHub,
  Dribbble,
  LinkedIn,
  Mail,
  Phone,
} from "../../assets/SVG";

import ScrollAnimation from "react-animate-on-scroll";

export default function Contact() {
  return (
    <section name="contact" className="main md:pt-36 md:pb-16 pt-16">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="">
          <ScrollAnimation
            animateIn="animate-itemRight"
            offset={50}
            animateOnce={true}
            duration={0.5}
          >
            <h4 className={"font-bold  text-primary "}>Contact</h4>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate-itemRight"
            offset={50}
            animateOnce={true}
            duration={0.5}
            delay={150}
          >
            <h2 className={"text-gray-00 dark:text-gray-100 childrenClass"}>
              Need Something, or
              <br /> Want to Reach Me
            </h2>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="animate-itemRight"
            offset={50}
            animateOnce={true}
            duration={0.5}
            delay={300}
          >
            <div className={"flex my-3 items-center "}>
              <div className="h-1 w-56 rounded-full bg-primary" />
              <div className="h-1.5 w-1.5 ml-2 rounded-full bg-primary" />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate-itemRight"
            offset={50}
            animateOnce={true}
            duration={0.5}
            delay={300}
          >
            <h4 className="font-bold md:mb-0 mt-10 mb-5 text-center md:text-left ">
              You can contact me at
            </h4>
          </ScrollAnimation>

          <div className="flex flex-col">
            <ScrollAnimation
              animateIn="animate-itemUp"
              offset={50}
              animateOnce={true}
              duration={0.5}
              delay={450}
            >
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center font-semibold justify-center md:justify-start"
              >
                <Mail className="md:w-5 w-4 mr-2" />
                <h5 className="nav-item">mas.angkasa27@gmail.com</h5>
              </a>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate-itemUp"
              offset={50}
              animateOnce={true}
              duration={0.5}
              delay={600}
            >
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center font-semibold justify-center md:justify-start"
              >
                <Phone className=" md:w-5 w-4 mr-2" />
                <h5 className="nav-item">(+62) 822 3042 3647</h5>
              </a>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="animate-itemRight"
            offset={50}
            animateOnce={true}
            duration={0.5}
            delay={750}
          >
            <h4 className="mt-10  font-bold text-center md:text-left">
              Follow me on Social Media
            </h4>{" "}
          </ScrollAnimation>

          <div className="flex mt-5 md:mt-3 md:justify-start justify-center">
            <ScrollAnimation
              animateIn="animate-scale"
              offset={50}
              animateOnce={true}
              duration={0.5}
              delay={900}
            >
              <a
                href="https://www.linkedin.com/in/dimas-angkasa-nurindra-a1750719b/"
                target="_blank"
                rel="noreferrer"
                className=" animate-scale"
              >
                <LinkedIn className="w-6 hover-primary mr-5 hover:text-primary" />
              </a>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate-scale"
              offset={50}
              animateOnce={true}
              duration={0.5}
              delay={1050}
            >
              <a
                href="http://instagram.com/mas.angkasa27"
                target="_blank"
                rel="noreferrer"
                className=" animate-scale"
              >
                <Instagram className="w-6 hover-primary mr-5 hover:text-primary" />
              </a>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate-scale"
              offset={50}
              animateOnce={true}
              duration={0.5}
              delay={1200}
            >
              <a
                href="https://github.com/angkasa27"
                target="_blank"
                rel="noreferrer"
                className="animate-scale hover:text-primary"
              >
                <GitHub className="w-6 hover-primary mr-5 " />
              </a>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate-scale"
              offset={50}
              animateOnce={true}
              duration={0.5}
              delay={1350}
            >
              <a
                href="https://dribbble.com/angkasa27"
                target="_blank"
                rel="noreferrer"
                className=" animate-scale hover:text-primary"
              >
                <Dribbble className="w-6 hover-primary" />
              </a>
            </ScrollAnimation>
          </div>
        </div>
        <div className="flex justify-center pt-20 md:justify-end relative">
          <img src={Image.Contact} alt="" className="md:w-96 w-48 z-20" />
          <img
            src={Image.ContactBg}
            alt=""
            className="md:w-96 w-48 absolute z-10 imgShadowBlue"
          />
        </div>
      </div>
    </section>
  );
}
