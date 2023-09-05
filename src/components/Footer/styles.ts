import styled from 'styled-components'

export const FooterContainer = styled.header`
  width: 100%;
  height: 5rem;
  max-width: 1120px;
  margin: -5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-title']};

  p {
    color: ${(props) => props.theme['base-card']};
  }
`
