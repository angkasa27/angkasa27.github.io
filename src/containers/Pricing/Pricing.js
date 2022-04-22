import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Main from '@layouts/Main'
import Price from './section/Price'
import OrderNow from '@fragments/OrderNow'
import Topping from './section/Topping'
import Wave1 from '@assets/svg/Wave1'
import Wave2 from '@assets/svg/Wave2'
import Wave4 from '@assets/svg/Wave4'

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
      <div ref={ref} className="mt-12 ">
        <div className="relative bg-fuchsia-300">
          <Price />
          <div className="absolute bottom-[15vh] z-0 ">
            <Wave1 className="w-screen text-white opacity-100" />
          </div>
          <div className="absolute bottom-0 z-0 h-[15vh] w-screen bg-white " />
          <div className="absolute bottom-[15vh] z-0 ">
            <Wave2 className="w-screen -scale-x-100 text-white opacity-50" />
          </div>
          <div className="absolute bottom-[15vh] z-0">
            <Wave4 className="w-screen -scale-x-100 text-white opacity-50" />
          </div>
        </div>
        <Topping />
        <OrderNow />
      </div>
    </Main>
  )
}
