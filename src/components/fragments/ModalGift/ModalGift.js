import ModalBase from '@elements/ModalBase'

const ModalGift = ({ data, open, onClose }) => {
  return (
    <ModalBase bgClose open={open} onClose={onClose} name={data?.type}>
      <img src={data?.image} alt={data.type} className="w-full" />
      <p className="mt-2">a.n. {data?.name}</p>
      <h4 className="font-poppins font-bold">{data?.number}</h4>
    </ModalBase>
  )
}

export default ModalGift
