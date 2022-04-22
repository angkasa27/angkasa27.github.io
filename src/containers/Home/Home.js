import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Navbar from '@elements/Navbar'
import moment from 'moment'
import Button from '@elements/Button'
import ReactTypingEffect from 'react-typing-effect'
import Instagram from '@assets/svg/Instagram'
import Linkedin from '@assets/svg/LinkedIn'
import Github from '@assets/svg/Github'
import Dribbble from '@assets/svg/Dribbble'
import Image from '@assets/image'
import { SKILLS } from '@configs/skills'
import { MENU } from '@configs/menu'
import ExternalLink from '@assets/svg/ExternalLink'
import Code from '@assets/svg/Code'
import Html5 from '@assets/svg/Html5'
import Tailwind from '@assets/svg/Tailwind'
import NextJs from '@assets/svg/NextJs'
import { MYWORK, OTHERPROJECTS } from '@configs/projects'

export default function Main() {
  const [section, setSection] = useState('home')
  const [color, setColor] = useState('text-green-400')

  return (
    <div className="w-full bg-zinc-900">
      <Navbar color={color} active={section} />

      <BottomNav active={section} />
      <div className=" mx-auto w-full max-w-screen-xl px-8 text-white md:px-24">
        <Home color={color} setSection={setSection} name="main" />
        <About color={color} setSection={setSection} name="about" />
        <Skills color={color} setSection={setSection} name="skills" />
        <Projects color={color} setSection={setSection} name="project" />
      </div>
    </div>
  )
}

const Home = ({ color, setSection, name }) => {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setSection(name)
    }
  }, [inView])

  return (
    <section
      id={name}
      className="flex min-h-screen flex-col justify-center gap-4 "
    >
      <h3 className={' font-bold ' + color}>{getGreetingTime(moment())}!</h3>
      <h1 className="font-bold">Dimas Angkasa Nurindra</h1>
      <h2 ref={ref} className="font-bold text-zinc-400">
        <ReactTypingEffect
          typingDelay={200}
          speed={30}
          eraseSpeed={30}
          eraseDelay={2000}
          text={[`Frontend Developer`, `Graphic Designer`]}
        />
      </h2>
      <h5 className="text-zinc-400">
        I design and build websites that look good, and work well.
      </h5>
      <div>
        <Button className={'bg-green-500 text-white hover:bg-green-700'}>
          See my Work
        </Button>
      </div>
    </section>
  )
}

const About = ({ color, setSection, name }) => {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setSection(name)
    }
  }, [inView])

  return (
    <section
      id={name}
      className="flex min-h-screen flex-col justify-center gap-4"
    >
      <h2 className=" font-bold ">About</h2>
      <div ref={ref} className="h-1 w-36 bg-green-500" />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 flex flex-col gap-4 text-zinc-400 md:col-span-2">
          <p className="">
            Hello! I'm Dimas Angkasa, a front-end developer and graphic designer
            from East Java, Indonesia.
          </p>
          <p className="">
            Currently working I'm working at Telkom Indonesia Tribe EWZ as a
            frontend developer.
          </p>
          <p className="">
            After graduating fromSMK Telkom Malang, I continue my study at Binus
            University for Bachelor's degree majoring in Information Systems.
          </p>
          <p className="">
            In recent years, I've been focused on programming, building a solid
            frontend stack, and creating exciting projects that solve real-world
            problems.
          </p>
          <p className="">
            Alongside my study and development work, I run an online web
            invitation based on requests called SuratBahagia, so I like to keep
            busy!
          </p>
        </div>
        <div className="col-span-3 row-start-1 h-auto w-full overflow-hidden rounded bg-green-600 md:col-span-1 md:row-start-auto">
          <img
            alt="mypicture"
            src={Image.MySelfTrans}
            className="scale-125 drop-shadow-xl saturate-50"
          />
        </div>
      </div>
    </section>
  )
}

