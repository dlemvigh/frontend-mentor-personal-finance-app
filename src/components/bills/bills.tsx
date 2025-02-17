import { BillsSummary } from "./bills-summary";
import { BillsTotal } from "./bills-total";
import { BillsTable } from "./bills-table";
import { RecurringBillsData } from "@/data/api";
import styles from "./bills.module.css"

interface BillsProps {
    data: RecurringBillsData
}

export function Bills({ data }: BillsProps) {
    return (
        <div className={styles.container}>
            <div className={styles["summary-container"]}>
                <BillsTotal total={data.summary.total} />
                <BillsSummary summary={data.summary} />
            </div>
            <BillsTable bills={data.bills} />
        </div>
    )
}