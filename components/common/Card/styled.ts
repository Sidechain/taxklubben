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
  transition: all 0.2s;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.75);
  }
`
