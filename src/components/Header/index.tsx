import { HeaderContainer } from './styles'
import LogoImg from '../../assets/logo_1.svg'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button'

function Header() {
  const navigate = useNavigate()

  function handleNavigateToSheetCreation() {
    navigate('/create')
  }

  return (
    <HeaderContainer>
      <div className="logo">
        <Link to="/">
          <img src={LogoImg} alt="" />
        </Link>
      </div>
      <Link to="#">HOME</Link>
      <Link to="/blog">BLOG</Link>
      <Button
        onClick={() => handleNavigateToSheetCreation()}
        text="Criar Ficha"
      />
    </HeaderContainer>
  )
}

export default Header
