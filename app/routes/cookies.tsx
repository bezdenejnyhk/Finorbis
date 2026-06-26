import type { Route } from "./+types/cookies";
import CookiesPage from "../pages/CookiesPage/CookiesPage";
import { content_de } from "~/constants/content_de";
import { content_en } from "~/constants/content_en";
import { BASE_URL } from "~/settings";

export function meta({ location }: Route.MetaArgs) {
  const lang =
    new URL(location.pathname + location.search, BASE_URL).searchParams.get("lang") === "de"
      ? "de"
      : "en";
  const { pages } = lang === "de" ? content_de : content_en;
  return [
    { title: pages.cookies.meta.title },
    { name: "description", content: pages.cookies.meta.description },
  ];
}

export default function Cookies() {
  return <CookiesPage />;
}
