import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

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

  return <div>tes</div>
}
