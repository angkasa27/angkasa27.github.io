import { motion } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import { ZoomVariant, UpVariant, contentVariant } from '@animations'

export default function Gift({ setModalGift, data }) {
  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      variants={contentVariant}
      className="relative flex flex-col gap-4 overflow-hidden bg-rose-200 px-6 py-24 text-center md:overflow-visible"
    >
      <div className="mb-8 flex w-full flex-col items-center">
        <motion.h3 variants={ZoomVariant} className="font-alice leading-3">
          Unkapan
        </motion.h3>
        <motion.h1
          variants={UpVariant}
          className="font-dancing text-5xl leading-5 text-rose-500"
        >
          Tanda Kasih
        </motion.h1>
        <motion.p variants={UpVariant} className="mt-5">
          Jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          secara cashless dengan mengirim amplop digital melalui pilihan
          pembayaran dibawah ini
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {data?.gift?.map((v) => (
          <ButtonCustom
            variants={ZoomVariant}
            small
            className="bg-zinc-700 text-zinc-50 "
            onClick={() => setModalGift({ open: true, data: v })}
          >
            {v.type}
          </ButtonCustom>
        ))}
      </div>
    </motion.section>
  )
}
