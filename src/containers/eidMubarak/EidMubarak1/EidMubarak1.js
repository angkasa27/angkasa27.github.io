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

export default function Home({ data }) {
  const [playMusic, setPlayMusic] = useState(true)
  const bgColor = 'bg-[#28163A]'
  const textColor = 'text-white'

  return (
    <div className={bgColor + ' relative font-poppins ' + textColor}>
      <div className={' mx-auto md:max-w-screen-sm '}>
        <Main />
        <Detail data={data} />
        <Footer />
      </div>
      {/* <FloatingMusic setPlay={setPlayMusic} play={playMusic} /> */}
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
