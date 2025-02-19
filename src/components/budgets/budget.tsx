"use client"

import { BudgetsData } from "@/data/api-budgets";
import styles from "./budget.module.css";
import { Transaction } from "@/data/data";
import { Progress } from "../ui/progress/progress";
import classNames from "classnames";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { NameAvatarCell, Table } from "../ui/table/table";
import Image from "next/image";
import { formatDate, formatDollarValue } from "@/utils/string-utils";
import Link from "next/link";

interface BudgetProps {
    budget: BudgetsData;
}

export function Budget({ budget }: BudgetProps) {
    return (
        <div className={styles.card} style={{ "--budget-color": budget.theme } as React.CSSProperties}>
            <h2 className={`${styles.title} text-preset-2`}>{budget.category}</h2>
            <span className={`${styles["sub-title"]} text-preset-4`}>Maximum of ${budget.maximum.toFixed(2)}</span>
            <Progress className={styles.progress} max={budget.maximum} value={budget.spent} color={budget.theme} wide />
            <div className={styles["legend"]}>
                <BudgetLegend color label="Spent" value={budget.spent} />
                <BudgetLegend label="Remaining" value={budget.remaining} />
            </div>
            <BudgetTransactions category={budget.category} transactions={budget.transactions} />
        </div>
    )
}

interface BudgetLegendProps {
    color?: boolean
    label: string
    value: number
}

function BudgetLegend({ color , label, value}: BudgetLegendProps) {
    return (
        <div className={styles["legend-item"]}>
            <span className={classNames(styles["legend-item-addon"], color && styles["legend-item-addon-color"])}></span>
            <span className="text-preset-5">{label}</span>
            <span className="text-preset-4-bold">${value < 100 ? value.toFixed(2) : value}</span>
        </div>
    )
}


interface BudgetTransactionsProps {
    category: string
    transactions: Transaction[];
}

function BudgetTransactions({ category, transactions }: BudgetTransactionsProps) {
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