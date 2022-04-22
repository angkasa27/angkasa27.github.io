import Button from '@elements/Button'
import Footer from '@elements/Footer'
import Link from 'next/link'
import { CONTACT } from '@configs/link'
import { motion } from 'framer-motion'
import { UpVariant, ZoomVariant } from '@animations'
import Instagram from '@assets/svg/Instagram'
import Whatsapp from '@assets/svg/Whatsapp'
import Twitter from '@assets/svg/Twitter'

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
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between bg-fuchsia-300">
      <div />
      <motion.div
        animate="visible"
        exit="hidden"
        initial="hidden"
        variants={menuVariant}
        className="flex w-full max-w-screen-sm flex-col items-center gap-2 p-6"
      >
        <Link href="/">
          <motion.h2
            variants={ZoomVariant}
            className="text-center font-semibold"
          >
            SuratBahagia
          </motion.h2>
        </Link>
        <motion.h5 variants={ZoomVariant} className="mb-4 font-poppins">
          Bikin <u className="decoration-pink-400">Undangan</u> Lebih{' '}
          <u className="decoration-pink-400">Spesial</u>!
        </motion.h5>

        <Button
          variants={UpVariant}
          className="z-10 w-full"
          to="/"
          type="primary"
        >
          Website
        </Button>
        <Button
          variants={UpVariant}
          className="z-10 w-full"
          to="/price"
          type="primary"
        >
          Katalog Harga
        </Button>
        <Button
          variants={UpVariant}
          className="z-10 w-full"
          to="/theme"
          type="primary"
        >
          Pilihan Desain
        </Button>
        <Button
          variants={UpVariant}
          className="z-10 w-full"
          to="/order"
          type="primary"
        >
          Form Pemesanan
        </Button>

        <motion.p variants={ZoomVariant} className="mt-4 text-sm font-bold">
          E-Commerce
        </motion.p>

        <motion.div variants={UpVariant} className="w-full">
          <Button
            className="z-10 w-full"
            href={CONTACT.WHATSAPP()}
            type="primary"
          >
            Tokopedia
          </Button>
        </motion.div>

        <motion.div variants={UpVariant} className="w-full">
          <Button
            className="z-10 w-full"
            href={CONTACT.WHATSAPP()}
            type="primary"
          >
            Shopee
          </Button>
        </motion.div>

        <div className="mt-4 flex justify-center gap-4">
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
        </div>
      </motion.div>
      <Footer className="border-t bg-white " />
    </div>
  )
}
