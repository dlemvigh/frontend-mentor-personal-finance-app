"use client"

import { CellContext, flexRender, Table as ReactTable } from "@tanstack/react-table"
import classNames from "classnames"

import styles from "./table.module.css"
import Image from "next/image"

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  table: ReactTable<any>,
  hideHeader?: boolean
}

export function Table<T>({ table, className, hideHeader, ...props }: TableProps) {
  return (
    <table className={classNames(styles.table, hideHeader && styles["hide-header"], className)} {...props} >
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

interface NameAvatarCellProps {
  name: string
  avatar: string
}

export function NameAvatarCell({ name, avatar }: NameAvatarCellProps) {
  return (
    <div className={styles["cell-name"]}>
      <Image
          src={`/images/avatars/${avatar}`}
          width={32}
          height={32}
          alt="Avatar"
          className={styles["cell-name-avatar"]}
        />
        <span className="text-preset-5-bold">{name}</span>
      </div>
  )
}