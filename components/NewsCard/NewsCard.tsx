import React, { FC } from 'react'
import { Button } from '../Button/Button'
import * as S from './styled'

type Props = {
  header: string
  text: string
  onClick?: () => void
  buttonLabel?: string
}

export const NewsCard: FC<Props> = ({ header, text, onClick, buttonLabel }) => {
  return (
    <S.Container whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} layout>
      <S.ImageContainer whileHover={{ scale: 1.1 }}></S.ImageContainer>
      <S.TextContainer>
        <S.HeaderText>{header}</S.HeaderText>
        {header && <S.Divider />} <span>{text}</span>
        {buttonLabel && onClick && (
          <S.ButtonContainer>
            <Button onClick={onClick} label={buttonLabel} />
          </S.ButtonContainer>
        )}
      </S.TextContainer>
    </S.Container>
  )
}
