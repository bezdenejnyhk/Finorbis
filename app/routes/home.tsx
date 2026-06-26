import type { Route } from "./+types/home";
import { HomePage } from "../pages/HomePage/HomePage";
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
    { title: pages.homepage.meta.title },
    { name: "description", content: pages.homepage.meta.description },
  ];
}

export default function Home() {
  return <HomePage />;
}
