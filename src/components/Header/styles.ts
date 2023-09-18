import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10rem;
  justify-content: center;
  padding: 0.5rem 0;

  color: ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-title']};

  img {
    width: 6.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors['base-button']};
  }
`
