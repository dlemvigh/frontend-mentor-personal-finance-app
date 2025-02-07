"use client"

import { Transaction } from "@/data/data";
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, useReactTable } from "@tanstack/react-table";
import classNames from "classnames";
import { useMemo, useState } from "react";
import styles from "./transaction-table.module.css"
import Image from "next/image";

interface TreansactionTableProps {
    transactions: Transaction[];
    pagination: PaginationState
}

export function TransactionTable({ transactions, pagination }: TreansactionTableProps) {
    const columns = useMemo<ColumnDef<Transaction>[]>(() => [{
        header: "Recipient / Sender",
        cell: ({ row }) => {
            const { avatar, name } = row.original
            return (
                <div className={styles["cell-recipient"]}>
                    <img src={`/assets/images/avatars/${avatar}`} width={40} height={40} alt={`Avatar for ${name}`} />
                    {/* <Image src={`/assets/images/avatars/${avatar}`} width={40} height={40} alt={`Avatar for ${name}`} /> */}
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
        accessorKey: "date",
        cell: ({ getValue }) => {
            const value = getValue<string>()
            const date = new Date(value)
            const formatted = date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            })
            return (
                <span className="text-preset-5">{formatted}</span>
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
        state: { pagination }
    })

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {table.getFlatHeaders().map(header => (
                        <th key={header.id} className={classNames(styles.th, "text-preset-5")}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className={styles.tr}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className={classNames(styles.td)}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )

}