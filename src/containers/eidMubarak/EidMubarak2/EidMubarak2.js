import { useState } from 'react'
import Main from './Section/Main'
import Detail from './Section/Detail'
import Footer from '@elements/Footer'
import BottomNav from '@elements/BottomNav'
import Music from '@assets/svg/Music'
import ReactPlayer from 'react-player'
import moment from 'moment'
import 'moment/locale/id'
moment.locale('id')
import Mandala from '@assets/svg/ramadhan/Mandala2'
import { motion } from 'framer-motion'

export default function Home({ data }) {
  const [playMusic, setPlayMusic] = useState(true)
  const bgColor = 'bg-[#242059]'
  const textColor = 'text-white'

  return (
    <div className={bgColor + ' font-poppins ' + textColor}>
      <div
        className={
          ' relative mx-auto overflow-hidden md:max-w-screen-sm md:overflow-visible '
        }
      >
        <Main />
        <Detail data={data} />

        <motion.div
          animate={{
            rotateZ: [0, 360, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 40,
          }}
          className="absolute -top-16 -left-20 w-60"
        >
          <Mandala className="h-auto w-full " />
        </motion.div>
        <motion.div
          animate={{
            rotateZ: [0, 180, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 50,
          }}
          className="absolute top-[40%] -left-32 w-60"
        >
          <Mandala className="h-auto w-full " />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export const FloatingMusic = ({ setPlay, play }) => {
  return (
    <BottomNav>
      <button onClick={() => setPlay(!play)} className="relative">
        <div className="h-8 w-8 cursor-pointer rounded-full bg-neutral-800 p-1.5">
          <Music className="h-full w-full text-neutral-50" />
        </div>
        {play && (
          <div className="absolute top-0 z-20 h-8 w-8 animate-ping cursor-pointer rounded-full bg-neutral-800" />
        )}
      </button>
    </BottomNav>
  )
}
