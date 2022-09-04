import Image from "next/image"
const FeatureSection = () => {
  return (
    <section className="bg-primary w-full min-h-[865px] py-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-[99px] ">
          {/* card one */}
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
          {/* card two */}
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
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
