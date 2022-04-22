import Parallax from 'parallax-js'
import { useRef, useEffect } from 'react'
import Frame1 from './Frame1'
import Frame2 from './Frame2'
import Frame3 from './Frame3'
import Frame4 from './Frame4'
import Frame5 from './Frame5'
import Frame6 from './Frame6'

export default function ErrorAnimation({ className }) {
  const scene = useRef(null)

  useEffect(() => {
    const parallaxInstance = new Parallax(scene.current, {
      // relativeInput: true,
    })

    parallaxInstance.enable()

    return () => parallaxInstance.disable()
  }, [])

  return (
    <div ref={scene}>
      <Frame1 className={className + ' z-50'} data-depth=".65" />
      <Frame2 className={className + ' z-40'} data-depth=".45" />
      <Frame4 className={className + ' z-30'} data-depth=".25" />
      <Frame3 className={className + ' z-20'} data-depth=".05" />
      <Frame5 className={className + ' z-10'} data-depth="-.15" />
      <Frame6 className={className + ' z-0'} data-depth="-.35" />
    </div>
  )
}
