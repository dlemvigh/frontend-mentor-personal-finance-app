"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import classNames from "classnames"

import { RecurringBill } from "@/data/api"
import { Table } from "../ui/table/table"
import { BillsTableControls } from "./bills-table-controls"


import iconDue from "@/assets/images/icon-bill-due.svg"
import iconPaid from "@/assets/images/icon-bill-paid.svg"
import styles from "./bills-table.module.css"

interface BillsTableProps {
  bills: RecurringBill[]
}

function getDayOfMonthWithSuffix(dayOfMonth: number) {
  return dayOfMonth + getSuffix(dayOfMonth)
}

function getSuffix(dayOfMonth: number) {
  if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
    return "st"
  }
  if (dayOfMonth === 2 || dayOfMonth === 22) {
    return "nd"
  }
  if (dayOfMonth === 3 || dayOfMonth === 23) {
    return "rd"
  }
  return "th"
}

export function BillsTable({ bills }: BillsTableProps) {
    const [globalFilter, setGlobalFilter] = useState<string>("")
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )

    const columns = useMemo<ColumnDef<RecurringBill>[]>(
    () => [
      {
        id: "name",
        header: "Bill Title",
        accessorKey: "name",
        cell: ({ row }) => (
          <div className={classNames(styles["cell-title"])}>
            <Image
              className={styles["cell-title-avatar"]}
              src={`/images/avatars/${row.original.avatar}`}
              width={32}
              height={32}
              alt={`Avatar for ${row.original.name}`}
            />
            <span className="text-preset-4-bold">{row.original.name}</span>
          </div>
        ),
      },
      {
        id: "date",
        header: "Due Date",
        accessorFn: (row) => `Monthly - ${getDayOfMonthWithSuffix(row.dayOfMonth)}`,
        cell: ({ row, getValue }) => {
          return (
            <span className={classNames("text-preset-5", styles["cell-date"])}>
              {getValue<string>()}
              {row.original.status === "Paid" && (
                <Image src={iconPaid} width={16} height={16} alt="Paid" />
              )}
              {row.original.status === "Due" && (
                <Image src={iconDue} width={16} height={16} alt="Paid" />
              )}
            </span>
          )
        },
      },
      {
        id: "amount",
        header: "Amount",
        accessorFn: (row) => `$${row.amount.toFixed(2)}`,
        cell: ({ row, getValue }) => {
          const due = row.original.status === "Due"
          return (
            <span
              className={classNames(
                "text-preset-4-bold",
                styles["cell-amount"],
                due && styles["cell-amount-due"],
              )}
            >
              {getValue<string>()}
            </span>
          )
        },
      },
    ],
    [],
  )

  const table = useReactTable<RecurringBill>({
    columns,
    data: bills,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      globalFilter
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters
  })
  return (
    <div className={styles.card}>
      <BillsTableControls table={table} />
      <Table table={table} className={styles.table} />
    </div>
  )
}
