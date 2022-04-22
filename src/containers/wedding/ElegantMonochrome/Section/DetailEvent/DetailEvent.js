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
      <div className="absolute top-[12%] -right-12 rotate-[-10deg] scale-125 opacity-50">
        <motion.div variants={RightVariant} className="h-36 w-36 saturate-0">
          <img src={IMAGE.Decoration2} alt="decoration" />
        </motion.div>
      </div>
      <div className="absolute top-[45%] -left-10 rotate-[50deg]  scale-125 opacity-50">
        <motion.div variants={RightVariant} className="h-36 w-36 saturate-0">
          <img src={IMAGE.Decoration2} alt="decoration" />
        </motion.div>
      </div>
      <div className="absolute bottom-[12%] -right-12 rotate-[-10deg] scale-125 opacity-50">
        <motion.div variants={RightVariant} className="h-36 w-36 saturate-0">
          <img src={IMAGE.Decoration2} alt="decoration" />
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

      {data?.event?.map((e, i) => (
        <div className="z-10 flex flex-col items-center gap-2" key={i}>
          <motion.h5 variants={RightVariant} className="font-semibold">
            {e.name}
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
              className="bg-neutral-50 text-neutral-800 "
              href={e.maps}
            >
              Maps
            </ButtonCustom>
          </motion.div>
        </div>
      ))}

      <div className="z-10 my-8">
        <motion.p variants={UpVariant} className="">
          Please follow the COVID-19 <br /> protocols during the event
        </motion.p>
        <div className="mt-4 flex justify-center gap-4">
          <motion.div
            variants={ZoomVariant}
            className="h-10 w-10 rounded-full bg-neutral-50 p-1 text-neutral-800"
          >
            <Mask className="h-full w-full" />
          </motion.div>
          <motion.div
            variants={ZoomVariant}
            className="h-10 w-10 rounded-full bg-neutral-50 p-2 text-neutral-800"
          >
            <Hand className="h-full w-full" />
          </motion.div>
          <motion.div
            variants={ZoomVariant}
            className="h-10 w-10 rounded-full bg-neutral-50 p-2 text-neutral-800"
          >
            <Distance className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
