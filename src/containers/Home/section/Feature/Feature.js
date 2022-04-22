import { ALL_FEATURE } from '@constants/feature'
import Section from '@layouts/Section'
import Header from '@elements/Header'
import Slider from '@elements/Slider'
import { useWindowSize } from '@utils/window'
import { screenMd } from '@constants/screenSize'
import Card from '@elements/Card'

const About = () => {
  const { width } = useWindowSize()
  let newList = []
  const size = width < screenMd ? 3 : 6

  Array.from({ length: Math.ceil(ALL_FEATURE.length / size) }, (val, i) => {
    newList.push(ALL_FEATURE.slice(i * size, i * size + size))
  })

  return (
    <Section id="feature" className=" flex-col gap-4 md:gap-10" bgColor="">
      <Header text="text-center" className="items-center">
        Fitur <u className="decoration-pink-200">Kami</u>
      </Header>
      <div className="flex justify-center">
        <Slider
          autoSlide
          item={newList}
          className="h-96 w-80 md:w-full"
          renderItem={(i) => <CardFeature data={i} />}
          itemClass="text-center flex justify-center"
        />
      </div>
    </Section>
  )
}

export default About

const CardFeature = ({ data }) => {
  return (
    <div className="grid h-fit grid-cols-1 gap-4 md:grid-cols-3">
      {data.map((v, i) => (
        <FeatureItem
          data={v}
          key={i}
          // className={i % 2 === 0 ? 'bg-rose-400' : 'bg-pink-400'}
          className={i % 2 === 0 ? 'text-rose-400' : 'text-pink-400'}
        />
      ))}
    </div>
  )
}

const FeatureItem = ({ data, className }) => {
  return (
    <Card className="z-10 flex items-start gap-4 border bg-white ring-rose-500 hover:ring-2 ">
      {/* <div
        className={
          'flex h-16 w-16 shrink-0 items-center justify-center rounded-full md:h-24 md:w-24 ' +
          className
        }
      >
        <data.image className="h-10 w-10  text-white md:h-16 md:w-16" />
      </div> */}
      {/* <data.image
        className={'h-16 w-16 shrink-0 md:h-24 md:w-24 ' + className}
      /> */}
      <div
        className={
          'flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-50 md:h-24 md:w-24'
        }
      >
        <data.image className={'h-10 w-10  md:h-16 md:w-16 ' + className} />
      </div>
      <div>
        <h5 className="text-left font-semibold ">{data.name}</h5>
        <p className="text-left text-sm md:text-lg">{data.desc}</p>
      </div>
    </Card>
  )
}
