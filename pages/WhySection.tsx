import Image from "next/image"
import PlainButton from "../components/PlainButton"
const WhySection = () => {
  return (
    <section className="bg-primary w-full min-h-[865px] py-[100px] relative px-5 md:px-7 xl:px-0 overflow-x-hidden">
      <div className="container">
        <div className="flex items-center flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-[99px] mb-24">
          <FeatureNumbers />
        </div>
        <span className="block absolute top-24 -right-28 w-[260px] h-[260px]">
          <Image src={"/assets/why-model-1.png"} alt="" layout="fill" />
        </span>
        {/* content */}
        <div className="flex items-center justify-center flex-col-reverse lg:flex-row lg:space-x-[70px] lg:h-[473px]">
          {/* illustration */}
          <div className="w-full h-[330px] md:h-[473px] lg:h-full lg:w-[650px] relative">
            <Image
              src={"/assets/why-img.png"}
              alt="illustration on why to choose crappo"
              layout="fill"
            />
          </div>
          {/* text */}
          <div className="lg:h-[318.89px] lg:w-[480px] text-center lg:text-left">
            <h2 className="text-h2 text-white mb-6">
              Why you should choose CRAPPO
            </h2>
            <p className="text-gray_5 text-body_sm_rg mb-8">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
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
