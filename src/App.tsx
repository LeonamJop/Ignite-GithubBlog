import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { RepositorySearchContextProvider } from './context/RepositorySearchContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RepositorySearchContextProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </RepositorySearchContextProvider>
      <GlobalStyled />
    </ThemeProvider>
  )
}
