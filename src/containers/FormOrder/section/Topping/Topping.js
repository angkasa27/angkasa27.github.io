import { TOPPING_CATALOG } from '@constants/catalogs'
import Button from '@elements/Button'
import { containerVariant, UpVariant } from '@animations'
import { motion } from 'framer-motion'
import ToppingCard from '@fragments/ToppingCard'

const Price = ({ useOrder, setStep }) => {
  const [order, setOrder] = useOrder

  const handleClick = (v) => {
    if (order.topping?.some((t) => t.name === v.name)) {
      const topping = order?.topping?.filter(({ name }) => name !== v.name)
      setOrder({ ...order, topping })
      return
    } else {
      const topping = [...order?.topping, v]
      setOrder({ ...order, topping })
    }
  }

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariant}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {TOPPING_CATALOG.map((v, i) => (
          <motion.div className="col-span-1" variants={UpVariant}>
            <ToppingCard
              key={i}
              onClick={(v) => handleClick(v)}
              className={
                'bg-white ' +
                (order.topping?.some((t) => t.name === v.name)
                  ? ' ring-2 ring-pink-500 '
                  : ' hover:bg-pink-100 ')
              }
              selected={order.topping?.some((t) => t.name === v.name)}
              data={v}
              hasButton
            />
          </motion.div>
        ))}
      </motion.div>
      <div className=" flex justify-between">
        <Button
          animate="visible"
          initial="hidden"
          variants={UpVariant}
          onClick={() => setStep(1)}
          type="outline"
        >
          Kembali
        </Button>
        <Button
          animate="visible"
          initial="hidden"
          variants={UpVariant}
          onClick={() => setStep(3)}
        >
          Selanjutnya
        </Button>
      </div>
    </>
  )
}
export default Price
