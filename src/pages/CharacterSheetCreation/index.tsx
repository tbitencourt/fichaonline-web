import {
  CharacterSheetCreationContainer,
  SheetContainer,
  Header,
  Attributes,
  Advantages,
  Disadvantages,
  Expertises,
  Notes,
  Experience,
  Buttons,
} from './styles'

import logo3DeT from '../../assets/logo3det.png'
import { Attribute } from './components/Attribute'

import * as Dialog from '@radix-ui/react-dialog'
import { NewItemModal } from './components/NewItemModal'
import { InputItem } from './components/InputItem'
import Button from '../../components/Button'
import { useContext, useEffect, useState } from 'react'
import {
  AdvantagesProps,
  SketchSheetContext,
} from '../../contexts/SketchSheetContext'

export function CharacterSheetCreation() {
  const [advantagesNew, setAdvantagesNew] = useState<AdvantagesProps[]>([])
  const {
    advantages,
    disadvantages,
    attributes,
    characterInfo,
    exp,
    notes,
    expertises,
    cleanAllInputs,
    handleSaveSketch,
    setAttributesFunction,
    setExpFunction,
    setNotesFunction,
    setCharacterInfoFunction,
  } = useContext(SketchSheetContext)

  useEffect(() => {
    setAdvantagesNew(advantages)
  }, [advantages])
  return (
    <CharacterSheetCreationContainer>
      <SheetContainer>
        <Header>
          <img src={logo3DeT} alt="" />

          <div className="infos">
            <div className="name">
              <label htmlFor="name">Nome: </label>
              <input
                id="name"
                value={characterInfo.name}
                onChange={(e) =>
                  setCharacterInfoFunction({
                    ...characterInfo,
                    name: e.target.value,
                  })
                }
              />
            </div>

            {/* <div className="archtype">
              <label htmlFor="archtype">Arquétipo: </label>
              <input
                id="archtype"
                value={characterInfo.archtype}
                onChange={(e) =>
                  setCharacterInfo({
                    ...characterInfo,
                    archtype: e.target.value,
                  })
                }
              />
            </div> */}

            <div className="concept">
              <label htmlFor="concept">Conceito: </label>
              <input
                id="concept"
                value={characterInfo.concept}
                onChange={(e) =>
                  setCharacterInfoFunction({
                    ...characterInfo,
                    concept: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </Header>

        <Attributes>
          <Attribute
            variant="power"
            value={attributes.power}
            onChange={(e) =>
              setAttributesFunction({
                ...attributes,
                power: Number(e.target.value),
              })
            }
          />
          <Attribute
            variant="ability"
            value={attributes.ability}
            onChange={(e) =>
              setAttributesFunction({
                ...attributes,
                ability: Number(e.target.value),
              })
            }
          />
          <Attribute
            variant="resistance"
            value={attributes.resistance}
            onChange={(e) =>
              setAttributesFunction({
                ...attributes,
                resistance: Number(e.target.value),
              })
            }
          />

          <div className="divider"></div>

          <Attribute
            variant="action"
            value={attributes.action}
            onChange={(e) =>
              setAttributesFunction({
                ...attributes,
                action: Number(e.target.value),
              })
            }
          />
          <Attribute
            variant="mana"
            value={attributes.mana}
            onChange={(e) =>
              setAttributesFunction({
                ...attributes,
                mana: Number(e.target.value),
              })
            }
          />
          <Attribute
            variant="life"
            value={attributes.life}
            onChange={(e) =>
              setAttributesFunction({
                ...attributes,
                life: Number(e.target.value),
              })
            }
          />
        </Attributes>

        <Advantages>
          <span>Vantagens</span>
          {advantagesNew.map((adv, index) => (
            <InputItem
              variant="advantage"
              key={index}
              index={index}
              data={adv}
            />
          ))}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button id="new-input-button">Adicionar novo campo +</button>
            </Dialog.Trigger>

            <NewItemModal variant={'advantages'} />
          </Dialog.Root>
        </Advantages>

        <Disadvantages>
          <span>Desvantagens</span>
          {disadvantages.map((adv, index) => (
            <InputItem
              variant="disadvantage"
              key={index}
              index={index}
              data={adv}
            />
          ))}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button id="new-input-button">Adicionar novo campo +</button>
            </Dialog.Trigger>

            <NewItemModal variant={'disadvantages'} />
          </Dialog.Root>
        </Disadvantages>

        <Expertises>
          <span>Perícias</span>
          {expertises.map((expertise, index) => (
            <InputItem
              variant="expertise"
              key={index}
              index={index}
              data={expertise}
            />
          ))}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button id="new-input-button">Adicionar novo campo +</button>
            </Dialog.Trigger>

            <NewItemModal variant={'expertises'} />
          </Dialog.Root>
        </Expertises>

        <Notes>
          <span>Anotações</span>
          <textarea
            value={notes}
            onChange={(e) => setNotesFunction(e.target.value)}
          ></textarea>
        </Notes>

        <Experience>
          <span>EXP</span>
          <input
            value={exp}
            onChange={(e) => setExpFunction(Number(e.target.value))}
          ></input>
        </Experience>

        <Buttons>
          <Button text="Salvar Rascunho" onClick={() => handleSaveSketch()} />
          <Button
            text="Limpar todos os campos"
            onClick={() => cleanAllInputs()}
          />
        </Buttons>
      </SheetContainer>
    </CharacterSheetCreationContainer>
  )
}
