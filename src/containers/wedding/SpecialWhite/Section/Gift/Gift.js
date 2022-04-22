import { motion } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import {
  UpVariant,
  RightVariant,
  ZoomVariant,
  contentVariant,
} from '@animations'

export default function Gift({ setModalGift, data }) {
  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      variants={contentVariant}
      className="relative flex flex-col items-center gap-2 overflow-hidden py-12 px-6 text-center"
    >
      <motion.h4 variants={RightVariant} className="font-poppins ">
        Sweet Gift
      </motion.h4>
      <motion.p variants={UpVariant} className="">
        Any little gift from you is a very <br />
        extraordinary blessing for us
      </motion.p>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
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
      </div>
    </motion.section>
  )
}
