import { Button } from "../Button/Button";
import styles from "./Intro.module.scss";
import succesIcon from "../../assets/images/icons/success.svg";

interface IntroProps {
  title: string;
  subtitle: string;
  badgeText: string;
  imageSrc: string;
  button1: {
    text: string;
    onClick: () => void;
  };
  button2: {
    text: string;
    onClick: () => void;
  };
}

export function Intro({ title, subtitle, badgeText, imageSrc, button1, button2 }: IntroProps) {
  return (
    <section className={styles.intro}>
      <div className={styles.badge}>
        <img src={succesIcon} alt="Success" />
        <span className={styles.badgeText}>{badgeText}</span>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.buttons}>
        <Button theme="black" onClick={button1.onClick}>
          {button1.text}
        </Button>
        <Button theme="red" onClick={button2.onClick}>
          {button2.text}
        </Button>
      </div>

      <img className={styles.image} src={imageSrc} alt={`Intro ${title}`} />
    </section>
  );
}
