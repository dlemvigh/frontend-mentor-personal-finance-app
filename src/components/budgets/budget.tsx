import { BudgetsData } from "@/data/api-budgets";
import styles from "./budget.module.css";
import { Transaction } from "@/data/data";

interface BudgetProps {
    budget: BudgetsData;
}

export function Budget({ budget }: BudgetProps) {
    return (
        <div className={styles.card} style={{ "--budget-color": budget.theme } as React.CSSProperties}>
            <h2 className={`${styles.title} text-preset-2`}>{budget.category}</h2>
            <span>Maximum of ${budget.maximum.toFixed(2)}</span>
            <progress max={budget.maximum} value={budget.spent} />
            <div>
                <div>
                    <span>Spent</span>
                    <strong>${budget.spent}</strong>
                </div>
                <div>
                    <span>Remaining</span>
                    <strong>${budget.remaining}</strong>
                </div>
            </div>
            <BudgetTransactions transactions={budget.transactions} />
        </div>
    )
}

interface BudgetTransactionsProps {
    transactions: Transaction[];
}

export function BudgetTransactions({ transactions }: BudgetTransactionsProps) {
    return (
        <div className={styles["budget-transactions"]}>
            <div>
                <h3>Latest spending</h3>
                <a href="#">See all</a>
            </div>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.name}>
                        <span>{transaction.avatar}</span>
                        <span>{transaction.name}</span>
                        <span>${transaction.amount}</span>
                        <span>{transaction.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}