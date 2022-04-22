import Navbar from '@elements/NavbarV2'
import GoUp from '@fragments/GoUp'
import FooterNav from '@fragments/FooterNav'

export default function Main({ children, showNav }) {
  return (
    <div className="relative overflow-hidden bg-slate-50 font-poppins">
      <Navbar show={showNav} />
      <GoUp show={showNav} />
      <div className=" w-screen  ">{children}</div>
      <FooterNav />
    </div>
  )
}
