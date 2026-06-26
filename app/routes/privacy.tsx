import type { Route } from "./+types/privacy";
import PrivacyPage from "../pages/PrivacyPage/PrivacyPage";
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
    { title: pages.privacy.meta.title },
    { name: "description", content: pages.privacy.meta.description },
  ];
}

export default function Privacy() {
  return <PrivacyPage />;
}
