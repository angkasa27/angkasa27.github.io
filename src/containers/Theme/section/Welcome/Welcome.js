import Button from '@elements/Button'
import { motion } from 'framer-motion'
import { MENU } from '@configs/menu'
import { CONTACT } from '@configs/link'
import MainImage from '@assets/mockup/phoneOnly.png'
import Wave1 from '@assets/svg/Wave1'
import Wave2 from '@assets/svg/Wave2'
import Wave3 from '@assets/svg/Wave3'

const upVariant = {
  animate: {
    y: ['0', '0', '-1.75rem', '-2rem'],
    height: ['1.25rem', '1.25rem', '2.75rem', '1.25rem'],
    opacity: [0, 1, 1, 0],
    transition: {
      repeat: Infinity,
      ease: 'easeOut',
      duration: 1.25,
    },
  },
}

const SectionOne = () => {
  return (
    <section
      id="top"
      className="relative flex h-screen flex-col items-center justify-between bg-fuchsia-300 px-6 py-6"
    >
      <div className="flex w-full justify-center px-10 md:justify-between">
        <h4 className="font-yeseva ">SuratBahagia</h4>
        <ul className="hidden md:flex">
          {MENU.map((v, i) => (
            <li key={i} className="ml-12">
              <Button type="text" nav={v.href} className="">
                {v.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="z-10 grid gap-10 md:max-w-screen-xl md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
          <h1 className="">
            Share <u className="decoration-pink-400">Every</u> <br />
            Meaningful <u className="decoration-pink-400">Moment</u>!
          </h1>
          <h5 className="mt-4">
            Life becomes more meaningful when you realize the simple fact that
            you’ll never get the same moment twice!
          </h5>
          <Button className="mt-8" href={CONTACT.WHATSAPP()}>
            Buat Undangan
          </Button>
        </div>
        <div className="row-start-1 flex justify-center md:col-start-2">
          <img
            src={MainImage}
            alt="main"
            className="w-56 object-contain md:w-96"
          />
        </div>
      </div>

      <div className="relative z-10 mb-16 flex justify-center opacity-20 md:mb-12">
        <motion.div
          animate="animate"
          variants={upVariant}
          className="absolute flex w-5 items-start justify-center rounded-full border border-slate-800 pt-1"
        >
          <div className="h-3 w-3 rounded-full bg-slate-800" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 z-0 -scale-x-100">
        <Wave1 className="w-screen text-white opacity-100" />
      </div>
      <div className="absolute bottom-0 z-0">
        <Wave2 className="w-screen text-white opacity-50" />
      </div>
      <div className="absolute bottom-0 z-0">
        <Wave3 className="w-screen text-white opacity-50" />
      </div>
    </section>
  )
}

export default SectionOne
