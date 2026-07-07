"use client";

// Public hook per the i18n architecture; implementation lives with the
// provider so context and consumer stay in one module.
export { useLanguageContext as useLanguage } from "@/components/layout/language-provider";
