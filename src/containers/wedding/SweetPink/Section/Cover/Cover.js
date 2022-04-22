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
            background: `url("${data?.media?.POTRAIT5}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex h-screen  w-screen flex-col items-center justify-end gap-4 bg-zinc-800/50 py-24 px-12 text-center text-white backdrop-blur-sm">
            <motion.div
              variants={ZoomVariant}
              className="z-10 h-44 w-44 overflow-hidden rounded-full border-4 border-rose-300"
            >
              <img src={data?.media?.SQUARE3} />
            </motion.div>
            <div>
              <motion.h1 variants={UpVariant} className="font-dancing text-5xl">
                {data?.groom?.shortName}
                <span className=" ">{' & '}</span>
                {data?.bride?.shortName}
              </motion.h1>
            </div>
            <motion.div variants={UpVariant}>
              {query?.name && (
                <>
                  <p className="">kepada Yth. Bapak/Ibu/Saudara</p>
                  <h3 className="font-alice text-rose-300">{query?.name}</h3>
                </>
              )}
            </motion.div>
            <motion.p variants={UpVariant} className="">
              Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di
              acara Pernikahan Kami
            </motion.p>
            <motion.div
              variants={ZoomVariant}
              className="flex flex-col items-center"
            >
              <ButtonCustom
                small
                className="bg-zinc-50 font-normal text-zinc-800"
                onClick={() => setShow(false)}
              >
                Buka Undangan
              </ButtonCustom>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
