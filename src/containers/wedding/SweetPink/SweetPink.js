import { useState, useEffect, useRef } from 'react'
import Main from './Section/Main'
import Bride from './Section/Bride'
import DetailEvent from './Section/DetailEvent'
import Cover from './Section/Cover'
import Galery from './Section/Galery'
import RSVP from './Section/RSVP'
import Gift from './Section/Gift'
import Gretting from './Section/Gretting'
import Footer from '@elements/Footer'
import BottomNav from '@elements/BottomNav'
import Music from '@assets/svg/Music'
import ModalGift from '@fragments/ModalGift'
import Timeline from './Section/Timeline'
import ThankYou from './Section/ThankYou'
import ReactPlayer from 'react-player'
import moment from 'moment'
import 'moment/locale/id'
moment.locale('id')

export default function Home({ data }) {
  const [showCover, setShowCover] = useState(true)
  const [playMusic, setPlayMusic] = useState(true)
  const [modalGift, setModalGift] = useState({ open: false, data: {} })
  const bgColor = 'bg-zinc-50'
  const textColor = 'text-zinc-800'

  const onCloseGift = () => {
    setModalGift({ open: false, data: {} })
  }

  return (
    <div className={bgColor + ' relative font-alice ' + textColor}>
      <Cover
        data={data}
        bgColor={bgColor}
        show={showCover}
        setShow={setShowCover}
      />
      <div
        className={(showCover && 'hidden ') + ' mx-auto md:max-w-screen-md '}
      >
        <Main data={data} />
        <Bride data={data} />
        <DetailEvent data={data} />
        <Timeline data={data} />
        <Galery data={data} />
        <RSVP />
        <Gift data={data} setModalGift={setModalGift} />
        <Gretting data={data} />

        <ThankYou data={data} />
        <Footer />
        <div className="hidden">
          <ReactPlayer
            width="16px"
            height="9px"
            playing={playMusic && !showCover}
            loop={true}
            volume={1}
            url={data?.media?.music}
          />
        </div>
      </div>
      <FloatingMusic setPlay={setPlayMusic} play={playMusic} />
      <ModalGift
        data={modalGift.data}
        open={modalGift.open}
        onClose={onCloseGift}
      />
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
