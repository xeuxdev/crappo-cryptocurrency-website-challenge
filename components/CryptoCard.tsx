import Image from "next/image"
import { useState } from "react"
import SvgButton from "./SvgButton"
type Props = {
  image: string
  name: string
  aka: string
  description: string
}

const CryptoCard = (props: Props) => {
  const [svg, setSvg] = useState(false)
  return (
    <div
      className="flex items-center flex-col w-full sm:w-[370px] h-[433px] rounded-2xl hover:bg-secondary px-6 py-12 duration-200 cursor-pointer group"
      onClick={() => setSvg(!svg)}
    >
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
        <p className="text-h3 text-primary group-hover:text-white capitalize">
          {props.name}
        </p>
        <p className="text-body_st_md text-gray_4 group-hover:text-gray_3 uppercase">
          {props.aka}
        </p>
      </div>
      <p className="text-body_sm_rg text-center text-gray_3 group-hover:text-gray_4 mb-6">
        {props.description}
      </p>
      {/*  */}
      {svg ? <SvgButton name="Start mining" /> : <InitCard />}
    </div>
  )
}

export default CryptoCard

function InitCard() {
  return (
    <button className="text-blue w-16  border-2 border-gray_3 rounded-full h-16 flex justify-center items-center">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.9999 34.0002C20.7367 34.0017 20.4758 33.9512 20.2321 33.8517C19.9885 33.7522 19.7668 33.6055 19.5799 33.4202C19.3925 33.2342 19.2437 33.013 19.1422 32.7693C19.0406 32.5256 18.9883 32.2642 18.9883 32.0002C18.9883 31.7361 19.0406 31.4747 19.1422 31.231C19.2437 30.9873 19.3925 30.7661 19.5799 30.5802L26.1999 24.0002L19.8399 17.3802C19.4674 17.0054 19.2584 16.4985 19.2584 15.9702C19.2584 15.4418 19.4674 14.9349 19.8399 14.5602C20.0259 14.3727 20.2471 14.2239 20.4908 14.1224C20.7345 14.0209 20.9959 13.9686 21.2599 13.9686C21.524 13.9686 21.7854 14.0209 22.0291 14.1224C22.2728 14.2239 22.494 14.3727 22.6799 14.5602L30.3999 22.5602C30.7664 22.934 30.9717 23.4367 30.9717 23.9602C30.9717 24.4837 30.7664 24.9863 30.3999 25.3602L22.3999 33.3602C22.2204 33.554 22.0043 33.7104 21.764 33.8203C21.5237 33.9301 21.264 33.9913 20.9999 34.0002V34.0002Z"
          fill="#3671E9"
        />
      </svg>
    </button>
  )
}
