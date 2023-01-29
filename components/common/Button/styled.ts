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
  box-shadow: unset;
  /* border: solid;
  border-color: ${colors.outline}; */
  transition: box-shadow 0.3s;
  box-shadow: 4px 4px 8px ${colors.primaryOnContainer};
  cursor: pointer;
  /* &:hover {
    box-shadow: 1px 1px 1px ${colors.primaryOnContainer};
  } */
`

export const Label = styled.span``
