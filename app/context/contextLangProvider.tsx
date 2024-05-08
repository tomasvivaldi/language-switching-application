"use client";

import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type LangContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const useLang = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const setLang = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
    router.push(lang === "en" ? "/" : `/${lang}`);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang) {
      setLang(storedLang);
      return;
    }

    const userLang = navigator.language || "en";
    const langCode = userLang.split("-")[0];

    switch (langCode) {
      case "fr":
        setLang("fr");
        break;
      case "ja":
        setLang("jp");
        break;
      default:
        setLang("en");
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang: language, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
