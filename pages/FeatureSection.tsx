import Image from "next/image"
const FeatureSection = () => {
  return (
    <section className="bg-primary w-full min-h-[865px] py-[100px] relative px-5 md:px-7 xl:px-0 overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start lg:grid-cols-3 space-y-10 lg:space-y-0 md:space-x-[99px] ">
          <FeatureNumbers />
        </div>
        <span className="block absolute top-24 -right-28 w-[260px] h-[260px]">
          <Image src={"/assets/why-model-1.png"} alt="" layout="fill" />
        </span>
        {/* content */}
        <div className="flex items-center justify-center flex-col lg:flex-row lg:space-x-[70px] lg:h-[473px] border-white border">
          {/* illustration */}
          <div className="lg:h-full lg:w-[650px] border-white border"></div>
          <div className="lg:h-[318.89px] lg:w-[480px] border-white border"></div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

const FeatureNumbers = () => {
  return (
    <>
      <div className="w-[334px] h-[92px] flex items-center space-x-6 mb-24">
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
