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

export function CharacterSheetCreation() {
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
          <input></input>
          <input></input>

          <button>Adicionar novo campo +</button>
        </Advantages>

        <Disadvantages>
          <h1>Desvantagens</h1>
          <input></input>
          <input></input>

          <button>Adicionar novo campo +</button>
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
