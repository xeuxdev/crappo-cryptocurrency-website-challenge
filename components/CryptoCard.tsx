import Image from "next/image"
type Props = {}

const CryptoCard = (props: Props) => {
  return (
    <div className="flex items-center flex-col w-full sm:w-[370px] h-[433px] rounded-2xl hover:bg-secondary px-6 py-12 duration-200 cursor-pointer group">
      {/* icon */}
      <div className="w-20 h-20 relative mb-12">
        <Image src={"/assets/bitcon.png"} alt="bitcoin" layout="fill" />
      </div>
      {/* tag */}
      <div className="w-[160px] h-12 space-x-2 flex items-center">
        <p className="text-h3 text-primary group-hover:text-white">Bitcoin</p>
        <p className="text-body_st_md text-gray_4 group-hover:text-gray_3">
          BTC
        </p>
      </div>
      <p className="text-body_sm_rg text-center text-gray_3 group-hover:text-gray_4">
        Digital currency in which a record of transactions is maintained.
      </p>
    </div>
  )
}

export default CryptoCard
