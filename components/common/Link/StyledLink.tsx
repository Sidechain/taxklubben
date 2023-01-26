import React, { FC } from 'react'
import * as S from './styled'
import Link from 'next/link'

type Props = {
  href: string
  label: string
}

export const StyledLink: FC<Props> = ({ href, label }) => {
  return <Link href={href}>{label}</Link>
}
