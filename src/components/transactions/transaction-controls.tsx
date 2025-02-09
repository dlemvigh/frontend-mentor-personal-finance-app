import { Transaction } from "@/data/data"
import { SortingState, Table } from "@tanstack/react-table"
import { useMemo } from "react"

interface TransactionControlsProps {
    table: Table<Transaction>
    transactions: Transaction[]
}

export function TransactionControls({ table, transactions }: TransactionControlsProps) {
    const categories = useMemo(() => 
        Array.from(new Set(transactions.map(t => t.category)))
    , [transactions])

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        let sorting: SortingState;

        switch (value) {
            case "Latest":
                sorting = [{ id: "date", desc: true }];
                break;
            case "Oldest":
                sorting = [{ id: "date", desc: false }];
                break;
            case "A to Z":
                sorting = [{ id: "name", desc: false }];
                break;
            case "Z to A":
                sorting = [{ id: "name", desc: true }];
                break;
            case "Highest":
                sorting = [{ id: "amount", desc: true }];
                break;
            case "Lowest":
                sorting = [{ id: "amount", desc: false }];
                break;
            default:
                return;
        }

        table.setSorting(sorting);
    };

    return (
        <div>
            <input type="text" placeholder="Search transactions" onChange={e => table.setGlobalFilter(String(e.target.value))} />
            <label>Sort by
                <select onChange={handleSortChange}>
                    <option>Latest</option>
                    <option>Oldest</option>
                    <option>A to Z</option>
                    <option>Z to A</option>
                    <option>Highest</option>
                    <option>Lowest</option>
                </select>
            </label>
            <label>Category
                <select
                    onChange={e => table.getColumn("category")?.setFilterValue(String(e.target.value))}
                >
                    <option value="">All Transactions</option>
                    {categories.map(category => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </label>
        </div>
    )

}