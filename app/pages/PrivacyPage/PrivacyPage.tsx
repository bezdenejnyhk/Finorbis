import { useLang } from "~/hooks/useLang";
import styles from "./PrivacyPage.module.scss";

export default function PrivacyPage() {
  const { privacy } = useLang().content.pages;

  return <main></main>;
}
