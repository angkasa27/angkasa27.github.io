import Button from '@elements/Button'
import { AnimatePresence, motion } from 'framer-motion'
import MainImage from '@assets/mockup/phoneOnly.png'
import Wave1 from '@assets/svg/Wave1'
import Wave2 from '@assets/svg/Wave2'
import Wave3 from '@assets/svg/Wave3'
import {
  contentVariant,
  ZoomVariant,
  UpVariant,
  LeftVariant,
} from '@animations'
import ParallaxImage from '@assets/parallax/MainImage'

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

const SectionOne = ({ showNav }) => {
  return (
    <section
      id="top"
      className="relative flex h-screen flex-col items-center justify-between bg-fuchsia-300 px-6 py-6"
    >
      <div />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariant}
        className="z-10 grid gap-10 md:max-w-screen-xl md:grid-cols-2"
      >
        <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
          <motion.h1 variants={LeftVariant} className="font-bold leading-tight">
            Bikin <u className="decoration-pink-400">Undangan</u> <br />
            Lebih <u className="decoration-pink-400">Spesial</u>!
          </motion.h1>
          <motion.h5 variants={UpVariant} className="mt-4">
            Bikin momen berhargamu jadi lebih spesial dengan tema-tema pilihan
            dari <span className=" font-bold">SuratBahagia</span>
          </motion.h5>
          <Button variants={ZoomVariant} className="mt-8" to="/order">
            Buat Undangan
          </Button>
        </div>
        <motion.div
          variants={UpVariant}
          className="row-start-1 flex justify-center md:col-start-2"
        >
          {/* <div className="w-56 object-contain md:w-96">
            <img alt="Main Image" src={MainImage} />
          </div> */}
          <ParallaxImage className="h-auto w-56 object-contain md:w-96" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mb-16 flex justify-center opacity-50 md:mb-12">
        <AnimatePresence>
          {!showNav && (
            <motion.div
              animate="animate"
              variants={upVariant}
              initial="hidden"
              exit="hidden"
              className="absolute flex w-5 items-start justify-center rounded-full border border-pink-500 pt-1"
            >
              <div className="h-3 w-3 rounded-full bg-pink-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-0 z-0 -scale-x-100">
        <Wave1 className="w-screen text-slate-50 opacity-100" />
      </div>
      <div className="absolute bottom-0 z-0">
        <Wave2 className="w-screen text-slate-50 opacity-50" />
      </div>
      <div className="absolute bottom-0 z-0">
        <Wave3 className="w-screen text-slate-50 opacity-50" />
      </div>
    </section>
  )
}

export default SectionOne
