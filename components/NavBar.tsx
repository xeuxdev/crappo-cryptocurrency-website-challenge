import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
type Props = {
  name: string
}
const linkArray = ["product", "features", "about", "contact"]

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <nav className="container flex items-center justify-between">
      <div className="w-[135px] h-10">
        <Image src={"/assets/logo.svg"} alt="logo" width={135} height={40} />
      </div>

      <div className="hidden lg:flex items-center space-x-14">
        {/* navmenu */}
        <div className="flex items-center w-[339px] h-7 space-x-8">
          {linkArray.map((item, index) => (
            <NavLink key={index} name={item} />
          ))}
        </div>
        <div className="flex items-center w-[221px] space-x-6">
          <NavLink name="login" />
          <span className="h-6 bg-light_bg w-[1px]"></span>
          <motion.div
            className="rounded-full w-[130px] h-[52px] grid place-items-center bg-accent hover:bg-accent/70 duration-150 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Register />
          </motion.div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className="lg:hidden cursor-pointer relative z-50"
        onClick={() => setisOpen(!isOpen)}
      >
        <Image
          src={`${isOpen ? "/assets/close.svg" : "/assets/hamburger.svg"}`}
          alt="open menu"
          width={`${isOpen ? 20 : 25}`}
          height={`${isOpen ? 20 : 25}`}
        />
      </div>
      <AnimatePresence
        initial={false}
        mode={"wait"}
        onExitComplete={() => null}
      >
        {isOpen && <MobileMenu />}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar

function NavLink(props: Props) {
  return (
    <Link href={`${props.name}`}>
      <a className="text-body_st_rg lg:text-body_sm_rg text-white relative capitalize duration-300 after:absolute after:-bottom-1 after:block after:h-[2.5px] after:w-full after:bg-primary lg:after:bg-accent after:scale-0 hover:after:scale-100 after:duration-300 ">
        {props.name}
      </a>
    </Link>
  )
}

function Register() {
  return (
    <button className="text-body_st_rg lg:text-body_sm_rg text-white relative capitalize duration-300">
      <Link href={"#register"}>register</Link>
    </button>
  )
}

const menuVariant = {
  show: {
    x: [200, 0],
    opacity: [0, 1],
    transition: { duration: 0.7, delayChildren: 0.5 },
  },
  exit: {
    opacity: [1, 0],
    x: [0, 200],
    transition: { duration: 0.5, delayChildren: 0.1 },
  },
}

function MobileMenu() {
  return (
    <motion.div
      className="fixed top-0 right-0 w-3/4 h-full lg:hidden bg-secondary z-20 flex items-center justify-center flex-col gap-14"
      initial={{ opacity: 0 }}
      variants={menuVariant}
      whileInView={"show"}
      exit={"exit"}
    >
      <motion.div
        className="flex items-center justify-center flex-col gap-5"
        initial={{ opacity: 0 }}
        variants={menuVariant}
        whileInView={"show"}
        exit={"exit"}
      >
        {linkArray.map((item, index) => (
          <NavLink key={index} name={item} />
        ))}
      </motion.div>
      <motion.div
        className="flex items-center justify-center space-x-6"
        initial={{ opacity: 0 }}
        variants={menuVariant}
        whileInView={"show"}
        exit={"exit"}
      >
        <NavLink name="login" />
        <span className="h-6 bg-light_bg w-[1px]"></span>
        <motion.div
          className="rounded-full w-[130px] h-[52px] grid place-items-center bg-accent hover:bg-accent duration-150 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Register />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
