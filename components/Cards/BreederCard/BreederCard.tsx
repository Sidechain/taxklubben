import Image from 'next/image'
import React, { FC } from 'react'
import { borderRadius } from '../../../styles/constants'
import { Icon } from '../../common/Icon/Icon'
import * as S from './styled'

type Props = {
  breederName: string
  contact: string
  type: string
  phone?: string
  phone2?: string
  address?: string
  url?: string
  email?: string
  email2?: string
  instagram?: string
}

export const BreederCard: FC<Props> = ({
  breederName,
  contact,
  type,
  phone,
  phone2,
  address,
  url,
  email,
  email2,
  instagram,
}) => {
  return (
    <S.Container whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} layout>
      <S.TextContainer>
        <span>{breederName}</span>
        <span>{contact}</span>
        <span>{type}</span>
      </S.TextContainer>
      <S.IconContainer>
        {email && <Icon type="email" />}
        {email2 && <Icon type="email" />}
        {address && <Icon type="address" />}
        {phone && <Icon type="phone" />}
        {phone2 && <Icon type="phone" />}
        {url && <Icon type="url" />}
        {instagram && <Icon type="instagram" />}
      </S.IconContainer>
    </S.Container>
  )
}
