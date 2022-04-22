import { motion } from 'framer-motion'
import IMAGE from '@assets/image/ClassicTropical'
import ReactPlayer from 'react-player'
import {
  UpVariant,
  FadeInVariant,
  ZoomVariant,
  contentVariant,
} from '@animations'
import moment from 'moment'
import Wave from '@assets/svg/Wave3'

export default function Galery({ setPlay, data }) {
  const _renderBG = () => {
    return (
      <>
        <Wave className="absolute bottom-0 left-0 w-full text-neutral-800" />

        <div className="absolute top-[20%] left-0 opacity-40  md:top-[15%] ">
          <div className="w-20 md:w-36">
            <img src={IMAGE.DaunBG1} />
          </div>
        </div>

        <div className="absolute top-[35%] left-0 opacity-40 md:top-[40%] ">
          <div className="w-20 md:w-36">
            <img src={IMAGE.DaunBG2} />
          </div>
        </div>
        <div className="absolute bottom-[10%] left-0 opacity-40 md:bottom-[10%] ">
          <div className="w-10 md:w-16">
            <img src={IMAGE.DaunBG3} />
          </div>
        </div>

        <div className="absolute bottom-[35%] right-0 -scale-x-100 opacity-40 md:bottom-[20%]">
          <div className="w-20 md:w-36">
            <img src={IMAGE.DaunBG1} />
          </div>
        </div>

        <div className="absolute bottom-[25%] right-0 -scale-x-100 opacity-40 md:top-[40%] ">
          <div className="w-20 md:w-36">
            <img src={IMAGE.DaunBG2} />
          </div>
        </div>
        <div className="absolute top-[10%] right-0 -scale-x-100 opacity-40 md:bottom-[15%] ">
          <div className="w-10 md:w-16">
            <img src={IMAGE.DaunBG3} />
          </div>
        </div>
      </>
    )
  }

  return (
    <section className="relative flex flex-col gap-10 overflow-hidden bg-neutral-700 py-12 text-center">
      {_renderBG()}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-10 flex flex-col items-center gap-4 px-6"
      >
        <motion.div
          variants={ZoomVariant}
          className="w-48 drop-shadow-lg  saturate-200"
        >
          <img src={IMAGE.OurMoments} />
        </motion.div>

        <motion.p variants={UpVariant} className="">
          “Hakikat pernikahan adalah menggenapkan yang belum genap dan
          menyempurnakan yang kurang sempurna”
        </motion.p>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-10 grid grid-cols-2 gap-2 px-6 md:grid-cols-3 md:gap-4"
      >
        {data?.galery?.map((v, i) => (
          <motion.div
            variants={UpVariant}
            key={i}
            className="rounded-sm bg-white p-2 shadow-lg md:p-3"
          >
            <img src={v.image} className="h-36 w-full object-cover md:h-56" />
            <p className="text-right text-neutral-800">
              {moment(v.date).format('DD/MM/YYYY')}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-10 mb-24 flex justify-center"
      >
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
    </section>
  )
}
