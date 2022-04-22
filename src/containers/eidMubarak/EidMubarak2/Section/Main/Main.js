import Mosque from '@assets/svg/ramadhan/Mosque3'
import Lamp1 from '@assets/svg/ramadhan/Lamp1'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import {
  contentVariant2,
  LeftVariant,
  ZoomVariant,
  UpVariant,
  FadeInVariant,
} from '@animations'
import IMAGE from '@assets/image/ramadhan'

export default function Main() {
  const { query } = useRouter()

  const _renderDecoration = () => {
    return (
      <motion.div animate="visible" initial="hidden" variants={contentVariant2}>
        <motion.div
          variants={UpVariant}
          className="absolute -bottom-16 left-[40%] z-10  w-screen max-w-screen-sm md:-bottom-12"
        >
          <Mosque className="h-auto w-full  drop-shadow-lg" />
        </motion.div>

        <motion.div
          variants={FadeInVariant}
          className="absolute -top-10 right-8 w-8"
        >
          <Lamp1 className="h-auto w-full text-[#f9be65] drop-shadow-lg" />
        </motion.div>
        <motion.div
          variants={FadeInVariant}
          className="absolute -top-16 right-32 w-8"
        >
          <Lamp1 className="h-auto w-full text-[#f9be65] drop-shadow-lg" />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section
      className="bg-op relative h-screen overflow-hidden"
      style={{
        background: `url("${IMAGE.Background1}")`,
        backgroundPosition: 'center',
        backgroundSize: '800px',
        backdropFilter: 'opacity(0.1)',
      }}
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={contentVariant2}
        className="flex h-full w-full flex-col justify-center gap-12 px-12"
      >
        <div className="">
          <motion.h3 variants={LeftVariant} className="font-bold">
            Selamat Hari Raya
          </motion.h3>
          <motion.h1
            variants={ZoomVariant}
            className="font-lobster text-5xl text-[#f9be65] md:text-7xl"
          >
            Idul Fitri
          </motion.h1>
          <motion.h5 variants={UpVariant}>1 Syawal 1443H</motion.h5>
        </div>
        <motion.div variants={UpVariant} className="">
          {query?.name && (
            <>
              <h5>Kepada</h5>
              <h4 className="font-semibold">{query.name}</h4>
            </>
          )}
        </motion.div>
      </motion.div>

      {_renderDecoration()}
    </section>
  )
}
