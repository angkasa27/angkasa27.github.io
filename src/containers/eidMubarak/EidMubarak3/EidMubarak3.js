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
import IMAGE from '@assets/image/ramadhan'

export default function Home({ data }) {
  const [playMusic, setPlayMusic] = useState(true)
  const bgColor = 'bg-[#4A0023]'
  const textColor = 'text-white'

  return (
    <div className={bgColor + ' font-poppins ' + textColor}>
      <div
        style={{
          background:
            'radial-gradient(80.14% 80.13% at 50% 50%, #6F1379 0%, rgba(111, 19, 121, 0) 94.26%)',
        }}
      >
        <div
          style={{
            background: `url("${IMAGE.Background2}")`,
            backgroundPosition: 'center',
            backgroundSize: '300px',
            backdropFilter: 'opacity(0.1)',
          }}
        >
          <Main />
        </div>
      </div>
      <div
        style={{
          background:
            'radial-gradient(80.14% 80.13% at 50% 50%, #6F1379 0%, rgba(111, 19, 121, 0) 94.26%)',
        }}
      >
        <div
          style={{
            background: `url("${IMAGE.Background2}")`,
            backgroundPosition: 'center',
            backgroundSize: '300px',
            backdropFilter: 'opacity(0.1)',
          }}
        >
          <Detail data={data} />
        </div>
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
