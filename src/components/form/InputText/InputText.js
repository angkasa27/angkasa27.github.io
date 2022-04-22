import { motion } from 'framer-motion'

export default function InputText({ className, ...props }) {
  return (
    <motion.input
      type="text"
      className={'w-full py-2 px-4 ' + className}
      {...props}
    />
  )
}
