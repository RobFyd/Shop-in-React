import styles from "./TopBar.module.css";

export function TopBar({ children }) {
  // This component is used to display the top bar of the application
  return <div className={styles.topBar}>{children}</div>;
}
