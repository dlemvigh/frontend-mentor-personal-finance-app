import { Transactions } from "@/components/transactions/transactions";
import { getTransactions } from "@/data/api";

export default async function TransactionsPage() {
  const data = await getTransactions();
  return (
    <>
      <h1>Transactions</h1>
      <Transactions transactions={data} />
    </>
  );
}
