"use client"

import { Transaction } from "@/data/data";
import { TransactionPagination } from "./transaction-pagination";
import { TransactionControls } from "./transaction-controls";
import { TransactionTable } from "./transaction-table";
import styles from "./transactions.module.css"
import { useMemo, useState } from "react";
import { ColumnDef, ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, useReactTable } from "@tanstack/react-table";
import Image from "next/image";
import classNames from "classnames";

interface TreansactionsProps {
    transactions: Transaction[];
}

export function Transactions({ transactions }: TreansactionsProps) {
    // TODO filtering 
    // TODO sorting
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 20
    })
    const [globalFilter, setGlobalFilter] = useState<string>("")
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )

    const columns = useMemo<ColumnDef<Transaction>[]>(() => [
    {
        id: "mobile-name",
        cell: ({ row }) => {
            return (
                <div className={classNames(styles["cell-recipient-mobile"], "mobile-only")}>
                    <Image className={styles["cell-recipient-avatar"]} src={`/images/avatars/${row.original.avatar}`} width={40} height={40} alt={`Avatar for ${row.original.name}`} />
                    <span className={classNames(styles["cell-recipient-name"], "text-preset-4-bold")}>{row.original.name}</span>
                    <span className="text-preset-5">{row.original.category}</span>
                </div>
            )
        },
    }, {
        id: "mobile-amount",
        header: "",
        accessorFn: (row) => {
            const date = new Date(row.date)
            const formatted = date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            })
            return formatted
        },
        cell: ({ row, getValue }) => {
            const value = row.original.amount
            return (
                <div className={classNames(styles["cell-amount-mobile"], "mobile-only")}>
                    <span className={classNames(value > 0 ? styles["cell-amount-pos"] : styles["cell-amount-neg"], "text-preset-4-bold")} > {value > 0 ? "+" : "-"}${Math.abs(value).toFixed(2)}</span >
                    <span className="text-preset-5">{getValue<string>()}</span>
                </div>
            )
        }
    },{
        id: "name",
        header: "Recipient / Sender",
        accessorKey: "name",
        cell: ({ row }) => {
            return (
                <div className={classNames(styles["cell-recipient"], "mobile-hidden")}>
                    <Image className={styles["cell-recipient-avatar"]} src={`/images/avatars/${row.original.avatar}`} width={40} height={40} alt={`Avatar for ${name}`} />
                    <span className={classNames(styles["cell-recipient-name"], "text-preset-4-bold")}>{row.original.name}</span>
                </div>
            )
        }
    }, {
        id: "category",
        header: "Category",
        accessorKey: "category",
        cell: ({ getValue }) => (
            <span className="text-preset-5 mobile-hidden">{getValue<string>()}</span>
        )
    }, {
        id: "date",
        header: "Transaction Date",
        accessorFn: (row) => {
            const date = new Date(row.date)
            const formatted = date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            })
            return formatted
        },
        sortingFn: (a, b) => {
            return a.original.date.localeCompare(b.original.date)
        },
        cell: ({ getValue }) => {
            return (
                <span className="text-preset-5 mobile-hidden">{getValue<string>()}</span>
            )
        }
    }, {
        id: "amount",
        header: "Amount",
        accessorKey: "amount",
        cell: ({ getValue }) => {
            const value = getValue<number>()
            return (
                <span className={classNames("mobile-hidden", value > 0 ? styles["cell-amount-pos"] : styles["cell-amount-neg"], "text-preset-4-bold")} > {value > 0 ? "+" : "-"}${Math.abs(value).toFixed(2)}</span >
            )
        }
    }], [])

    const table = useReactTable<Transaction>({
        columns,
        data: transactions,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            pagination,
            globalFilter,
            columnFilters
        },
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter,
        onColumnFiltersChange: setColumnFilters
    })

    return (
        <div className={styles.card}>
            <TransactionControls table={table} transactions={transactions} />
            <TransactionTable table={table} />
            <TransactionPagination table={table} pagination={pagination} />
        </div>
    );
}