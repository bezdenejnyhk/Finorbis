import { Link } from "react-router";
import { motion } from "framer-motion";
import { useLang } from "../../hooks/useLang";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
  const { content, buildHref } = useLang();
  const { title, subtitle, description, backHome } = content.notFound;

  return (
    <main className={styles.page}>
      <div className={styles.gridLines} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.bigNumber}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          aria-hidden="true"
        >
          {title}
        </motion.div>

        <motion.div
          className={styles.divider}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 48, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.3 }}
        />

        <motion.h1
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.4 }}
        >
          {subtitle}
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.55 }}
        >
          {description}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.7 }}
        >
          <Link to={buildHref("/")} className={styles.homeLink}>
            <svg
              className={styles.arrowIcon}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15 9H3M3 9L8 4M3 9L8 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {backHome}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
