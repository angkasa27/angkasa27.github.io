import { motion } from 'framer-motion'
import {
  UpVariant,
  ZoomVariant,
  contentVariant,
  FadeInVariant,
} from '@animations'

import Ornament2 from '@assets/svg/ramadhan/Ornament2'

export default function Bride({ data }) {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden px-6 py-24  md:max-w-screen-sm md:overflow-visible">
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-50 flex flex-col items-center"
      >
        <motion.div variants={FadeInVariant} className="mb-2 w-24 rotate-180">
          <Ornament2 className="h-auto w-full text-[#f9be65]" />
        </motion.div>
        <motion.h3 variants={UpVariant} className="text-center ">
          Keluarga Besar
        </motion.h3>
        <motion.h1
          variants={UpVariant}
          className="text-center font-lobster text-4xl text-[#f9be65] md:text-6xl"
        >
          {data.name}
        </motion.h1>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={ZoomVariant}
        className="z-50 w-72 overflow-hidden rounded-lg border-4 border-[#f9be65]"
      >
        <img alt="Family Photo" src={data?.Image} />
      </motion.div>

      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className=" z-50 flex flex-col items-center"
      >
        <motion.h5 variants={UpVariant} className="text-center text-[#f9be65]">
          Mengucapkan
        </motion.h5>
        <motion.h1
          variants={ZoomVariant}
          className="text-center font-lobster  text-4xl md:text-6xl "
        >
          Minal Aidin wal Faizin
        </motion.h1>
        <motion.h3 variants={ZoomVariant} className="text-center">
          Mohon Maaf Lahir dan Batin
        </motion.h3>

        <motion.div variants={UpVariant} className="mt-2 w-24">
          <Ornament2 className="h-auto w-full  text-[#f9be65]" />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={FadeInVariant}
        className="z-50 pt-12"
      >
        <p className="text-center ">"{data?.message}"</p>
      </motion.div>
    </section>
  )
}