const Skills = ({ color, setSection, name }) => {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setSection(name)
    }
  }, [inView])

  return (
    <section
      id={name}
      className="flex min-h-screen flex-col justify-center gap-4"
    >
      <h2 className=" font-bold ">Skills</h2>
      <div ref={ref} className="h-1 w-36 bg-green-500" />
      <div className="mt-4 grid grid-cols-4 gap-4 md:grid-cols-6">
        {SKILLS.map(({ name, Icon }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Icon className="defaultTransitionAll w-14 text-zinc-600 hover:-translate-y-1 hover:text-green-500 md:w-20" />
            <p className="text-center text-sm font-bold tracking-wider text-zinc-400 md:text-lg">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const Projects = ({ color, setSection, name }) => {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setSection(name)
    }
  }, [inView])

  return (
    <section
      id={name}
      className="flex min-h-screen flex-col justify-center gap-4"
    >
      <h2 className=" font-bold ">My Work</h2>
      <div className="h-1 w-36 bg-green-500" ref={ref} />
      {MYWORK.map(({ name, href, image, desc, label, source }) => (
        <div key={name} className="mt-4 grid-cols-6 md:grid">
          <div className="col-start-1 col-end-6 row-start-1 overflow-hidden rounded-t ring-2 ring-green-500 md:rounded md:ring-zinc-600">
            <img src={image} className="w-full" />
          </div>
          <div className="col-start-4 col-end-7 row-start-1 flex items-end md:pb-12">
            <div className="flex w-full flex-col gap-2 rounded-b bg-zinc-800 p-4 ring-2 ring-zinc-600 md:rounded md:p-8  md:ring-green-500">
              <p className="font-bold tracking-wide text-zinc-400">{label}</p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold tracking-wide">{name}</h3>

                <div className="flex flex-wrap gap-2 text-sm font-bold uppercase tracking-wide text-zinc-600 md:text-base">
                  <div className="flex items-center gap-1">
                    <Html5 className="h-4" /> HTML
                  </div>
                  <div className="flex items-center gap-1">
                    <NextJs className="h-4" /> Next
                  </div>
                  <div className="flex items-center gap-1">
                    <Tailwind className="h-4" /> Tailwind
                  </div>
                </div>
              </div>
              <p className="my-2 text-zinc-400">{desc}</p>
              <div className="flex gap-4">
                <Button
                  href={href}
                  className="flex items-center bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
                >
                  <ExternalLink className="mr-2 w-6" />
                  Live
                </Button>
                {!!source && (
                  <Button
                    href={source}
                    className="flex items-center bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
                  >
                    <Github className="mr-2 w-6" />
                    Source
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <h2 className="mt-12 text-center font-bold">Other Projects</h2>
      <div className="mx-auto h-1 w-36 bg-green-500" ref={ref} />
      <p className="text-center text-zinc-400">
        Check out some of the other projects I've been create
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {OTHERPROJECTS.map(({ tags, name, href, desc, source }) => (
          <div
            key={name}
            className="flex w-full flex-col justify-between gap-2 rounded-b bg-zinc-800 p-4  md:rounded md:p-8 "
          >
            <div className="flex flex-col gap-2">
              <Code className="w-8 text-green-500" />
              <h5 className="font-bold tracking-wide">{name}</h5>
              <div className="h-1 w-full bg-green-500" />
              <p className="my-2 text-zinc-400">{desc}</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2 text-sm font-bold uppercase tracking-wide text-zinc-600 md:text-base">
                {tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  href={href}
                  className="bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
                >
                  <ExternalLink className="w-6" />
                </Button>
                {!!source && (
                  <Button
                    href={source}
                    className="bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
                  >
                    <Github className="w-6" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const getGreetingTime = (currentTime) => {
  if (!currentTime || !currentTime.isValid()) {
    return 'Hello'
  }

  const splitAfternoon = 12 // 24hr time to split the afternoon
  const splitEvening = 17 // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format('HH'))

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return '🏙️ Good Afternoon'
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return '🌃 Good Evening'
  }
  // Between dawn and noon
  return '🌄 Good Morning'
}

const BottomNav = ({ active }) => {
  return (
    <div className="fixed bottom-0 hidden w-screen md:block">
      <div className="relative mx-auto w-full max-w-screen-xl">
        <div className="absolute bottom-0 flex flex-col items-center gap-6">
          <Button
            className="text-white hover:-translate-y-1 hover:text-green-500"
            type="text"
          >
            <Dribbble className="h-6 w-6" />
          </Button>
          <Button
            className="text-white hover:-translate-y-1 hover:text-green-500"
            type="text"
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            className="text-white hover:-translate-y-1 hover:text-green-500"
            type="text"
          >
            <Instagram className="h-6 w-6" />
          </Button>
          <Button
            className="text-white hover:-translate-y-1 hover:text-green-500"
            type="text"
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <div className="h-24 w-0.5 bg-zinc-500" />
        </div>
        <div className="absolute bottom-0 right-0 flex flex-col items-center gap-6">
          {MENU.map(({ name, href }) => (
            <a key={name} href={href}>
              <div
                className={
                  'defaultTransitionAll h-4 w-4 cursor-pointer rounded-full border border-white  hover:scale-110 hover:border-white ' +
                  (name === active && ' scale-110 bg-white')
                }
              />
            </a>
          ))}

          <div className="h-24 w-0.5 bg-zinc-500" />
        </div>
      </div>
    </div>
  )
}
