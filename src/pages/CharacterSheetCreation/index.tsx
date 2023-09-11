import {
  CharacterSheetCreationContainer,
  SheetContainer,
  Header,
  Attributes,
  Advantages,
  Disadvantages,
  Expertises,
  Techniques,
  Equipments,
  Notes,
  CharacterImage,
  Experience,
} from './styles'

import logo3DeT from '../../assets/logo3det.png'
import { Attribute } from './components/Attribute'

import * as Dialog from '@radix-ui/react-dialog'
import { NewItemModal } from './components/NewItemModal'
import { useState } from 'react'
import { InputItem } from './components/InputItem'

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
    alert('Rascunho salvo com sucesso')
  }

  function cleanAllInputs() {
    setAdvantages([])
    setDisadvantages([])
    setExpertises([])
  }

  return (
    <CharacterSheetCreationContainer>
      <SheetContainer>
        <Header>
          <img src={logo3DeT} alt="" />

          <div className="infos">
            <div className="name">
              <label htmlFor="name">Nome: </label>
              <input id="name" />
            </div>

            <div className="archtype">
              <label htmlFor="archtype">Arquétipo: </label>
              <input id="archtype" />
            </div>

            <div className="concept">
              <label htmlFor="concept">Conceito: </label>
              <input id="concept" />
            </div>
          </div>
          <button onClick={() => handleSaveSketch()}>Salvar Rascunho</button>
          <button onClick={() => cleanAllInputs()}>
            Limpar todos os campos
          </button>
        </Header>

        <Attributes>
          <Attribute variant="power" />
          <Attribute variant="ability" />
          <Attribute variant="resistance" />

          <div className="divider"></div>

          <Attribute variant="action" />
          <Attribute variant="mana" />
          <Attribute variant="life" />
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

        <Techniques>
          <span>Técnicas</span>
          <input></input>
          <input></input>
          <input></input>
          <button id="new-input-button">Adicionar novo campo +</button>
        </Techniques>

        <Equipments>
          <span>Equipamento</span>
          <input></input>
          <input></input>
          <input></input>
          <button id="new-input-button">Adicionar novo campo +</button>
        </Equipments>

        <Notes>
          <span>Anotações</span>
          <textarea></textarea>
        </Notes>

        <CharacterImage></CharacterImage>

        <Experience>
          <span>EXP</span>
          <input></input>
        </Experience>
      </SheetContainer>
    </CharacterSheetCreationContainer>
  )
}
