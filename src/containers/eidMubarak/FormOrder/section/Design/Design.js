import Button from '@elements/ButtonV2'
import { motion, AnimatePresence } from 'framer-motion'
import { EIDMUBARAK } from '@configs/theme'
import DesignCard from '@fragments/DesignCard'
import { containerVariant, UpVariant } from '@animations'

const Price = ({ useOrder, setStep }) => {
  const [order, setOrder] = useOrder

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariant}
        className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"
      >
        {EIDMUBARAK.map((theme, i) => (
          <motion.div
            variants={UpVariant}
            key={i}
            className={
              'defaultTransitionAll cursor-pointer rounded-lg border bg-white ' +
              (theme.name === order?.design
                ? ' ring-2 ring-violet-800 '
                : ' hover:bg-violet-100 ')
            }
          >
            <DesignCard
              href={theme?.href}
              data={theme}
              className="flex justify-center "
            />

            <div className="p-2">
              <Button
                onClick={() => setOrder({ ...order, design: theme.name })}
                className="w-full bg-blue-800 px-10 text-white hover:bg-blue-900"
              >
                {theme.name === order?.design
                  ? 'Desain Terpilih'
                  : 'Pilih Desain'}
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-end">
        <AnimatePresence>
          {!!order?.design && (
            <Button
              animate="visible"
              initial="hidden"
              variants={UpVariant}
              onClick={() => setStep(2)}
              className="bg-violet-800 text-white hover:bg-violet-900"
            >
              Selanjutnya
            </Button>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
export default Price
