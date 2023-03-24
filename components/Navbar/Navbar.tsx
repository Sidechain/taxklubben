import Image from 'next/image'
import React, { FC } from 'react'
import { Link } from '../common/Link/Link'
import * as S from './styled'

export const Navbar: FC = () => {
  return (
    <>
      <S.Container href="/">
        <Image
          src="/images/logo.png"
          alt="Upplands Taxklubb logo"
          height={120}
          width={120}
          style={{
            objectFit: 'cover',
            overflow: 'hidden',
          }}
        />
      </S.Container>
      <S.LinksContainer>
        <S.LinksWrapper>
          <Link href="/" label="Hem" />
          <Link href="/register" label="Anmälan" />
          <Link href="/about" label="Om klubben" />
          <Link href="/breeders" label="Uppfödare" />
        </S.LinksWrapper>
      </S.LinksContainer>
    </>
  )
}
