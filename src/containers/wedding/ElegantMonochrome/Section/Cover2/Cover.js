import ButtonCustom from '@elements/ButtonCustom'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { UpVariant, ZoomVariant } from '@animations'

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

export default function Cover({ data, show, setShow }) {
  const { query } = useRouter()

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          animate="visible"
          initial="hidden"
          exit="exit"
          variants={coverVariant}
          className=" fixed z-50"
          style={{
            background: `url("${data?.media?.main}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex h-screen w-screen flex-col items-center justify-between bg-gray-800/30 py-24 text-center backdrop-saturate-0">
            <div>
              <motion.h4 variants={ZoomVariant} className=" font-poppins">
                The wedding of
              </motion.h4>
              <motion.h1
                variants={UpVariant}
                className="font-dancing text-5xl md:text-8xl"
              >
                {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
              </motion.h1>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl p-8">
              <motion.div variants={UpVariant}>
                {query?.name && (
                  <>
                    <p className="">Dear</p>
                    <h5 className=" font-bold">{query?.name}</h5>
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
                  className="bg-neutral-50 text-neutral-800 "
                  onClick={() => setShow(false)}
                >
                  Open Here
                </ButtonCustom>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
