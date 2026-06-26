import { useSearchParams } from "react-router";
import { content_en } from "../constants/content_en";
import { content_de } from "../constants/content_de";

export type Lang = "en" | "de";

const SUPPORTED_LANGS: Lang[] = ["en", "de"];

export function useLang() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawLang = searchParams.get("lang");
  const lang: Lang =
    rawLang && SUPPORTED_LANGS.includes(rawLang as Lang) ? (rawLang as Lang) : "en";

  const content = lang === "de" ? content_de : content_en;

  const setLang = (newLang: Lang) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("lang", newLang);
        return next;
      },
      { replace: true }
    );
  };

  const buildHref = (path: string): string => {
    if (lang === "en") return path;
    return `${path}?lang=${lang}`;
  };

  return { lang, content, setLang, buildHref };
}
