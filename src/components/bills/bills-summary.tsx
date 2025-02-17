import { RecurringBillsSummary } from "@/data/api";

interface BillsSummaryProps {
    summary: RecurringBillsSummary
}

export function BillsSummary({ summary }: BillsSummaryProps) {
    
    return (
        <div>
            Summary
            <dl>
                <BillsSummaryItem label="Paid Bills" count={summary.paid.count} total={summary.paid.total} />
                <hr/>
                <BillsSummaryItem label="Total Upcomming" count={summary.upcoming.count} total={summary.upcoming.total} />
                <hr/>
                <BillsSummaryItem label="Due Soon" count={summary.due.count} total={summary.due.total} />
            </dl>
        </div>
    )
}

interface BillsSummaryItemProps {
    label: string
    count: number
    total: number    
}

function BillsSummaryItem({ label, count, total }: BillsSummaryItemProps) {
    return (
        <>
            <dt>{label}</dt>
            <dd>{count} (${total})</dd>
        </>
    )
}