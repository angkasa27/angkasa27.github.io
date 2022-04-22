import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Button({
  children,
  className,
  type,
  to,
  href,
  onClick,
  small,
  nav,
  ...props
}) {
  const [classes, setClasses] = useState('')
  const defaultClass = ' cursor-pointer font-semibold tracking-wider '
  const buttonSize = small ? ' py-1 px-4  ' : ' py-3 px-6 '
  const buttonDefault =
    ' capitalize outline-none flex items-center justify-center text-base ' +
    buttonSize

  useEffect(() => {
    switch (type) {
      case 'primary': {
        setClasses(
          defaultClass +
            buttonDefault +
            ' text-white rounded-full defaultTransition '
        )
        break
      }
      case 'outline': {
        setClasses(
          defaultClass +
            buttonDefault +
            ' border rounded-full hover:text-white defaultTransition'
        )
        break
      }
      case 'text': {
        setClasses(
          defaultClass +
            ' leading-none border-b-2 border-transparent    defaultTransition'
        )
        break
      }
      default: {
        setClasses(
          defaultClass +
            buttonDefault +
            ' text-white rounded-full defaultTransition '
        )
        break
      }
    }
  }, [type])

  switch (true) {
    case !!onClick:
      return (
        <motion.button
          onClick={onClick}
          className={classes + ' ' + className}
          {...props}
        >
          {children}
        </motion.button>
      )
    case !!to:
      return (
        <Link href={to} {...props}>
          <motion.button className={classes + ' ' + className} {...props}>
            {children}
          </motion.button>
        </Link>
      )
    case !!href:
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes + ' ' + className}
          {...props}
        >
          {children}
        </motion.a>
      )
    case !!nav:
      return (
        <motion.a href={nav} className={classes + ' ' + className} {...props}>
          {children}
        </motion.a>
      )
    default:
      return (
        <motion.button className={classes + ' ' + className} {...props}>
          {children}
        </motion.button>
      )
  }
}
