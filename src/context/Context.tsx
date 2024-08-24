import React, { useState, createContext } from "react";
import EnglishMessages from "../language/en.json";
import { IntlProvider } from "react-intl";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  let defaultLocale = "en-US"; // Default to English
  let defaultMessages = EnglishMessages;

  const savedLanguage = localStorage.getItem("lang");

  if (savedLanguage) {
    if (savedLanguage === "en-US") {
      defaultLocale = "en-US";
      defaultMessages = EnglishMessages;
    } else {
      // Fallback to English if saved language is not recognized
      defaultLocale = "en-US";
      defaultMessages = EnglishMessages;
    }
  }

  const [messages, setMessages] = useState(defaultMessages);
  const [locale, setLocale] = useState(defaultLocale);

  const selectLanguage = (language) => {
    switch (language) {
      case "en-US":
        setMessages(EnglishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setMessages(EnglishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <LanguageContext.Provider value={{ selectLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
