import styles from "./CenteredContent.module.css";

export function CeneteredContent({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
