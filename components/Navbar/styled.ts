import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from '../../styles/colors'
import { fontSizes } from '../../styles/typography'

export const Container = styled(motion.div)`
  height: 4rem;
  background-color: ${colors.primaryKey};
  color: ${colors.background};
  border-radius: 0 0 8px 8px;
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
`

export const Header = styled.span`
  font-size: ${fontSizes.header};
`

export const LinksContainer = styled.div`
  height: 60px;
  width: 100%;
  margin-top: -1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondaryKey};
  border-radius: 0 0 8px 8px;
`

export const LinksWrapper = styled.div``
