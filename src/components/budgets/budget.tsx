"use client"

import { BudgetsData } from "@/data/api-budgets";
import styles from "./budget.module.css";
import { Progress } from "../ui/progress/progress";
import classNames from "classnames";
import { BudgetTransactions } from "./budget-transactions";

interface BudgetProps {
    budget: BudgetsData;
}

export function Budget({ budget }: BudgetProps) {
    return (
        <div className={styles.card} style={{ "--budget-color": budget.theme } as React.CSSProperties}>
            <h2 className={`${styles.title} text-preset-2`}>{budget.category}</h2>
            <span className={`${styles["sub-title"]} text-preset-4`}>Maximum of ${budget.maximum.toFixed(2)}</span>
            <Progress className={styles.progress} max={budget.maximum} value={budget.spent} color={budget.theme} wide />
            <div className={styles["legend"]}>
                <BudgetLegend color label="Spent" value={budget.spent} />
                <BudgetLegend label="Remaining" value={budget.remaining} />
            </div>
            <BudgetTransactions category={budget.category} transactions={budget.transactions} />
        </div>
    )
}

interface BudgetLegendProps {
    color?: boolean
    label: string
    value: number
}

function BudgetLegend({ color , label, value}: BudgetLegendProps) {
    return (
        <div className={styles["legend-item"]}>
            <span className={classNames(styles["legend-item-addon"], color && styles["legend-item-addon-color"])}></span>
            <span className="text-preset-5">{label}</span>
            <span className="text-preset-4-bold">${value < 100 ? value.toFixed(2) : value}</span>
        </div>
    )
}

