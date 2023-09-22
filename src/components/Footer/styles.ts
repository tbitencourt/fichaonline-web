import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-title']};

  p {
    color: ${(props) => props.theme['base-card']};
  }
`
