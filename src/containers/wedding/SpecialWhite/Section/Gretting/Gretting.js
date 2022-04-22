import { useState } from 'react'
import { motion } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import {
  UpVariant,
  RightVariant,
  ZoomVariant,
  contentVariant,
} from '@animations'
import { submitWhatsApp } from '@utils/url'
import InputText from '@form/InputText'
import TextArea from '@form/TextArea'

export default function Gretting({ data }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const submitRsvp = () => {
    const mess = data?.contact?.gretting(name, message)
    window.open(submitWhatsApp(data?.contact?.whatsapp, mess))
  }

  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      variants={contentVariant}
      className="flex flex-col items-center gap-2 overflow-hidden py-12 px-6 text-center"
    >
      <motion.h4 variants={RightVariant} className="font-poppins ">
        Send Greeting
      </motion.h4>
      <motion.p variants={UpVariant} className="">
        You can send your best wishes for us here
      </motion.p>
      <div className="z-10 flex w-full flex-col items-center gap-2 rounded-lg bg-white p-4 text-center text-white shadow-lg">
        <InputText
          variants={ZoomVariant}
          className="rounded-full bg-neutral-200 text-neutral-800"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          variants={ZoomVariant}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-neutral-200 text-neutral-800"
          placeholder="Type Something ...."
        />
        <div className="mt-2">
          <ButtonCustom
            variants={ZoomVariant}
            small
            className="bg-neutral-700 text-neutral-50 "
            onClick={() => submitRsvp()}
          >
            Submit Greeting
          </ButtonCustom>
        </div>
      </div>
    </motion.section>
  )
}
