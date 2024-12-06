import React, { createContext, useContext, useState } from 'react';
import esText from '../json/text_spanish.json';
import enText from '../json/text_english.json';

const TextContext = createContext();

const textByLang = {
  es: esText,
  en: enText,
};

export function TextProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const value = {
    text: textByLang[language],
    language,
    setLanguage,
  };

  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
}

// Hook personalizado para usar el contexto
export function useText() {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useText debe usarse dentro de un TextProvider');
  }
  return context;
}