import { produce } from 'immer'
import { ReactNode, createContext, useState } from 'react'

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

interface SketchSheetContextType {
  advantages: AdvantagesProps[]
  disadvantages: DisadvantagesProps[]
  expertises: ExpertisesProps[]
  attributes: AttributesProps
  characterInfo: CharacterInfoProps
  notes: string
  exp: number
  setAttributesFunction: (data: AttributesProps) => void
  setNotesFunction: (data: string) => void
  setExpFunction: (data: number) => void
  setCharacterInfoFunction: (data: CharacterInfoProps) => void
  setAdvantageFunction: (data: AdvantagesProps) => void
  setDisadvantageFunction: (data: DisadvantagesProps) => void
  setExpertiseFunction: (data: ExpertisesProps) => void
  removeAdvantageItem: (index: number) => void
  removeDisadvantageItem: (index: number) => void
  removeExpertiseItem: (index: number) => void
  handleSaveSketch: () => void
  cleanAllInputs: () => void
}

export const SketchSheetContext = createContext({} as SketchSheetContextType)

interface SketchSheetContextProviderProps {
  children: ReactNode
}

export function SketchSheetContextProvider({
  children,
}: SketchSheetContextProviderProps) {
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

  function setAttributesFunction(data: AttributesProps) {
    setAttributes(data)
  }
  function setNotesFunction(data: string) {
    setNotes(data)
  }
  function setExpFunction(data: number) {
    setExp(data)
  }
  function setCharacterInfoFunction(data: CharacterInfoProps) {
    setCharacterInfo(data)
  }

  function setAdvantageFunction(data: AdvantagesProps) {
    setAdvantages((prevState) => [...prevState, data])
  }
  function setDisadvantageFunction(data: DisadvantagesProps) {
    setDisadvantages((prevState) => [...prevState, data])
  }
  function setExpertiseFunction(data: ExpertisesProps) {
    setExpertises((prevState) => [...prevState, data])
  }
  function removeAdvantageItem(index: number) {
    const removeAdvantage = confirm('Deseja deletar essa vantagem?')
    if (removeAdvantage) {
      const newAdvantages = produce(advantages, (draft) => {
        draft.splice(index, 1)
      })
      setAdvantages(newAdvantages)
    }
  }
  function removeDisadvantageItem(index: number) {
    const removeDisadvantage = confirm('Deseja deletar essa desvantagem?')
    if (removeDisadvantage) {
      const newDisadvantages = produce(disadvantages, (draft) => {
        draft.splice(index, 1)
      })
      setDisadvantages(newDisadvantages)
    }
  }
  function removeExpertiseItem(index: number) {
    const removeExpertise = confirm('Deseja deletar essa perícia?')
    if (removeExpertise) {
      const newExpertises = produce(expertises, (draft) => {
        draft.splice(index, 1)
      })
      setExpertises(newExpertises)
    }
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
    <SketchSheetContext.Provider
      value={{
        advantages,
        attributes,
        characterInfo,
        disadvantages,
        exp,
        expertises,
        notes,
        setAttributesFunction,
        setExpFunction,
        setNotesFunction,
        setCharacterInfoFunction,
        setAdvantageFunction,
        setDisadvantageFunction,
        setExpertiseFunction,
        removeAdvantageItem,
        removeDisadvantageItem,
        removeExpertiseItem,
        handleSaveSketch,
        cleanAllInputs,
      }}
    >
      {children}
    </SketchSheetContext.Provider>
  )
}
