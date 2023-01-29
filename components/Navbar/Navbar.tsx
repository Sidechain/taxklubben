import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { StyledLink } from '../common/Link/StyledLink'
import * as S from './styled'

export const Navbar: FC = () => {
  return (
    <>
      <S.Container>
        <Image
          src="/images/logo.png"
          alt="Upplands Taxklubb logo"
          height={80}
          width={80}
          style={{
            objectFit: 'cover',
            overflow: 'hidden',
          }}
        />
      </S.Container>
      <S.LinksContainer>
        <S.LinksWrapper>
          <StyledLink href="/" label="Hem" />
          <span>{' - '}</span>
          <StyledLink href="/register" label="Anmälan" />
          <span>{' - '}</span>
          <StyledLink href="/about" label="Om klubben" />
          <span>{' - '}</span>
          <StyledLink href="/dogs" label="Våra hundar" />
          <span>{' - '}</span>
          <StyledLink href="/breeders" label="Uppfödare" />
        </S.LinksWrapper>
      </S.LinksContainer>
    </>
  )
}
