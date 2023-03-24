import React, { FC, ReactNode } from 'react'
import * as S from './styled'

type Props = {
  children: ReactNode
}

export const Card: FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}
