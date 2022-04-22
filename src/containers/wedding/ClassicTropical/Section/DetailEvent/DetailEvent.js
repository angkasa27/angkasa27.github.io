import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import IMAGE, { Distance, Hand, Mask } from '@assets/image/ClassicTropical'
import ButtonCustom from '@elements/ButtonCustom'
import { calculateTimeLeft } from '@utils/time'
import {
  UpVariant,
  FadeInVariant,
  ZoomVariant,
  RightVariant,
  contentVariant,
} from '@animations'
import moment from 'moment'
import Wave from '@assets/svg/Wave2'

export default function DetailEvent({ data }) {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(data?.event[0]?.date))
    }, 500)
  })

  const _renderBG = () => {
    return (
      <>
        <Wave className="absolute top-0 left-0 w-full rotate-180 text-white" />
      </>
    )
  }

  return (
    <section
      style={{
        background: `url("${data?.media?.main}")`,
        // filter: 'saturate(0)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative flex flex-col overflow-hidden bg-neutral-800/50 px-6 pt-24 pb-12 text-center md:overflow-visible">
        {_renderBG()}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={contentVariant}
          className="flex w-full flex-col items-center overflow-hidden rounded-t-[99rem] bg-neutral-800/50 pt-10"
        >
          <motion.div
            variants={ZoomVariant}
            className="z-10 flex justify-center"
          >
            <div
              variants={RightVariant}
              className="w-44 drop-shadow-lg saturate-200"
            >
              <img src={IMAGE.SaveTheDate} />
            </div>
          </motion.div>

          <div className="z-10 my-5 flex justify-center gap-6 md:gap-12">
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

        <div className=" w-full bg-white text-neutral-800">
          {data?.event?.map((e, i) => (
            <motion.div
              whileInView="visible"
              viewport={{ once: true }}
              initial="hidden"
              variants={contentVariant}
              className="flex w-full flex-col items-center px-4 py-6 "
              key={i}
            >
              <motion.h1
                variants={RightVariant}
                className="mb-4 font-dancing text-[#C0A080]"
              >
                {e.name}
              </motion.h1>
              <motion.h5 variants={UpVariant} className="font-alice">
                {moment(e.date).format('HH.mm')} WIB
              </motion.h5>
              <motion.div variants={UpVariant} className="grid grid-cols-3">
                <h5 className="flex items-center justify-center">
                  {moment(e.date).format('dddd')} WIB
                </h5>
                <h1 className="flex items-center justify-center font-alice text-6xl text-[#C0A080]">
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
                  className="mt-4 bg-neutral-700  font-normal text-neutral-50"
                  href={e.maps}
                >
                  Maps
                </ButtonCustom>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={contentVariant}
          className="z-10 rounded-b-3xl bg-neutral-800/50 py-8 "
        >
          <motion.h2
            variants={ZoomVariant}
            className="font-dancing font-semibold not-italic"
          >
            Himbauan
          </motion.h2>
          <motion.p variants={UpVariant} className="">
            Dimohon ikuti protokol kesehatan <br /> COVID-19 saat acara
          </motion.p>
          <div className="mt-4 flex justify-center gap-4">
            <motion.div
              variants={ZoomVariant}
              className="h-10 w-10 rounded-full bg-neutral-50 p-1 text-neutral-800 "
            >
              <Mask className="h-full w-full" />
            </motion.div>
            <motion.div
              variants={ZoomVariant}
              className="h-10 w-10 rounded-full bg-neutral-50 p-2 text-neutral-800 "
            >
              <Hand className="h-full w-full" />
            </motion.div>
            <motion.div
              variants={ZoomVariant}
              className="h-10 w-10 rounded-full bg-neutral-50 p-2 text-neutral-800 "
            >
              <Distance className="h-full w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
