import { motion } from 'framer-motion'
import IMAGE from '@assets/image/ElegantMonochrome'
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
        <div className="w-20">
          <img alt="decoration" src={IMAGE.Decoration1} />
        </div>
        <h5 className="font-semibold">Mark 10:8-9</h5>
        <p className="">
          "And the two will become one flesh. So they are no longer two, but one
          flesh. Therefore what God has joined together, let no one separate.”
        </p>
      </div>
      <motion.h4
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={ZoomVariant}
        className="font-poppins"
      >
        You’re Invited
      </motion.h4>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="grid grid-cols-12 gap-2 md:gap-4"
      >
        <div className="col-span-7 flex flex-col justify-center gap-2 md:col-span-6">
          <motion.h3 variants={UpVariant} className="font-dancing">
            {data?.groom?.fullName}
          </motion.h3>
          <motion.p variants={UpVariant} className="">
            The Son of
            <br />
            {data?.groom?.father} & {data?.groom?.mother}
          </motion.p>
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
        <motion.div
          variants={LeftVariant}
          className="col-span-5 flex justify-center md:col-span-6"
        >
          <div className="relative h-44 w-full overflow-hidden rounded-xl md:w-44">
            <img src={data?.groom?.photos} alt={data?.groom?.fullName} />
          </div>
        </motion.div>
        <motion.div
          variants={RightVariant}
          className="col-span-5 flex justify-center md:col-span-6"
        >
          <div className="relative h-44 w-full overflow-hidden rounded-xl md:w-44">
            <img src={data?.bride?.photos} alt={data?.bride?.fullName} />
          </div>
        </motion.div>
        <div className="col-span-7 flex flex-col justify-center gap-2 md:col-span-6">
          <motion.h3 variants={UpVariant} className="font-dancing">
            {data?.bride?.fullName}
          </motion.h3>
          <motion.p variants={UpVariant} className="">
            The Daughter of
            <br /> {data?.bride?.father} & {data?.bride?.mother}
          </motion.p>
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
      </motion.div>
    </section>
  )
}
