import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.45rem 1rem;
  color: ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-title']};
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  box-shadow: 0 0 0.2rem 0.1rem #888888;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
