import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table } from "../ui/table/table";
import Image from "next/image";
import { formatDate, formatDollarValue } from "@/utils/string-utils";
import Link from "next/link";
import { Transaction } from "@/data/data";
import styles from "./budget-transactions.module.css"

interface BudgetTransactionsProps {
    category: string
    transactions: Transaction[];
}

export function BudgetTransactions({ category, transactions }: BudgetTransactionsProps) {
    const table = useReactTable<Transaction>({
        columns: [{
            id: "name",
            cell: ({ row }) => (
                <div className={styles["cell-name"]}>
                <Image
                    src={`/images/avatars/${row.original.avatar}`}
                    width={32}
                    height={32}
                    alt="Avatar"
                    className={styles["cell-name-avatar"]}
                  />
                  <span className="text-preset-5-bold">{row.original.name}</span>
                </div>          
            )
        }, {
            id: "amount",
            cell: ({ row }) => (
                <div className={styles["cell-details"]}>
                    <strong className={`${styles["cell-details-amount"]} text-preset-5-bold`}>{formatDollarValue(row.original.amount)}</strong>
                    <span className={`${styles["cell-detials-date"]} text-preset-5`}>{formatDate(row.original.date)}</span>
                </div>
            )
        }],
        data: transactions,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div className={styles["budget-transactions"]}>
            <div className={styles["budget-transactions-header"]}>
                <h3 className="text-preset-3">Latest spending</h3>
                {/* TODO link to transactions with category selected */}
                <Link className={`${styles["budget-transactions-header-link"]} text-preset-4`} href={`/transactions?category=${category}`}>See all</Link>
            </div>
            <Table table={table} className={styles["budget-transactions-table"]} hideHeader />
        </div>
    )
}