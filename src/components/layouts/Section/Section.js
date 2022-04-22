const Section = ({ children, id, className, bgColor, full = false }) => {
  return (
    <section
      id={id}
      className={
        (!full && 'px-6 md:px-16') +
        ' flex w-full justify-center pb-12 pt-16 md:min-h-screen md:pt-24 ' +
        bgColor
      }
    >
      <div className={'flex w-full md:max-w-screen-xl ' + className}>
        {children}
      </div>
    </section>
  )
}
export default Section
