import React, { FC } from 'react'
import * as S from './styled'

type Props = {
  onClick?: () => void
  label: string
}

export const Button: FC<Props> = ({ onClick, label }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
