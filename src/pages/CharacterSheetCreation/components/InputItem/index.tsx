import {
  AdvantagesProps,
  SketchSheetContext,
} from '../../../../contexts/SketchSheetContext'
import {
  CloseButton,
  Content,
  InputItemContainer,
  Overlay,
  Trigger,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { ListMagnifyingGlass } from '@phosphor-icons/react'
import { useContext } from 'react'

interface InputItemProps {
  variant: 'advantage' | 'disadvantage' | 'expertise'
  data: AdvantagesProps
  index: number
}

export function InputItem({ variant, data, index }: InputItemProps) {
  const { removeAdvantageItem, removeDisadvantageItem, removeExpertiseItem } =
    useContext(SketchSheetContext)
  return (
    <InputItemContainer>
      <input id="name" value={data.name} />
      <div className="buttons">
        <Dialog.Root>
          <Trigger>
            <ListMagnifyingGlass size={22} />
          </Trigger>

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
        {variant === 'advantage' && (
          <button onClick={() => removeAdvantageItem(index)}>X</button>
        )}
        {variant === 'disadvantage' && (
          <button onClick={() => removeDisadvantageItem(index)}>X</button>
        )}
        {variant === 'expertise' && (
          <button onClick={() => removeExpertiseItem(index)}>X</button>
        )}
      </div>
    </InputItemContainer>
  )
}
