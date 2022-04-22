import SweetPink from '@containers/wedding/SweetPink'
import DATA from '@constants/dummy/SweetPink'
import Head from 'next/head'

const Template = () => {
  return (
    <>
      <Head>
        <title>
          {DATA?.groom?.shortName + ' & ' + DATA?.bride?.shortName} |
          SuratBahagia.id
        </title>
        <meta
          name="description"
          content={
            'Respectfully request your presence at ' +
            DATA?.groom?.shortName +
            ' & ' +
            DATA?.bride?.shortName +
            ' wedding ceremony'
          }
        />
      </Head>
      <SweetPink data={DATA} />
    </>
  )
}

export default Template
