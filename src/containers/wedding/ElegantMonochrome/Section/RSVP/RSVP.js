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
          className="bg-neutral-50 text-neutral-800 "
          onClick={() => {}}
        >
          RSVP
        </ButtonCustom>
      </div>
    </motion.section>
  )
}
