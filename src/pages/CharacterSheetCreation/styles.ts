import styled from 'styled-components'

export const CharacterSheetCreationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  font-family: 'Kanit', sans-serif;
`

export const SheetContainer = styled.div`
  display: grid;
  width: 58.5rem;

  grid-template-areas:
    'header header'
    'attributes attributes'
    'advantages expertises'
    'disadvantages notes'
    'experience experience';
  grid-template-columns: 23.65rem 23.65rem;
  row-gap: 1rem;
  column-gap: 3rem;

  border: 2px solid ${(props) => props.theme.sheetColors['blue-200']};
  border-radius: 8px;
  padding: 4rem;

  background: ${(props) => props.theme.sheetColors['blue-bg']};

  input {
    font-family: 'Kanit', sans-serif;
    background: transparent;
  }

  h1 {
    color: ${(props) => props.theme.sheetColors['blue-300']};
  }

  #new-input-button {
    color: ${(props) => props.theme.sheetColors.pink};
  }
`

export const Header = styled.div`
  width: 50rem;
  grid-area: header;
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1rem;

  font-size: 1.125rem;
  font-weight: 400;

  input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid black;
  }

  img {
    width: 12rem;
  }

  .infos {
    width: 33rem;
    display: grid;
    grid-template-areas:
      'name'
      'archtype'
      'concept';

    font-size: 1.125rem;
    font-weight: 400;

    input {
      width: 100%;
    }

    .name {
      grid-area: name;
      gap: 1rem;
      display: flex;
    }

    .archtype {
      grid-area: archtype;
      gap: 1rem;
      display: flex;
    }

    .concept {
      grid-area: concept;
      gap: 1rem;
      display: flex;
    }
  }
`

export const Attributes = styled.div`
  grid-area: attributes;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .divider {
    width: 0.5px;
    height: 3rem;
    border-left: 1px solid black;
  }
`

const BaseElement = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 400;
  background: ${(props) => props.theme.sheetColors['blue-100']};
  border: 1px solid ${(props) => props.theme.sheetColors['blue-200']};
  border-radius: 8px;
  padding: 0.8rem;

  button {
    width: 20rem;
    font-family: 'Kanit', sans-serif;
    border: none;
    background: transparent;
  }

  .inputs {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: 1px solid black;
    }
  }

  span {
    color: ${(props) => props.theme.sheetColors['blue-300']};
    font-size: 1.225rem;
    text-align: center;
  }

  #new-input-button {
    color: ${(props) => props.theme.sheetColors.pink};
  }
`

export const Advantages = styled(BaseElement)`
  grid-area: advantages;
`

export const Disadvantages = styled(BaseElement)`
  grid-area: disadvantages;
`

export const Expertises = styled(BaseElement)`
  grid-area: expertises;
`

export const Notes = styled(BaseElement)`
  grid-area: notes;
  display: flex;
  flex-direction: column;
  gap: 0rem;

  textarea {
    width: 22rem;
    height: 7rem;
  }
`

export const Experience = styled.div`
  grid-area: experience;
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    width: 20rem;
    border: 0;
    border-bottom: 1px solid black;
  }
`
