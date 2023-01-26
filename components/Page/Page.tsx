import React, { FC, ReactNode } from 'react'
import * as S from './styled'

type Props = {
  children: ReactNode
  wrap?: boolean
}

export const Page: FC<Props> = ({ children, wrap }) => {
  return <S.Page wrap={wrap}>{children}</S.Page>
}
