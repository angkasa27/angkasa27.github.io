import SpecialWhite from '@containers/wedding/SpecialWhite'
import DATA from '@constants/dummy/SpecialWhite'
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
      <SpecialWhite data={DATA} />
    </>
  )
}

export default Template
