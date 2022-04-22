import { motion } from 'framer-motion'
import IMAGE from '@assets/image/ClassicTropical'
import Instagram from '@assets/svg/Instagram'
import Twitter from '@assets/svg/Twitter'
import Facebook from '@assets/svg/Facebook'
import {
  UpVariant,
  LeftVariant,
  RightVariant,
  ZoomVariant,
  contentVariant,
} from '@animations'

export default function Bride({ data }) {
  return (
    <section className="flex flex-col gap-10 py-12 px-6 text-center">
      <div className="flex flex-col items-center">
        <div className="w-20 -rotate-12">
          <img src={IMAGE.Bunga} />
        </div>
        <p className="">
          Mahasuci Allah telah menciptakan Hamba-Nya berpasang-pasangan. Ya
          Allah. Sungguh besar kami mengucap syukur atas rahmat dan kehendakmu
          yang telah mengukuhkan kasih dalam kehidupan keluarga kami.
        </p>
      </div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
      >
        <motion.h3 variants={ZoomVariant} className="font-alice leading-3">
          Pasangan
        </motion.h3>
        <motion.h1
          variants={UpVariant}
          className="font-dancing text-5xl leading-5 text-rose-500"
        >
          Pengantin
        </motion.h1>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="grid grid-cols-12 gap-4"
      >
        <motion.div
          variants={LeftVariant}
          className="col-span-12 flex justify-center md:col-span-6"
        >
          <div className="h-44 w-44 overflow-hidden rounded-full ">
            <img src={data?.groom?.photos} className="w-full" />
          </div>
        </motion.div>
        <div className="col-span-12 flex flex-col justify-center gap-2 md:col-span-6">
          <motion.h1
            variants={UpVariant}
            className="font-dancing underline decoration-rose-300"
          >
            {data?.groom?.fullName}
          </motion.h1>
          <motion.div variants={UpVariant} className="">
            <p>Putra dari</p>
            <h5 className="text-rose-500">{data?.groom?.father}</h5>
            <p>&</p>
            <h5 className="text-rose-500">{data?.groom?.mother}</h5>
          </motion.div>
          <motion.div
            variants={UpVariant}
            className="flex justify-center gap-2"
          >
            <a
              href={data?.groom?.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Instagram className="h-5 w-5" />
              </div>
            </a>
            <a
              href={data?.groom?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Twitter className="h-5 w-5" />
              </div>
            </a>
            <a
              href={data?.groom?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Facebook className="h-5 w-5" />
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={ZoomVariant}
          className="col-span-12  flex h-24 items-center justify-center"
        >
          <h1 className="font-dancing text-6xl text-rose-500">&</h1>
        </motion.div>

        <motion.div
          variants={RightVariant}
          className="col-span-12 flex justify-center md:col-span-6"
        >
          <div className="h-44 w-44 overflow-hidden rounded-full ">
            <img src={data?.bride?.photos} className="w-full" />
          </div>
        </motion.div>
        <div className="col-span-12 flex flex-col justify-center gap-2 md:col-span-6">
          <motion.h1
            variants={UpVariant}
            className="font-dancing underline decoration-rose-300"
          >
            {data?.bride?.fullName}
          </motion.h1>
          <motion.div variants={UpVariant} className="">
            <p>Putri dari</p>
            <h5 className="text-rose-500">{data?.bride?.father}</h5>
            <p>&</p>
            <h5 className="text-rose-500">{data?.bride?.mother}</h5>
          </motion.div>
          <motion.div
            variants={UpVariant}
            className="flex justify-center gap-2"
          >
            <a
              href={data?.bride?.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Instagram className="h-5 w-5" />
              </div>
            </a>
            <a
              href={data?.bride?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Twitter className="h-5 w-5" />
              </div>
            </a>
            <a
              href={data?.bride?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Facebook className="h-5 w-5" />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
