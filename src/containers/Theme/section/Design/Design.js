import { THEME, EIDMUBARAK } from '@configs/theme'
import Section from '@layouts/Section'
import Header from '@elements/Header'
import DesignCard from '@fragments/DesignCard'

const Design = () => {
  return (
    <Section id="design" className="z-10 flex-col gap-16" bgColor="" full>
      <div className="px-6 md:px-16">
        <Header
          desc="Berbagai pilihan desain sesuai dengan keinginan kamu!"
          defaultColor
        >
          Pilihan <u className="decoration-pink-400">Desain</u>
        </Header>
      </div>

      <div className="px-6 md:px-16">
        <h3 className="mb-4 font-bold">Ucapan Idul Fitri</h3>
        <div className="flex flex-wrap justify-center py-2">
          {EIDMUBARAK.map((v, i) => (
            <DesignCard
              data={v}
              key={i}
              className="hover:bg-slate-800/20"
              href={v?.href}
            />
          ))}
        </div>
      </div>
      <div className="px-6 md:px-16">
        <h3 className="mb-4 font-bold">Wedding Invitation</h3>
        <div className="flex flex-wrap justify-center py-2">
          {Object.keys(THEME).map((key, i) => (
            <DesignCard
              data={THEME[key]}
              className="hover:bg-slate-800/20"
              href={THEME[key]?.href}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Design
