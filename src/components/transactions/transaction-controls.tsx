import { Transaction } from "@/data/data"
import { SortingState, Table } from "@tanstack/react-table"
import { Fragment, useMemo } from "react"
import { NativeSelect, Option, Separator } from "../ui/select/select"
import styles from "./transaction-controls.module.css"
import classNames from "classnames"
import Image from "next/image"
import iconSearch from "@/assets/images/icon-search.svg"
import iconFilter from "@/assets/images/icon-filter-mobile.svg"
import iconSort from "@/assets/images/icon-sort-mobile.svg"
import { SortBySelect } from "../ui/select/sort-by-select"
import { FilterBySelect } from "../ui/select/filter-by-select"

interface TransactionControlsProps {
    table: Table<Transaction>
    transactions: Transaction[]
}

export function TransactionControls({ table, transactions }: TransactionControlsProps) {
    const categories = useMemo(() =>
        Array.from(new Set(transactions.map(t => t.category)))
        , [transactions])

    const handleSortChange = (value: string) => {
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
        <div className={styles.controls}>
            <div className={styles["search"]}>
                <input className={styles["search-input"]} type="text" placeholder="Search transactions" onChange={e => table.setGlobalFilter(String(e.target.value))} />
                <Image className={styles["search-icon"]} src={iconSearch} alt="" width={16} height={16} />
            </div>
            <label className={classNames(styles.label)}>
                <span className="mobile-hidden">Sort by</span>
                <SortBySelect onChange={handleSortChange} />
            </label>
            <label className={classNames(styles.label)}>
                <span className="mobile-hidden">Category</span>
                <FilterBySelect
                    allOptionsText="All Transactions"
                    options={categories}
                    onChange={value => table.getColumn("category")?.setFilterValue(value)}
                />
            </label>
        </div>
    )
}