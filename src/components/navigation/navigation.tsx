import iconNavOverview from "@/assets/images/icon-nav-overview.svg";
import iconNavTransactions from "@/assets/images/icon-nav-transactions.svg";
import iconNavBudgets from "@/assets/images/icon-nav-budgets.svg";
import iconNavPots from "@/assets/images/icon-nav-pots.svg";
import iconNavRecurringBills from "@/assets/images/icon-nav-recurring-bills.svg";

import styles from "./navigation.module.css";
import { NavItem } from "./nav-item";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavItem href="/" icon={iconNavOverview} title="Overview" />
      <NavItem href="/transactions" icon={iconNavTransactions} title="Transactions" />
      <NavItem href="/budgets" icon={iconNavBudgets} title="Budgets" />
      <NavItem href="/pots" icon={iconNavPots} title="Pots" />
      <NavItem href="/bills" icon={iconNavRecurringBills} title="Recurring bills" />
    </nav>
  );
}
