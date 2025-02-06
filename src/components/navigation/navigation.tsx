"use client";
import Image from "next/image";
import {
  NavIconBudgets,
  NavIconOverview,
  NavIconPots,
  NavIconRecurringBills,
  NavIconTransactions,
} from "@/components/icons/nav-icons";
import { NavItem } from "./nav-item";
import logoSmall from "@/assets/images/logo-small.svg";
import logoLarge from "@/assets/images/logo-large.svg";
import styles from "./navigation.module.css";
import { useState } from "react";
import classNames from "classnames";
import { NavMinimizeButton } from "./nav-minimize-button";

export function Navigation() {
  const [minimized, setMinimized] = useState(false);
  return (
    <nav className={classNames(styles.navigation, minimized && styles.minimized)}>
      <Image src={minimized ? logoSmall : logoLarge} alt="Logo" width={minimized ? 14 : 121} height={22} className={styles.logo} />
      <NavItem href="/" icon={NavIconOverview} title="Overview" minimized={minimized}
      />
      <NavItem
        href="/transactions"
        icon={NavIconTransactions}
        title="Transactions"
        minimized={minimized}
      />
      <NavItem href="/budgets" icon={NavIconBudgets} title="Budgets" minimized={minimized}
      />
      <NavItem href="/pots" icon={NavIconPots} title="Pots" minimized={minimized}
      />
      <NavItem
        href="/bills"
        icon={NavIconRecurringBills}
        title="Recurring bills"
        minimized={minimized}

      />
      <NavMinimizeButton minimized={minimized} setMinimized={setMinimized} />
    </nav>
  );
}
