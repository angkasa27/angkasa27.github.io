import PriceCard from '@fragments/PriceCard'
import { PRICE_CATALOG } from '@constants/catalogs'
import Section from '@layouts/Section'
import Header from '@elements/Header'
import { useRouter } from 'next/router'
import Button from '@elements/Button'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LeftVariant } from '@animations'

const Price = () => {
  const router = useRouter()
  const [category, setCategory] = useState('basic')

  return (
    <Section
      id="price"
      className=" z-10 flex-col gap-4 md:gap-12"
      bgColor=""
      full
    >
      <Header
        text="text-center"
        className="items-center px-6 md:px-16"
        desc="Pilih paket sesuai dengan kebutuhan mu!"
        defaultColor
      >
        Katalog <u className="decoration-white">Harga</u>
      </Header>
      <div className="flex justify-center gap-4 md:gap-8">
        {Object.keys(PRICE_CATALOG).map((key) => (
          <Button
            responsive
            type={category === key ? 'primary' : 'white'}
            key={key}
            onClick={() => setCategory(key)}
          >
            {key}
          </Button>
        ))}
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={category}
          variants={LeftVariant}
          animate="visible"
          initial="hidden"
          exit="exit"
          className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-12 py-2 md:snap-none md:flex-wrap md:justify-center md:gap-8 md:px-0"
        >
          {PRICE_CATALOG[category].map((v) => (
            <div key={v.name} className="snap-center snap-always ">
              <PriceCard
                onClick={(v) =>
                  router.push({
                    pathname: '/order',
                    query: {
                      step: 1,
                      package: v.name,
                      price: v.price,
                      earlyPrice: v.earlyPrice,
                    },
                  })
                }
                className="col-span-1 w-72 bg-white ring-pink-500 hover:ring-2 md:w-fit "
                data={v}
                showDetail
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
export default Price
