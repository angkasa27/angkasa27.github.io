import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Header({
  name,
  children,
  className,
  nameClass = "text-blue-600",
  childrenClass = "",
  lineClass = "",
}) {
  return (
    <div className={className}>
      <ScrollAnimation
        animateIn="animate__animated animate__fadeInUp"
        offset={50}
        animateOnce={true}
        duration={0.5}
      >
        <h4 className={"font-bold dark:text-primary " + nameClass}>{name}</h4>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate__animated animate__fadeInUp"
        offset={50}
        animateOnce={true}
        duration={0.5}
        delay={200}
      >
        <h2 className={"text-gray-00 dark:text-gray-100 " + childrenClass}>
          {children}
        </h2>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate__animated animate__fadeInUp"
        offset={50}
        animateOnce={true}
        duration={0.5}
        delay={400}
      >
        <div className={"flex my-3 items-center " + lineClass}>
          <div className="h-1 w-56 rounded-full bg-primary" />
          <div className="h-1.5 w-1.5 ml-2 rounded-full bg-primary" />
        </div>
      </ScrollAnimation>
    </div>
  );
}
