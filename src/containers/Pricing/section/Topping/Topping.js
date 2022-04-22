// import PriceCard from '@fragments/PriceCard'
import { TOPPING_CATALOG } from '@constants/catalogs'
import Section from '@layouts/Section'
import Header from '@elements/Header'
import ToppingCard from '@fragments/ToppingCard'

const Price = () => {
  return (
    <Section id="price" className=" z-10 flex-col" bgColor="">
      <Header
        text=" md:text-center"
        className=" md:items-center"
        desc="Pilih paket sesuai dengan kebutuhan mu!"
      >
        Pilihan <u className="decoration-pink-200">Topping</u>
      </Header>

      <div className="mt-4 grid grid-cols-2 gap-2 md:mt-12 md:grid-cols-4">
        {TOPPING_CATALOG.map((v, i) => (
          <ToppingCard
            key={i}
            className="col-span-1 border-2 bg-white ring-pink-500 hover:ring-2 "
            data={v}
          />
        ))}
      </div>
    </Section>
  )
}
export default Price
