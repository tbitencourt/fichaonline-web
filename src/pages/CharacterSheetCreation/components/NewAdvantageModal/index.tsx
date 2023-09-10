import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface AdvantagesProps {
  id: number
  name: string
  description: string
  type: string
  cost: number
  origin: string
}

interface NewAdvantageModalProps {
  setAdvantageFunction: (data: any) => void
}

export function NewAdvantageModal({
  setAdvantageFunction,
}: NewAdvantageModalProps) {
  const [advantagesList, setAdvantagesList] = useState<AdvantagesProps[]>([])

  function handleAddNewAdavantage(id: number) {
    setAdvantageFunction(advantagesList[id - 1])
  }

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
  }, [])

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Vantagens</Dialog.Title>

        <CloseButton>
          <span>X</span>
        </CloseButton>

        {advantagesList.map((adv) => (
          <div key={adv.id} className="name-description">
            <p>{`${adv.name} - Custo: ${adv.cost}`}</p>
            <p>{adv.description}</p>
            <button onClick={() => handleAddNewAdavantage(adv.id)}>
              Adicionar
            </button>
          </div>
        ))}
      </Content>
    </Dialog.Portal>
  )
}
