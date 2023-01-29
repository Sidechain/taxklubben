import styled from 'styled-components'
import { motion } from 'framer-motion'
import { screenSizes } from '../../../styles/constants'
import { colors } from '../../../styles/colors'

export const Container = styled(motion.div)`
  height: 6rem;
  background-color: ${colors.primaryContainer};
  color: ${colors.primaryOnContainer};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  /* &:hover {
    background-color: ${colors.primaryContainer};
    color: ${colors.primaryOnContainer};
  } */

  @media (min-width: ${screenSizes.tablet}) {
    width: 20rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
