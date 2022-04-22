import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Main from '@layouts/Main'
import OrderNow from '@fragments/OrderNow'
import EidMubarak from '@fragments/EidMubarak'
import Design from './section/Design'

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
      {/* <Welcome /> */}
      <div ref={ref} className="mt-12 ">
        <Design />
        <EidMubarak />
      </div>
    </Main>
  )
}
