import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { borderRadius } from '../../../styles/constants'

export const Container = styled.div`
  height: 100%;
  background-color: ${colors.primaryKey};
  color: ${colors.primaryOn};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: ${borderRadius};
  padding: 1rem;
`
