import { motion } from 'framer-motion'
import ButtonCustom from '@elements/ButtonCustom'
import {
  ZoomVariant,
  UpVariant,
  FadeInVariant,
  contentVariant,
} from '@animations'
import IMAGE from '@assets/image/ClassicTropical'
import InputText from '@form/InputText'
import TextArea from '@form/TextArea'

export default function Gretting() {
  const _renderBG = () => {
    return (
      <>
        <div className="absolute -right-12 top-[12%] opacity-40 md:-right-24 ">
          <div className="w-36 md:w-48">
            <img src={IMAGE.Bunga} />
          </div>
        </div>
        <div className="absolute bottom-[50%] -left-8 rotate-12 -scale-x-100 opacity-40 md:bottom-[50%]">
          <div className="w-36 md:w-48">
            <img src={IMAGE.Bunga} />
          </div>
        </div>
        <div className="absolute bottom-[20%] -right-8 opacity-40 md:bottom-[20%]">
          <div className="w-36 md:w-48">
            <img src={IMAGE.Bunga} />
          </div>
        </div>
      </>
    )
  }

  return (
    <section className="relative flex flex-col gap-10 overflow-hidden px-6 py-24 text-center md:overflow-visible">
      {_renderBG()}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-10 flex justify-center"
      >
        <motion.div
          variants={ZoomVariant}
          className="w-44 drop-shadow-lg saturate-200"
        >
          <img src={IMAGE.UcapanDoa} />
        </motion.div>
      </motion.div>
      <motion.p
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={UpVariant}
        className=""
      >
        Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan tangan
        atau pelukan hangat, masih ada simpul-simpul senyum dan doa doa baik
        yang kami harapkan.
      </motion.p>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="z-10 flex w-full flex-col items-center gap-2 rounded-lg bg-white/25 p-4 text-center text-white shadow-lg"
      >
        <InputText
          variants={ZoomVariant}
          className="mt-2 rounded-lg text-neutral-800"
          placeholder="Masukan Nama"
        />
        <TextArea
          variants={ZoomVariant}
          className="rounded-lg text-neutral-800"
          placeholder="Ucapan & Doa"
        />
        <div>
          <ButtonCustom
            small
            variants={ZoomVariant}
            className="mt-2 bg-neutral-700 text-neutral-50"
            onClick={() => {}}
          >
            Kirim
          </ButtonCustom>
        </div>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={contentVariant}
        className="mt-24"
      >
        <motion.p variants={FadeInVariant}>
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukms dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </motion.p>
        <motion.h4 variants={ZoomVariant} className="mt-2 font-lora font-bold">
          QS. Ar-Rum Ayat 21
        </motion.h4>
      </motion.div>
    </section>
  )
}
