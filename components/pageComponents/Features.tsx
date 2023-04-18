import Image from "next/image"
import { motion } from "framer-motion"
import PlainButton from "../PlainButton"
//@ts-ignore
const featureVariant = {
  left: {
    hide: { opacity: 0, x: -150 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.75, delay: 0.15, ease: "easeInOut" },
    },
  },
  right: {
    hide: { opacity: 0, x: 150 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.75, delay: 0.15, ease: "easeInOut" },
    },
  },

  fade: {
    hide: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.75, delay: 0.15, ease: "easeInOut" },
    },
  },
  head: {
    hide: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5 },
    },
  },
}

const Features = () => {
  return (
    <section className="features bg-secondary h-full xl:h-[1874px] w-full py-[100px] relative  before:absolute before:w-[686px] before:h-[686px] before:bg-[url('/assets/features-circle-1.png')] before:top-0 before:left-[151px] before:bg-no-repeat after:absolute after:w-[325px] after:h-[325px] after:bg-[url('/assets/features-circle-2.png')] after:bottom-0 after:-right-7 after:bg-no-repeat">
      {/* heading */}
      <motion.header
        className="container text-center max-w-[758px] text-h3 lg:text-h2 text-white mb-[100px] px-5 md:px-7 xl:px-0 relative z-20"
        initial={featureVariant.head.hide}
        whileInView={featureVariant.head.show}
        viewport={{ once: true }}
      >
        Market sentiments, portfolio, and run the infrastructure of your choice
      </motion.header>

      {/* feature 1 */}
      <div className="container min-h-[427px] flex flex-col lg:flex-row gap-[100px] mb-[120px] px-5 md:px-7 xl:px-0">
        {/* text */}
        <motion.div
          className="w-full sm:w-[454px] h-[219px] text-center mx-auto lg:mx-0 lg:text-left lg:pt-6"
          initial={featureVariant.left.hide}
          whileInView={featureVariant.left.show}
          viewport={{ once: true }}
        >
          <p className="text-h3 text-white mb-6">Invest Smart</p>
          <p className="text-body_sm_rg text-gray_5 mb-8 sm:w-[408px] mx-auto lg:mx-0">
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.
          </p>
          <PlainButton name="Learn More" />
        </motion.div>
        {/* illustration */}
        <motion.div
          className="w-full h-[400px] sm:w-[580px] sm:h-[427px] mx-auto lg:mx-0 relative"
          initial={featureVariant.fade.hide}
          whileInView={featureVariant.fade.show}
          viewport={{ once: true }}
        >
          <Image src={"/assets/feature-1-img.png"} alt="chart" layout="fill" />
        </motion.div>
      </div>

      {/* feature-2 */}
      <div className="min-h-[453px] flex items-center flex-col gap-[89px] lg:flex-row-reverse mb-[120px] px-5 md:px-7 xl:px-0 relative">
        {/* text */}
        <motion.div
          className="w-full sm:w-[456px] h-[247px] mx-auto lg:mx-0 text-center lg:text-left"
          initial={featureVariant.right.hide}
          whileInView={featureVariant.right.show}
          viewport={{ once: true }}
        >
          <p className="text-h3 text-white mb-6">Detailed Statistics</p>
          <p className="text-body_sm_rg text-gray_5 mb-8 sm:w-[408px] mx-auto lg:mx-0">
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <PlainButton name="Learn More" />
        </motion.div>
        {/* illustraation */}
        <div className="w-full md:w-[710px] h-[300px] mx-auto lg:mx-0 md:h-[453px] relative lg:absolute left-0">
          <motion.div
            className="relative w-full md:w-[555px] xl:w-[710px] h-[300px] mx-auto lg:mx-0 md:h-[453px] "
            initial={featureVariant.fade.hide}
            whileInView={featureVariant.fade.show}
            viewport={{ once: true }}
          >
            <Image
              src={"/assets/feature-2-img.png"}
              alt="Detailed statistics"
              layout="fill"
            />
          </motion.div>
        </div>
      </div>

      {/* feature-3 */}
      <div className="container min-h-[334px] flex flex-col lg:flex-row gap-[100px] lg:gap-16 relative z-20">
        {/* text */}
        <motion.div
          className="w-full sm:w-[454px] h-[295px] text-center mx-auto lg:mx-0 lg:text-left lg:pt-6 px-5 md:px-7 xl:px-0"
          initial={featureVariant.left.hide}
          whileInView={featureVariant.left.show}
          viewport={{ once: true }}
        >
          <p className="text-h3 text-white mb-6">
            Grow your profit and track your investments
          </p>
          <p className="text-body_sm_rg text-gray_5 mb-8 sm:w-[408px] mx-auto lg:mx-0">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <PlainButton name="Learn More" />
        </motion.div>
        {/* illustration */}
        <motion.div
          className="w-full h-[250px] md:w-[682px] mx-auto lg:mx-0 md:h-[334px] relative"
          initial={featureVariant.fade.hide}
          whileInView={featureVariant.fade.show}
          viewport={{ once: true }}
        >
          <Image src={"/assets/feature-3-img.png"} alt="chart" layout="fill" />
        </motion.div>
      </div>
    </section>
  )
}

export default Features
