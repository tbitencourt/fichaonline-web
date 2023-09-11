/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, Title } from './styles'
import { useContext } from 'react'
import { CharacterSheetContext } from '../../../../contexts/CharacterSheetContext'
import { AdvantagesProps, DisadvantagesProps, ExpertisesProps } from '../..'

interface NewItemModalProps {
  variant: 'advantages' | 'disadvantages' | 'expertises' | 'techniques'
  setAdvantageFunction?: (data: AdvantagesProps) => void | undefined
  setDisadvantageFunction?: (data: DisadvantagesProps) => void | undefined
  setExpertiseFunction?: (data: ExpertisesProps) => void | undefined
}

export function NewItemModal({
  variant,
  setAdvantageFunction,
  setDisadvantageFunction,
  setExpertiseFunction,
}: NewItemModalProps) {
  const { advantagesList, disadvantagesList, expertisesList } = useContext(
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
  function handleAddNewExpertise(id: number) {
    // @ts-ignore
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
