import Image from "next/image"
import PlainButton from "../components/PlainButton"
import { motion } from "framer-motion"

import { whyVariants } from "../variants/whyVariants"

const WhySection = () => {
  return (
    <section className="bg-primary w-full min-h-[865px] py-[100px] relative px-5 md:px-7 xl:px-0 overflow-x-hidden ">
      <span
        className="block absolute top-16 md:top-24 -right-36 md:-right-28 w-[260px] h-[260px]"
        aria-hidden="true"
      >
        <Image src={"/assets/why-model-1.png"} alt="" layout="fill" />
      </span>
      <span
        className="absolute w-[135px] h-[135px] left-[75%] lg:left-[90%] top-[457px] lg:top-[620px]"
        aria-hidden="true"
      >
        <Image src={"/assets/why-model-2.png"} alt="" layout="fill" />
      </span>

      <div className="container">
        <motion.div
          className="flex items-center flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-[99px] mb-24"
          initial={whyVariants.numbers.hide}
          whileInView={whyVariants.numbers.show}
          viewport={{ once: true }}
        >
          <FeatureNumbers />
        </motion.div>

        {/* content */}
        <div className="flex items-center justify-center flex-col-reverse lg:flex-row lg:space-x-[70px] lg:h-[473px] z-40">
          {/* illustration */}
          <motion.div
            className="w-full h-[330px] md:h-[473px] lg:h-full lg:w-[650px] relative"
            initial={whyVariants.illustration.hide}
            whileInView={whyVariants.illustration.show}
            viewport={{ once: true }}
          >
            <Image
              src={"/assets/why-img.png"}
              alt="illustration on why to choose crappo"
              layout="fill"
            />
          </motion.div>
          {/* text */}
          <div className="lg:h-[318.89px] lg:w-[480px] text-center lg:text-left">
            <motion.h2
              className="text-h3 sm:text-h2 text-white mb-6"
              initial={whyVariants.head.hide}
              whileInView={whyVariants.head.show}
              viewport={{ once: true }}
            >
              Why you should choose CRAPPO
            </motion.h2>
            <motion.p
              className="text-gray_5 text-body_sm_rg mb-8"
              initial={whyVariants.para.hide}
              whileInView={whyVariants.para.show}
              viewport={{ once: true }}
            >
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </motion.p>
            <PlainButton name="learn more" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySection

const FeatureNumbers = () => {
  return (
    <>
      <div className="w-[334px] h-[92px] flex items-center space-x-6">
        <div className="w-20 h-20 rounded-full bg-white/10 grid place-items-center">
          <div className="w-8 h-8 relative">
            <Image
              src={"/assets/icon-barChat.svg"}
              alt="currency exchanged"
              layout="fill"
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-h2 text-white">$30B</p>
          <p className="text-body_sm_rg text-gray_5">
            Digital Currency Exchanged
          </p>
        </div>
      </div>
      <div className="w-[334px] h-[92px] flex items-center space-x-6">
        <div className="w-20 h-20 rounded-full bg-white/10 grid place-items-center">
          <div className="w-10 h-10 relative">
            <Image
              src={"/assets/icon-person.svg"}
              alt="wallets investor"
              layout="fill"
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-h2 text-white">10M+</p>
          <p className="text-body_sm_rg text-gray_5">
            Trusted Wallets Investor
          </p>
        </div>
      </div>
      <div className="w-[334px] h-[92px] flex items-center space-x-6">
        <div className="w-20 h-20 rounded-full bg-white/10 grid place-items-center">
          <div className="w-10 h-10 relative">
            <Image
              src={"/assets/icon-earth.svg"}
              alt="countries supported"
              layout="fill"
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-h2 text-white">195</p>
          <p className="text-body_sm_rg text-gray_5">Countries Supported</p>
        </div>
      </div>
    </>
  )
}
