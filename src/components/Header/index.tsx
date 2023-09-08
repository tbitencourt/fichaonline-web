import { HeaderContainer } from './styles'
import LogoImg from '../../assets/logo_1.svg'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button'

function Header() {
  const navigate = useNavigate()

  function handleToCardSection() {
    return navigate('card-section')
  }

  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <img src={LogoImg} alt="" />
        </Link>
        <Link to="#">FICHA ONLINE</Link>
        <Link to="#">BLOG</Link>
        <Button onClick={handleToCardSection} text="Criar Ficha" />
      </div>
    </HeaderContainer>
  )
}

export default Header
