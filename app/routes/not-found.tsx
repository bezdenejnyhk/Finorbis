import type { Route } from "./+types/not-found";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { content_en } from "../constants/content_en";
import { content_de } from "../constants/content_de";
import { BASE_URL } from "~/settings";

export function meta({ location }: Route.MetaArgs) {
  const lang =
    new URL(location.pathname + location.search, BASE_URL).searchParams.get("lang") === "de"
      ? "de"
      : "en";
  const { pages } = lang === "de" ? content_de : content_en;
  return [
    { title: pages.notFound.meta.title },
    { name: "description", content: pages.notFound.meta.description },
  ];
}

export default function NotFound() {
  return <NotFoundPage />;
}
