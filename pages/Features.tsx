import PlainButton from "../components/PlainButton"
import Image from "next/image"
import { motion } from "framer-motion"
import { featuresVariant } from "../variants/featuresVariant"

const Features = () => {
  return (
    <section className="features bg-secondary h-full xl:h-[1874px] w-full py-[100px] relative  before:absolute before:w-[686px] before:h-[686px] before:bg-[url('/assets/features-circle-1.png')] before:top-0 before:left-[151px] before:bg-no-repeat after:absolute after:w-[325px] after:h-[325px] after:bg-[url('/assets/features-circle-2.png')] after:bottom-0 after:-right-7 after:bg-no-repeat">
      {/* heading */}
      <motion.header
        className="container text-center max-w-[758px] text-h3 lg:text-h2 text-white mb-[100px] px-5 md:px-7 xl:px-0 relative z-20"
        initial={featuresVariant.head.hide}
        whileInView={featuresVariant.head.show}
        viewport={{ once: true }}
      >
        Market sentiments, portfolio, and run the infrastructure of your choice
      </motion.header>

      {/* feature 1 */}
      <div className="container min-h-[427px] flex flex-col lg:flex-row gap-[100px] mb-[120px] px-5 md:px-7 xl:px-0">
        {/* text */}
        <motion.div
          className="w-full sm:w-[454px] h-[219px] text-center lg:text-left lg:pt-6"
          initial={featuresVariant.left.hide}
          whileInView={featuresVariant.left.show}
          viewport={{ once: true }}
        >
          <p className="text-h3 text-white mb-6">Invest Smart</p>
          <p className="text-body_sm_rg text-gray_5 mb-8 sm:w-[408px]">
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.
          </p>
          <PlainButton name="Learn More" />
        </motion.div>
        {/* illustration */}
        <motion.div
          className="w-full h-[400px] sm:w-[580px] sm:h-[427px] relative"
          initial={featuresVariant.fade.hide}
          whileInView={featuresVariant.fade.show}
          viewport={{ once: true }}
        >
          <Image src={"/assets/feature-1-img.png"} alt="chart" layout="fill" />
        </motion.div>
      </div>

      {/* feature-2 */}
      <div className="min-h-[453px] flex items-center flex-col gap-[89px] lg:flex-row-reverse mb-[120px] px-5 md:px-7 xl:px-0">
        {/* text */}
        <motion.div
          className="w-full sm:w-[456px] h-[247px] text-center lg:text-left"
          initial={featuresVariant.right.hide}
          whileInView={featuresVariant.right.show}
          viewport={{ once: true }}
        >
          <p className="text-h3 text-white mb-6">Detailed Statistics</p>
          <p className="text-body_sm_rg text-gray_5 mb-8 sm:w-[408px]">
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <PlainButton name="Learn More" />
        </motion.div>
        {/* illustraation */}
        <motion.div
          className="w-full md:w-[710px] h-[300px] md:h-[453px] relative"
          initial={featuresVariant.fade.hide}
          whileInView={featuresVariant.fade.show}
          viewport={{ once: true }}
        >
          <Image
            src={"/assets/feature-2-img.png"}
            alt="Detailed statistics"
            layout="fill"
          />
        </motion.div>
      </div>

      {/* feature-3 */}
      <div className="container min-h-[334px] flex flex-col lg:flex-row gap-[100px] lg:gap-16 relative z-20">
        {/* text */}
        <motion.div
          className="w-full sm:w-[454px] h-[295px] text-center lg:text-left lg:pt-6 px-5 md:px-7 xl:px-0"
          initial={featuresVariant.left.hide}
          whileInView={featuresVariant.left.show}
          viewport={{ once: true }}
        >
          <p className="text-h3 text-white mb-6">
            Grow your profit and track your investments
          </p>
          <p className="text-body_sm_rg text-gray_5 mb-8 sm:w-[408px]">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <PlainButton name="Learn More" />
        </motion.div>
        {/* illustration */}
        <motion.div
          className="w-full h-[250px] md:w-[682px] md:h-[334px] relative"
          initial={featuresVariant.fade.hide}
          whileInView={featuresVariant.fade.show}
          viewport={{ once: true }}
        >
          <Image src={"/assets/feature-3-img.png"} alt="chart" layout="fill" />
        </motion.div>
      </div>
    </section>
  )
}

export default Features
