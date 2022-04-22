import Card from '@elements/Card'
import Button from '@elements/Button'
import { convertToRupiah } from '@utils/number'

const ToppingCard = ({ data, className, selected, onClick, hasButton }) => {
  return (
    <Card
      className={
        'flex flex-col justify-between gap-2 border p-5 md:p-10 ' + className
      }
      full
    >
      <div>
        <h5 className="font-bold leading-tight">{data.name}</h5>
        <p className="text-slate-500 ">{data.desc}</p>
      </div>

      <div className="">
        <h5 className="text-slate-500 line-through">
          {convertToRupiah(data?.earlyPrice)}
        </h5>
        <h3
          className={
            'font-poppins font-bold tracking-wide ' +
            (!hasButton && 'text-pink-500')
          }
        >
          {convertToRupiah(data.price)}
        </h3>
      </div>

      {!!hasButton && (
        <div className="flex">
          <Button onClick={() => onClick(data)} className="mt-4 px-10">
            {selected ? 'Batal Pilih' : 'Pilih Topping'}
          </Button>
        </div>
      )}
    </Card>
  )
}

export default ToppingCard
