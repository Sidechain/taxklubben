import React, { FC } from 'react'
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
        {email && (
          <a href={`mailto: ${email}`}>
            <Icon type="email" />
          </a>
        )}
        {email2 && (
          <a href={`mailto: ${email2}`}>
            <Icon type="email" />
          </a>
        )}
        {address && <Icon type="address" />}
        {phone && (
          <a href={`tel: ${phone}`}>
            <Icon type="phone" />
          </a>
        )}
        {phone2 && (
          <a href={`tel: ${phone2}`} target="_blank" rel="noopener noreferrer">
            <Icon type="phone" />
          </a>
        )}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Icon type="url" />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="instagram" />
          </a>
        )}
      </S.IconContainer>
    </S.Container>
  )
}
