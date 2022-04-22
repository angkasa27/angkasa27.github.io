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

import Cover from '@assets/svg/ramadhan/Cover'

export default function Home({ data }) {
  const [playMusic, setPlayMusic] = useState(true)
  const bgColor = 'bg-gray-900'
  const textColor = 'text-white'

  return (
    <div className={bgColor + ' font-poppins ' + textColor}>
      <div className="relative h-screen overflow-hidden">
        <Main />
        <div className="absolute top-0 right-1/2 w-screen max-w-screen-sm translate-x-1/2">
          <Cover className="z-50 h-full w-full" />
        </div>

        <div className="absolute bottom-0 right-1/2 w-screen max-w-screen-sm translate-x-1/2 rotate-180">
          <Cover className="z-50 h-full w-full" />
        </div>
      </div>
      <Detail data={data} />
      <Footer className="border-t border-[#f9be65]" />
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
