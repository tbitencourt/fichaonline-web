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

  function setAdvantageFunction(data: AdvantagesProps) {
    setAdvantages((prevState) => [...prevState, data])
  }
  function setDisadvantageFunction(data: DisadvantagesProps) {
    setDisadvantages((prevState) => [...prevState, data])
  }

  function handleSaveSketch() {
    const advantagesJSON = JSON.stringify(advantages)
    const disadvantagesJSON = JSON.stringify(disadvantages)

    localStorage.setItem(
      '@ficha-online:sheet-advantages-sketch- 1.0.0',
      advantagesJSON,
    )
    localStorage.setItem(
      '@ficha-online:sheet-disadvantages-sketch- 1.0.0',
      disadvantagesJSON,
    )
    alert('Rascunho salvo com sucesso')
  }

  function cleanAllInputs() {
    setAdvantages([])
    setDisadvantages([])
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
          <h1>Vantagens</h1>
          {advantages.map((adv) => (
            <InputItem key={adv.id} data={adv} />
          ))}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Adicionar novo campo +</button>
            </Dialog.Trigger>

            <NewItemModal
              variant={'advantages'}
              setAdvantageFunction={setAdvantageFunction}
            />
          </Dialog.Root>
        </Advantages>

        <Disadvantages>
          <h1>Desvantagens</h1>
          {disadvantages.map((adv) => (
            <InputItem key={adv.id} data={adv} />
          ))}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Adicionar novo campo +</button>
            </Dialog.Trigger>

            <NewItemModal
              variant={'disadvantages'}
              setDisadvantageFunction={setDisadvantageFunction}
            />
          </Dialog.Root>
        </Disadvantages>

        <Expertises>
          <h1>Perícias</h1>
          <input></input>
          <input></input>

          <button>Adicionar novo campo +</button>
        </Expertises>

        <Techniques>
          <h1>Técnicas</h1>
          <input></input>
          <input></input>
          <input></input>
          <button>Adicionar novo campo +</button>
        </Techniques>

        <Equipments>
          <h1>Equipamento</h1>
          <input></input>
          <input></input>
          <input></input>
          <button>Adicionar novo campo +</button>
        </Equipments>

        <Notes>
          <h1>Anotações</h1>
          <textarea></textarea>
        </Notes>

        <CharacterImage></CharacterImage>

        <Experience>
          <h1>EXP</h1>
          <input></input>
        </Experience>
      </SheetContainer>
    </CharacterSheetCreationContainer>
  )
}
