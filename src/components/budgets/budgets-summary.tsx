import { BudgetsData } from "@/data/api-budgets";
import styles from "./budgets-summary.module.css";
import { CSSProperties, useMemo } from "react";
import { BudgetsPieChart } from "./budgets-pie-chart";

interface BudgetsSummaryProps {
    budgets: BudgetsData[];
}

export function BudgetsSummary({ budgets }: BudgetsSummaryProps) {
    return <div className={styles.card}>    
        <BudgetsPieChart budgets={budgets} className={styles["pie-chart"]} />
        <div className={styles.summary}>
            <h2 className={`${styles.title} text-preset-2`}>Spending Summary</h2>
            <dl>
                {budgets.map((budget) => (
                    <BudgetSummary key={budget.category} budget={budget} />
                ))}
            </dl>
        </div>
    </div>
}

interface BudgetSummaryProps {
    budget: BudgetsData;
}

function BudgetSummary({ budget }: BudgetSummaryProps) {
    return (
        <div style={{ "--budget-color": budget.theme} as CSSProperties} className={styles.budget}>
            <dt className={`${styles["budget-category"]} text-preset-4`}>{budget.category}</dt>
            <dd className={styles["budget-amount"]}>
                <strong className={`${styles["budget-amount-spent"]} text-preset-3`}>${budget.spent}</strong> 
                <span className={`text-preset-5`}>of ${budget.maximum}</span>
            </dd>
        </div>
    )
}