"use client"

import { Transaction } from "@/data/data";
import { TransactionPagination } from "./transaction-pagination";
import { TransactionControls } from "./transaction-controls";
import { TransactionTable } from "./transaction-table";
import styles from "./transactions.module.css"
import { useState } from "react";
import { PaginationState } from "@tanstack/react-table";

interface TreansactionsProps {
    transactions: Transaction[];
}

export function Transactions({ transactions }: TreansactionsProps) {
    // TODO filtering 
    // TODO sorting
    // TODO pagination
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 20
    })
  return (
    <div className={styles.card}>
      <TransactionControls />
      <TransactionTable pagination={pagination} transactions={transactions} />
      <TransactionPagination />
    </div>
  );
}