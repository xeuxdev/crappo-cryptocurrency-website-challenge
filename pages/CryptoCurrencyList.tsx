import CryptoCard from "../components/CryptoCard"
import { cryptoCardVariants } from "../variants/cryptoCardVariant"
import { motion } from "framer-motion"

const CryptoCurrencyList = () => {
  return (
    <section className="min-h-[617px] container px-5 md:px-7 xl:px-0 mb-[100px]">
      <motion.header
        className="heading text-center max-w-[741px] mx-auto mb-16"
        initial={cryptoCardVariants.head.hide}
        whileInView={cryptoCardVariants.head.show}
        viewport={{ once: true }}
      >
        <h4 className="text-h3 sm:text-h2 text-primary ">
          Trade securely and market the high growth cryptocurrencies.
        </h4>
      </motion.header>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
        {/* bitcoin */}
        <motion.div
          initial={cryptoCardVariants.left.hide}
          whileInView={cryptoCardVariants.left.show}
        >
          <CryptoCard
            image="bitcon"
            name="Bitcoin"
            aka="BTC"
            description="Digital currency in which a record of transactions is maintained."
          />
        </motion.div>
        <motion.div
          initial={cryptoCardVariants.fade.hide}
          whileInView={cryptoCardVariants.fade.show}
        >
          <CryptoCard
            image="litecoin"
            name="litecoin"
            aka="LTC"
            description="Cryptocurrency that enables instant payments to anyone in the world."
          />
        </motion.div>
        <motion.div
          initial={cryptoCardVariants.right.hide}
          whileInView={cryptoCardVariants.right.show}
        >
          <CryptoCard
            image="ethereum"
            name="ethereum"
            aka="ETH"
            description="Blockchain technology to create and run decentralized digital applications."
          />
        </motion.div>
      </div>
    </section>
  )
}

export default CryptoCurrencyList
