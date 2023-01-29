import Image from 'next/image'
import React, { FC, useState } from 'react'
import { borderRadius } from '../../../styles/constants'
import { Button } from '../../common/Button/Button'
import { Modal } from '../../common/Modal/Modal'
import * as S from './styled'

type Props = {
  header: string
  text: string
  onClick?: () => void
  buttonLabel?: string
  image?: string
}

export const NewsCard: FC<Props> = ({
  header,
  text,
  onClick,
  buttonLabel,
  image,
}) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      {/* <Modal
        open={modalOpen}
        content={
          <div
            style={{
              height: '100px',
              width: '100px',
              backgroundColor: 'red',
            }}
          >
            <span>Jag är i en modal</span>
          </div>
        }
      /> */}
      <S.Container
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        layout
        onClick={() => setModalOpen(true)}
      >
        <S.ImageContainer whileHover={{ scale: 1.1 }}>
          {image && (
            <Image
              src={image}
              fill
              alt={'tjena'}
              style={{
                objectFit: 'cover',
                overflow: 'hidden',
                borderRadius: borderRadius,
              }}
            />
          )}
        </S.ImageContainer>
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
    </>
  )
}
