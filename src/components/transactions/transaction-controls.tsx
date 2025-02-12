import { Transaction } from "@/data/data"
import { SortingState, Table } from "@tanstack/react-table"
import { Fragment, useMemo } from "react"
import { Select, Option, Separator } from "../ui/select/select"
import styles from "./transaction-controls.module.css"
import classNames from "classnames"
import Image from "next/image"
import iconSearch from "@/assets/images/icon-search.svg"
import iconFilter from "@/assets/images/icon-filter-mobile.svg"
import iconSort from "@/assets/images/icon-sort-mobile.svg"

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
                <Select
                    defaultValue="Latest" 
                    onChange={handleSortChange}
                    mobileTriggerIcon={<Image src={iconSort} alt="Sort by" />}
                >
                    <Option value="Latest">Latest</Option>
                    <Separator />
                    <Option value="Oldest">Oldest</Option>
                    <Separator />
                    <Option value="A to Z">A to Z</Option>
                    <Separator />
                    <Option value="Z to A">Z to A</Option>
                    <Separator />
                    <Option value="Highest">Highest</Option>
                    <Separator />
                    <Option value="Lowest">Lowest</Option>
                </Select>
            </label>
            <label className={classNames(styles.label)}>
                <span className="mobile-hidden">Category</span>
                </label>
                <Select
                    defaultValue=" "
                    onChange={value => table.getColumn("category")?.setFilterValue(value)}
                    mobileTriggerIcon={<Image src={iconFilter} alt="Filter by Category" />}
                >
                    <Option value=" ">All Transactions</Option>
                    {categories.map(category => (
                        <Fragment key={category}>
                            <Separator />
                            <Option value={category}>{category}</Option>
                        </Fragment>
                    ))}
                </Select>
        </div>
    )
}