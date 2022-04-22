import { motion } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import {
  UpVariant,
  LeftVariant,
  ZoomVariant,
  contentVariant,
} from '@animations'
export default function RSVP() {
  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      variants={contentVariant}
      className="flex flex-col items-center gap-2 overflow-hidden py-12 text-center"
    >
      <motion.h4 variants={LeftVariant} className="font-poppins ">
        RSVP
      </motion.h4>
      <motion.p variants={UpVariant} className="">
        Let us know your arrival by contacting below
      </motion.p>
      <div className="mt-2">
        <ButtonCustom
          small
          variants={ZoomVariant}
          className="bg-neutral-700 text-neutral-50 "
          onClick={() => {}}
        >
          RSVP
        </ButtonCustom>
      </div>
      {/* <div className="flex w-full flex-col items-center gap-2 px-12">
        <Input
          className="text-neutral-800"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={message}
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl py-2 px-4 font-semibold text-neutral-800"
          placeholder="Type Something ...."
        />
        <div className="mt-2">
          <ButtonCustom
            small
            className="bg-neutral-50 text-neutral-800 "
            onClick={() => submitRsvp()}
          >
            Submit RSVP
          </ButtonCustom>
        </div> 
      </div>*/}
    </motion.section>
  )
}
