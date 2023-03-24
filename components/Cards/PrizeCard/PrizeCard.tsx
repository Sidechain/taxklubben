import React, { FC } from 'react'
import * as S from './styled'

type Props = {
  title: string
  link: string
}

export const PrizeCard: FC<Props> = ({ title, link }) => {
  return (
    <S.Container
      href={link}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      layout
    >
      <S.TextContainer>
        <span style={{ fontWeight: 600 }}>{title}</span>
      </S.TextContainer>
    </S.Container>
  )
}
