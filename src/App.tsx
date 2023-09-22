import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { CharacterSheetContextProvider } from './contexts/CharacterSheetContext'
import { SketchSheetContextProvider } from './contexts/SketchSheetContext'
import { Theme } from '@radix-ui/themes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CharacterSheetContextProvider>
          <SketchSheetContextProvider>
            <Theme>
              <Router />
            </Theme>
          </SketchSheetContextProvider>
        </CharacterSheetContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
