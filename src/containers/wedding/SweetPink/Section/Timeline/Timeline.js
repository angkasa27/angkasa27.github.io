import { motion } from 'framer-motion'
import moment from 'moment'
import {
  UpVariant,
  ZoomVariant,
  contentVariant,
  RightVariant,
  FadeInVariant,
} from '@animations'

export default function RSVP({ data }) {
  return (
    <section className="relative flex flex-col gap-10 overflow-hidden bg-rose-200 px-6 py-24 md:overflow-visible">
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="flex w-full flex-col items-center"
      >
        <motion.h3 variants={ZoomVariant} className="font-alice leading-3">
          Sebuah Kisah
        </motion.h3>
        <motion.h1
          variants={UpVariant}
          className="font-dancing text-5xl leading-5 text-rose-500"
        >
          Perjalanan Kami
        </motion.h1>
        <motion.p variants={UpVariant} className="mt-5 text-center">
          "Perjalanan yang tak terlupakan, dan perjalanan yang mengubah tujuan
          hidup kami"
        </motion.p>
      </motion.div>

      <ol class="relative border-l border-rose-500 ">
        {data?.timeline?.map((v, i) => (
          <TimelineCard key={i} data={v} />
        ))}
      </ol>
    </section>
  )
}

export const TimelineCard = ({ data }) => {
  return (
    <motion.li
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      variants={contentVariant}
      class="mb-4 ml-4 rounded-2xl rounded-tl-none bg-white/40 p-4"
    >
      <div class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full  bg-rose-500 " />
      <motion.div
        variants={RightVariant}
        class="leading-none` mb-1 text-sm font-normal opacity-70"
      >
        {moment(data.date).format('D MMMM YYYY')}
      </motion.div>
      <motion.h3
        variants={UpVariant}
        class="font-dancing font-semibold text-rose-500"
      >
        {data.name}
      </motion.h3>
      <motion.p variants={FadeInVariant} class="mb-4 text-base font-normal ">
        {data.desc}
      </motion.p>
    </motion.li>
  )
}
