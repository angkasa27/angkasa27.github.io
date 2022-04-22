import { useEffect, useState } from 'react'
import Section from '@layouts/SectionOrder'
import Header from '@elements/Header'
import Topping from './section/Topping'
import Design from './section/Design'
import Welcome from './section/Welcome'
import Footer from '@elements/Footer'
import Detail from './section/Detail'
import { AnimatePresence } from 'framer-motion'
import Button from '@elements/ButtonV2'
import moment from 'moment'
import { EIDMUBARAK } from '@constants/catalogs'
import { useRouter } from 'next/router'
import 'moment/locale/id'
moment.locale('id')

const orderTemplate = {
  package: { ...EIDMUBARAK?.package },
  design: '',
  topping: [],
  name: '',
  phone: '',
}

export default function Home() {
  const { query } = useRouter()
  const [step, setStep] = useState(1)
  const [phone, setPhone] = useState('6285172305057')
  const [order, setOrder] = useState(orderTemplate)

  const changeStep = (v) => {
    setStep(v)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (query?.phone) {
      setPhone(query?.phone)
    }
  }, [query?.phone])

  const _renderChild = () => {
    switch (step) {
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
            phone={phone}
            key={step}
            useOrder={[order, setOrder]}
            setStep={changeStep}
          />
        )
    }
  }

  const _header = () => {
    switch (step) {
      case 1:
        return (
          <>
            Pilih <u className="decoration-blue-200">Desain</u>
          </>
        )
      case 2:
        return (
          <>
            Pilih <u className="decoration-blue-200">Topping</u>
          </>
        )
      case 3:
        return (
          <>
            Konfirmasi <u className="decoration-blue-200">Pilihan</u>
          </>
        )
    }
  }

  const _desc = () => {
    switch (step) {
      case 1:
        return 'Tap gambar untuk melihat contoh undangan'
      case 2:
        return 'Kamu bisa pilih lebih dari 1'
      case 3:
        return 'Pastikan pesananmu sudah sesuai!'
      default:
        break
    }
  }

  return (
    <div className="relative overflow-hidden bg-white font-poppins">
      <div className="fixed z-50 flex w-screen items-center justify-between bg-white px-6 py-4 shadow-sm md:px-16">
        <h5 className="font-bold">Form Pemesanan</h5>
        <Button
          to="/"
          small
          className="bg-blue-800 text-white hover:bg-blue-900"
        >
          <p className="px-4 font-normal">Beranda</p>
        </Button>
      </div>
      <Welcome step={step} />
      <Section
        id="price"
        className=" z-10 flex-col justify-start gap-8 py-12 "
        bgColor="bg-slate-50"
      >
        <Header
          text=" text-center "
          className=" md:items-center"
          defaultColor
          desc={_desc()}
        >
          {_header()}
        </Header>

        <AnimatePresence exitBeforeEnter>{_renderChild()}</AnimatePresence>
      </Section>
      <Footer className="border-t bg-white" />
    </div>
  )
}
