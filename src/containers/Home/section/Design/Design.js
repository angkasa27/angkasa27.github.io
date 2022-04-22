import Section from '@layouts/Section'
import Header from '@elements/Header'
import DesignCard from '@fragments/DesignCard'
import { HIGHLIGHT } from '@configs/theme'
import Button from '@elements/Button'
import Slider from '@elements/Slider'
import { useWindowSize } from '@utils/window'
import { screenMd } from '@constants/screenSize'

const Design = () => {
  const { width } = useWindowSize()

  return (
    <Section id="design" className="z-10 flex-col gap-8" bgColor="" full>
      <div className="flex items-end justify-between px-6 md:px-16">
        <Header
          desc="Berbagai pilihan desain sesuai dengan keinginan kamu!"
          defaultColor
        >
          Pilihan <u className="decoration-pink-400">Desain</u>
        </Header>

        <div className="hidden md:block">
          <Button to="/theme" className="min-w-max">
            Lebih Banyak
          </Button>
        </div>
      </div>
      {width < screenMd ? (
        <>
          <div className="flex justify-center">
            <Slider
              autoSlide
              item={HIGHLIGHT}
              className="h-64 w-full"
              renderItem={(v) => (
                <DesignCard
                  data={v}
                  className="hover:bg-fuchsia-800/20"
                  href={v?.href}
                />
              )}
              itemClass="text-center flex justify-center"
              navClass={{
                activeClass: 'bg-fuchsia-500',
                disabledClass: 'bg-fuchsia-200',
              }}
            />
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <Button to="/theme">Lebih Banyak</Button>
          </div>
        </>
      ) : (
        <div className="flex w-full flex-wrap justify-center gap-2 md:px-16">
          {HIGHLIGHT.map((v) => (
            <DesignCard
              data={v}
              className="hover:bg-fuchsia-800/20 hover:backdrop-blur-md"
              href={v?.href}
            />
          ))}
        </div>
      )}
    </Section>
  )
}

export default Design
