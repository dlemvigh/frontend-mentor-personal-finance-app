import { RecurringBillsSummary } from "@/data/api";
import styles from "./bills-summary.module.css"
import classNames from "classnames";

interface BillsSummaryProps {
    summary: RecurringBillsSummary
}

export function BillsSummary({ summary }: BillsSummaryProps) {
    
    return (
        <div className={styles.card}>
            <h2 className={`${styles.title} text-preset-3`}>Summary</h2>
            
            <dl className={styles.list}>
                <BillsSummaryItem label="Paid Bills" count={summary.paid.count} total={summary.paid.total} />
                <hr className={styles.divider} />
                <BillsSummaryItem label="Total Upcomming" count={summary.upcoming.count} total={summary.upcoming.total} />
                <hr className={styles.divider} />
                <BillsSummaryItem label="Due Soon" count={summary.due.count} total={summary.due.total} due />
            </dl>
        </div>
    )
}

interface BillsSummaryItemProps {
    label: string
    count: number
    total: number    
    due?: boolean
}

function BillsSummaryItem({ label, count, total, due }: BillsSummaryItemProps) {
    return (
        <>
            <dt className={classNames("text-preset-5", styles["list-title"], due && styles["list-due"])}>{label}</dt>
            <dd className={classNames("text-preset-5-bold", styles["list-data"], due && styles["list-due"])}>{count} (${total.toFixed(2)})</dd>
        </>
    )
}