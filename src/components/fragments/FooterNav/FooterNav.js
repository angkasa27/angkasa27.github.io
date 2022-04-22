import { CONTACT } from '@configs/link'
import Link from 'next/link'
import Instagram from '@assets/svg/Instagram'
import Whatsapp from '@assets/svg/Whatsapp'
import Twitter from '@assets/svg/Twitter'
import Facebook from '@assets/svg/Facebook'

const Footer = () => {
  const _renderNav = () => {
    return (
      <ul className="flex flex-wrap justify-center gap-4 md:gap-12">
        <li className="defaultTransition hover:text-pink-500">
          <Link href="/">Beranda</Link>
        </li>
        <li className="defaultTransition hover:text-pink-500">
          <Link href="/theme">Desain</Link>
        </li>
        <li className="defaultTransition hover:text-pink-500">
          <Link href="/pricing">Harga</Link>
        </li>
        <li className="defaultTransition hover:text-pink-500">
          <Link href="/order">Pemesanan</Link>
        </li>
      </ul>
    )
  }

  const _renderSosmed = () => {
    return (
      <div className="flex items-center gap-4 md:gap-12">
        <a
          href={CONTACT.INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="defaultTransition hover:text-pink-500"
        >
          <div>
            <Instagram className="h-6 w-6" />
          </div>
        </a>
        <a
          href={CONTACT.WHATSAPP()}
          target="_blank"
          rel="noopener noreferrer"
          className="defaultTransition hover:text-pink-500"
        >
          <div>
            <Whatsapp className="h-5 w-5" />
          </div>
        </a>
        <a
          href={CONTACT.TWITTER}
          target="_blank"
          rel="noopener noreferrer"
          className="defaultTransition hover:text-pink-500"
        >
          <div>
            <Twitter className="h-6 w-6" />
          </div>
        </a>
        <a
          href={CONTACT.FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="defaultTransition hover:text-pink-500"
        >
          <div>
            <Facebook className="h-6 w-auto" />
          </div>
        </a>
      </div>
    )
  }

  const _renderOlShop = () => {
    return (
      <ul className="flex flex-wrap justify-center gap-4 md:gap-12">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="defaultTransition hover:text-pink-500"
            href={CONTACT.WHATSAPP()}
          >
            Tokopedia
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="defaultTransition hover:text-pink-500"
            href={CONTACT.WHATSAPP()}
          >
            Shopee
          </a>
        </li>
      </ul>
    )
  }

  return (
    <section className="flex w-full justify-center border-t px-6 py-8 md:px-16">
      <div className="flex w-full flex-col gap-4 md:mt-4 md:max-w-screen-xl md:gap-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h3 className="font-yeseva">SuratBahagia</h3>
          {/* {_renderSosmed()} */}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {_renderNav()}
          {/* {_renderOlShop()} */}
          {_renderSosmed()}
        </div>
        <div className="w-full border-b" />
        <footer className="flex w-full justify-center">
          <p className="not-italic">
            Create By{' '}
            <Link href="/">
              <span className="cursor-pointer font-yeseva">
                SuratBahagia.id{' '}
              </span>
            </Link>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Footer
