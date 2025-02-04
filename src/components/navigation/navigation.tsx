import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/">
        <Image className={styles["nav-icon"]} src="/images/icon-nav-overview.svg" alt="Overview" width={24} height={24} />
        <span className={styles["nav-title"]}>Overview</span>
      </Link>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/transactions">
        <Image className={styles["nav-icon"]} src="/images/icon-nav-transactions.svg" alt="Transactions" width={24} height={24} />
        <span className={styles["nav-title"]}>Transactions</span>
      </Link>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/budgets">
        <Image className={styles["nav-icon"]} src="/images/icon-nav-budgets.svg" alt="Budgets" width={24} height={24} />
        <span className={styles["nav-title"]}>Budgets</span>
      </Link>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/pots">
        <Image className={styles["nav-icon"]} src="/images/icon-nav-pots.svg" alt="Pots" width={24} height={24} />
        <span className={styles["nav-title"]}>Pots</span>
      </Link>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/bills">
        <Image className={styles["nav-icon"]} src="/images/icon-nav-recurring-bills.svg" alt="Recurring bills" width={24} height={24} />
        <span className={styles["nav-title"]}>Recurring bills</span>
      </Link>
    </nav>
  )
}