import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import IMAGE, { Distance, Hand, Mask } from '@assets/image/ElegantMonochrome'
import ButtonCustom from '@elements/ButtonCustom'
import { calculateTimeLeft } from '@utils/time'
import {
  UpVariant,
  LeftVariant,
  RightVariant,
  FadeInVariant,
  ZoomVariant,
  contentVariant,
} from '@animations'
import moment from 'moment'

export default function DetailEvent({ data }) {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(data.event[0].date))
    }, 500)
  })

  return (
    <motion.section
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      variants={contentVariant}
      className="relative flex flex-col gap-10 overflow-hidden py-12 px-6 text-center md:overflow-visible"
    >
      <div className="absolute top-[12%] -right-12 rotate-[-10deg] scale-125 opacity-20">
        <motion.div variants={RightVariant} className="h-36 w-36">
          <img src={IMAGE.Decoration2} />
        </motion.div>
      </div>
      <div className="absolute top-[45%] -left-10 rotate-[50deg]  scale-125 opacity-20">
        <motion.div variants={RightVariant} className="h-36 w-36">
          <img src={IMAGE.Decoration2} />
        </motion.div>
      </div>
      <div className="absolute bottom-[12%] -right-12 rotate-[-10deg] scale-125 opacity-20">
        <motion.div variants={RightVariant} className="h-36 w-36">
          <img src={IMAGE.Decoration2} />
        </motion.div>
      </div>
      <motion.p variants={FadeInVariant} className="">
        Respectfully request your presence <br /> at our wedding ceremony
      </motion.p>
      <motion.h4 variants={LeftVariant} className="z-10 font-poppins">
        Event will be held on :
      </motion.h4>
      <div className="z-10 flex justify-center gap-6">
        <motion.div variants={FadeInVariant}>
          <h1 className="font-poppins">{timeLeft?.days}</h1>
          <p className="">Days</p>
        </motion.div>
        <motion.div variants={FadeInVariant}>
          <h1 className="font-poppins">{timeLeft?.hours}</h1>
          <p className="">Hours</p>
        </motion.div>
        <motion.div variants={FadeInVariant}>
          <h1 className="font-poppins">{timeLeft?.minutes}</h1>
          <p className="">Minutes</p>
        </motion.div>
        <motion.div variants={FadeInVariant}>
          <h1 className="font-poppins">{timeLeft?.seconds}</h1>
          <p className="">Seconds</p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4">
        {data?.event?.map((e, i) => (
          <div
            className="z-10 flex flex-col items-center gap-2 rounded-xl bg-white px-4 py-6 shadow-lg"
            key={i}
          >
            <div className="w-32 saturate-[80%]">
              <img src={e.image} />
            </div>
            <motion.h5 variants={RightVariant} className="font-semibold">
              <u>{e.name}</u>
            </motion.h5>
            <motion.p variants={UpVariant} className="">
              {moment(e.date).format('HH.mm A')} - Done
              <br />
              {moment(e.date).format('dddd, D MMMM YYYY')}
              <br />
              {'at ' + e.location}
            </motion.p>
            <motion.div variants={ZoomVariant}>
              <ButtonCustom
                small
                className="bg-neutral-700 text-neutral-50  "
                href={e.maps}
              >
                Maps
              </ButtonCustom>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="z-10 my-8">
        <motion.p variants={UpVariant} className="">
          Please follow the COVID-19 <br /> protocols during the event
        </motion.p>
        <div className="mt-4 flex justify-center gap-4">
          <motion.div
            variants={ZoomVariant}
            className="h-10 w-10 rounded-full bg-neutral-700 p-1 text-neutral-50 "
          >
            <Mask className="h-full w-full" />
          </motion.div>
          <motion.div
            variants={ZoomVariant}
            className="h-10 w-10 rounded-full bg-neutral-700 p-2 text-neutral-50 "
          >
            <Hand className="h-full w-full" />
          </motion.div>
          <motion.div
            variants={ZoomVariant}
            className="h-10 w-10 rounded-full bg-neutral-700 p-2 text-neutral-50 "
          >
            <Distance className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
