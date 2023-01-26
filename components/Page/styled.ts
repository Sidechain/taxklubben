import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { screenSizes } from '../../styles/constants'

export const Page = styled.div<{ wrap?: boolean }>`
  background-color: ${colors.background};
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  gap: 1rem;
  @media (min-width: ${screenSizes.tablet}) {
    flex-direction: ${(props) => (props.wrap ? 'row' : 'column')};
    flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'none')};
    justify-content: center;
    align-items: center;
  }
`
