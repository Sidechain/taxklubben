import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${colors.backgroundOn};
  opacity: 0.95;
  z-index: 20;
  transition: all 0.2s;
  top: 0;
  left: 0;
`
