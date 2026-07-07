import en from "@/messages/en.json";

/** Shape of every message file — en.json is the source of truth. */
export type Messages = typeof en;

// Display code "kz" (and kz.json) per project convention; htmlLang carries
// the correct ISO 639-1 code for <html lang> and screen readers ("kk").
export const LANGUAGES = [
  { code: "en", htmlLang: "en", label: "EN", nativeName: "English" },
  { code: "ru", htmlLang: "ru", label: "RU", nativeName: "Русский" },
  { code: "kz", htmlLang: "kk", label: "KZ", nativeName: "Қазақша" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LANGUAGE: LanguageCode = "en";
export const LANGUAGE_STORAGE_KEY = "coffee-roots-language";

export function isLanguageCode(value: string | null): value is LanguageCode {
  return LANGUAGES.some((l) => l.code === value);
}

// English ships in the main bundle (default + fallback); ru/kz are
// code-split and fetched only when selected.
const loaders: Record<Exclude<LanguageCode, "en">, () => Promise<Messages>> = {
  ru: () => import("@/messages/ru.json").then((m) => m.default as Messages),
  kz: () => import("@/messages/kz.json").then((m) => m.default as Messages),
};

export async function loadMessages(code: LanguageCode): Promise<Messages> {
  return code === "en" ? en : loaders[code]();
}

export const FALLBACK_MESSAGES: Messages = en;

type MessageTree = { [key: string]: string | MessageTree };

function resolve(tree: MessageTree, path: string): string | undefined {
  let node: MessageTree | string | undefined = tree;
  for (const part of path.split(".")) {
    if (typeof node !== "object" || node === undefined) return undefined;
    node = node[part];
  }
  return typeof node === "string" ? node : undefined;
}

/**
 * Look up a dot-path key with {param} interpolation. Falls back to English,
 * then to the key itself — a visible "namespace.key" in the UI means a
 * missing translation (also enforced by scripts/check-translations.mjs).
 */
export function translate(
  messages: Messages,
  key: string,
  params?: Record<string, string | number>,
): string {
  const raw =
    resolve(messages as unknown as MessageTree, key) ??
    resolve(FALLBACK_MESSAGES as unknown as MessageTree, key) ??
    key;
  if (!params) return raw;
  return raw.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}
