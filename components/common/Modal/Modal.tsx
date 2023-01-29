import React, { FC, ReactNode, useState } from 'react'
import * as S from './styled'

type Props = {
  open: boolean
  content: ReactNode
}

export const Modal: FC<Props> = ({ open, content }) => {
  return <>{open && <S.Overlay>{content}</S.Overlay>}</>
}
