import { lightTheme, darkTheme } from './application/themes/theme';
import { LanguageProvider, useLanguage } from './application/contexts/LanguageContext';
import { ThemeProvider } from 'styled-components';
import { TitleText } from './application/components/TitleText';
import { Container } from './application/components/Container';
import { useState } from 'react';
import { Button } from './application/components/Button';

import GlobalStyles from './application/themes/globalStyles';

import { useTranslation } from 'react-i18next';

export default function App() {
  const [theme, setTheme] = useState('escuro');
  const appTitle = theme === 'escuro' ? 'Dark Theme' : 'Light Theme';
  const appTheme = theme === 'escuro' ? darkTheme : lightTheme;

  const { t } = useTranslation();

  const { language } = useLanguage();

  function handleChangeTheme(theme: string) {
    if (theme === 'escuro') return setTheme('claro');
    return setTheme('escuro');
  }

  console.log(language);

  return (
    <LanguageProvider>
      <ThemeProvider theme={appTheme}>
        <Container>
          <span>{t('general.home')}</span>
          <GlobalStyles />
          <TitleText>{appTitle}</TitleText>
          <p>Esta aplicação é um projeto teste que está em modo {theme}.</p>
          <Button onClick={() => handleChangeTheme(theme)}>Trocar Tema</Button>
        </Container>
      </ThemeProvider>
    </LanguageProvider>
  );
}
