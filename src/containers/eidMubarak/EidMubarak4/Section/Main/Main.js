import Ketupat2 from '@assets/svg/ramadhan/Ketupat2'
import Mosque4 from '@assets/svg/ramadhan/Mosque4'
import Mosque3 from '@assets/svg/ramadhan/Mosque3'
import { useRouter } from 'next/router'
import { LeftVariant } from '@animations'
import Parallax from 'parallax-js'
import { useRef, useEffect } from 'react'

export default function Main() {
  const { query } = useRouter()
  const scene = useRef(null)

  useEffect(() => {
    const parallaxInstance = new Parallax(scene.current, {
      // relativeInput: true,
      // hoverOnly: true,
    })

    parallaxInstance.enable()

    return () => parallaxInstance.disable()
  }, [])

  const _renderDecoration = () => {
    return (
      <>
        <div className="relative h-full w-full " data-depth=".35">
          <Ketupat2 className="absolute top-0 right-6 h-auto w-16 drop-shadow-lg md:top-10 md:right-12" />
        </div>
        <div className="relative h-full w-full " data-depth="-.25">
          <Ketupat2 className="absolute -top-10 right-24 h-auto w-12 drop-shadow-lg md:right-36 md:top-4" />
        </div>
        <div className="relative h-full w-full " data-depth="-.15">
          <Ketupat2 className="absolute -top-16 left-28 h-auto w-12 drop-shadow-lg md:left-36 md:-top-4" />
        </div>
        <div className="relative h-full w-full " data-depth=".25">
          <Ketupat2 className="absolute -top-12 left-6 h-auto w-16 drop-shadow-lg md:left-12 md:top-14" />
        </div>
        <div className="relative h-full w-full " data-depth="-.15">
          <Mosque4 className="absolute bottom-10 -left-14 h-auto max-w-screen-md -scale-x-90 drop-shadow-lg" />
        </div>
        <div className="relative h-full  w-full" data-depth=".25">
          <Mosque3 className="absolute -bottom-0 -right-36 h-auto w-96 -scale-x-90 drop-shadow-lg md:-right-10 " />
        </div>
      </>
    )
  }

  return (
    <section
      ref={scene}
      className=" mx-auto h-screen w-screen overflow-hidden md:max-w-screen-sm "
      style={{
        background:
          'radial-gradient(circle at center, #009784 0%, #000415 100%)',
      }}
    >
      {_renderDecoration()}
      <div className="relative h-full w-full" data-depth=".15">
        <div className="absolute bottom-1/2 right-1/2 w-full translate-y-1/2 translate-x-1/2 text-center">
          <h3 variants={LeftVariant} className="font-bold drop-shadow-lg">
            Selamat Hari Raya
          </h3>
          <h1 className="font-lobster text-5xl text-[#f9be65] drop-shadow-lg md:text-7xl">
            Idul Fitri
          </h1>
          <h5 className=" drop-shadow-lg">1 Syawal 1443H</h5>
          <div className="mt-8">
            {query?.name && (
              <>
                <h5 className=" drop-shadow-lg">Kepada</h5>
                <h4 className="font-semibold drop-shadow-lg">{query.name}</h4>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
