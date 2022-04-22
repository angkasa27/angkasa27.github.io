import { EIDMUBARAK } from '@constants/catalogs'
import Button from '@elements/ButtonV2'
import { containerVariant, UpVariant } from '@animations'
import { motion } from 'framer-motion'
import Card from '@elements/Card'
import { convertToRupiah } from '@utils/number'

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
        {EIDMUBARAK?.topping?.map((v, i) => (
          <motion.div className="col-span-1" variants={UpVariant}>
            <ToppingCard
              key={i}
              onClick={(v) => handleClick(v)}
              className={
                'bg-white ' +
                (order.topping?.some((t) => t.name === v.name)
                  ? ' ring-2 ring-violet-800 '
                  : ' hover:bg-violet-100 ')
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
          className="border border-violet-800 text-violet-800 hover:bg-violet-200"
        >
          Kembali
        </Button>
        <Button
          animate="visible"
          initial="hidden"
          variants={UpVariant}
          className="bg-violet-800 text-white hover:bg-violet-900"
          onClick={() => setStep(3)}
        >
          Selanjutnya
        </Button>
      </div>
    </>
  )
}
export default Price

const ToppingCard = ({ data, className, selected, onClick, hasButton }) => {
  return (
    <Card
      className={
        'flex flex-col justify-between gap-2 border p-5 md:p-10 ' + className
      }
      full
    >
      <div>
        <h5 className="font-bold leading-tight">{data.name}</h5>
        <p className="text-slate-500 ">{data.desc}</p>
      </div>

      <div className="">
        <h5 className="text-slate-500 line-through">
          {convertToRupiah(data?.earlyPrice)}
        </h5>
        <h3
          className={
            'font-poppins font-bold tracking-wide ' +
            (!hasButton && 'text-pink-500')
          }
        >
          {convertToRupiah(data.price)}
        </h3>
      </div>

      {!!hasButton && (
        <div className="flex">
          <Button
            onClick={() => onClick(data)}
            className="mt-4 bg-blue-800 px-10 text-white hover:bg-blue-900"
          >
            {selected ? 'Batal Pilih' : 'Pilih Topping'}
          </Button>
        </div>
      )}
    </Card>
  )
}
