import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import Main from './pages/Main'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App
