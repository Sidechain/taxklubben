import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from '../../styles/colors'

export const Container = styled(motion.div)`
  height: 4rem;
  background-color: ${colors.primaryKey};
  color: ${colors.background};
  border-radius: 8px 8px 0 0;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
  box-shadow: 0px -8px 8px -1px rgba(0, 0, 0, 0.75); ;
`

export const LinksContainer = styled.div`
  height: 60px;
  margin-top: -1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondaryKey};
  border-radius: 0 0 8px 8px;
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`
