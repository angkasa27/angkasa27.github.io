import { motion } from 'framer-motion'
import IMAGE from '@assets/image/ClassicTropical'
import { UpVariant, ZoomVariant, contentVariant } from '@animations'

export default function DetailEvent({ data }) {
  return (
    <section className="relative flex flex-col gap-10 overflow-hidden  py-12 text-center ">
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="flex flex-col items-center gap-2 md:gap-4"
      >
        <motion.h3 variants={ZoomVariant} className="font-alice leading-3">
          Momen
        </motion.h3>
        <motion.h1
          variants={UpVariant}
          className="font-dancing text-5xl leading-3 text-rose-500"
        >
          Kebersamaan
        </motion.h1>
        <motion.p variants={UpVariant} className="mt-4 text-center">
          "Mencintai bukan untuk menyamai, tetapi keikhlasan menerima perbedaan"
        </motion.p>
        <div className=" mt-8 grid grid-cols-2 gap-2 px-2 md:grid-cols-3">
          {data?.media?.galery?.map((image, i) => (
            <motion.div
              variants={ZoomVariant}
              key={i}
              className="relative h-40 w-[40vw] shrink-0 overflow-hidden rounded bg-gray-200 md:h-48 md:w-48"
            >
              <img src={image} className="w-full object-center" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="flex flex-col items-center"
      >
        <motion.div variants={ZoomVariant} className="w-20 -rotate-12">
          <img src={IMAGE.Bunga} />
        </motion.div>
        <motion.p variants={UpVariant} className="">
          Mahasuci Allah telah menciptakan Hamba-Nya berpasang-pasangan. Ya
          Allah. Sungguh besar kami mengucap syukur atas rahmat dan kehendakmu
          yang telah mengukuhkan kasih dalam kehidupan keluarga kami.
        </motion.p>
        <motion.h4 variants={UpVariant} className="font-dancing font-semibold">
          QS. Ar-Rum Ayat 21
        </motion.h4>
      </motion.div>
    </section>
  )
}
