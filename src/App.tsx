// import SignupForm from './components/Form';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { Button } from './components/Button';
import { TitleText } from './components/TitleText';

export default function App() {
  const [isDarkThemeState, setIsDarkThemeState] = useState(false);
  const themeState = isDarkThemeState ? 'escuro' : 'claro';

  return (
    <ThemeProvider theme={isDarkThemeState ? darkTheme : lightTheme}>
      {/* <div>
        <h1>Teste validação!</h1>
        <SignupForm />
      </div> */}
      <div className="container">
        <GlobalStyles />
        <TitleText>{isDarkThemeState ? 'Dark Theme' : 'Light Theme'}</TitleText>
        <p>Esta aplicação é um projeto teste que está em modo {themeState}.</p>
        <Button onClick={() => setIsDarkThemeState(prevTheme => !prevTheme)}>Trocar Tema</Button>
      </div>
    </ThemeProvider>
  );
}
