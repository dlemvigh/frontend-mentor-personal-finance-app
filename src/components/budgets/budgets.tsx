import { BudgetsData } from "@/data/api-budgets";
import { Budget } from "./budget";
import { BudgetsSummary } from "./budgets-summary";
import styles from "./budgets.module.css"

interface BudgetsProps {
    budgets: BudgetsData[];
}

export function Budgets({ budgets }: BudgetsProps) {
    return (
        <div className={styles.layout}>
            <BudgetsSummary budgets={budgets} />
            <div className={styles["budget-list"]}>
                {budgets.map((budget) => (
                    <Budget budget={budget} key={budget.category} />
                ))}
            </div>
        </div>
    )
}