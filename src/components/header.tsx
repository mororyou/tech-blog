import Image from 'next/image'
import Link from 'next/link'
import { NAVILISTS } from '../utils/const'
import { NaviChild } from './navichild'

const Header = () => {
  return (
    <div className="flex min-h-[100px] w-full items-center justify-center px-2 md:w-3/5 md:justify-between md:px-12">
      <Link href={'/'}>
        <Image
          src={`/images/logo/color-text-black.svg`}
          width={235.5}
          height={50}
          alt="techFountain logo"
          loading="lazy"
        />
      </Link>
      <ul className="hidden items-center justify-center gap-x-16 md:flex">
        {NAVILISTS &&
          NAVILISTS.map((item) => (
            <NaviChild
              span={item.span}
              engSpan={item.engspan}
              link={item.link}
              key={item.engspan}
            />
          ))}
      </ul>
    </div>
  )
}

export default Header
