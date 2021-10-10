import { useState } from "react";
import { Logo } from "../../assets/SVG";
import { Link } from "react-scroll";
import { GitHub } from "../../assets/SVG";
import useDarkMode from "../../hooks/useDarkMode";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  const [pos, setPos] = useState(" absolute bg-transaparent text-white");
  const [buttons, setButtons] = useState(" btn-secondary");
  const [clicked, setClicked] = useState(false);

  document.addEventListener("scroll", (e) => {
    let scrolled = document.scrollingElement.scrollTop;
    if (scrolled >= 200) {
      setPos(
        " fixed bg-white dark:bg-gray-800 backdrop-filter backdrop-blur-sm animate-itemDown text-gray-800 dark:text-white"
      );
      setButtons(" btn-main");
    } else {
      setPos(" absolute bg-transaparent text-white");
      setButtons(" btn-secondary");
    }
  });

  const togle = () => {
    return (
      <div className="relative">
        {!clicked && (
          <div className="absolute w-8 md:w-12 h-8 md:h-12 bg-primary dark:bg-white animate-ping rounded-full" />
        )}
        <span
          onClick={() => {
            setTheme(colorTheme);
            setClicked(true);
          }}
          className="transition duration-300 ease-in-out w-8 md:w-12 h-8 md:h-12 bg-primary rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center transform  hover:scale-110 dark:bg-white"
        >
          {colorTheme === "light" ? (
            <svg
              className="w-6 md:w-8 h-6 md:h-8"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 md:w-8 h-6 md:h-8"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          )}
        </span>
      </div>
    );
  };

  return (
    <div
      className={
        "w-full py-5 md:py-5 z-40 flex justify-center bg-opacity-80 dark:bg-opacity-80 " +
        pos
      }
    >
      <div className="flex justify-between items-center sec1">
        <Link
          className="cursor-pointer "
          to="sec1"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Logo className="w-8 md:w-12 h-8 md:h-12 mr-2 hover:text-primary transition-colors duration-300" />
        </Link>

        <div className="flex items-center">
          <Link
            className="nav-item cursor-pointer hidden md:block"
            to="sec2"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h4>Project</h4>
          </Link>
          <Link
            className="nav-item cursor-pointer hidden md:block ml-5"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h4>Contact</h4>
          </Link>
          <a
            href="https://github.com/angkasa27"
            target="_blank"
            rel="noreferrer"
            className={buttons + " mx-5"}
          >
            <GitHub className="w-6 mr-2" />
            <h4>GitHub</h4>
          </a>
          {togle()}
        </div>
        {/* <div className="block md:hidden">{togle()}</div> */}
      </div>
    </div>
  );
}
