import Section from '@layouts/Section'
import Header from '@elements/Header'
import Slider from '@elements/Slider'
import { TESTIMONIAL } from '@constants/testimonial'
import Card from '@elements/Card'
import { useWindowSize } from '@utils/window'
import { screenMd } from '@constants/screenSize'
import QuoteLeft from '@assets/svg/QuoteLeft'

const Testimonial = () => {
  const { width } = useWindowSize()

  return (
    <Section
      id="testimonial"
      className="flex-col md:justify-center"
      bgColor="pt-[10vh] pb-[20vh] md:pt-0 md:pb-0"
    >
      <Header
        text="text-center"
        className="items-center"
        desc="Kata mereka yang udah pake suratbahagia"
      >
        Kata <u className="decoration-pink-200">Mereka</u>
      </Header>

      {width < screenMd ? (
        <div className="mt-8 flex justify-center md:mt-12">
          <Slider
            autoSlide
            item={TESTIMONIAL}
            className="h-56 w-full "
            renderItem={(v) => <CardTestimonial data={v} />}
            itemClass="flex flex-col justify-center"
          />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-12">
          {TESTIMONIAL.map((v, i) => (
            <CardTestimonial data={v} key={i} />
          ))}
        </div>
      )}
    </Section>
  )
}

export default Testimonial

const CardTestimonial = ({ data }) => {
  return (
    <Card
      className="border bg-white p-5 text-left ring-pink-500 hover:ring-2 md:p-10"
      full
    >
      <div className="h-10 w-10 md:h-16 md:w-16">
        <QuoteLeft className="h-full w-full text-slate-200" />
      </div>
      <p>{data?.message}</p>
      <div className="mt-4 flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full bg-zinc-200">
          <img alt="avatar" src={data.avatar} />
        </div>
        <div>
          <h5 className="font-poppins font-bold">{data?.name}</h5>
          <p className="text-slate-500">{data.status}</p>
        </div>
      </div>
    </Card>
  )
}
