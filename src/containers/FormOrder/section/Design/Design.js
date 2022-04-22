import Button from '@elements/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { THEME } from '@configs/theme'
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
        {Object.keys(THEME).map((key, i) => (
          <motion.div variants={UpVariant} key={i}>
            <DesignCard
              onClick={(v) => setOrder({ ...order, design: v })}
              data={THEME[key]}
              className={
                'flex justify-center border bg-white ' +
                (THEME[key].name === order?.design
                  ? ' ring-2 ring-pink-500 '
                  : ' hover:bg-pink-100 ')
              }
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-between">
        <Button
          animate="visible"
          initial="hidden"
          variants={UpVariant}
          onClick={() => setStep(0)}
          type="outline"
        >
          Kembali
        </Button>
        <AnimatePresence>
          {!!order?.design && (
            <Button
              animate="visible"
              initial="hidden"
              variants={UpVariant}
              onClick={() => setStep(2)}
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
