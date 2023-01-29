import Image from 'next/image'
import React, { FC } from 'react'
import * as S from './styled'

type IconType = 'address' | 'email' | 'instagram' | 'phone' | 'url'

type Props = {
  type: IconType
}

const address = '/icons/address.svg'
const email = '/icons/email.svg'
const instagram = '/icons/instagram.svg'
const phone = '/icons/phone.svg'
const url = '/icons/url.svg'

const iconPaths = {
  address,
  email,
  instagram,
  phone,
  url,
}

// https://www.google.com/maps/place/Golvsta+138,+747+91+Alunda

export const Icon: FC<Props> = ({ type }) => {
  return <S.Icon src={iconPaths[type]} alt="icon" width={24} height={24} />
}
