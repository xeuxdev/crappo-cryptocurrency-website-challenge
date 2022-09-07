import PlainButton from "../components/PlainButton"
import { motion } from "framer-motion"
import { earningRateVariant } from "../variants/earningRateVariant"

const EarningRateSection = () => {
  return (
    <>
      <section className="bg-primary h-[558px] xs:h-[559px] sm:h-[400px] md:h-[495px] lg:h-[457px] w-full px-5 md:px-7 xl:px-0 overflow-hidden drop-shadow-custom ">
        <motion.div
          className=" pt-20 lg:pt-[100px]"
          initial={earningRateVariant.head.hide}
          whileInView={earningRateVariant.head.show}
          viewport={{ once: true }}
        >
          <div className="text-center md:w-[741px] space-y-6 mx-auto mb-16">
            <h3 className="text-h3 sm:text-h2 text-white ">
              Check how much you can earn
            </h3>
            <p className="text-body_st_rg text-gray_5 max-w-[620px] mx-auto">
              Let’s check your hash rate to see how much you will earn today,
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </motion.div>

        {/* calculate */}
        <motion.div
          className="lg:w-[942px] mx-auto"
          initial={earningRateVariant.calculate.hide}
          whileInView={earningRateVariant.calculate.show}
          viewport={{ once: true }}
        >
          <form className="flex items-start md:items-center flex-col lg:flex-row lg:space-x-12 bg-white w-full py-6 lg:py-0 min-h-[155px] mx-auto rounded-t-2xl  px-5 md:px-7 lg:px-12">
            <div className="h-[38px] w-full md:w-[403px] space-y-2 relative mb-4 lg:mb-0">
              <input
                type="number"
                placeholder="Enter your hash rate"
                className="text-body_lg_rg text-primary placeholder:text-primary outline-none"
              />
              <span className="block w-full h-[1px] bg-gray_5 absolute left-0 bottom-0"></span>
            </div>
            <div className="h-[38px] w-full md:w-[200px] space-y-2 relative mb-4 lg:mb-0">
              <select
                name="select"
                id="select"
                className="py-1 text-primary text-body_lg_rg outline-none pl-auto"
              >
                <option value="TH/s">Th/s</option>
                <option value="GB/s">Gh/s</option>
                <option value="MB/s">Mh/s</option>
              </select>

              <span className="block w-full h-[1px] bg-gray_5 absolute left-0 bottom-0"></span>
            </div>
            <PlainButton name="calculate" />
          </form>
        </motion.div>
      </section>
      {/* estimated revenue */}
      <motion.section
        className=" px-5 md:px-7 xl:px-0 drop-shadow-custom mx-auto "
        initial={earningRateVariant.revenue.hide}
        whileInView={earningRateVariant.revenue.show}
        viewport={{ once: true }}
      >
        <div className="min-h-[216px] rounded-b-2xl w-full bg-white py-12 px-5 md:px-7 lg:px-12  mb-[100px] lg:w-[942px] mx-auto">
          <p className="text-accent text-title_sm">
            ESTIMATED 24 HOUR REVENUE:
          </p>
          <p className="flex flex-col sm:flex-rowtracking-[4%] text-h3 break-all whitespace-normal">
            <span>0.05513059ETH</span>
            <span className="text-accent ml-3">($1275)</span>
          </p>
          <p className="text-gray_3 text-body_sm_rg">
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
      </motion.section>
    </>
  )
}

export default EarningRateSection
