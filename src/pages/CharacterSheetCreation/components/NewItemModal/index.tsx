/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, Title } from './styles'
import { useContext } from 'react'
import { CharacterSheetContext } from '../../../../contexts/CharacterSheetContext'
import { SketchSheetContext } from '../../../../contexts/SketchSheetContext'

interface NewItemModalProps {
  variant: 'advantages' | 'disadvantages' | 'expertises' | 'techniques'
}

export function NewItemModal({ variant }: NewItemModalProps) {
  const { advantagesList, disadvantagesList, expertisesList } = useContext(
    CharacterSheetContext,
  )
  const {
    setAdvantageFunction,
    setDisadvantageFunction,
    setExpertiseFunction,
  } = useContext(SketchSheetContext)

  function handleAddNewAdavantage(id: number) {
    setAdvantageFunction(advantagesList[id - 1])
  }
  function handleAddNewDisadvantage(id: number) {
    setDisadvantageFunction(disadvantagesList[id - 1])
  }
  function handleAddNewExpertise(id: number) {
    setExpertiseFunction(expertisesList[id - 1])
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
            <Title>Vantagens</Title>
            {advantagesList.map((adv) => (
              <div key={adv.id} className="item">
                <div className="name-cost">
                  <span id="name">{`${adv.name}`}</span>
                  <span id="cost">{`${adv.cost}pt`}</span>
                </div>
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
            <Title>Desvantagens</Title>
            {disadvantagesList.map((disadvantage) => (
              <div key={disadvantage.id} className="item">
                <div className="name-cost">
                  <span id="name">{`${disadvantage.name}`}</span>
                  <span id="cost">{`${disadvantage.cost}pt`}</span>
                </div>
                <p id="description">{disadvantage.description}</p>
                <button
                  id="add-button"
                  onClick={() => handleAddNewDisadvantage(disadvantage.id)}
                >
                  Adicionar
                </button>
              </div>
            ))}
          </>
        )}

        {variant === 'expertises' && (
          <>
            <Title>Perícias</Title>
            {expertisesList.map((expertise) => (
              <div key={expertise.id} className="item">
                <div className="name-cost">
                  <span id="name">{`${expertise.name}`}</span>
                  <span id="cost">{`${expertise.cost}pt`}</span>
                </div>
                <p id="description">{expertise.description}</p>
                <button
                  id="add-button"
                  onClick={() => handleAddNewExpertise(expertise.id)}
                >
                  Adicionar
                </button>
              </div>
            ))}
          </>
        )}

        {variant === 'techniques' && (
          <>
            <Title>Técnicas</Title>
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
