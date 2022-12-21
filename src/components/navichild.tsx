import { FC } from 'react'
import Link from 'next/link'

type Props = {
  span: string
  engSpan: string
  link: string
}

export const NaviChild: FC<Props> = ({ span, engSpan, link }) => {
  return (
    <Link href={link}>
      <li className="flex flex-col items-center justify-center">
        <p className="font-zenMaru text-base">{engSpan}</p>
        <p className="font-zenMaru text-[0.5rem]">{span}</p>
      </li>
    </Link>
  )
}
