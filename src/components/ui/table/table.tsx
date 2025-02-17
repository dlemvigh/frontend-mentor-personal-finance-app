"use client"

import { flexRender, Table as ReactTable } from "@tanstack/react-table"
import classNames from "classnames"

import styles from "./table.module.css"

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  table: ReactTable<any>
}

export function Table<T>({ table, ...props }: TableProps) {
  return (
    <table {...props} className={classNames(styles.table, props.className)}>
      <thead className={styles.thead}>
        <tr>
          {table.getFlatHeaders().map((header) => (
            <th
              key={header.id}
              className={classNames(styles.th, "text-preset-5")}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className={styles.tr}>
            {row.getVisibleCells().map((cell) => (
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
