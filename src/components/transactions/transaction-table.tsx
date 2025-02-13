"use client"

import { Transaction } from "@/data/data";
import { flexRender, Table } from "@tanstack/react-table";
import classNames from "classnames";
import styles from "./transaction-table.module.css"

interface TreansactionTableProps {
    table: Table<Transaction>
}

export function TransactionTable({ table }: TreansactionTableProps) {

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
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