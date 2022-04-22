import { useState } from 'react'
import { motion } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import { UpVariant, ZoomVariant, contentVariant } from '@animations'
import IMAGE from '@assets/image/ClassicTropical'
import InputText from '@form/InputText'
import Dropdown from '@elements/Dropdown'

export default function RSVP() {
  const [confirmation, setConfirmation] = useState('')

  const _renderBG = () => {
    return (
      <>
        <div className="absolute -right-12 top-[12%] opacity-40 md:-right-24 ">
          <div className="w-36 md:w-48">
            <img src={IMAGE.Bunga} />
          </div>
        </div>
        <div className="absolute bottom-[20%] -left-8 rotate-12 -scale-x-100 opacity-40 md:bottom-[0%]">
          <div className="w-36 md:w-48">
            <img src={IMAGE.Bunga} />
          </div>
        </div>
      </>
    )
  }

  const option = ['Hadir', 'Tidak Hadir']

  return (
    <section className="relative flex flex-col gap-10 overflow-hidden px-6 py-24 text-center md:overflow-visible">
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
          className="w-44 drop-shadow-lg saturate-200"
        >
          <img src={IMAGE.RSVP} />
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={contentVariant}
          className="z-10 flex w-full flex-col items-center gap-2 rounded-lg bg-white/25 px-4 py-6 text-center text-white shadow-lg"
        >
          <motion.h5 variats={UpVariant}>
            Konfirmasi Kehadiran Tamu Undangan Mempelai pria
          </motion.h5>
          <InputText
            variants={ZoomVariant}
            className="mt-2 rounded-lg text-neutral-800"
            placeholder="Masukan Nama"
          />
          <InputText
            variants={ZoomVariant}
            className="rounded-lg text-neutral-800"
            placeholder="Jumlah Orang"
          />
          <Dropdown
            variants={ZoomVariant}
            className="w-full"
            buttonClass="bg-white rounded-lg text-neutral-800"
            name="Konfirmasi Kehadiran"
            option={option}
            value={confirmation}
            onChange={setConfirmation}
          />
          <div>
            <ButtonCustom
              small
              variants={ZoomVariant}
              className="mt-2 bg-neutral-700 text-neutral-50"
              onClick={() => {}}
            >
              Konfirmasi Via WhatsApp
            </ButtonCustom>
          </div>
        </motion.div>
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={contentVariant}
          className="z-10 flex w-full flex-col items-center gap-2 rounded-lg bg-white/25 px-4 py-6 text-center text-white shadow-lg"
        >
          <motion.h5 variats={UpVariant}>
            Konfirmasi Kehadiran Tamu Undangan Mempelai Wanita
          </motion.h5>
          <InputText
            variants={ZoomVariant}
            className="mt-2 rounded-lg text-neutral-800"
            placeholder="Masukan Nama"
          />
          <InputText
            variants={ZoomVariant}
            className="rounded-lg text-neutral-800"
            placeholder="Jumlah Orang"
          />
          <InputText
            variants={ZoomVariant}
            className="rounded-lg text-neutral-800"
            placeholder="Konfirmasi Kehadiran"
          />
          <Dropdown
            variants={ZoomVariant}
            className="w-full"
            buttonClass="bg-white rounded-lg text-neutral-800"
            name="Konfirmasi Kehadiran"
            option={option}
          />
          <div>
            <ButtonCustom
              small
              variants={ZoomVariant}
              className="mt-2 bg-neutral-700 text-neutral-50"
              onClick={() => {}}
            >
              Konfirmasi Via WhatsApp
            </ButtonCustom>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
