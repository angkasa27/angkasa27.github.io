import ButtonCustom from '@elements/ButtonCustom'
import moment from 'moment'

export default function Main({ data }) {
  return (
    <section
      id="top"
      style={{
        background: `url("${data?.media?.main}")`,
        // filter: 'saturate(0)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
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
          <h4 className="b-4 font-poppins">The wedding of</h4>
          <h1 className="font-dancing ">
            {data?.groom?.shortName + ' & ' + data?.bride?.shortName}
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h5>{moment(data.event[0].date).format('DD MMMM YYYY | hh.mm A')}</h5>
          <div>
            <ButtonCustom
              href={data?.reminder}
              small
              className="mt-4 bg-neutral-700 text-neutral-50"
            >
              Remind Me
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  )
}
