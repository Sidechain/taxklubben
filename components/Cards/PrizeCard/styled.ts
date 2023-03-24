import styled from 'styled-components'
import { motion } from 'framer-motion'
import { screenSizes } from '../../../styles/constants'
import { colors } from '../../../styles/colors'

export const Container = styled(motion.a)`
  height: 6rem;
  background-color: ${colors.primaryContainer};
  color: ${colors.primaryOnContainer};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  justify-content: center;
  align-items: center;
  width: 20rem;
  transition: all 0.2s;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.75);
  }

  @media (min-width: ${screenSizes.tablet}) {
    width: 20rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
