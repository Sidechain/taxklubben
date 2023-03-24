import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  height: 4rem;
  background-color: ${colors.primaryKey};
  color: ${colors.background};
  border-radius: 8px 8px 0 0;
  display: flex;
  padding: 1rem;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  position: relative;
  box-shadow: 0px -8px 8px -1px rgba(0, 0, 0, 0.75); ;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const EnsilveredContainer = styled.span`
  color: ${colors.ensilvered};
`
