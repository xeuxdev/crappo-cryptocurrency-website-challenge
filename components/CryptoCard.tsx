import Image from "next/image"
import SvgButton from "./SvgButton"
type Props = {
  image: string
  name: string
  aka: string
  description: string
}

const CryptoCard = (props: Props) => {
  return (
    <div className="flex items-center flex-col w-full sm:w-[370px] h-[433px] rounded-2xl hover:bg-secondary px-6 py-12 duration-200 cursor-pointer group">
      {/* icon */}
      <div className="w-20 h-20 relative mb-12">
        <Image
          src={`/assets/${props.image}.png`}
          alt={props.image}
          layout="fill"
        />
      </div>
      {/* tag */}
      <div className="w-[160px] h-12 space-x-2 flex items-center mb-4">
        <p className="text-h3 text-primary group-hover:text-white">
          {props.name}
        </p>
        <p className="text-body_st_md text-gray_4 group-hover:text-gray_3">
          {props.aka}
        </p>
      </div>
      <p className="text-body_sm_rg text-center text-gray_3 group-hover:text-gray_4 mb-6">
        {props.description}
      </p>
      <SvgButton name="Start mining" />
    </div>
  )
}

export default CryptoCard
