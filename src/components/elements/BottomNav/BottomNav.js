const BottomNav = ({ children, className }) => {
  return (
    <div
      className={
        'fixed bottom-4 right-4 z-30 md:bottom-6 md:right-6 ' + className
      }
    >
      {children}
    </div>
  )
}

export default BottomNav
