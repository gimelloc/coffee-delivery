import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider} from './contexts/CartContext';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <BrowserRouter>
    <CartContextProvider>
    <Router/>
    </CartContextProvider>
    </BrowserRouter>
    </ThemeProvider>
  )
}