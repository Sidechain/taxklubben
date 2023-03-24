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
  padding: 0.5rem;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
`
