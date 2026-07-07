"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  DEFAULT_LANGUAGE,
  FALLBACK_MESSAGES,
  LANGUAGE_STORAGE_KEY,
  LANGUAGES,
  isLanguageCode,
  loadMessages,
  translate,
  type LanguageCode,
  type Messages,
} from "@/lib/i18n";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // SSR and first client render are always English — this avoids hydration
  // mismatches; the stored language applies right after mount (visually
  // covered by the loading screen).
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  const [messages, setMessages] = useState<Messages>(FALLBACK_MESSAGES);

  const applyLanguage = useCallback((code: LanguageCode) => {
    void loadMessages(code).then((loaded) => {
      setMessages(loaded);
      setLanguageState(code);
      document.documentElement.lang =
        LANGUAGES.find((l) => l.code === code)?.htmlLang ?? code;
    });
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguageCode(stored) && stored !== DEFAULT_LANGUAGE) {
      applyLanguage(stored);
    }
  }, [applyLanguage]);

  const setLanguage = useCallback(
    (code: LanguageCode) => {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
      applyLanguage(code);
    },
    [applyLanguage],
  );

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) =>
      translate(messages, key, params),
    [messages],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
