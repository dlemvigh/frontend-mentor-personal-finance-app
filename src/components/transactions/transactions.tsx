"use client"

import { Transaction } from "@/data/data";
import { TransactionPagination } from "./transaction-pagination";
import { TransactionControls } from "./transaction-controls";
import { TransactionTable } from "./transaction-table";
import styles from "./transactions.module.css"
import { useMemo, useState } from "react";
import { ColumnDef, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, useReactTable } from "@tanstack/react-table";
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


    const columns = useMemo<ColumnDef<Transaction>[]>(() => [{
        header: "Recipient / Sender",
        accessorKey: "name",
        cell: ({ row }) => {
            const { avatar, name } = row.original
            return (
                <div className={styles["cell-recipient"]}>
                    <Image className={styles["cell-recipient-avatar"]} src={`/images/avatars/${avatar}`} width={40} height={40} alt={`Avatar for ${name}`} />
                    <span className="text-preset-4-bold">{name}</span>
                </div>
            )
        }
    }, {
        header: "Category",
        accessorKey: "category",
        cell: ({ getValue }) => (
            <span className="text-preset-5">{getValue<string>()}</span>
        )
    }, {
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
        cell: ({ getValue }) => {
            return (
                <span className="text-preset-5">{getValue<string>()}</span>
            )
        }
    }, {
        header: "Amount",
        accessorKey: "amount",
        cell: ({ getValue }) => {
            const value = getValue<number>()
            return (
                <span className={classNames(value > 0 ? styles["cell-amount-pos"] : styles["cell-amount-neg"], "text-preset-4-bold")} > {value > 0 ? "+" : "-"}${Math.abs(value).toFixed(2)}</span >
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
            globalFilter
        },
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter
    })

    return (
    <div className={styles.card}>
      <TransactionControls table={table} transactions={transactions} />
      <TransactionTable table={table} />
      <TransactionPagination table={table} pagination={pagination} />
    </div>
  );
}