import { CONTACT } from '@configs/link'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className="flex w-full justify-center bg-slate-700 px-6 py-8 text-white md:px-16">
      <div className="grid w-full grid-cols-2 gap-4 md:mt-4 md:max-w-screen-xl md:grid-cols-7">
        <div className="col-span-2  md:col-span-3">
          <h3 className="font-yeseva text-pink-400">SuratBahagia</h3>
          <p className="">
            SuratBahagia hadir bantu kamu buat bagiin momen indah pernikahan,
            ulang tahun, kelahiran, reuni, dan lainnya. Jadi momen bahagia kamu
            bisa dibagiin lebih cepat, praktis, modern, professional dan
            tentunya dengan harga yang terjangkau!
          </p>
        </div>

        <div className="col-span-1 hidden md:block" />

        <div>
          <h5 className=" w-full font-poppins font-semibold text-pink-400">
            Navigasi
          </h5>
          <ul>
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li>
              <Link href="/theme">Desain</Link>
            </li>
            <li>
              <Link href="/pricing">Harga</Link>
            </li>
            <li>
              <Link href="/order">Pemesanan</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className=" w-full font-poppins font-semibold text-pink-400">
            E-Commerce
          </h5>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                href={CONTACT.WHATSAPP()}
              >
                Tokopedia
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                href={CONTACT.WHATSAPP()}
              >
                Shopee
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className=" w-full font-poppins font-semibold text-pink-400">
            Sosial Media
          </h5>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                href={CONTACT.WHATSAPP()}
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                href={CONTACT.INSTAGRAM}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                href={CONTACT.TWITTER}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                href={CONTACT.TWITTER}
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
