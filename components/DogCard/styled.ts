import styled from 'styled-components'
import { motion } from 'framer-motion'
import { screenSizes } from '../../styles/constants'
import { colors } from '../../styles/colors'

export const Container = styled(motion.div)`
  height: 200px;
  background-color: ${colors.primaryKey};
  color: ${colors.primaryOn};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.primaryContainer};
    color: ${colors.primaryOnContainer};
  }

  @media (min-width: ${screenSizes.tablet}) {
    width: 20rem;
  }
`

export const ImageContainer = styled(motion.div)`
  height: 6rem;
  width: 6rem;
  background-color: ${colors.primaryOn};
  border-radius: 0.5rem;
  border: solid;
  display: flex;
  position: relative;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
`
