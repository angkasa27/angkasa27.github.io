import { MAIN_FEATURE } from '@constants/feature'
import Section from '@layouts/Section'
import Header from '@elements/Header'

const About = () => {
  return (
    <Section id="about" className="flex-col " bgColor="bg-slate-50">
      <Header
        text=" md:text-center"
        className=" md:items-center"
        desc="kami menyediakan beragam pilihan tema kekinian untuk undangan digital kamu dan memberi banyak keuntungan lainya"
      >
        Kenapa <u className="decoration-pink-200">SuratBahagia</u>
      </Header>

      <div className="mt-4 grid grid-cols-1 md:mt-12 md:grid-cols-3">
        {MAIN_FEATURE.map((v, i) => (
          <CardFeature data={v} key={i} />
        ))}
      </div>
    </Section>
  )
}

export default About

const CardFeature = ({ data }) => {
  return (
    <div className="mx-12 mt-8 flex flex-col items-center md:gap-2">
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border bg-white">
        {<data.image className="h-16 w-16 text-fuchsia-400" />}
      </div>
      <h4 className="mt-4 text-center font-poppins font-semibold">
        {data.name}
      </h4>
      <p className="text-center text-sm md:text-lg">{data.desc}</p>
    </div>
  )
}
