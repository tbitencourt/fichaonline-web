import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 0;
  // max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 1.5rem;

  img {
    width: 6.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
