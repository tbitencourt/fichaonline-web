import { HeaderContainer } from './styles'
import LogoImg from '../../assets/logo_1.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={LogoImg} alt="" />
        <Link to="#">FLinkQ</Link>
        <Link to="#">Quem Somos</Link>
      </div>
    </HeaderContainer>
  )
}

export default Header
