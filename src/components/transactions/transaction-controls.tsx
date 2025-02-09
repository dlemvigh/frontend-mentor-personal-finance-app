import { Transaction } from "@/data/data"
import { Table } from "@tanstack/react-table"
import { useMemo } from "react"

interface TransactionControlsProps {
    table: Table<Transaction>
    transactions: Transaction[]
}

export function TransactionControls({ table, transactions }: TransactionControlsProps) {
    const categories = useMemo(() => 
        Array.from(new Set(transactions.map(t => t.category)))
    , [transactions])

    return (
        <div>
            <input type="text" placeholder="Search transactions" onChange={e => table.setGlobalFilter(String(e.target.value))} />
            <label>Sort by
                <select>
                    <option>Latest</option>
                    <option>Oldest</option>
                    <option>A to Z</option>
                    <option>Z to a</option>
                    <option>Highest</option>
                    <option>Lowest</option>
                </select>
            </label>
            <label>Category
                <select>
                    <option>All Transactions</option>
                    {categories.map(category => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </label>
        </div>
    )

}