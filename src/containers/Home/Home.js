import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Navbar from '@elements/Navbar'
import moment from 'moment'
import Button from '@elements/Button'
import ReactTypingEffect from 'react-typing-effect'
import Instagram from '@assets/svg/Instagram'

export default function Home() {
  const [ref, inView] = useInView()
  const [showNav, setShowNav] = useState(false)
  const [color, setColor] = useState('text-indigo-500')
  const [bgColor, setBgColor] = useState('bg-indigo-600 hover:bg-indigo-700')

  useEffect(() => {
    if (inView) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }, [inView])

  return (
    <div className="w-screen bg-zinc-800">
      {/* <Navbar /> */}

      <div className="relative mx-auto max-w-screen-xl text-zinc-50">
        {BottomNav()}
        <div className=" w-full px-24">
          <section
            id="main"
            className="flex h-screen flex-col justify-center gap-4"
          >
            <h3 className={' font-bold ' + color}>
              {getGreetingTime(moment())}!
            </h3>
            <h1 className="font-bold">Dimas Angkasa Nurindra</h1>
            <h2 className="font-bold text-zinc-400">
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
              <Button className={bgColor + ' text-white'}>See my Work</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
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

const BottomNav = () => {
  return (
    <>
      <div className="fixed bottom-0 flex flex-col items-center">
        <div className="rounded-full border-2 p-1">
          <Instagram className="h-6 w-6" />
        </div>
        <div>ok</div>
      </div>
    </>
  )
}
