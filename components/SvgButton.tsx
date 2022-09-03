import Image from "next/image"
import { motion } from "framer-motion"
type Props = {
  name: string
}
const svgVariant = {
  hide: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  hideName: { opacity: 0, x: 100 },
  showName: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}
const SvgButton = ({ name }: Props) => {
  return (
    <motion.button
      className="flex items-center space-x-6 w-[205px] h-16 pl-6 text-white bg-accent rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.25 }}
    >
      <motion.span
        className="text-body_st_md"
        variants={svgVariant}
        initial="hideName"
        whileInView={"showName"}
      >
        {name}
      </motion.span>
      <motion.span
        className="relative w-8 h-8"
        variants={svgVariant}
        initial="hide"
        whileInView={"show"}
      >
        <Image
          src={"/assets/arrowRight.svg"}
          layout="fill"
          alt="try for free button"
        />
      </motion.span>
    </motion.button>
  )
}

export default SvgButton
