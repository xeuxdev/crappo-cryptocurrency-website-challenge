import Image from "next/image"
import Link from "next/link"

type Props = {
  name: String
}

const quickLinks = ["home", "products", "about", "features", "contact"]
const resources = [
  "download whitepaper",
  "smart token",
  "blockchain explorer",
  "crypto api",
  "interest",
]

const Footer = () => {
  return (
    <section className="bg-primary lg:h-[552px] w-full ">
      <div className="container px-5 md:px-7 xl:px-0 ">
        <div className="flex items-center flex-col lg:flex-row lg:items-start pt-20 pb-20 lg:pb-[120px]">
          {/* logo */}
          <div className="logo w-[135px] h-[40px] relative mb-14 lg:mb-0 lg:mr-[171px]">
            <Image src={"/assets/logo.svg"} alt="crappo logo" layout="fill" />
          </div>
          {/* quick link */}
          <div className="md:w-[200px] md:h-[244px] space-y-6 mb-10 lg:mb-0 lg:mr-9 ">
            <p className="text-body_lg_md text-white text-center lg:text-left">
              Quick Link
            </p>
            <div className="flex justify-center items-center lg:items-start lg:justify-start flex-col">
              {quickLinks.map((link, index) => (
                <FooterLinks key={index} name={link} />
              ))}
            </div>
          </div>
          {/* resources */}
          <div className="md:w-[200px] md:h-[244px] space-y-6 mb-10 lg:mb-0 ">
            <p className="text-body_lg_md text-white text-center lg:text-left">
              Resources
            </p>
            <div className="flex justify-center items-center lg:items-start lg:justify-start flex-col">
              {resources.map((resource, index) => (
                <FooterLinks key={index} name={resource} />
              ))}
            </div>
          </div>
          {/* payment methods */}
          <div className="w-[355px] h-[200px] space-y-10 lg:ml-auto">
            <p className="text-title_lg text-white text-center lg:text-left">
              We accept following payment systems
            </p>
            {/* image  */}
            <div className="flex items-center justify-around md:justify-start md:space-x-6">
              <div>
                <Image
                  src={"/assets/visa.png"}
                  alt="we accept visa cards"
                  width={96}
                  height={64}
                />
              </div>
              <div>
                <Image
                  src={"/assets/mastercard.png"}
                  alt="we accept mastercard cards"
                  width={96}
                  height={64}
                />
              </div>
              <div>
                <Image
                  src={"/assets/bitcoin.png"}
                  alt="we accept bitcoin cards"
                  width={96}
                  height={64}
                />
              </div>
            </div>
          </div>
        </div>
        {/* footer copyright and icon */}
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div>
            <p className="text-body_sm_rg text-white mb-4 lg:mb-0">
              ©2021 CRAPPO. All rights reserved
            </p>
          </div>
          <div className="flex items-center space-x-8 pb-6 lg:pb-0">
            <SocialIcon name="facebook" />
            <SocialIcon name="instagram" />
            <SocialIcon name="youtube" />
            <SocialIcon name="twitter" />
            <SocialIcon name="linkedin" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

const FooterLinks = (props: Props) => {
  return (
    <Link href={`${props.name}`}>
      <a className="text-gray_6 text-[1rem] w-fit leading-[38px] capitalize hover:text-accent duration-300">
        {props.name}
      </a>
    </Link>
  )
}

const SocialIcon = (props: Props) => {
  return (
    <div className="block">
      <Image src={`/assets/${props.name}.svg`} alt="" width={24} height={24} />
    </div>
  )
}
