import EidMubarak from '@containers/eidMubarak/EidMubarak1'
import DATA from '@constants/dummy/EidMubarak1'
import Head from 'next/head'

const Template = () => {
  return (
    <>
      <Head>
        <title>{DATA?.name} | SuratBahagia.id</title>
        <meta
          name="description"
          content={
            'Kami Keluarga Besar ' +
            DATA.name +
            ' mengucapkan Selamat Hari Raya Idul Fitri 1 Syawal 1443H'
          }
        />
      </Head>
      <EidMubarak data={DATA} />
    </>
  )
}

export default Template
