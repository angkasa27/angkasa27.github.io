import { motion } from 'framer-motion'
import IMAGE from '@assets/image/ClassicTropical'
import Instagram from '@assets/svg/Instagram'
import Twitter from '@assets/svg/Twitter'
import Facebook from '@assets/svg/Facebook'
import {
  UpVariant,
  LeftVariant,
  RightVariant,
  contentVariant,
} from '@animations'

export default function Bride({ data }) {
  return (
    <section className="relative flex flex-col gap-12 overflow-hidden bg-white py-24 px-6 text-center text-neutral-800 ">
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-10 flex flex-col items-center"
      >
        <motion.h4
          variants={UpVariant}
          initial="hidden"
          animate="visible"
          className="font-lora font-bold"
        >
          Assalamualaikum Wr. Wb.
        </motion.h4>
        <motion.p
          variants={UpVariant}
          initial="hidden"
          animate="visible"
          className=""
        >
          Dengan hormat, kami mengundang Bapak, Ibu, Saudara/i untuk menghadiri
          acara pernikahan kami.
        </motion.p>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-10 grid grid-cols-12"
      >
        {/* GROOM */}
        <motion.div
          variants={RightVariant}
          className="col-span-6 mr-4 flex justify-end md:col-span-6 md:mr-8"
        >
          <img src={data?.groom?.photos} className="w-full md:w-40" />
        </motion.div>
        <div className="col-span-6 flex flex-col justify-start gap-2 text-left md:col-span-6">
          <motion.h1
            variants={UpVariant}
            className="font-dancing font-semibold not-italic"
          >
            {data?.groom?.fullName}
          </motion.h1>
          <motion.p variants={UpVariant} className="">
            Putra dari
            <br />
            {data?.groom?.father} & <br />
            {data?.groom?.mother}
          </motion.p>
          <motion.div variants={UpVariant} className="flex justify-start gap-2">
            <a
              href={data?.groom?.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Instagram className="h-4 w-4" />
              </div>
            </a>
            <a
              href={data?.groom?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Twitter className="h-4 w-4" />
              </div>
            </a>
            <a
              href={data?.groom?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Facebook className="h-4 w-4" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* BRIDE */}
        <div className="col-span-6 flex flex-col justify-end gap-2 text-right md:col-span-6">
          <motion.h1
            variants={UpVariant}
            className="font-dancing font-semibold not-italic"
          >
            {data?.bride?.fullName}
          </motion.h1>
          <motion.p variants={UpVariant} className="">
            Putri dari
            <br />
            {data?.bride?.father} & <br />
            {data?.bride?.mother}
          </motion.p>
          <motion.div variants={UpVariant} className="flex justify-end gap-2">
            <a
              href={data?.bride?.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Instagram className="h-4 w-4" />
              </div>
            </a>
            <a
              href={data?.bride?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Twitter className="h-4 w-4" />
              </div>
            </a>
            <a
              href={data?.bride?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Facebook className="h-4 w-4" />
              </div>
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={LeftVariant}
          className="col-span-6 ml-4 flex justify-start md:col-span-6 md:ml-8"
        >
          <img src={data?.bride?.photos} className="w-full  md:w-40" />
        </motion.div>
      </motion.div>

      <div className="absolute top-[10%] -right-10 -rotate-[15deg] opacity-30">
        <div className="w-20">
          <img src={IMAGE.Daun} />
        </div>
      </div>

      <div className="absolute top-[10%] -left-10 rotate-[15deg] -scale-x-100 opacity-30">
        <div className="w-20">
          <img src={IMAGE.Daun} />
        </div>
      </div>

      <div className="absolute top-[35%] -right-10 -rotate-[15deg] opacity-30">
        <div className="w-20">
          <img src={IMAGE.Daun} />
        </div>
      </div>
      <div className="absolute top-[40%] -right-5 opacity-30">
        <div className="w-24">
          <img src={IMAGE.Bunga} />
        </div>
      </div>

      <div className="absolute -left-5 top-[60%] -scale-x-100 opacity-30">
        <div className="w-24">
          <img src={IMAGE.Bunga} />
        </div>
      </div>

      <div className="absolute bottom-[8%] -right-5 opacity-30">
        <div className="w-24">
          <img src={IMAGE.Bunga} />
        </div>
      </div>
    </section>
  )
}
