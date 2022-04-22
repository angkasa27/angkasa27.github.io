import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Main from '@layouts/Main'
import Welcome from './section/Welcome'
import About from './section/About'
import Price from './section/Price'
import OrderNow from '@fragments/OrderNow'
import Design from './section/Design'
import Testimonial from './section/Testimonial'
import Wave1 from '@assets/svg/Wave1'
import Wave2 from '@assets/svg/Wave2'
import Wave3 from '@assets/svg/Wave3'
import Wave4 from '@assets/svg/Wave4'
import Feature from './section/Feature'
import EidMubarak from '@fragments/EidMubarak'

export default function Home() {
  const [ref, inView] = useInView()
  const [showNav, setShowNav] = useState(false)
  useEffect(() => {
    if (inView) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }, [inView])

  return (
    <Main showNav={showNav}>
      <Welcome showNav={showNav} />

      <div ref={ref} className="mt-12  bg-slate-50">
        <About />
        <EidMubarak />

        <div className="relative pb-20">
          <Feature />
          {/* <div className="absolute bottom-[30vh] z-0 md:bottom-[15vh] ">
            <Wave1 className="w-screen text-fuchsia-300 opacity-100" />
          </div>
          <div className="absolute bottom-0 z-0 h-[30vh] w-screen bg-fuchsia-300 md:h-[15vh] " />
          <div className="absolute bottom-[15vh] z-0 ">
            <Wave2 className="w-screen -scale-x-100 text-fuchsia-300 opacity-50" />
          </div>
          <div className="absolute bottom-[30vh] z-0 md:bottom-[15vh]">
            <Wave4 className="w-screen -scale-x-100 text-fuchsia-300 opacity-50" />
          </div> */}
          <div className="absolute bottom-0 z-0">
            <Wave1 className="w-screen text-fuchsia-300 opacity-100" />
          </div>
          <div className="absolute bottom-0 z-0">
            <Wave2 className="w-screen -scale-x-100 text-fuchsia-300 opacity-50" />
          </div>
          <div className="absolute bottom-0 z-0">
            <Wave4 className="w-screen -scale-x-100 text-fuchsia-300 opacity-50" />
          </div>
        </div>
        <div className="relative bg-fuchsia-300 pb-[10vh]">
          <Design />
          <div className="absolute bottom-0 z-0 ">
            <Wave2 className="w-screen text-slate-50 opacity-100" />
          </div>
          <div className="absolute -bottom-10 z-0">
            <Wave3 className="w-screen -scale-x-100 text-slate-50 opacity-50" />
          </div>
        </div>
        <Price />
        {/* <Testimonial /> */}
        <OrderNow />
      </div>
    </Main>
  )
}
