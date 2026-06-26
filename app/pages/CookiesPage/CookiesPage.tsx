import { useLang } from "../../hooks/useLang";

export default function CookiesPage() {
  const { cookies } = useLang().content.pages;

  return <main></main>;
}
