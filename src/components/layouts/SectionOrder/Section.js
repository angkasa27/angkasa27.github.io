const Section = ({ children, id, className, bgColor }) => {
  return (
    <section
      id={id}
      className={
        'flex min-h-screen w-full justify-center px-6 md:px-16 ' + bgColor
      }
    >
      <div className={'flex w-full md:max-w-screen-lg ' + className}>
        {children}
      </div>
    </section>
  )
}
export default Section
