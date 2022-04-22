import Button from '@elements/ButtonV2'
import Footer from '@elements/Footer'
import Link from 'next/link'
import { CONTACT } from '@configs/link'
import { motion } from 'framer-motion'
import { UpVariant, ZoomVariant } from '@animations'
import Instagram from '@assets/svg/Instagram'
import Whatsapp from '@assets/svg/Whatsapp'
import Facebook from '@assets/svg/Facebook'
import Twitter from '@assets/svg/Twitter'
import Mosque1 from '@assets/svg/ramadhan/Mosque1'
import Mosque2 from '@assets/svg/ramadhan/Mosque2'
import City1 from '@assets/svg/ramadhan/City1'
import Lamp1 from '@assets/svg/ramadhan/Lamp1'

const menuVariant = {
  visible: {
    transition: {
      type: 'spring',
      duration: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    transition: {
      duration: 0.2,
      when: 'afterChildren',
    },
  },
}

export default function ShortLink() {
  const _renderDecoration = () => {
    return (
      <>
        <motion.div className="absolute bottom-20 left-0  w-full   md:hidden">
          <City1 className="h-auto w-screen text-violet-800" />
        </motion.div>
        <motion.div className="absolute -bottom-5 left-0 w-full md:-bottom-60 md:hidden">
          <Mosque1 className="h-auto w-screen text-violet-900 " />
        </motion.div>

        <motion.div className="absolute -top-44 left-12 w-8">
          <Lamp1 className="h-auto w-full text-[#dda550]  " />
        </motion.div>
        <motion.div className="absolute right-28 -top-36 w-6">
          <Lamp1 className="h-auto w-full text-[#dda550] " />
        </motion.div>
        <motion.div className="absolute -top-48 right-12 w-8">
          <Lamp1 className="h-auto w-full text-[#dda550] " />
        </motion.div>
      </>
    )
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between bg-gradient-to-b from-violet-800 to-purple-800 text-white md:bg-gradient-to-r">
      {/* <div className="relative flex min-h-screen w-full flex-col items-center justify-between bg-fuchsia-300"> */}
      <div />
      <motion.div
        animate="visible"
        exit="hidden"
        initial="hidden"
        variants={menuVariant}
        className="z-10 flex w-full max-w-screen-sm flex-col items-center gap-2 p-6"
      >
        <Link href="/">
          <motion.h2
            variants={ZoomVariant}
            className="text-center font-semibold  text-[#F9BE65]"
          >
            SuratBahagia
          </motion.h2>
        </Link>

        <motion.h5
          variants={ZoomVariant}
          className="mb-4 text-center font-poppins"
        >
          Promo Pre Order Ucapan Idul Fitri <br /> Hingga 28 April 2022
          <span className="font-bold"> Hanya Rp10.000</span>
        </motion.h5>

        <Button
          type="white"
          variants={UpVariant}
          className="z-10 w-full bg-[#F9BE65] text-slate-800 hover:bg-[#dda550] "
          to="/EidMubarak"
        >
          Spesial Idul Fitri
        </Button>
        <Button
          type="white"
          variants={UpVariant}
          className="z-10 w-full bg-violet-600 hover:bg-violet-700"
          to="/"
        >
          Website
        </Button>
        <Button
          type="white"
          variants={UpVariant}
          className="z-10 w-full bg-violet-600 hover:bg-violet-700"
          to="/price"
        >
          Katalog Harga
        </Button>
        <Button
          type="white"
          variants={UpVariant}
          className="z-10 w-full bg-violet-600 hover:bg-violet-700"
          to="/theme"
        >
          Pilihan Desain
        </Button>
        <Button
          type="white"
          variants={UpVariant}
          className="z-10 w-full bg-violet-600 hover:bg-violet-700"
          to="/order"
        >
          Form Pemesanan
        </Button>

        <div className="mt-4 flex items-center justify-center gap-4">
          <a href={CONTACT.INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <motion.div variants={UpVariant}>
              <Instagram className="h-8 w-8" />
            </motion.div>
          </a>
          <a
            href={CONTACT.WHATSAPP()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div variants={UpVariant}>
              <Whatsapp className="h-7 w-7" />
            </motion.div>
          </a>
          <a href={CONTACT.TWITTER} target="_blank" rel="noopener noreferrer">
            <motion.div variants={UpVariant}>
              <Twitter className="h-8 w-8" />
            </motion.div>
          </a>
          <a href={CONTACT.FACEBOOK} target="_blank" rel="noopener noreferrer">
            <motion.div variants={UpVariant}>
              <Facebook className="h-8 w-auto" />
            </motion.div>
          </a>
        </div>
      </motion.div>
      {_renderDecoration()}

      <Footer className="z-10 bg-slate-800" />
    </div>
  )
}
