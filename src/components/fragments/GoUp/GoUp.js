import ArrowSm from '@assets/svg/ArrowSm'
import BottomNav from '@elements/BottomNav'
import { motion, AnimatePresence } from 'framer-motion'

const variant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    y: '1vh',
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

const Floating = ({ show }) => {
  return (
    <BottomNav>
      <AnimatePresence>
        {show && (
          <a href="#top">
            <motion.div
              animate="visible"
              exit="hidden"
              initial="hidden"
              variants={variant}
              className="defaultTransition cursor-pointer rounded-full bg-pink-500 p-2 hover:bg-pink-600 md:p-4"
            >
              <ArrowSm className="h-6 w-6 text-white" />
            </motion.div>
          </a>
        )}
      </AnimatePresence>
    </BottomNav>
  )
}

export default Floating
