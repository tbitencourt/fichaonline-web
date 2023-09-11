/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { useContext } from 'react'
import { CharacterSheetContext } from '../../../../contexts/CharacterSheetContext'
import { AdvantagesProps, DisadvantagesProps } from '../..'

interface NewItemModalProps {
  variant: 'advantages' | 'disadvantages' | 'expertises' | 'techniques'
  setAdvantageFunction?: (data: AdvantagesProps) => void | undefined
  setDisadvantageFunction?: (data: DisadvantagesProps) => void | undefined
}

export function NewItemModal({
  variant,
  setAdvantageFunction,
  setDisadvantageFunction,
}: NewItemModalProps) {
  const { advantagesList, disadvantagesList } = useContext(
    CharacterSheetContext,
  )

  function handleAddNewAdavantage(id: number) {
    // @ts-ignore
    setAdvantageFunction(advantagesList[id - 1])
  }
  function handleAddNewDisadvantage(id: number) {
    // @ts-ignore
    setDisadvantageFunction(disadvantagesList[id - 1])
  }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <span>X</span>
        </CloseButton>

        {variant === 'advantages' && (
          <>
            <Dialog.Title>Vantagens</Dialog.Title>
            {advantagesList.map((adv) => (
              <div key={adv.id} className="item">
                <p id="name-cost">{`${adv.name} - Custo: ${adv.cost}`}</p>
                <p id="description">{adv.description}</p>
                <button
                  id="add-button"
                  onClick={() => handleAddNewAdavantage(adv.id)}
                >
                  Adicionar
                </button>
              </div>
            ))}
          </>
        )}

        {variant === 'disadvantages' && (
          <>
            <Dialog.Title>Desvantagens</Dialog.Title>
            {disadvantagesList.map((adv) => (
              <div key={adv.id} className="item">
                <p id="name-cost">{`${adv.name} - Custo: ${adv.cost}`}</p>
                <p id="description">{adv.description}</p>
                <button
                  id="add-button"
                  onClick={() => handleAddNewDisadvantage(adv.id)}
                >
                  Adicionar
                </button>
              </div>
            ))}
          </>
        )}

        {variant === 'expertises' && (
          <>
            <Dialog.Title>Perícias</Dialog.Title>
            {/* {expertisesList.map((adv) => (
              <div key={adv.id} className="item">
                <p id="name-cost">{`${adv.name} - Custo: ${adv.cost}`}</p>
                <p id="description">{adv.description}</p>
                <button
                  id="add-button"
                  onClick={() => handleAddNewAdavantage(adv.id)}
                >
                  Adicionar
                </button>
              </div>
            ))} */}
          </>
        )}

        {variant === 'techniques' && (
          <>
            <Dialog.Title>Técnicas</Dialog.Title>
            {/* {advantagesList.map((adv) => (
              <div key={adv.id} className="item">
                <p id="name-cost">{`${adv.name} - Custo: ${adv.cost}`}</p>
                <p id="description">{adv.description}</p>
                <button
                  id="add-button"
                  onClick={() => handleAddNewAdavantage(adv.id)}
                >
                  Adicionar
                </button>
              </div>
            ))} */}
          </>
        )}
      </Content>
    </Dialog.Portal>
  )
}
