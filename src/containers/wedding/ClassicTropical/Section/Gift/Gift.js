import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import { ZoomVariant, UpVariant, contentVariant } from '@animations'
import IMAGE from '@assets/image/ClassicTropical'

export default function Gift({ setModalGift, data }) {
  const [refContent, inViewContent] = useInView({ delay: 200 })
  const contentControls = useAnimation()

  useEffect(() => {
    if (inViewContent) {
      contentControls.start('visible')
    }
  }, [inViewContent])

  const _renderBG = () => {
    return (
      <>
        <div className="absolute -right-8 top-[12%] opacity-40 md:-right-0 ">
          <div className="w-28 md:w-36">
            <img src={IMAGE.Envelope} />
          </div>
        </div>
        <div className="absolute -left-8 bottom-[0%] -scale-x-100 opacity-40 md:-left-0">
          <div className="w-28 md:w-36">
            <img src={IMAGE.Envelope} />
          </div>
        </div>
      </>
    )
  }

  return (
    <section className="relative flex flex-col gap-4 overflow-hidden px-6 py-24 text-center md:overflow-visible">
      {_renderBG()}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-10 flex justify-center"
      >
        <motion.div
          variants={ZoomVariant}
          className="w-48 drop-shadow-lg saturate-200"
        >
          <img src={IMAGE.Gift} />
        </motion.div>
      </motion.div>
      <motion.p
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={UpVariant}
        className=""
      >
        Any little gift from you is a very <br />
        extraordinary blessing for us
      </motion.p>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="flex flex-wrap justify-center gap-4"
      >
        {data?.gift?.map((v) => (
          <ButtonCustom
            variants={ZoomVariant}
            small
            className="bg-neutral-700 text-neutral-50 "
            onClick={() => setModalGift({ open: true, data: v })}
          >
            {v.type}
          </ButtonCustom>
        ))}
      </motion.div>
    </section>
  )
}
