import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Container = styled.div`
  background-color: ${colors.primaryContainer};
  color: ${colors.primaryOnContainer};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: fit-content;
  padding: 0.5rem;
  transition: all 0.2s;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.75);
  }
  cursor: pointer;
`

export const Label = styled.span``
