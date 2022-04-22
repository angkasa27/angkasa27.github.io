import Button from '@elements/ButtonV2'
import EidMubarak from '@assets/mockup/EidMubarak.png'
import moment from 'moment'
import 'moment/locale/id'
moment.locale('id')

const Contact = () => {
  const message =
    'Selamat ' +
    moment().format('A') +
    ', Saya ingin memesan ucapan Idul Fitri Digital'

  return (
    <section className="relative flex w-full justify-center px-6 text-white md:mb-12 md:px-16">
      <div className="z-10 flex w-full flex-col-reverse items-center gap-10 md:max-w-screen-xl md:flex-row md:items-end md:justify-between md:px-10">
        <div className="mb-[5%] pb-8 md:pb-0">
          <h4 className="mt-4 text-center font-poppins md:text-left">
            <u className="decoration-violet-600">Edisi Spesial</u>
          </h4>
          <h2 className="text-center font-bold text-[#F9BE65] md:text-left">
            Ucapan Idul Fitri!
          </h2>
          <h5 className="mt-4 text-center font-poppins md:text-left">
            Promo Pre Order Hingga 28 April 2022
            <span className="font-bold"> Hanya Rp10.000</span>
          </h5>
          <div className="flex justify-center md:justify-start">
            <Button
              className="mt-4 bg-[#F9BE65] text-slate-800 hover:bg-[#dda550]"
              to="/EidMubarak"
              type="white"
            >
              Pesan sekarang
            </Button>
          </div>
        </div>
        <div className="w-[80%] pt-12 md:w-[24rem] md:pt-0 md:pb-8">
          <img alt="Ramadhan Mockup" src={EidMubarak} />
        </div>
      </div>
      <div className="absolute bottom-0 h-full w-full max-w-screen-xl bg-gradient-to-b from-violet-800 to-purple-800  md:h-[70%] md:rounded-xl md:bg-gradient-to-r" />
    </section>
  )
}

export default Contact
