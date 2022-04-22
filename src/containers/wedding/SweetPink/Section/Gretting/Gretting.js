import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import { ZoomVariant, UpVariant, contentVariant } from '@animations'
import IMAGE from '@assets/image/ClassicTropical'
import InputText from '@form/InputText'
import TextArea from '@form/TextArea'

export default function Gretting() {
  const [refContent, inViewContent] = useInView({ delay: 200 })
  const contentControls = useAnimation()

  useEffect(() => {
    if (inViewContent) {
      contentControls.start('visible')
    }
  }, [inViewContent])

  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      variants={contentVariant}
      className="relative flex flex-col gap-10 overflow-hidden bg-gradient-to-b  from-rose-200 via-rose-200 to-rose-300 px-6 py-24 text-center md:overflow-visible"
    >
      <div className="flex w-full flex-col items-center">
        <motion.div variants={ZoomVariant} className="w-20 -rotate-12">
          <img src={IMAGE.Bunga} />
        </motion.div>
        <motion.h3 variants={ZoomVariant} className="font-alice leading-3">
          Berikan
        </motion.h3>
        <motion.h1
          variants={UpVariant}
          className="font-dancing text-5xl leading-5 text-rose-500"
        >
          Ucapan & Doa
        </motion.h1>
        <motion.p variants={UpVariant} className="mt-5">
          Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa
          jabatan-jabatan tangan atau pelukan-pelukan hangat, masih ada
          simpul-simpul senyum dan doa-doa baik yang kami harapkan.
        </motion.p>
      </div>

      <div className="z-10 flex w-full flex-col items-center gap-2 rounded-lg bg-white/25 p-4 text-center text-white shadow-lg">
        <InputText
          variants={ZoomVariant}
          className="mt-2 rounded-lg text-zinc-800"
          placeholder="Masukan Nama"
        />
        <TextArea
          variants={ZoomVariant}
          className="rounded-lg text-zinc-800"
          placeholder="Ucapan & Doa"
        />
        <div>
          <ButtonCustom
            small
            variants={ZoomVariant}
            className="mt-2 bg-zinc-700 text-zinc-50"
            onClick={() => {}}
          >
            Kirim
          </ButtonCustom>
        </div>
      </div>
    </motion.section>
  )
}
