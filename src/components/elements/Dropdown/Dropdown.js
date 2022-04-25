import { useState } from 'react'
import ArrowSm from '@assets/svg/Chevron'
import { motion } from 'framer-motion'

export default function Dropdown(props) {
  const {
    option = [],
    value = '',
    onChange = () => {},
    name = '',
    className = '',
    buttonClass = '',
    ...prop
  } = props
  const [open, setOpen] = useState(false)

  return (
    <motion.div className={'relative ' + className} {...prop}>
      <button
        onClick={() => setOpen(true)}
        class={
          ' defaultTransition flex w-full cursor-pointer items-center  justify-between py-2 px-4 text-base font-semibold tracking-wider outline-none ' +
          buttonClass
        }
        type="button"
      >
        {!!value ? value : name}
        <ArrowSm className="h-6 w-6" />
      </button>
      {open && (
        <div class="absolute top-0 z-10 w-full divide-y divide-gray-100 overflow-hidden rounded bg-white text-gray-800 shadow">
          <button
            onClick={() => setOpen(!open)}
            class={
              ' defaultTransition flex w-full cursor-pointer items-center  justify-between py-2 px-4 text-base font-semibold tracking-wider outline-none ' +
              buttonClass
            }
            type="button"
          >
            {name}
            <ArrowSm className="h-6 w-6 rotate-180" />
          </button>
          {option.map((v, i) => (
            <button
              onClick={() => {
                onChange(v)
                setOpen(false)
              }}
              class="block w-full cursor-pointer py-2 px-4 text-left hover:bg-gray-100"
            >
              {v}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  )
}
