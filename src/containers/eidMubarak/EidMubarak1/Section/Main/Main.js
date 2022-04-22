import Mosque1 from '@assets/svg/ramadhan/Mosque1'
import Mosque2 from '@assets/svg/ramadhan/Mosque2'
import City1 from '@assets/svg/ramadhan/City1'
import Star1 from '@assets/svg/ramadhan/Star1'
import Star2 from '@assets/svg/ramadhan/Star3'
import Lamp1 from '@assets/svg/ramadhan/Lamp1'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import { useRouter } from 'next/router'
import {
  contentVariant2,
  LeftVariant,
  ZoomVariant,
  UpVariant,
} from '@animations'

const blinkVariant = {
  visible: {
    opacity: [1, 0, 1],
  },
}

export default function Main() {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -100])
  const y2 = useTransform(scrollY, [0, 500], [0, 100])
  const { query } = useRouter()

  const _renderDecoration = () => {
    return (
      <>
        <motion.div
          className="absolute -bottom-40 left-0 z-20 w-screen max-w-screen-sm md:-bottom-60"
          style={{ y: y1 }}
        >
          <Mosque1 className="h-auto w-full  text-[#28163A] drop-shadow-lg" />
          <div className="h-48 w-full bg-[#28163A]  drop-shadow-lg" />
        </motion.div>
        <motion.div className="absolute bottom-5 left-0 z-10  w-screen max-w-screen-sm md:-bottom-12">
          <Mosque2 className="h-auto w-1/2  drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-0  w-screen max-w-screen-sm"
          style={{ y: y2 }}
        >
          <City1 className="tetx-[#1A1A1A] h-auto w-full opacity-10 drop-shadow-lg" />
        </motion.div>
        <motion.div
          transition={{
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 3,
          }}
          animate="visible"
          variants={blinkVariant}
          className="absolute top-0 -left-5 w-screen max-w-screen-sm"
          style={{ y: y2 }}
        >
          <Star2 className="h-auto w-full" />
          <Star1 className="h-auto w-full" />
        </motion.div>
        <motion.div
          transition={{
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 3,
            delay: 1.5,
          }}
          animate="visible"
          variants={blinkVariant}
          className="absolute top-10 left-5 w-screen max-w-screen-sm rotate-180"
          style={{ y: y2 }}
        >
          <Star2 className="h-auto w-full" />
          <Star1 className="h-auto w-full" />
        </motion.div>

        <motion.div className="absolute -top-10 left-8 w-8">
          <Lamp1 className="h-auto w-full text-[#28163A]  drop-shadow-lg" />
        </motion.div>
        <motion.div className="absolute left-24 top-0 w-6">
          <Lamp1 className="h-auto w-full text-[#28163A]  drop-shadow-lg" />
        </motion.div>
        <motion.div className="absolute right-24 -top-10 w-6">
          <Lamp1 className="h-auto w-full text-[#28163A]  drop-shadow-lg" />
        </motion.div>
        <motion.div className="absolute -top-20 right-8 w-8">
          <Lamp1 className="h-auto w-full text-[#28163A]  drop-shadow-lg" />
        </motion.div>
      </>
    )
  }

  return (
    <section className="relative h-screen overflow-hidden bg-[#713BA2]">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={contentVariant2}
        className="flex h-full w-full flex-col items-center justify-center gap-12 "
      >
        <div className="text-center">
          <motion.h3
            variants={LeftVariant}
            className="font-bold drop-shadow-lg"
          >
            Selamat Hari Raya
          </motion.h3>
          <motion.h1
            variants={ZoomVariant}
            className="font-lobster text-5xl text-[#f9be65] drop-shadow-lg  md:text-7xl"
          >
            Idul Fitri
          </motion.h1>
          <motion.h5 className=" drop-shadow-lg" variants={UpVariant}>
            1 Syawal 1443H
          </motion.h5>
        </div>
        <motion.div variants={UpVariant} className="mb-16 text-center md:mb-64">
          {query?.name && (
            <>
              <h5 className=" drop-shadow-lg">Kepada</h5>
              <h4 className="font-semibold drop-shadow-lg">{query.name}</h4>
            </>
          )}
        </motion.div>
      </motion.div>

      {_renderDecoration()}
    </section>
  )
}
