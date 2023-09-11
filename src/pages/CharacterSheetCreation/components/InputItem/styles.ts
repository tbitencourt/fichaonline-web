import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const InputItemContainer = styled.div`
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.sheetColors['blue-300']};

  input {
    width: 15rem;
    border: none;
    color: ${(props) => props.theme.sheetColors['blue-300']};
  }
  .buttons {
    width: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    > button {
      color: ${(props) => props.theme.sheetColors['blue-300']};
    }
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`

export const Content = styled(Dialog.Content)`
  width: 32rem;
  max-height: 40rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: green;
`
