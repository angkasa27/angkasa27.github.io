import Section from '@layouts/SectionOrder'
import Header from '@elements/Header'
import Footer from '@elements/Footer'
import Detail from './section/Detail'
import Button from '@elements/Button'
import moment from 'moment'
import 'moment/locale/id'
moment.locale('id')

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white font-poppins">
      <div className="fixed z-50 flex w-screen items-center justify-between bg-white px-6 py-4 shadow-sm md:px-16">
        <h5 className="font-bold">Form WhatsApp</h5>
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
          Buat Pesan <u className="decoration-pink-200">Undangan</u>
        </Header>

        <Detail />
      </Section>
      <Footer className="border-t bg-white" />
    </div>
  )
}
