import { Button } from "@/components/ui/button/button"
import styles from "./page.module.css"
import { Budgets } from "@/components/budgets/budgets"
import { getBudgets } from "@/data/api"

export default async function BudgetsPage() {
  const data = await getBudgets()
  return (
    <>
      <div className={styles["header-row"]}>
        <h1>Budgets</h1>
        <Button type="button" variant="primary">
          + Add New Budget
        </Button>
      </div>
      <Budgets />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
