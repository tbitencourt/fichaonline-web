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
} from './styles'

import logo3DeT from '../../assets/logo3det.png'
import { Attribute } from './components/Attribute'

import * as Dialog from '@radix-ui/react-dialog'
import { NewItemModal } from './components/NewItemModal'
import { useState } from 'react'
import { InputItem } from './components/InputItem'
import Button from '../../components/Button'

export interface AdvantagesProps {
  id: number
  name: string
  description: string
  type: string
  cost: number
  origin: string
}
export interface DisadvantagesProps {
  id: number
  name: string
  description: string
  type: string
  cost: number
  origin: string
}
export interface ExpertisesProps {
  id: number
  name: string
  description: string
  type: string
  cost: number
  origin: string
}
export interface AttributesProps {
  power: number
  ability: number
  resistance: number
  life: number
  mana: number
  action: number
}
export interface CharacterInfoProps {
  name: string
  archtype: string
  concept: string
}

function emptyAttributes() {
  return {
    power: 0,
    ability: 0,
    resistance: 0,
    life: 0,
    mana: 0,
    action: 0,
  }
}

function emptyCharacterInfo() {
  return {
    name: '',
    archtype: '',
    concept: '',
  }
}

export function CharacterSheetCreation() {
  const [advantages, setAdvantages] = useState<AdvantagesProps[]>(() => {
    const storedAdvantagesSketchAsJSON = localStorage.getItem(
      '@ficha-online:sheet-advantages-sketch- 1.0.0',
    )

    if (storedAdvantagesSketchAsJSON) {
      return JSON.parse(storedAdvantagesSketchAsJSON)
    } else {
      return []
    }
  })
  const [disadvantages, setDisadvantages] = useState<DisadvantagesProps[]>(
    () => {
      const storedDisadvantagesSketchAsJSON = localStorage.getItem(
        '@ficha-online:sheet-disadvantages-sketch- 1.0.0',
      )

      if (storedDisadvantagesSketchAsJSON) {
        return JSON.parse(storedDisadvantagesSketchAsJSON)
      } else {
        return []
      }
    },
  )
  const [expertises, setExpertises] = useState<ExpertisesProps[]>(() => {
    const storedExpertisesSketchAsJSON = localStorage.getItem(
      '@ficha-online:sheet-expertises-sketch- 1.0.0',
    )

    if (storedExpertisesSketchAsJSON) {
      return JSON.parse(storedExpertisesSketchAsJSON)
    } else {
      return []
    }
  })
  const [attributes, setAttributes] = useState<AttributesProps>(() => {
    const storedAttributesSketchAsJSON = localStorage.getItem(
      '@ficha-online:sheet-attributes-sketch- 1.0.0',
    )

    if (storedAttributesSketchAsJSON) {
      return JSON.parse(storedAttributesSketchAsJSON)
    } else {
      return emptyAttributes()
    }
  })
  const [characterInfo, setCharacterInfo] = useState<CharacterInfoProps>(() => {
    const storedCharacterInfoSketchAsJSON = localStorage.getItem(
      '@ficha-online:sheet-characterInfo-sketch- 1.0.0',
    )

    if (storedCharacterInfoSketchAsJSON) {
      return JSON.parse(storedCharacterInfoSketchAsJSON)
    } else {
      return emptyCharacterInfo()
    }
  })
  const [notes, setNotes] = useState(() => {
    const storedNotesSketchAsJSON = localStorage.getItem(
      '@ficha-online:sheet-notes-sketch- 1.0.0',
    )

    if (storedNotesSketchAsJSON) {
      return JSON.parse(storedNotesSketchAsJSON)
    } else {
      return ''
    }
  })
  const [exp, setExp] = useState(() => {
    const storedExpSketchAsJSON = localStorage.getItem(
      '@ficha-online:sheet-exp-sketch- 1.0.0',
    )

    if (storedExpSketchAsJSON) {
      return JSON.parse(storedExpSketchAsJSON)
    } else {
      return 0
    }
  })

  function setAdvantageFunction(data: AdvantagesProps) {
    setAdvantages((prevState) => [...prevState, data])
  }
  function setDisadvantageFunction(data: DisadvantagesProps) {
    setDisadvantages((prevState) => [...prevState, data])
  }

  function setExpertiseFunction(data: ExpertisesProps) {
    setExpertises((prevState) => [...prevState, data])
  }

  function handleSaveSketch() {
    const advantagesJSON = JSON.stringify(advantages)
    const disadvantagesJSON = JSON.stringify(disadvantages)
    const expertisesJSON = JSON.stringify(expertises)
    const attributesJSON = JSON.stringify(attributes)
    const characterInfoJSON = JSON.stringify(characterInfo)
    const notesJSON = JSON.stringify(notes)
    const expJSON = JSON.stringify(exp)

    localStorage.setItem(
      '@ficha-online:sheet-advantages-sketch- 1.0.0',
      advantagesJSON,
    )
    localStorage.setItem(
      '@ficha-online:sheet-disadvantages-sketch- 1.0.0',
      disadvantagesJSON,
    )
    localStorage.setItem(
      '@ficha-online:sheet-expertises-sketch- 1.0.0',
      expertisesJSON,
    )
    localStorage.setItem(
      '@ficha-online:sheet-attributes-sketch- 1.0.0',
      attributesJSON,
    )
    localStorage.setItem(
      '@ficha-online:sheet-characterInfo-sketch- 1.0.0',
      characterInfoJSON,
    )
    localStorage.setItem('@ficha-online:sheet-notes-sketch- 1.0.0', notesJSON)
    localStorage.setItem('@ficha-online:sheet-exp-sketch- 1.0.0', expJSON)

    alert('Rascunho salvo com sucesso')
  }

  function cleanAllInputs() {
    setAdvantages([])
    setDisadvantages([])
    setExpertises([])
    setAttributes(emptyAttributes())
    setCharacterInfo(emptyCharacterInfo())
    setNotes('')
    setExp(0)
  }

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
                  setCharacterInfo({
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
                  setCharacterInfo({
                    ...characterInfo,
                    concept: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <Button text="Salvar Rascunho" onClick={() => handleSaveSketch()} />
          <Button
            text="Limpar todos os campos"
            onClick={() => cleanAllInputs()}
          />
        </Header>

        <Attributes>
          <Attribute
            variant="power"
            value={attributes.power}
            onChange={(e) =>
              setAttributes({
                ...attributes,
                power: Number(e.target.value),
              })
            }
          />
          <Attribute
            variant="ability"
            value={attributes.ability}
            onChange={(e) =>
              setAttributes({
                ...attributes,
                ability: Number(e.target.value),
              })
            }
          />
          <Attribute
            variant="resistance"
            value={attributes.resistance}
            onChange={(e) =>
              setAttributes({
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
              setAttributes({
                ...attributes,
                action: Number(e.target.value),
              })
            }
          />
          <Attribute
            variant="mana"
            value={attributes.mana}
            onChange={(e) =>
              setAttributes({
                ...attributes,
                mana: Number(e.target.value),
              })
            }
          />
          <Attribute
            variant="life"
            value={attributes.life}
            onChange={(e) =>
              setAttributes({
                ...attributes,
                life: Number(e.target.value),
              })
            }
          />
        </Attributes>

        <Advantages>
          <span>Vantagens</span>
          {advantages.map((adv) => (
            <InputItem key={adv.id} data={adv} />
          ))}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button id="new-input-button">Adicionar novo campo +</button>
            </Dialog.Trigger>

            <NewItemModal
              variant={'advantages'}
              setAdvantageFunction={setAdvantageFunction}
            />
          </Dialog.Root>
        </Advantages>

        <Disadvantages>
          <span>Desvantagens</span>
          {disadvantages.map((adv) => (
            <InputItem key={adv.id} data={adv} />
          ))}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button id="new-input-button">Adicionar novo campo +</button>
            </Dialog.Trigger>

            <NewItemModal
              variant={'disadvantages'}
              setDisadvantageFunction={setDisadvantageFunction}
            />
          </Dialog.Root>
        </Disadvantages>

        <Expertises>
          <span>Perícias</span>
          {expertises.map((expertise) => (
            <InputItem key={expertise.id} data={expertise} />
          ))}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button id="new-input-button">Adicionar novo campo +</button>
            </Dialog.Trigger>

            <NewItemModal
              variant={'expertises'}
              setExpertiseFunction={setExpertiseFunction}
            />
          </Dialog.Root>
        </Expertises>

        <Notes>
          <span>Anotações</span>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </Notes>

        <Experience>
          <span>EXP</span>
          <input value={exp} onChange={(e) => setExp(e.target.value)}></input>
        </Experience>
      </SheetContainer>
    </CharacterSheetCreationContainer>
  )
}
