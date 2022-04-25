const Header = ({ children, desc, className, text, defaultColor }) => {
  return (
    <div className={'flex w-full flex-col ' + className}>
      <h2
        className={
          (!defaultColor && 'text-pink-500 ') +
          ' font-bold md:max-w-screen-md ' +
          text
        }
      >
        {children}
      </h2>
      {!!desc && (
        <h5 className={'mt-2 md:mt-4 md:max-w-screen-md ' + text}>{desc}</h5>
      )}
    </div>
  )
}

export default Header
