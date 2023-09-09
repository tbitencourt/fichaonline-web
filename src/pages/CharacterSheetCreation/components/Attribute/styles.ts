import styled from 'styled-components'

export const AttributeContainer = styled.div``

export const BaseAttribute = styled.div`
  width: 7.3rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid gray;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 8px;

  font-size: 1rem;
  font-weight: 400;

  input {
    width: 1.8rem;
    font-family: 'Kanit', sans-serif;
  }

  .image {
    border-top-left-radius: 10px;
    background-color: gray;
    line-height: 0;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  input {
    border: none;
  }
`
