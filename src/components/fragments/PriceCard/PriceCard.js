import Card from '@elements/Card'
import Button from '@elements/Button'
import { convertToRupiah } from '@utils/number'

const PriceCard = (props) => {
  const { data, className, onClick = () => {}, showDetail, selected } = props

  return (
    <Card
      className={'flex flex-col gap-2 border p-5 md:p-10 ' + className}
      full
    >
      <h3 className="font-bold text-pink-500">{data.name}</h3>
      <div className="">
        <h5 className="text-slate-500 line-through">
          {convertToRupiah(data?.earlyPrice)}
        </h5>
        <h1 className="font-poppins text-4xl font-bold tracking-wide md:text-5xl">
          {convertToRupiah(data.price)}
        </h1>
        <h5 className="text-slate-500 ">{data?.message}</h5>
      </div>

      <div className="flex">
        <Button onClick={() => onClick(data)} className="mt-4 px-10">
          {selected ? 'Paket Terpilih' : 'Pilih Paket'}
        </Button>
      </div>

      {showDetail && (
        <div className="mt-2 text-slate-800">
          <ul className="list-inside list-disc">
            {data?.feature?.map((v, i) => (
              <li key={i} className="text-base">
                {v}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  )
}

export default PriceCard
