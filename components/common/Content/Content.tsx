import React, { Children, FC, ReactNode } from 'react'
import * as S from './styled'

type Props = {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}
