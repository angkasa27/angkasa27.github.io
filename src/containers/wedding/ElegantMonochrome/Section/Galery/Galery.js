import { motion } from 'framer-motion'
import IMAGE from '@assets/image/ElegantMonochrome'
import ReactPlayer from 'react-player'
import {
  LeftVariant,
  RightVariant,
  FadeInVariant,
  ZoomVariant,
  contentVariant,
} from '@animations'

export default function DetailEvent({ setPlay, data }) {
  return (
    <section className="relative flex flex-col gap-10 overflow-hidden py-12 text-center">
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="flex flex-col items-center gap-2 md:gap-4"
      >
        <motion.h4 variants={LeftVariant} className="font-poppins ">
          Unforgettable Moment
        </motion.h4>

        <div className="relative flex w-full snap-x gap-4 overflow-x-auto px-20 pb-4 md:snap-none md:flex-wrap md:justify-center md:px-0">
          {data?.media?.galery?.map((image, i) => (
            <motion.div
              variants={ZoomVariant}
              key={i}
              className="h-48 w-48 shrink-0 snap-center overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={'galery-' + i}
                className="w-full object-center"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="flex flex-col items-center justify-center gap-2 md:gap-4"
      >
        <motion.h4 variants={RightVariant} className="font-poppins">
          Our Journey
        </motion.h4>
        <motion.div
          variants={FadeInVariant}
          className="h-44 w-80 md:h-96 md:w-full md:px-12"
        >
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            onPlay={() => setPlay(false)}
            onEnded={() => setPlay(true)}
            url={data?.media?.youtube}
          />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="flex justify-center pt-12"
      >
        <motion.div variants={ZoomVariant} className="w-20">
          <img alt="decoration" src={IMAGE.Decoration1} />
        </motion.div>
      </motion.div>
    </section>
  )
}
