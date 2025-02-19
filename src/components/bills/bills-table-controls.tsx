import { SortingState, Table } from "@tanstack/react-table"
import classNames from "classnames"

import { RecurringBill } from "@/data/api"
import { SearchInput } from "../ui/input/search-input"
import { SortBySelect } from "../ui/select/sort-by-select"

import styles from "./bills-table-controls.module.css"

interface BillsTableControlsProps {
  table: Table<RecurringBill>
}

export function BillsTableControls({ table }: BillsTableControlsProps) {
  const handleSortChange = (value: string) => {
    let sorting: SortingState

    switch (value) {
      case "Latest":
        sorting = [{ id: "date", desc: false }]
        break
      case "Oldest":
        sorting = [{ id: "date", desc: true }]
        break
      case "A to Z":
        sorting = [{ id: "name", desc: false }]
        break
      case "Z to A":
        sorting = [{ id: "name", desc: true }]
        break
      case "Highest":
        sorting = [{ id: "amount", desc: true }]
        break
      case "Lowest":
        sorting = [{ id: "amount", desc: false }]
        break
      default:
        return
    }

    table.setSorting(sorting)
  }
  return (
    <div className={styles.controls}>
      <SearchInput 
        placeholder="Search bills" 
        onChange={value => table.setGlobalFilter(value)}
    />
      <label className={classNames(styles.label)}>
        <span className="mobile-hidden">Sort by</span>
        <SortBySelect onChange={handleSortChange} />
      </label>
    </div>
  )
}
