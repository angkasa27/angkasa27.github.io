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
  responsive,
  nav,
  disabled,
  ...props
}) {
  const [classes, setClasses] = useState('')
  const defaultClass =
    ' ' + (!disabled && ' cursor-pointer ') + ' font-semibold tracking-wider '
  const buttonSize = () => {
    switch (true) {
      case responsive:
        return ' py-1 px-2 md:py-3 md:px-6 '
      case small:
        return ' py-1 px-2 '
      default:
        return ' py-3 px-6 '
    }
  }
  const buttonDefault =
    ' capitalize outline-none flex items-center justify-center text-base ' +
    buttonSize()

  useEffect(() => {
    switch (type) {
      case 'primary': {
        setClasses(
          defaultClass +
            buttonDefault +
            ' text-white rounded-lg defaultTransition' +
            (disabled ? ' bg-pink-400 ' : ' hover:bg-pink-600 bg-pink-500 ')
        )
        break
      }
      case 'white': {
        setClasses(
          defaultClass +
            buttonDefault +
            'bg-white  text-pink-500 rounded-lg defaultTransition hover:bg-pink-200'
        )
        break
      }
      case 'outline': {
        setClasses(
          defaultClass +
            buttonDefault +
            'border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-600 hover:text-white defaultTransition'
        )
        break
      }
      case 'text': {
        setClasses(
          defaultClass + 'leading-none hover:text-pink-500 defaultTransition'
        )
        break
      }
      default: {
        setClasses(
          defaultClass +
            buttonDefault +
            ' text-white rounded-lg defaultTransition' +
            (disabled ? ' bg-pink-400 ' : ' hover:bg-pink-600 bg-pink-500 ')
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
          disabled={disabled}
          {...props}
        >
          {children}
        </motion.button>
      )
    case !!to:
      return (
        <Link href={to} {...props}>
          <motion.button
            className={classes + ' ' + className}
            {...props}
            disabled={disabled}
          >
            {children}
          </motion.button>
        </Link>
      )
    case !!href:
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes + ' ' + className}
          {...props}
        >
          {children}
        </a>
      )
    case !!nav:
      return (
        <a href={nav} className={classes + ' ' + className} {...props}>
          {children}
        </a>
      )
    default:
      return (
        <motion.button
          className={classes + ' ' + className}
          {...props}
          disabled={disabled}
        >
          {children}
        </motion.button>
      )
  }
}
