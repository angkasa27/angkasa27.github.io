import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import IMAGE, { Distance, Hand, Mask } from '@assets/image/ClassicTropical'
import ButtonCustom from '@elements/ButtonCustom'
import { calculateTimeLeft } from '@utils/time'
import {
  UpVariant,
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
    <section
      style={{
        background: `url("${data?.media?.POTRAIT4}")`,
        // filter: 'saturate(0)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="overflow-hidden bg-zinc-800/50 py-12 px-6 text-center text-white md:overflow-visible">
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={contentVariant}
          className="flex w-full flex-col items-center overflow-hidden rounded-t-[99rem] bg-zinc-800/50 pt-10 backdrop-blur-sm"
        >
          <div className="w-20 -rotate-12">
            <img src={IMAGE.Bunga} />
          </div>
          <motion.h3 variants={ZoomVariant} className="font-alice leading-3">
            Hitung Mundur
          </motion.h3>
          <motion.h1
            variants={UpVariant}
            className="font-dancing text-5xl leading-5 text-rose-300"
          >
            Hari Bahagia
          </motion.h1>

          <div className="z-10 my-5 flex justify-center gap-6">
            <motion.div variants={FadeInVariant}>
              <h1 className="font-alice text-5xl">{timeLeft?.days}</h1>
              <p className="">Hari</p>
            </motion.div>
            <motion.div variants={FadeInVariant}>
              <h1 className="font-alice text-5xl">{timeLeft?.hours}</h1>
              <p className="">Jam</p>
            </motion.div>
            <motion.div variants={FadeInVariant}>
              <h1 className="font-alice text-5xl">{timeLeft?.minutes}</h1>
              <p className="">Menit</p>
            </motion.div>
            <motion.div variants={FadeInVariant}>
              <h1 className="font-alice text-5xl">{timeLeft?.seconds}</h1>
              <p className="">Detik</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={contentVariant}
          className=" w-full bg-white text-zinc-800"
        >
          {data?.event?.map((e, i) => (
            <div
              className="flex w-full flex-col items-center px-4 py-6 "
              key={i}
            >
              <motion.h1
                variants={RightVariant}
                className="mb-4 font-dancing text-rose-500"
              >
                {e.name}
              </motion.h1>
              <motion.h5 variants={UpVariant} className="font-alice">
                {moment(e.date).format('HH.mm')} WIB
              </motion.h5>
              <motion.div variants={ZoomVariant} className="grid grid-cols-3">
                <h5 className="flex items-center justify-center">
                  {moment(e.date).format('dddd')}
                </h5>
                <h1 className="flex items-center justify-center font-alice text-6xl text-rose-300">
                  {moment(e.date).format('D')}
                </h1>
                <h5 className="flex items-center justify-center">
                  {moment(e.date).format('MMMM')}
                </h5>
              </motion.div>
              <motion.h4
                variants={UpVariant}
                className="font-alice font-semibold"
              >
                {moment(e.date).format('YYYY')}
              </motion.h4>

              <motion.h5 variants={UpVariant} className="mt-4 font-semibold">
                Lokasi :
              </motion.h5>
              <motion.p variants={UpVariant} className="">
                {e.location}
              </motion.p>
              <motion.div variants={ZoomVariant}>
                <ButtonCustom
                  small
                  className="mt-4 bg-zinc-700  font-normal text-zinc-50"
                  href={e.maps}
                >
                  Maps
                </ButtonCustom>
              </motion.div>
            </div>
          ))}
        </motion.div>
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={contentVariant}
          className="z-10 rounded-b-3xl bg-zinc-800/50 py-8 backdrop-blur-sm"
        >
          <motion.p variants={UpVariant} className="">
            Dimohon ikuti protokol kesehatan <br /> COVID-19 saat acara
          </motion.p>
          <div className="mt-4 flex justify-center gap-4">
            <motion.div
              variants={ZoomVariant}
              className="h-10 w-10 rounded-full bg-zinc-50 p-1 text-zinc-800 "
            >
              <Mask className="h-full w-full" />
            </motion.div>
            <motion.div
              variants={ZoomVariant}
              className="h-10 w-10 rounded-full bg-zinc-50 p-2 text-zinc-800 "
            >
              <Hand className="h-full w-full" />
            </motion.div>
            <motion.div
              variants={ZoomVariant}
              className="h-10 w-10 rounded-full bg-zinc-50 p-2 text-zinc-800 "
            >
              <Distance className="h-full w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
