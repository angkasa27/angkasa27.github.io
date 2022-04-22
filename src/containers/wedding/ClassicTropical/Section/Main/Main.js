import ButtonCustom from '@elements/ButtonCustom'
import moment from 'moment'

export default function Main({ data }) {
  return (
    <section
      id="top"
      style={{
        background: `url("${data?.media?.main}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="flex min-h-screen flex-col justify-between bg-neutral-800/50 py-24 text-center"
        // style={{
        //   background:
        //     'linear-gradient(0deg, rgba(41, 37, 36,1) 5%, rgba(41, 37, 36, .3)  20%, rgba(41, 37, 36, .3)  100%)',
        // }}
      >
        <h4 className="b-4 font-lora">The wedding of</h4>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-dancing font-semibold">
            {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
          </h1>
          <h5>{moment(data?.event[0]?.date).format('dddd, DD MMMM YYYY')}</h5>
          <div>
            <ButtonCustom
              href={data?.reminder}
              small
              className="bg-neutral-50 text-neutral-800"
            >
              Ingatkan Saya
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  )
}
