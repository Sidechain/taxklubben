import Image from 'next/image'
import React, { FC } from 'react'
import { borderRadius } from '../../../styles/constants'
import { Icon } from '../../common/Icon/Icon'
import * as S from './styled'

type Props = {
  title?: string
  name: string
  address?: string
  phone?: string
  email?: string
}

export const EmployeeCard: FC<Props> = ({
  title,
  name,
  address,
  phone,
  email,
}) => {
  return (
    <S.Container whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} layout>
      <S.TextContainer>
        <span>
          {title && <span style={{ fontWeight: 600 }}>{title}: </span>} {name}
        </span>
        <span>{address}</span>
        <a href={`tel: ${phone}`}>{phone}</a>
        <a href={`mailto: ${email}`}>{email}</a>
      </S.TextContainer>
    </S.Container>
  )
}
