import { RecurringBill } from "@/data/api";

interface BillsTableProps {
  bills: RecurringBill[]
}

export function BillsTable({ bills }: BillsTableProps) {
  return (
    <>
      <ul>
        {bills.map((bill) => (
          <li key={bill.name}>
            {bill.name} - ${bill.amount} - {bill.status}
          </li>
        ))}
      </ul>
    </>
  );
}
