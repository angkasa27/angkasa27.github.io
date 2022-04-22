import ClassicTropical from '@containers/wedding/ClassicTropical'
import DATA from '@constants/dummy/ClassicTropical'
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
      <ClassicTropical data={DATA} />
    </>
  )
}

export default Template
