import { createContext, ReactNode, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

export type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export interface ILanguageProvider {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

const LanguageProvider: React.FC<ILanguageProvider> = ({ children }) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}

export { LanguageProvider, useLanguage };
