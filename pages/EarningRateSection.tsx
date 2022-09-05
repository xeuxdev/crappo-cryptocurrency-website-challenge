import PlainButton from "../components/PlainButton"
import {motion} from "framer-motion"

const EarningRateSection = () => {
  return (
    <>
      <section className="bg-primary h-[644px] xs:h-[582px] md:h-[495px] lg:h-[457px] w-full px-5 md:px-7 xl:px-0  ">
        <div className=" pt-20 lg:pt-[100px]">
          <div className="text-center md:w-[741px] space-y-6 mx-auto mb-16">
            <h3 className="text-h2 text-white ">Check how much you can earn</h3>
            <p className="text-body_st_rg text-gray_5 max-w-[620px] mx-auto">
              Let’s check your hash rate to see how much you will earn today,
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        {/* calculate */}
        <div className="lg:w-[942px] mx-auto">
          <form className="flex items-start lg:items-center flex-col lg:flex-row lg:space-x-12 bg-white w-full py-6 lg:py-0 min-h-[155px] mx-auto rounded-t-2xl  px-5 md:px-7 lg:px-12">
            <div className="h-[38px] w-full lg:w-[403px] space-y-2 relative mb-4 lg:mb-0">
              <input
                type="number"
                placeholder="Enter your hash rate"
                className="text-body_lg_rg text-primary placeholder:text-primary outline-none"
              />
              <span className="block w-full h-[1px] bg-gray_5 absolute left-0 bottom-0"></span>
            </div>
            <div className="h-[38px] w-full lg:w-[200px] space-y-2 relative mb-4 lg:mb-0">
              <select
                name="select"
                id="select"
                className="py-1 text-primary text-body_lg_rg outline-none pr-6"
              >
                <option value="TH/s">Th/s</option>
                <option value="GB/s">Gh/s</option>
                <option value="MB/s">Mh/s</option>
              </select>

              <span className="block w-full h-[1px] bg-gray_5 absolute left-0 bottom-0"></span>
            </div>
            <PlainButton name="calculate" />
          </form>
        </div>
      </section>
      {/* estimated revenue */}
      <section className=" px-5 md:px-7 xl:px-0 drop-shadow-custom mx-auto ">
        <div className="min-h-[216px] rounded-b-2xl w-full bg-white py-12 px-5 md:px-7 lg:px-12  mb-[100px] lg:w-[942px] mx-auto">
          <p className="text-accent text-title_sm">
            ESTIMATED 24 HOUR REVENUE:
          </p>
          <p className="tracking-[4%] text-h3">
            0.055 130 59 ETH
            <span className="text-accent">($1275)</span>
          </p>
          <p className="text-gray_3 text-body_sm_rg">
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
      </section>
    </>
  )
}

export default EarningRateSection
