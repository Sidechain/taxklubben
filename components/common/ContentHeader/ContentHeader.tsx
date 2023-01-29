import React, { Children, FC, ReactNode } from 'react'
import * as S from './styled'

type Props = {
  text: string
}

export const ContentHeader: FC<Props> = ({ text }) => {
  return <S.Header>{text}</S.Header>
}
