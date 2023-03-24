import React, { FC } from 'react'
import * as S from './styled'

export const Footer: FC = () => {
  return (
    <S.Container>
      <S.ContactContainer>
        <span>Kontakta oss</span>
        <a href="mailto: kontakt@upplandstaxklubb.com">
          kontakt@upplandstaxklubb.com
        </a>
      </S.ContactContainer>
      <S.EnsilveredContainer>An Ensilvered product</S.EnsilveredContainer>
    </S.Container>
  )
}
