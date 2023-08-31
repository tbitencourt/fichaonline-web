import styled from 'styled-components'

export const FooterContainer = styled.header`
width: 100%;
height: 0;
max-width: 1120px;
margin: -2rem auto;
display: flex;
align-items: center;
justify-content: center;


p {
  color: ${(props) => props.theme['base-card']};
}
`

