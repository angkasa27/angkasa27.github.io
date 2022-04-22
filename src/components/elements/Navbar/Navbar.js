import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MENU } from '@configs/menu'
import Button from '@elements/Button'
import Burger from '@assets/svg/Burger'
import Close from '@assets/svg/Close'
import { CONTACT } from '@configs/link'
import Instagram from '@assets/svg/Instagram'
import Whatsapp from '@assets/svg/Whatsapp'
import Twitter from '@assets/svg/Twitter'
import Link from 'next/link'
import { useEffect } from 'react'
import Facebook from '@assets/svg/Facebook'

const menuVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: 'afterChildren',
    },
  },
}

const listVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  hidden: { y: '50vh', opacity: 0, transition: { duration: 0.2 } },
}

const Nav = ({ show }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [bgColor, setBgColor] = useState('shadow-none')

  useEffect(() => {
    if (show) setBgColor('bg-white/80 backdrop-blur-md shadow-sm')
    else setBgColor('shadow-none')
  }, [show])

  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            animate="visible"
            exit="hidden"
            initial="hidden"
            variants={menuVariant}
            className="fixed z-40 flex h-screen w-screen flex-col items-center justify-end bg-white px-6 pt-4 pb-24"
          >
            <ul className="flex flex-col items-center">
              {MENU.map((v, i) => (
                <motion.li
                  variants={listVariant}
                  key={i}
                  className="mb-5"
                  onClick={() => setShowMenu(false)}
                >
                  <Button type="text" nav={v.href} className="w-full">
                    <h2> {v.name}</h2>
                  </Button>
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center gap-4">
              <a
                href={CONTACT.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div variants={listVariant}>
                  <Instagram className="h-8 w-8" />
                </motion.div>
              </a>
              <a
                href={CONTACT.WHATSAPP()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div variants={listVariant}>
                  <Whatsapp className="h-7 w-7" />
                </motion.div>
              </a>
              <a
                href={CONTACT.TWITTER}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div variants={listVariant}>
                  <Twitter className="h-8 w-8" />
                </motion.div>
              </a>
              <a
                href={CONTACT.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div variants={listVariant}>
                  <Facebook className="h-8 w-auto" />
                </motion.div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav
        className={
          'defaultTransitionAll fixed z-50 w-screen px-6 py-4 md:px-16 ' +
          bgColor
        }
      >
        <div className="flex items-center justify-between ">
          <Link href="/">
            <h4 className="cursor-pointer font-yeseva">SuratBahagia</h4>
          </Link>
          <Button
            type="outline"
            small
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden"
            ariaLabel="menu"
          >
            {showMenu ? (
              <Close className="h-5 w-5" />
            ) : (
              <Burger className="h-5 w-5" />
            )}
          </Button>
          <div className="hidden items-center gap-12 md:flex">
            <ul className="gap-12 md:flex">
              {MENU.map((v, i) => (
                <li key={i} onClick={() => setShowMenu(false)}>
                  <Button type="text" nav={v.href} className="">
                    {v.name}
                  </Button>
                </li>
              ))}
            </ul>
            <Button to="/order" ariaLabel="Order">
              Pesan
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
