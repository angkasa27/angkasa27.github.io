import { useState } from 'react'
import { motion } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import { UpVariant, ZoomVariant, contentVariant } from '@animations'
import InputText from '@form/InputText'
import Dropdown from '@elements/Dropdown'

export default function RSVP() {
  const [confirmation, setConfirmation] = useState('')

  const option = ['Hadir', 'Tidak Hadir']

  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      variants={contentVariant}
      className="relative flex flex-col gap-10 overflow-hidden bg-rose-300 px-6 py-24 text-center text-white md:overflow-visible"
    >
      <div className="flex w-full flex-col items-center">
        <motion.h3 variants={ZoomVariant} className="font-alice leading-3">
          Konfirmasi
        </motion.h3>
        <motion.h1
          variants={UpVariant}
          className="font-dancing text-5xl leading-5 text-rose-500"
        >
          Kehadiran
        </motion.h1>
        <motion.p variants={UpVariant} className="mt-5">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/
          Ibu/ Saudara/ i berkenan hadir, untuk memberikan do'a restu kepada
          kedua mempelai.
        </motion.p>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="z-10 flex w-full flex-col items-center gap-2 rounded-lg bg-white/25 px-4 py-6 text-center text-white shadow-lg">
          <motion.h5 variats={UpVariant}>Tamu Undangan Mempelai pria</motion.h5>
          <InputText
            variants={ZoomVariant}
            className="mt-2 rounded-lg text-zinc-800"
            placeholder="Masukan Nama"
          />
          <InputText
            variants={ZoomVariant}
            className="rounded-lg text-zinc-800"
            placeholder="Jumlah Orang"
          />
          <Dropdown
            variants={ZoomVariant}
            className="w-full"
            buttonClass="bg-white rounded-lg text-zinc-800"
            name="Konfirmasi Kehadiran"
            option={option}
            value={confirmation}
            onChange={setConfirmation}
          />
          <div>
            <ButtonCustom
              small
              variants={ZoomVariant}
              className="mt-2 bg-zinc-700 text-zinc-50"
              onClick={() => {}}
            >
              Konfirmasi Via WhatsApp
            </ButtonCustom>
          </div>
        </div>
        <div className="z-10 flex w-full flex-col items-center gap-2 rounded-lg bg-white/25 px-4 py-6 text-center text-white shadow-lg">
          <motion.h5 variats={UpVariant}>
            Tamu Undangan Mempelai Wanita
          </motion.h5>
          <InputText
            variants={ZoomVariant}
            className="mt-2 rounded-lg text-zinc-800"
            placeholder="Masukan Nama"
          />
          <InputText
            variants={ZoomVariant}
            className="rounded-lg text-zinc-800"
            placeholder="Jumlah Orang"
          />
          <InputText
            variants={ZoomVariant}
            className="rounded-lg text-zinc-800"
            placeholder="Konfirmasi Kehadiran"
          />
          <Dropdown
            variants={ZoomVariant}
            className="w-full"
            buttonClass="bg-white rounded-lg text-zinc-800"
            name="Konfirmasi Kehadiran"
            option={option}
          />
          <div>
            <ButtonCustom
              small
              variants={ZoomVariant}
              className="mt-2 bg-zinc-700 text-zinc-50"
              onClick={() => {}}
            >
              Konfirmasi Via WhatsApp
            </ButtonCustom>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
