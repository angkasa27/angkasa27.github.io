import Button from '@elements/Button'
import PhoneHalf from '@assets/mockup/PhoneHalf2.png'

const Contact = () => {
  return (
    <section className="relative mt-12 flex w-full justify-center px-6 md:mb-12 md:px-16">
      <div className="z-10 flex w-full flex-col items-center gap-10 md:max-w-screen-xl md:flex-row md:items-end md:justify-between md:px-10">
        <div className="mb-[5%] pt-12 md:pt-0">
          <h2 className="text-center font-bold md:text-left">
            Share Every <u className="decoration-pink-400">Meaningful Moment</u>
            !
          </h2>
          <h5 className="mt-4 text-center font-poppins md:text-left">
            Hidup menjadi lebih berarti saat kamu menyadari jika kamu tidak bisa
            mendapatkan momen yang sama untuk kedua kalinya
          </h5>
          <div className="flex justify-center md:justify-start">
            <Button className="mt-4" to="/order">
              Pesan sekarang
            </Button>
          </div>
        </div>
        <div className="w-[80%] md:w-[28rem]">
          <img alt="Phone Half Mockup" src={PhoneHalf} />
        </div>
      </div>
      <div className="absolute bottom-0 h-full w-full max-w-screen-xl bg-fuchsia-300 md:h-[80%] md:rounded-xl" />
    </section>
  )
}

export default Contact
