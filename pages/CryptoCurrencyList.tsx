import Image from "next/image"
import CryptoCard from "../components/CryptoCard"

const CryptoCurrencyList = () => {
  return (
    <section className="min-h-[617px] container px-5 md:px-7 xl:px-0 mb-[100px]">
      <div className="heading text-center max-w-[741px] mx-auto mb-16">
        <h4 className="text-h3 sm:text-h2 text-primary ">
          Trade securely and market the high growth cryptocurrencies.
        </h4>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
        {/* bitcoin */}
        <CryptoCard
          image="bitcon"
          name="Bitcoin"
          aka="BTC"
          description="Digital currency in which a record of transactions is maintained."
        />
        <CryptoCard
          image="ethereum"
          name="ethereum"
          aka="ETH"
          description="Blockchain technology to create and run decentralized digital applications."
        />
        <CryptoCard
          image="litecoin"
          name="litecoin"
          aka="LTC"
          description="Cryptocurrency that enables instant payments to anyone in the world."
        />
      </div>
    </section>
  )
}

export default CryptoCurrencyList
