import { useEffect, useMemo } from 'react'
import { SortingState, Table } from '@tanstack/react-table'
import classNames from 'classnames'

import { Transaction } from '@/data/data'
import { SearchInput } from '../ui/input/search-input'
import { FilterBySelect } from '../ui/select/filter-by-select'
import { SortBySelect } from '../ui/select/sort-by-select'

import styles from './transaction-controls.module.css'

interface TransactionControlsProps {
  table: Table<Transaction>
  transactions: Transaction[]
}

export function TransactionControls({
  table,
  transactions,
}: TransactionControlsProps) {
  const categories = useMemo(
    () => Array.from(new Set(transactions.map((t) => t.category))),
    [transactions]
  )

  const handleSortChange = (value: string) => {
    let sorting: SortingState

    switch (value) {
      case 'Latest':
        sorting = [{ id: 'date', desc: true }]
        break
      case 'Oldest':
        sorting = [{ id: 'date', desc: false }]
        break
      case 'A to Z':
        sorting = [{ id: 'name', desc: false }]
        break
      case 'Z to A':
        sorting = [{ id: 'name', desc: true }]
        break
      case 'Highest':
        sorting = [{ id: 'amount', desc: true }]
        break
      case 'Lowest':
        sorting = [{ id: 'amount', desc: false }]
        break
      default:
        return
    }

    table.setSorting(sorting)
  }

  return (
    <div className={styles.controls}>
      <SearchInput
        placeholder="Search transactions"
        onChange={(value) => table.setGlobalFilter(value)}
      />
      <label className={classNames(styles.label)}>
        <span className="mobile-hidden">Sort by</span>
        <SortBySelect onChange={handleSortChange} />
      </label>
      <label className={classNames(styles.label)}>
        <span className="mobile-hidden">Category</span>
        <FilterBySelect
          allOptionsText="All Transactions"
          options={categories}
          onChange={(value) =>
            table.getColumn('category')?.setFilterValue(value)
          }
        />
      </label>
    </div>
  )
}
