import Link from 'next/link'

export default function Footer({ className }) {
  return (
    <footer className={'flex w-full justify-center py-3 ' + className}>
      <p className="not-italic">
        Create By{' '}
        <Link href="/">
          <span className="cursor-pointer font-yeseva">SuratBahagia.id </span>
        </Link>
      </p>
    </footer>
  )
}
