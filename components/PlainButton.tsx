import React from "react"
import { motion } from "framer-motion"

type Props = {
  name: string
}

const btnVariants = {
  hide: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}

const PlainButton = (props: Props) => {
  return (
    <motion.button
      className="h-[59px] px-6 py-4 capitalize bg-accent text-white rounded-full text-body_st_md"
      variants={btnVariants}
      initial="hide"
      whileInView={"show"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.25 }}
    >
      {props.name}
    </motion.button>
  )
}

export default PlainButton
