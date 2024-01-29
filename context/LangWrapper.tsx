"use client";
import { createContext, useState, PropsWithChildren } from "react";

type Lang = "en" | "de";

export const LangContext = createContext<Lang>("en");

const LangWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <LangContext.Provider value={lang}>
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("de")}>DE</button>
      {children}
    </LangContext.Provider>
  );
};

export default LangWrapper;
