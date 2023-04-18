import { motion } from "framer-motion"
import { useState } from "react"
import { startMiningvariant } from "../../variants/startMiningVariant"

const StartMining = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (!email || email === "") {
      setError("Please Enter Your Email")
    } else if (!email.match(pattern)) {
      setError("Please enter a Valid Email")
    } else {
      setError("")
    }
  }
  return (
    <section className="bg-primary min-h-[382px] lg:h-[382px] py-[88px] px-5 md:px-7 xl:px-0 relative before:absolute before:inset-0 before:h-full before:w-full before:bg-[url('/assets/newsletter-bg.png')] before:bg-no-repeat">
      <div className="container">
        <motion.div
          className="min-h-[216px] relative bg-accent px-6 md:px-10 lg:px-12 py-12  rounded-2xl before:absolute before:top-0 before:left-5 before:h-[258.7px] before:w-[160px] before:bg-[url('/assets/eth.svg')] before:bg-no-repeat after:absolute after:-bottom-[50.24px] after:right-[15px] after:h-[185.24px] after:w-[140px] after:bg-[url('/assets/bitcoin.svg')] after:bg-no-repeat"
          initial={startMiningvariant.fade.hide}
          whileInView={startMiningvariant.fade.show}
          viewport={{ once: true }}
        >
          {/* text */}
          <div className="text flex items-center flex-col lg:flex-row gap-9 relative z-20">
            {/* start mining */}
            <motion.div
              className="w-full sm:w-[501px] min-h-[120px] text-center lg:text-left space-y-4 text-white"
              initial={startMiningvariant.left.hide}
              whileInView={startMiningvariant.left.show}
              viewport={{ once: true }}
            >
              <h6 className="text-h3 ">Start mining now</h6>
              <p className="text-body_sm_rg max-w-[348px] mx-auto lg:mx-0">
                Join now with CRAPPO to get the latest news and start mining now
              </p>
            </motion.div>
            {/* email */}
            <motion.div
              className="w-full sm:w-[566px] min-h-[55px]"
              initial={startMiningvariant.right.hide}
              whileInView={startMiningvariant.right.show}
              viewport={{ once: true }}
            >
              <form
                className="w-full gap-10 flex items-center flex-col lg:flex-row "
                onSubmit={handleSubmit}
              >
                <div className="h-[38px] w-full md:w-[374px] space-y-2 relative">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    onFocus={() => setError("")}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="text-body_sm_rg text-white placeholder:text-white/40 bg-accent outline-none"
                  />
                  <span className="absolute -top-6 left-0 block text-red text-[14px] italic">
                    {error}
                  </span>

                  <span className="block w-full h-[1px] bg-gray_5 absolute left-0 bottom-0"></span>
                </div>
                <button className="py-[14px] px-[32px] h-[55px] w-[152px] text-primary bg-white text-body_st_md rounded-full capitalize">
                  subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StartMining
