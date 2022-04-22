import Button from '@elements/ButtonV2'
import { motion } from 'framer-motion'
import Card from '@elements/Card'
import InputText from '@form/InputText'
import { containerVariant, UpVariant } from '@animations'
import moment from 'moment'
import { convertToRupiah } from '@utils/number'
import { submitWhatsApp } from '@utils/url'

const Phone = ({ useOrder, setStep, phone }) => {
  const [order, setOrder] = useOrder

  const setValue = (e, name) => {
    setOrder({ ...order, [name]: e.target.value })
  }

  const totalPrice = () => {
    let total = order?.package?.price
    order.topping.forEach(({ price }) => (total += price))
    return total
  }

  const generateMessage = () => {
    let message = `Selamat ${moment().format('A')}, saya *${
      order?.name
    }* ingin memesan undangan digital tema *${order?.design}* dengan paket *${
      order?.package?.name
    }*`

    if (order?.topping?.length > 0) {
      let topping = []
      order.topping.forEach(({ name }) => topping.push(name))
      message = message + ' dan topping *' + topping.toString() + '*'
    }

    return submitWhatsApp(phone, `${message ?? ' '}`)
  }

  const renderTopping = () => {
    if (order?.topping?.length < 1) return <h5 className="font-semibold">-</h5>

    return (
      <ul className="ml-5 mt-2 list-disc">
        {order?.topping.map((topping) => (
          <li>
            <div className="flex items-baseline justify-between">
              <p className="font-semibold">{topping?.name}</p>
              <div className="flex">
                <p className=" mr-2 text-slate-500 line-through">
                  {convertToRupiah(topping?.earlyPrice)}
                </p>
                <p className="font-semibold">
                  {convertToRupiah(topping?.price)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariant}
        className="grid grid-cols-1 gap-4 md:grid-cols-5"
      >
        <Card
          variants={UpVariant}
          className="grid grid-cols-1 gap-4 bg-white p-5 md:col-span-3 md:p-10"
          full
        >
          <h4 className="font-bold">Detail Pesanan</h4>

          <div>
            <div className="flex justify-between">
              <h5>Desain : </h5>
              <Button
                small
                onClick={() => setStep(0)}
                className=" bg-blue-800 text-white hover:bg-blue-900"
              >
                Ubah
              </Button>
            </div>
            <div className="flex items-baseline justify-between">
              <h5 className="font-semibold">{order?.design}</h5>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h5>Tema : </h5>
            </div>
            <div className="flex items-baseline justify-between">
              <h5 className="font-semibold">{order?.package?.name}</h5>
              <div className="flex">
                <p className=" mr-2 text-slate-500 line-through">
                  {convertToRupiah(order?.package?.earlyPrice)}
                </p>
                <p className="font-semibold">
                  {convertToRupiah(order?.package?.price)}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h5>Topping : </h5>
              <Button
                small
                onClick={() => setStep(2)}
                className=" bg-blue-800 text-white hover:bg-blue-900"
              >
                Ubah
              </Button>
            </div>
            {renderTopping()}
          </div>

          <div className="w-full border-b" />

          <div className="flex justify-between">
            <h5>Total : </h5>
            <h5 className="font-semibold">{convertToRupiah(totalPrice())}</h5>
          </div>
        </Card>
        <div className=" md:col-span-2">
          <Card
            variants={UpVariant}
            className="grid grid-cols-1 gap-4 bg-white p-5 md:p-10"
            full
          >
            <h4 className="font-bold">Data Diri</h4>
            <div>
              <p className="font-semibold">Nama Lengkap</p>
              <InputText
                className="rounded-lg border "
                placeholder="Masukan Nama"
                onChange={(e) => setValue(e, 'name')}
                value={order?.name}
                required
              />
            </div>
            <div>
              <p className="font-semibold">Nomor WhatsApp</p>
              <InputText
                onChange={(e) => setValue(e, 'phone')}
                value={order?.phone}
                className="rounded-lg border "
                placeholder="Masukan Nomor WhatsApp"
                required
              />
            </div>
          </Card>
          <div className="mt-4 flex justify-between gap-4">
            <Button
              animate="visible"
              initial="hidden"
              variants={UpVariant}
              onClick={() => setStep(2)}
              type="outline"
              className="border border-violet-800 text-violet-800 hover:bg-violet-200"
            >
              Kembali
            </Button>
            {!!order.name && !!order.phone && (
              <Button
                animate="visible"
                initial="hidden"
                variants={UpVariant}
                href={generateMessage()}
                className="bg-violet-800 text-white hover:bg-violet-900 md:w-full"
              >
                Kirim
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}
export default Phone
