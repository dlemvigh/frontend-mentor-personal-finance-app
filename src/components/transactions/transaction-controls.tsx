import { Transaction } from "@/data/data"
import { SortingState, Table } from "@tanstack/react-table"
import { Fragment, useMemo } from "react"
import { Option, Select, Separator } from "../ui/select/select"
import styles from "./transaction-controls.module.css"
import classNames from "classnames"

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
            <input type="text" placeholder="Search transactions" onChange={e => table.setGlobalFilter(String(e.target.value))} />
            <label className={classNames(styles.label)}>Sort by
                <Select defaultValue="Latest" onChange={handleSortChange}>
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
                Category
                <Select
                    defaultValue=" "
                    onChange={value => table.getColumn("category")?.setFilterValue(value)}
                >
                    <Option value=" ">All Transactions</Option>
                    {categories.map(category => (
                        <Fragment key={category}>
                            <Separator />
                            <Option value={category}>{category}</Option>
                        </Fragment>
                    ))}
                </Select>
            </label>
        </div>
    )

}