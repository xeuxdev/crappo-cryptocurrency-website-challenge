import NavBar from "../NavBar"
import Image from "next/image"
import SvgButton from "../SvgButton"
import { motion } from "framer-motion"
import heroVariant from "../../variants/heroVariants"
const HeroSection = () => {
  return (
    <section
      className="bg-[url('/assets/hero-bg.png')] h-full
       xl:h-[850px] px-5 md:px-7 xl:px-0 pt-8 md:pt-16 pb-16 lg:pb-0
    "
    >
      <NavBar />
      <div className="container mt-10 md:mt-[50px]">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* text */}
          <div className="md:text-center lg:text-left xl:w-[588px] xl:h-[468px] mb-6 lg:mb-0">
            {/* black friday stuff */}
            <motion.div
              className="flex items-center h-9 w-[82%] lg:w-[365px] 
            rounded-full p-1 space-x-4 bg-white/10 mb-6"
              initial={heroVariant.blackFriday.hide}
              whileInView={heroVariant.blackFriday.show}
              viewport={{ once: true }}
            >
              <span className="h-full px-2 pt-[2px] pb-[2px] uppercase bg-white grid place-items-center text-primary rounded-full text-[12px] xs:text-body_sm_rg">
                75% save
              </span>
              <span className="text-[12px] xs:text-body_sm_rg text-white xs:pr-2 sm:pr-5 ">
                For the Black Friday weekend
              </span>
            </motion.div>
            <div>
              <motion.h1
                className="text-h3 md:text-h1 md:text-center lg:text-left text-white mb-5"
                initial={heroVariant.heroText.hide}
                whileInView={heroVariant.heroText.show}
                viewport={{ once: true }}
              >
                Fastest & secure platform to invest in crypto
              </motion.h1>
              <motion.p
                className="text-body_sm_rg text-gray_5 lg:w-[425px] mb-7 lg:mb-10"
                initial={heroVariant.heroPara.hide}
                whileInView={heroVariant.heroPara.show}
                viewport={{ once: true }}
              >
                Buy and sell cryptocurrencies, trusted by 10M wallets with over
                $30 billion in transactions.
              </motion.p>
              <SvgButton name="Try For FREE" />
            </div>
          </div>
          {/* image */}
          <motion.div
            className=" w-full h-[400px] md:h-[630px] lg:h-[550px] xl:w-[604px] xl:h-[585.15px] relative z-30"
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

            <div className="absolute hidden lg:flex w-full h-full -z-10 -bottom-[280px] -left-[400px] rotate-12">
              <Image src={"/assets/hero-ribbon-1.png"} alt="" layout="fill" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
