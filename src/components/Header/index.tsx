import { HeaderContainer } from './styles'
import LogoImg from '../../assets/logo_1.svg'
import { Link } from 'react-router-dom'
import Button from '../Button'

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={LogoImg} alt="" />
        <Link to="#">FAQ</Link>
        <Button text="Crie o seu card" />
      </div>
    </HeaderContainer>
  )
}

export default Header
