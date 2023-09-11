import styled from 'styled-components'

export const AttributeContainer = styled.div``

export const BaseAttribute = styled.div`
  width: 7.3rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${(props) => props.theme.sheetColors.pink};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 8px;

  font-size: 0.8rem;
  font-weight: 400;

  input {
    width: 1.8rem;
    font-family: 'Kanit', sans-serif;
  }

  .image {
    border-top-left-radius: 10px;
    background-color: ${(props) => props.theme.sheetColors.pink};
    line-height: 0;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  label {
    color: ${(props) => props.theme.sheetColors['gray-300']};
  }
  input {
    border: none;
    color: ${(props) => props.theme.sheetColors['gray-300']};
  }
`
export const SecondaryAttribute = styled(BaseAttribute)`
  border: 2px solid ${(props) => props.theme.sheetColors['blue-300']};

  .image {
    background: ${(props) => props.theme.sheetColors['blue-300']};
  }
`
