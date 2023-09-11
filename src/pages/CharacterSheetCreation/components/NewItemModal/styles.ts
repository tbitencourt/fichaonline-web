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
  background: ${(props) => props.theme.sheetColors['blue-bg']};
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

    background: ${(props) => props.theme.sheetColors['blue-100']};
    padding: 1rem;
    border: 2px solid ${(props) => props.theme.sheetColors['blue-200']};
    border-radius: 8px;

    .name-cost {
      grid-area: name;
      display: flex;
      font-weight: bold;
      font-size: 1.25rem;
      gap: 0.5rem;
    }
    #name {
      color: ${(props) => props.theme.sheetColors.pink};
    }
    #cost {
      color: ${(props) => props.theme.sheetColors['blue-300']};
    }
    #description {
      grid-area: desc;
      font-size: 0.875rem;
      color: ${(props) => props.theme.sheetColors['gray-300']};
      max-height: 6rem;
      overflow: auto;
    }
    #add-button {
      grid-area: button;
      border: none;
      background: ${(props) => props.theme.sheetColors['blue-200']};
      color: white;
      border-radius: 8px;
    }
  }
`

export const Title = styled(Dialog.Title)`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.sheetColors['blue-300']};
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
