import NavBar from "../components/NavBar"
import Image from "next/image"
import SvgButton from "../components/SvgButton"
import { motion } from "framer-motion"

const heroVariant = {
  blackFriday: {
    hide: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  heroText: {
    hide: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  },
  heroImage: {
    hide: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
}

const HeroSection = () => {
  return (
    <section
      className="bg-[url('/assets/hero-bg.png')] h-full
       xl:h-[850px] px-5 md:px-7 xl:px-0 pt-8 md:pt-16 pb-16 lg:pb-0 border-white border
    "
    >
      <NavBar />
      <div className="container mt-10 md:mt-[50px]">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* text */}
          <div className="md:text-center lg:text-left xl:w-[588px] xl:h-[468px] mb-6 lg:mb-0">
            {/* black friday stuff */}
            <motion.div
              className="flex items-center h-9 w-fit xs:pr-2 sm:pr-5 lg:w-[365px] 
            rounded-full p-1 space-x-4 bg-white/10 mb-6"
              initial={heroVariant.blackFriday.hide}
              whileInView={heroVariant.blackFriday.show}
              viewport={{ once: true }}
            >
              <span className="h-full px-2 pt-[2px] pb-[2px] uppercase bg-white grid place-items-center text-primary rounded-full text-[12px] xs:text-body_sm_rg">
                75% save
              </span>
              <span className="text-[12px] xs:text-body_sm_rg text-white">
                For the Black Friday weekend
              </span>
            </motion.div>
            <motion.div
              initial={heroVariant.heroText.hide}
              whileInView={heroVariant.heroText.show}
              viewport={{ once: true }}
            >
              <h1 className="text-h3 md:text-h1 text-white mb-5">
                Fastest & secure platform to invest in crypto
              </h1>
              <p className="text-body_sm_rg text-gray_5 lg:w-[425px] mb-7 lg:mb-10">
                Buy and sell cryptocurrencies, trusted by 10M wallets with over
                $30 billion in transactions.
              </p>
              <SvgButton name="Try For FREE" />
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            className=" w-full h-[400px] md:h-[630px] lg:h-[550px] xl:w-[604px] xl:h-[585.15px] relative z-40"
            initial={heroVariant.heroImage.hide}
            whileInView={heroVariant.heroImage.show}
            viewport={{ once: true }}
          >
            <Image
              src={"/assets/hero-img.png"}
              alt="hero image"
              layout="fill"
              priority={true}
            />

            <div className="absolute hidden lg:flex w-full h-full -z-10 -bottom-[220px] -left-[300px] rotate-12">
              <Image src={"/assets/hero-ribbon-1.png"} alt="" layout="fill" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
