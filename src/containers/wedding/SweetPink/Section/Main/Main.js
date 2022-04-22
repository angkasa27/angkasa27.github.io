import ButtonCustom from '@elements/ButtonCustom'
import moment from 'moment'

export default function Main({ data }) {
  return (
    <section
      id="top"
      style={{
        background: `url("${data?.media?.POTRAIT3}")`,
        // filter: 'saturate(0)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="flex min-h-screen flex-col justify-between  py-24 text-center"
        style={{
          background:
            'linear-gradient(0deg, rgba(250, 250, 250,1) 5%,  rgba(38, 38, 38, 0)  100%)',
        }}
      >
        <div>
          <h4 className="b-4 font-alice">The wedding of</h4>
          <h1 className="font-dancing text-5xl text-rose-300 drop-shadow">
            {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
          </h1>
          <h5>{moment(data.event[0].date).format('DD MMMM YYYY')}</h5>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <ButtonCustom
              href={data?.reminder}
              small
              className="mt-4 bg-zinc-800 font-normal text-zinc-50"
            >
              Ingatkan Saya
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  )
}
