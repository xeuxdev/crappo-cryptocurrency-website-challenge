import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
type Props = {
  name: string
}

const NavBar = () => {
  const [isOpen, setisOpen] = useState(true)
  return (
    <nav className="container flex items-center justify-between">
      <div className="w-[135px] h-10">
        <Image src={"/assets/logo.svg"} alt="logo" width={135} height={40} />
      </div>

      <div className="hidden lg:flex items-center space-x-14">
        {/* navmenu */}
        <div className="flex items-center w-[339px] h-7 space-x-8">
          <NavLink name="product" />
          <NavLink name="features" />
          <NavLink name="about" />
          <NavLink name="contact" />
        </div>
        <div className="flex items-center w-[221] space-x-6">
          <NavLink name="login" />
          <span className="h-6 bg-light_bg w-[1px]"></span>
          <motion.div
            className="rounded-full w-[130px] h-[52px] grid place-items-center bg-accent hover:bg-accent/70 duration-150 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink name="register" />
          </motion.div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden cursor-pointer relative z-50">
        <Image
          src={`${isOpen ? "/assets/close.svg" : "/assets/hamburger.svg"}`}
          alt="open menu"
          width={`${isOpen ? 20 : 25}`}
          height={`${isOpen ? 20 : 25}`}
        />
      </div>
      <div className="fixed top-0 right-0 w-full hidden"></div>
    </nav>
  )
}

export default NavBar

function NavLink(props: Props) {
  return (
    <Link href={`${props.name}`}>
      <a className="text-body_sm_rg text-white relative capitalize duration-300 after:absolute after:-bottom-1 after:block after:h-[2.5px] after:w-full after:bg-accent after:scale-0 hover:after:scale-100 after:duration-300 ">
        {props.name}
      </a>
    </Link>
  )
}
