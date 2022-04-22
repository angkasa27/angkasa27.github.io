import IMAGE from '@assets/image/ElegantMonochrome'
import ButtonCustom from '@elements/ButtonCustom'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { LeftVariant, UpVariant, ZoomVariant, RightVariant } from '@animations'

const coverVariant = {
  visible: {
    y: 0,
    transition: {
      type: 'Tween',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      type: 'tween',
    },
  },
  exit: {
    y: '-100vh',
    transition: {
      duration: 0.5,
    },
  },
}

export default function Cover({ data, bgColor, show, setShow }) {
  const { query } = useRouter()

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          animate="visible"
          initial="hidden"
          exit="exit"
          variants={coverVariant}
          className={
            ' fixed z-50 flex h-screen w-screen flex-col items-center justify-center gap-6 text-center ' +
            bgColor
          }
        >
          <motion.div
            className="relative mb-6 h-36 w-36 overflow-hidden rounded-xl "
            variants={ZoomVariant}
          >
            <img src={data?.media?.cover} alt="envelope" />
          </motion.div>
          <motion.h1 variants={UpVariant} className="font-dancing">
            {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
          </motion.h1>
          <motion.div variants={UpVariant}>
            {query?.name && (
              <>
                <p className="">Dear</p>
                <h5>{query?.name}</h5>
              </>
            )}
          </motion.div>
          <motion.p variants={UpVariant} className="">
            Without reducing our respect, <br /> we invite you to attend our
            wedding
          </motion.p>
          <motion.div
            variants={ZoomVariant}
            className="flex flex-col items-center"
          >
            <ButtonCustom
              small
              className="bg-neutral-700 text-neutral-50 "
              onClick={() => setShow(false)}
            >
              Open Here
            </ButtonCustom>
          </motion.div>

          <div className="absolute -top-1 -right-1 -rotate-90 scale-150 opacity-20">
            <motion.div variants={LeftVariant} className="h-36 w-36">
              <img src={IMAGE.Decoration2} />
            </motion.div>
          </div>
          <div className="absolute -bottom-1 -left-1 rotate-45 scale-150 opacity-20">
            <motion.div variants={RightVariant} className="h-36 w-36">
              <img src={IMAGE.Decoration2} />
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
