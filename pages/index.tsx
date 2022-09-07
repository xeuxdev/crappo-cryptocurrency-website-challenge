import type { NextPage } from "next"
import Head from "next/head"
import CryptoCurrencyList from "./CryptoCurrencyList"
import EarningRateSection from "./EarningRateSection"
import Features from "./Features"
import HeroSection from "./HeroSection"
import WhySection from "./WhySection"

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

      <main className={"scroll-smooth overflow-x-hidden"}>
        <HeroSection />
        <WhySection />
        <EarningRateSection />
        <CryptoCurrencyList />
        <Features />
      </main>

      <footer className={""}></footer>
    </>
  )
}

export default Home
