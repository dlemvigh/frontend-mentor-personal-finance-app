import { Bills } from "@/components/bills/bills";
import { getRecurringBills } from "@/data/api";

export default async function BillsPage() {
    const data = await getRecurringBills();
    return (
      <>
        <h1>Recurring bills</h1>
        <Bills data={data} />
      </>
    );
  }
  