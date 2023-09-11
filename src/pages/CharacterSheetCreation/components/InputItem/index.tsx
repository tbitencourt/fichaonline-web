import { AdvantagesProps } from '../..'
import { CloseButton, Content, InputItemContainer, Overlay } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

interface InputItemProps {
  data: AdvantagesProps
}

export function InputItem({ data }: InputItemProps) {
  return (
    <InputItemContainer>
      <input value={data.name} />
      <div className="buttons">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Lupa</button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Overlay />

            <Content>
              <Dialog.Title>{`${data.name} - ${data.cost}pt`}</Dialog.Title>

              <CloseButton>
                <span>X</span>
              </CloseButton>

              <p>{data.description}</p>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
        <button>X</button>
      </div>
    </InputItemContainer>
  )
}
