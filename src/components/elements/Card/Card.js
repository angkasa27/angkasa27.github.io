import { motion } from 'framer-motion'

export default function Card({ children, className, full, ...prop }) {
  return (
    <motion.div
      className={
        'defaultTransitionAll rounded-xl ' +
        (full ? '' : 'p-3 md:p-6 ') +
        ' ' +
        className
      }
      {...prop}
    >
      {children}
    </motion.div>
  )
}
