import Image from 'next/image'
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
`

export const Icon = styled(Image)`
  cursor: pointer;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
`
