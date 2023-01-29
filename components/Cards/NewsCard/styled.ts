import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from '../../../styles/colors'
import { fontSizes } from '../../../styles/typography'
import { screenSizes } from '../../../styles/constants'

export const Container = styled(motion.div)`
  height: 200px;
  background-color: ${colors.primaryKey};
  color: white;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  transition: all 0.2s;
  gap: 1rem;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.75);
  }

  @media (min-width: ${screenSizes.tablet}) {
    width: 30rem;
  }
`

export const ImageContainer = styled(motion.div)`
  height: 100px;
  width: 100px;
  position: relative;
  background-color: ${colors.primaryOn};
  border-radius: 8px;
  display: flex;
`

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: min-content;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: auto;
`

export const Divider = styled.div`
  height: 3px;
  width: 100%;
  background: white;
  margin: 0.5rem 0;
`

export const HeaderText = styled.span`
  font-size: ${fontSizes.subHeader};
`
