import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC } from 'react'
import { StyledLink } from '../common/Link/StyledLink'
import * as S from './styled'

export const Navbar: FC = () => {
  return (
    <>
      <S.Container>
        <S.Header>Upplands Taxklubb</S.Header>
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
        </S.LinksWrapper>
      </S.LinksContainer>
    </>
  )
}
