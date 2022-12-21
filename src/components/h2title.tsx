import { FC } from 'react'

type Props = {
  span: string
  engSpan: string | undefined | null
}

const H2Title: FC<Props> = ({ span, engSpan }) => {
  return (
    <h2 className="flex flex-nowrap justify-center">
      <p>{span}</p>
      <span>{engSpan}</span>
    </h2>
  )
}

export default H2Title
