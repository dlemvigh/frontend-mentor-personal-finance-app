import Link from "next/link";
import Image from "next/image";

import iconNavOverview from "@/assets/images/icon-nav-overview.svg";
import iconNavTransactions from "@/assets/images/icon-nav-transactions.svg";
import iconNavBudgets from "@/assets/images/icon-nav-budgets.svg";
import iconNavPots from "@/assets/images/icon-nav-pots.svg";
import iconNavRecurringBills from "@/assets/images/icon-nav-recurring-bills.svg";

import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/">
        <Image className={styles["nav-icon"]} src={iconNavOverview} alt="Overview" width={24} height={24} />
        <span className={styles["nav-title"]}>Overview</span>
      </Link>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/transactions">
        <Image className={styles["nav-icon"]} src={iconNavTransactions} alt="Transactions" width={24} height={24} />
        <span className={styles["nav-title"]}>Transactions</span>
      </Link>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/budgets">
        <Image className={styles["nav-icon"]} src={iconNavBudgets} alt="Budgets" width={24} height={24} />
        <span className={styles["nav-title"]}>Budgets</span>
      </Link>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/pots">
        <Image className={styles["nav-icon"]} src={iconNavPots} alt="Pots" width={24} height={24} />
        <span className={styles["nav-title"]}>Pots</span>
      </Link>
      <Link className={`${styles["nav-item"]} text-preset-3`} href="/bills">
        <Image className={styles["nav-icon"]} src={iconNavRecurringBills} alt="Recurring bills" width={24} height={24} />
        <span className={styles["nav-title"]}>Recurring bills</span>
      </Link>
    </nav>
  );
}