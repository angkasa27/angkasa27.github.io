import Ornament2 from '@assets/svg/ramadhan/Ornament3'
import Ketupat1 from '@assets/svg/ramadhan/Ketupat1'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import {
  contentVariant2,
  LeftVariant,
  ZoomVariant,
  UpVariant,
  FadeInVariant,
  DownVariant,
} from '@animations'

export default function Main() {
  const { query } = useRouter()

  const _renderDecoration = () => {
    return (
      <>
        <motion.div
          variants={FadeInVariant}
          className="absolute top-6 right-6 w-24"
        >
          <Ornament2 className="h-auto w-full" />
        </motion.div>
        <motion.div
          variants={FadeInVariant}
          className="absolute top-6 left-6 w-24 -rotate-90"
        >
          <Ornament2 className="h-auto w-full" />
        </motion.div>
        <motion.div
          variants={FadeInVariant}
          className="absolute bottom-6 right-6 w-24 rotate-90"
        >
          <Ornament2 className="h-auto w-full" />
        </motion.div>
        <motion.div
          variants={FadeInVariant}
          className="absolute bottom-6 left-6 w-24 -rotate-180"
        >
          <Ornament2 className="h-auto w-full" />
        </motion.div>
      </>
    )
  }

  return (
    <section className=" relative mx-auto h-screen overflow-hidden md:max-w-screen-sm md:overflow-visible ">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={contentVariant2}
        className="flex h-full w-full flex-col items-center justify-center gap-8 px-12"
      >
        <motion.div variants={DownVariant} className="w-48">
          <Ketupat1 className="h-auto w-full " />
        </motion.div>
        <div className="text-center">
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
        <motion.div variants={UpVariant} className="text-center">
          {query?.name && (
            <>
              <h5>Kepada</h5>
              <h4 className="font-semibold">{query.name}</h4>
            </>
          )}
        </motion.div>
        {_renderDecoration()}
      </motion.div>
    </section>
  )
}
