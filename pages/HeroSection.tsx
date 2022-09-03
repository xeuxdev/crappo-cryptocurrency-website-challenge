import NavBar from "../components/NavBar"
import Image from "next/image"
import SvgButton from "../components/SvgButton"

const HeroSection = () => {
  return (
    <section
      className="bg-primary h-full min-h-[850px] px-5 md:px-7 xl:px-0 pt-8 md:pt-16
    "
    >
      <NavBar />
      <div className="container mt-10 md:mt-[50px]">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* text */}
          <div className="lg:flex-[50%] xl:w-[588px] xl:h-[468px]">
            {/* black friday stuff */}
            <div className="flex items-center h-9 w-full lg:w-[365px] rounded-full p-1 space-x-4 bg-white/10 mb-6">
              <span className="h-full px-2 pt-[2px] pb-[2px] uppercase bg-white grid place-items-center text-primary rounded-full text-body_sm_rg">
                75% save
              </span>
              <span className="text-body_sm_rg text-white">
                For the Black Friday weekend
              </span>
            </div>
            <div>
              <h1 className="text-h3 md:text-h1 text-white mb-5">
                Fastest & secure <br />
                platform to invest <br />
                in crypto
              </h1>
              <p className="text-body_sm_rg text-white lg:w-[425px] mb-7 lg:mb-10">
                Buy and sell cryptocurrencies, trusted by 10M wallets with over
                $30 billion in transactions.
              </p>
              <SvgButton name="Try For FREE" />
            </div>
          </div>
          {/* image */}
          <div className="flex-[50%] xl:w-[604px] xl:h-[585.15px]"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
