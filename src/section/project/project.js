import React from "react";
import Image from "../../assets";
import { GitHub } from "../../assets/SVG";
import ScrollAnimation from "react-animate-on-scroll";

export default function project() {
  const project = [
    {
      name: "MyComplaint",
      image: Image.MyComplaint,
      desc: "ini adalah contoh dari deskripsi project ini. hanya singkat saja tak usah pangjang panjang",
      link: "https://angkasa27.github.io/react-tailwind-mycomplaint",
      github: "https://github.com/angkasa27/react-tailwind-mycomplaint",
    },
    {
      name: "Frekuensi 27",
      image: Image.Frekuensi,
      desc: "ini adalah contoh dari deskripsi project ini. hanya singkat saja tak usah pangjang panjang",
      link: "https://angkasa27.github.io/react-frekuensi27",
      github: "https://github.com/angkasa27/react-frekuensi27",
    },
    {
      name: "Amir's Web",
      image: Image.Amir,
      desc: "ini adalah contoh dari deskripsi project ini. hanya singkat saja tak usah pangjang panjang",
      link: "https://angkasa27.github.io/react-tailwind-amir",
      github: "https://github.com/angkasa27/react-tailwind-amir",
    },
    {
      name: "Socied",
      image: Image.Socied,
      desc: "ini adalah contoh dari deskripsi project ini. hanya singkat saja tak usah pangjang panjang",
      link: "https://socied.web.app",
      github: "https://github.com/angkasa27/PD_hiedescom_final",
    },
    {
      name: "Traveline",
      image: Image.Traveline,
      desc: "ini adalah contoh dari deskripsi project ini. hanya singkat saja tak usah pangjang panjang",
      link: "https://traveline.web.app",
      github: "https://github.com/angkasa27/PD-hiedescom2k20",
    },
  ];

  return (
    <section name="sec2" className="main md:pt-36 pt-16">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2 md:col-span-1 h-36 mb-16 md:mb-0">
          <ScrollAnimation
            animateIn="animate-itemRight"
            offset={50}
            animateOnce={true}
            duration={0.5}
          >
            <h4 className={"font-bold text-primary "}>Project</h4>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate-itemRight"
            offset={50}
            animateOnce={true}
            duration={0.5}
            delay={150}
          >
            <h2 className={"text-gray-00 dark:text-gray-100 childrenClass"}>
              All Creative Works,
              <br /> Selected Projects
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
        </div>

        {project.map((v) => (
          <Card data={v} />
        ))}
      </div>
    </section>
  );
}

export function Card({ data }) {
  return (
    <div
      className={
        "md:row-span-2 row-span-1 col-span-2 md:col-span-1 flex items-center "
      }
    >
      <ScrollAnimation
        animateIn="animate-itemUp"
        offset={50}
        animateOnce={true}
        duration={0.5}
        delay={450}
      >
        <div className="bg-gray-500 rounded-xl overflow-hidden relative border-2 border-gray-200 dark:border-gray-800 dark:text-gray-800">
          {/* <div className="row-span-2 rounded-xlover:-translate-y-1 overflow-hidden relative border-2 border-gray-200"> */}
          <img src={data.image} alt={data.name} className="h-full w-full" />

          <div className="absolute top-0 w-full h-full transition duration-300 hover:bg-white hover:bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 backdrop-filter hover:backdrop-blur-sm p-5">
            <h3 className="font-extrabold ">{data.name}</h3>
            <p className="text-center mt-5 font-semibold hidden md:block">
              {data.desc}
            </p>
            <div className="flex mt-5">
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mr-5"
              >
                <GitHub className="w-6 mr-2 " />

                <h4>GitHub</h4>
              </a>
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="btn-main"
              >
                <h4>Lihat Web</h4>
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
