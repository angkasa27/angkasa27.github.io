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
      className="flex flex-col items-center gap-2 overflow-hidden py-12 px-12 text-center"
    >
      <motion.h4 variants={RightVariant} className="font-poppins ">
        Send Greeting
      </motion.h4>
      <motion.p variants={UpVariant} className="">
        You can send your best wishes for us here
      </motion.p>
      <InputText
        variants={ZoomVariant}
        className="rounded-full text-neutral-800"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextArea
        variants={ZoomVariant}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="text-neutral-800"
        placeholder="Type Something ...."
      />
      <div className="mt-2">
        <ButtonCustom
          variants={ZoomVariant}
          small
          className="bg-neutral-50 text-neutral-800 "
          onClick={() => submitRsvp()}
        >
          Submit Greeting
        </ButtonCustom>
      </div>
    </motion.section>
  )
}
