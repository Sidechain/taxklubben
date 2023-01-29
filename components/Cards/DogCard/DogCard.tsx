import Image from 'next/image'
import React, { FC } from 'react'
import { borderRadius } from '../../../styles/constants'
import * as S from './styled'

type Props = {
  name: string
  breed: string
  kennel: string
  image: string
  alt: string
}

export const DogCard: FC<Props> = ({ name, breed, kennel, image, alt }) => {
  return (
    <S.Container whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} layout>
      <S.ImageContainer whileHover={{ scale: 1.1 }}>
        <Image
          src={image}
          fill
          alt={alt}
          style={{
            objectFit: 'cover',
            overflow: 'hidden',
            borderRadius: borderRadius,
          }}
        />
      </S.ImageContainer>
      <S.TextContainer>
        <span>Namn: {name}</span>
        <span>Ras: {breed}</span>
        <span>Kennel: {kennel}</span>
      </S.TextContainer>
    </S.Container>
  )
}
