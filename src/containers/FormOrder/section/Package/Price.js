import { PRICE_CATALOG } from '@constants/catalogs'
import Button from '@elements/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { containerVariant, UpVariant } from '@animations'
import PriceCard from '@fragments/PriceCard'

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
        {Object.keys(PRICE_CATALOG).map((category) => {
          return (
            <>
              {PRICE_CATALOG[category].map((v, i) => {
                return (
                  <motion.div variants={UpVariant} key={i}>
                    <PriceCard
                      onClick={(v) => setOrder({ ...order, package: v })}
                      className={
                        'col-span-1 bg-white ' +
                        (v.name === order?.package?.name
                          ? ' ring-2 ring-pink-500 '
                          : ' hover:bg-pink-100 ')
                      }
                      selected={v.name === order?.package?.name}
                      data={v}
                    />
                  </motion.div>
                )
              })}
            </>
          )
        })}
      </motion.div>
      <div className="relative flex h-12 justify-end">
        <AnimatePresence>
          {!!order?.package && (
            <Button
              animate="visible"
              initial="hidden"
              className="absolute"
              variants={UpVariant}
              onClick={() => setStep(1)}
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
