"use client"
// import iconNavOverview from "@/assets/images/icon-nav-overview.svg";
// import iconNavTransactions from "@/assets/images/icon-nav-transactions.svg";
// import iconNavBudgets from "@/assets/images/icon-nav-budgets.svg";
// import iconNavPots from "@/assets/images/icon-nav-pots.svg";
// import iconNavRecurringBills from "@/assets/images/icon-nav-recurring-bills.svg";
import { NavIconBudgets, NavIconOverview, NavIconPots, NavIconRecurringBills, NavIconTransactions } from "@/components/icons/nav-icons";
import styles from "./navigation.module.css";
import { NavItem } from "./nav-item";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavItem href="/" icon={NavIconOverview} title="Overview" />
      <NavItem href="/transactions" icon={NavIconTransactions} title="Transactions" />
      <NavItem href="/budgets" icon={NavIconBudgets} title="Budgets" />
      <NavItem href="/pots" icon={NavIconPots} title="Pots" />
      <NavItem href="/bills" icon={NavIconRecurringBills} title="Recurring bills" />
    </nav>
  );
}
