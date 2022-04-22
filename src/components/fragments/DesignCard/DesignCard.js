import Link from 'next/link'

const DesignCard = ({ className, data, onClick = () => {}, href = '' }) => {
  const _renderChildren = (
    <div
      onClick={() => onClick(data.name)}
      className={'defaultTransitionAll cursor-pointer rounded-lg  ' + className}
    >
      <div className="w-80 p-2">
        <img src={data?.image} alt={data?.name} />
        <p className="pt-2 text-center text-base font-semibold">{data.name}</p>
      </div>
    </div>
  )

  if (!!href) {
    return <Link href={data.href}>{_renderChildren}</Link>
  }

  return _renderChildren
}

export default DesignCard
