import IMAGE from '@assets/image/ClassicTropical'
import ButtonCustom from '@elements/ButtonCustom'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { RightVariant, UpVariant, ZoomVariant } from '@animations'

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

  const _renderBG = () => {
    return (
      <>
        <div className="absolute top-[10vh] left-0 z-50 opacity-40 ">
          <motion.div variants={RightVariant} className="w-20 md:w-36">
            <img src={IMAGE.DaunBG1} />
          </motion.div>
        </div>

        <div className="absolute top-[30vh] left-0 z-50 opacity-40 md:top-[45vh] ">
          <motion.div variants={RightVariant} className="w-20 md:w-36">
            <img src={IMAGE.DaunBG2} />
          </motion.div>
        </div>
        <div className="absolute bottom-[30vh] left-0 z-50 opacity-40 md:bottom-[15vh] ">
          <motion.div variants={RightVariant} className="w-10 md:w-16">
            <img src={IMAGE.DaunBG3} />
          </motion.div>
        </div>

        <div className="absolute bottom-[38vh] right-0 z-50 -scale-x-100 opacity-40  md:bottom-[10vh]">
          <motion.div variants={RightVariant} className="w-20 md:w-36">
            <img src={IMAGE.DaunBG1} />
          </motion.div>
        </div>

        <div className="absolute bottom-[25vh] right-0 z-50 -scale-x-100 opacity-40 md:top-[40vh] ">
          <motion.div variants={RightVariant} className="w-20 md:w-36">
            <img src={IMAGE.DaunBG2} />
          </motion.div>
        </div>
        <div className="absolute top-[10vh] right-0 z-50 -scale-x-100 opacity-40 md:bottom-[15vh] ">
          <motion.div variants={RightVariant} className="w-10 md:w-16">
            <img src={IMAGE.DaunBG3} />
          </motion.div>
        </div>
      </>
    )
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          animate="visible"
          initial="hidden"
          exit="exit"
          variants={coverVariant}
          className={
            ' fixed z-50 flex h-screen w-screen flex-col items-center justify-end gap-6 py-24 px-12 text-center ' +
            bgColor
          }
        >
          <motion.div
            className="absolute top-24 z-[60] overflow-hidden rounded-lg "
            variants={ZoomVariant}
          >
            <img
              src={data?.media?.cover}
              alt="envelope"
              className="w-36 object-cover object-center md:w-48"
            />
          </motion.div>
          <motion.h1
            variants={UpVariant}
            className="z-[60] font-dancing font-semibold not-italic text-[#C0A080]"
          >
            {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
          </motion.h1>
          <motion.div variants={UpVariant} className="z-[60] ">
            {query?.name && (
              <>
                <p className="">kepada Yth. Bapak/Ibu/Saudara</p>
                <h3 className="font-lora font-bold text-[#C0A080]">
                  {query?.name}
                </h3>
              </>
            )}
          </motion.div>
          <motion.p variants={UpVariant} className="z-[60] ">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di
            acara Pernikahan Kami
          </motion.p>
          <motion.div
            variants={ZoomVariant}
            className="z-[60] flex flex-col items-center "
          >
            <ButtonCustom
              small
              className="bg-neutral-50 text-neutral-700 "
              onClick={() => setShow(false)}
            >
              Buka Undangan
            </ButtonCustom>
          </motion.div>

          {_renderBG()}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
