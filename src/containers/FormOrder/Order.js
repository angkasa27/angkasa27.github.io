import { useEffect, useState } from 'react'
import Package from './section/Package'
import Section from '@layouts/SectionOrder'
import Header from '@elements/Header'
import Topping from './section/Topping'
import Design from './section/Design'
import Footer from '@elements/Footer'
import Detail from './section/Detail'
import { AnimatePresence } from 'framer-motion'
import Button from '@elements/Button'
import moment from 'moment'
import { useRouter } from 'next/router'
import 'moment/locale/id'
moment.locale('id')

const orderTemplate = {
  package: '',
  design: '',
  topping: [],
  name: '',
  phone: '',
}

export default function Home() {
  const router = useRouter()
  const { query } = useRouter()
  const [step, setStep] = useState(0)
  const [order, setOrder] = useState(orderTemplate)

  useEffect(() => {
    if (query?.package && query?.step) {
      setStep(parseInt(query.step))
      setOrder({
        ...order,
        package: {
          name: query?.package,
          price: parseInt(query?.price),
          earlyPrice: parseInt(query?.earlyPrice),
        },
      })
      router.replace('/order', undefined, { shallow: true })
    }
  }, [query?.package, query?.step])

  const changeStep = (v) => {
    setStep(v)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const _renderChild = () => {
    switch (step) {
      case 0:
        return (
          <Package
            key={step}
            useOrder={[order, setOrder]}
            setStep={changeStep}
          />
        )
      case 1:
        return (
          <Design
            key={step}
            useOrder={[order, setOrder]}
            setStep={changeStep}
          />
        )
      case 2:
        return (
          <Topping
            key={step}
            useOrder={[order, setOrder]}
            setStep={changeStep}
          />
        )
      case 3:
        return (
          <Detail
            key={step}
            useOrder={[order, setOrder]}
            setStep={changeStep}
          />
        )
    }
  }

  const _header = () => {
    switch (step) {
      case 0:
        return (
          <>
            Pilih <u className="decoration-pink-200">Paket</u>
          </>
        )
      case 1:
        return (
          <>
            Pilih <u className="decoration-pink-200">Desain</u>
          </>
        )
      case 2:
        return (
          <>
            Pilih <u className="decoration-pink-200">Topping</u>
          </>
        )
      case 3:
        return (
          <>
            Konfirmasi <u className="decoration-pink-200">Pilihan</u>
          </>
        )
    }
  }

  return (
    <div className="relative overflow-hidden bg-white font-poppins">
      <div className="fixed z-50 flex w-screen items-center justify-between bg-white px-6 py-4 shadow-sm md:px-16">
        <h5 className="font-bold">Form Pemesanan</h5>
        <Button to="/" className="" small>
          <p className="px-4 font-normal">Beranda</p>
        </Button>
      </div>
      <Section
        id="price"
        className=" z-10 flex-col justify-start gap-8 pt-24 pb-12 "
        bgColor="bg-slate-50"
      >
        <Header text=" text-center " className=" md:items-center" defaultColor>
          {_header()}
        </Header>

        <AnimatePresence exitBeforeEnter>{_renderChild()}</AnimatePresence>
      </Section>
      <Footer className="border-t bg-white" />
    </div>
  )
}
