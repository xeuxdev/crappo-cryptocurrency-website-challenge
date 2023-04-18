import type { NextPage } from "next"
import Head from "next/head"
import Footer from "../components/pageComponents/Footer"
import HeroSection from "../components/pageComponents/HeroSection"
import WhySection from "../components/pageComponents/WhySection"
import EarningRateSection from "../components/pageComponents/EarningRateSection"
import CryptoCurrencyList from "../components/pageComponents/CryptoCurrencyList"
import Features from "../components/pageComponents/Features"
import StartMining from "../components/pageComponents/StartMining"


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crappo Crytocurrency App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="crappo crypto-currency demo" />
        <meta name="keywords" content="crypto-currency" />
        <meta name="author" content="Tochukwu John"></meta>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <main className={"scroll-smooth overflow-x-hidden font-rubik"}>
        <HeroSection />
        <WhySection />
        <EarningRateSection />
        <CryptoCurrencyList />
        <Features />
        <StartMining />
      </main>

      <footer className={" overflow-x-hidden"}>
        <Footer />
      </footer>
    </>
  )
}

export default Home
