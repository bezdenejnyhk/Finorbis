import { useAppSelector } from "../../services/hooks";
import styles from "./NotFound.module.scss";
import { dataNotFound } from "./constants";

export const NotFound = () => {
  const lang = useAppSelector((state) => state.lang.lang);

  return (
    <div className={styles.conatiner}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>{dataNotFound[lang]}</p>
    </div>
  );
};
