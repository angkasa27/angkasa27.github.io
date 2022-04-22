import { motion } from 'framer-motion'
import { ZoomVariant, UpVariant, contentVariant } from '@animations'
import IMAGE from '@assets/image/ClassicTropical'

export default function Gift({ data }) {
  const _renderBG = () => {
    return (
      <>
        <div className="absolute top-[10%] left-0 opacity-40 ">
          <div className="w-20 md:w-36">
            <img src={IMAGE.DaunBG1} />
          </div>
        </div>

        <div className="absolute top-[30%] left-0 opacity-40 md:top-[45%] ">
          <div className="w-20 md:w-36">
            <img src={IMAGE.DaunBG2} />
          </div>
        </div>
        <div className="absolute bottom-[10%] left-0 opacity-40 md:bottom-[15%] ">
          <div className="w-10 md:w-16">
            <img src={IMAGE.DaunBG3} />
          </div>
        </div>

        <div className="absolute bottom-[18%] right-0 -scale-x-100 opacity-40  md:bottom-[10%]">
          <div className="w-20 md:w-36">
            <img src={IMAGE.DaunBG1} />
          </div>
        </div>

        <div className="absolute bottom-[5%] right-0 -scale-x-100 opacity-40 md:top-[40%] ">
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
    <section className="relative flex flex-col items-center gap-4 overflow-hidden bg-white px-6 py-24 text-center text-neutral-800 md:overflow-visible">
      {_renderBG()}

      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={ZoomVariant}
        className="z-10 h-60 w-60 overflow-hidden rounded-full border-4 border-[#C0A080]"
      >
        <img src={data?.media?.end} />
      </motion.div>

      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
      >
        <motion.h5 variants={UpVariant} className=" z-10">
          Kami yang berbahagia
        </motion.h5>
        <motion.h1
          variants={UpVariant}
          className="z-10 font-dancing font-semibold text-[#C0A080]"
        >
          {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
        </motion.h1>
        <motion.h5 variants={UpVariant} className="z-10 font-bold">
          Beserta Keluarga Besar
        </motion.h5>
      </motion.div>
    </section>
  )
}
