import { useState } from 'react'
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
import ReactPlayer from 'react-player'

export default function Home({ data }) {
  const [showCover, setShowCover] = useState(true)
  const [modalGift, setModalGift] = useState({ open: false, data: {} })
  const bgColor = 'bg-neutral-50'
  const textColor = 'text-neutral-800'
  const [playMusic, setPlayMusic] = useState(true)

  const onCloseGift = () => {
    setModalGift({ open: false, data: {} })
  }

  return (
    <div className={bgColor + ' relative font-poppins ' + textColor}>
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
        <Galery setPlay={setPlayMusic} data={data} />
        <div
          style={{
            background: `url("${data?.media?.end}")`,
            // filter: 'saturate(0)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(250, 250, 250,1) 10%,  rgba(250, 250, 250, 0)  100%)',
            }}
          >
            <RSVP />
            <Gift data={data} setModalGift={setModalGift} />
            <Gretting data={data} />
            <div className="py-12 text-center text-neutral-50">
              <h1 className=" font-dancing underline decoration-2 underline-offset-4">
                Thank You
              </h1>
              <h4 className=" font-poppins">
                {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
              </h4>
            </div>
          </div>
        </div>
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
