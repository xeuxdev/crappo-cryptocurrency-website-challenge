import Image from "next/image"
type Props = {
  name: string
}
const SvgButton = ({ name }: Props) => {
  return (
    <button className="flex items-center space-x-6 w-[205px] h-16 pl-6 text-white bg-accent rounded-full">
      <span className="text-body_st_md">{name}</span>
      <span className="relative w-8 h-8">
        <Image
          src={"/assets/arrowRight.svg"}
          layout="fill"
          alt="try for free button"
        />
      </span>
    </button>
  )
}

export default SvgButton
