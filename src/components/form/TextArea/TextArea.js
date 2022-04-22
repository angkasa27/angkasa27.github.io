import { motion } from 'framer-motion'

export default function TextArea({ className, rows, ...props }) {
  return (
    <motion.textarea
      rows={rows ?? 4}
      className={'w-full py-2 px-4 ' + className}
      {...props}
    />
  )
}
