import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { ZoomVariant, UpVariant, contentVariant } from '@animations'

export default function Gift({ data }) {
  const [refContent, inViewContent] = useInView({ delay: 200 })
  const contentControls = useAnimation()

  useEffect(() => {
    if (inViewContent) {
      contentControls.start('visible')
    }
  }, [inViewContent])

  return (
    <motion.section
      ref={refContent}
      animate={contentControls}
      initial="hidden"
      variants={contentVariant}
      style={{
        background: `url("${data?.media?.POTRAIT2}")`,
        // filter: 'saturate(0)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="flex flex-col items-center gap-4 overflow-hidden bg-zinc-800/50 px-6 py-24 text-center text-zinc-50 md:overflow-visible">
        <motion.div
          variants={ZoomVariant}
          className="z-10 h-60 w-60 overflow-hidden rounded-full border-4 border-rose-300"
        >
          <img src={data?.media?.SQUARE3} />
        </motion.div>

        <div>
          <motion.h5 variants={UpVariant} className=" z-10">
            Kami yang berbahagia
          </motion.h5>
          <motion.h1
            variants={UpVariant}
            className="z-10 font-dancing text-rose-300"
          >
            {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
          </motion.h1>
          <motion.h5 variants={UpVariant} className="z-10 font-alice">
            Beserta Keluarga Besar
          </motion.h5>
        </div>
      </div>
    </motion.section>
  )
}
