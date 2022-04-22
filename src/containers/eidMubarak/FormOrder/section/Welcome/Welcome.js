import Button from '@elements/ButtonV2'
import { motion, AnimatePresence } from 'framer-motion'
import MainImage from '@assets/mockup/EidMubarak.png'
import {
  contentVariant,
  UpVariant,
  LeftVariant,
  ZoomVariant,
} from '@animations'

const upVariant = {
  hidden: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
    },
  },
  animate: {
    y: ['0', '0', '-1.75rem', '-2rem'],
    height: ['1.25rem', '1.25rem', '2.75rem', '1.25rem'],
    opacity: [0, 1, 1, 0],
    transition: {
      delay: 1,
      repeat: Infinity,
      ease: 'easeOut',
      duration: 1.25,
    },
  },
}

const SectionOne = ({ step }) => {
  return (
    <section
      id="top"
      className="relative flex justify-center bg-gradient-to-b from-violet-800 to-purple-800  px-6 pb-16 pt-28 text-white md:bg-gradient-to-r"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariant}
        className="z-10 grid gap-10 md:max-w-screen-xl md:grid-cols-2"
      >
        <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
          <motion.h5
            variants={LeftVariant}
            className="font-bold text-[#F9BE65]"
          >
            Edisi Spesial
          </motion.h5>
          <motion.h3 variants={UpVariant}>Website Ucapan</motion.h3>

          <motion.h1
            variants={LeftVariant}
            className="font-bold text-[#F9BE65]"
          >
            Idul Fitri 1443H
          </motion.h1>
          <motion.h5 variants={UpVariant}>
            Pre Order hingga 28 April 2022{' '}
            <span className=" font-bold">Hanya Rp10.000</span>
          </motion.h5>

          {step === 1 && (
            <Button
              variants={ZoomVariant}
              type="white"
              className="mt-8 bg-[#F9BE65] text-slate-800 hover:bg-[#dda550]"
              to="/theme"
            >
              Demo Ucapan
            </Button>
          )}
        </div>
        <AnimatePresence>
          {step === 1 && (
            <motion.div
              key="image"
              variants={UpVariant}
              className="row-start-1 flex justify-center md:col-start-2"
            >
              <div className="w-56 object-contain md:w-96">
                <img alt="Main Image" src={MainImage} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default SectionOne
