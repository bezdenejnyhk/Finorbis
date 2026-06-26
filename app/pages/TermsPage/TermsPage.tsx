import { useLang } from "~/hooks/useLang";
import styles from "./TermsPage.module.scss";

export default function TermsPage() {
  const { terms } = useLang().content.pages;

  return <main></main>;
}
