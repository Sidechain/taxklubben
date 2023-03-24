import React, { FC } from 'react'
import * as S from './styled'

type Props = {
  href: string
  label: string
}

export const Link: FC<Props> = ({ href, label }) => {
  return <S.StyledLink href={href}>{label}</S.StyledLink>
}
