import { BillsSummary } from "./bills-summary";
import { BillsTotal } from "./bills-total";
import { BillsTable } from "./bills-table";
import { RecurringBillsData } from "@/data/api";

interface BillsProps {
    data: RecurringBillsData
}

export function Bills({ data }: BillsProps) {
    return (
        <>
            <BillsTotal total={data.summary.total} />
            <BillsSummary summary={data.summary} />
            <BillsTable bills={data.bills} />
        </>
    )
}