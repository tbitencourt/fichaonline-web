import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`

export const Content = styled(Dialog.Content)`
  width: 32rem;
  height: 35rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .item {
    display: grid;
    gap: 0.5rem;
    grid-template-areas:
      'name name button'
      'desc desc desc';

    background: lightblue;
    padding: 1rem;
    border-radius: 8px;

    #name-cost {
      grid-area: name;
      font-weight: bold;
      font-size: 1rem;
    }
    #description {
      grid-area: desc;
      font-size: 0.875rem;
    }
    #add-button {
      grid-area: button;
      border: none;
      background: lightgoldenrodyellow;
      border-radius: 8px;
    }
  }
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
