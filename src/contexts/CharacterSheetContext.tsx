import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface AdvantagesProps {
  id: number
  name: string
  description: string
  type: string
  cost: number
  origin: string
}

interface DisadvantagesProps {
  id: number
  name: string
  description: string
  type: string
  cost: number
  origin: string
}

interface CharacterSheetContextType {
  advantagesList: AdvantagesProps[]
  disadvantagesList: DisadvantagesProps[]
}

export const CharacterSheetContext = createContext(
  {} as CharacterSheetContextType,
)

interface CharacterSheetContextProviderProps {
  children: ReactNode
}

export function CharacterSheetContextProvider({
  children,
}: CharacterSheetContextProviderProps) {
  const [advantagesList, setAdvantagesList] = useState<AdvantagesProps[]>([])
  const [disadvantagesList, setDisadvantagesList] = useState<
    DisadvantagesProps[]
  >([])

  useEffect(() => {
    async function fetchAdvantages() {
      const response = await api.get('/advantages', {
        params: {
          _sort: 'name',
          _order: 'desc',
        },
      })
      setAdvantagesList(response.data)
    }
    fetchAdvantages()

    async function fetchDisadvantages() {
      const response = await api.get('/disadvantages', {
        params: {
          _sort: 'name',
          _order: 'desc',
        },
      })
      setDisadvantagesList(response.data)
    }
    fetchDisadvantages()
  }, [])

  return (
    <CharacterSheetContext.Provider
      value={{
        advantagesList,
        disadvantagesList,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  )
}
