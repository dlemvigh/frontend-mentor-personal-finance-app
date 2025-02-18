import { Temporal } from "temporal-polyfill";
import { getLatestTransactionDate } from "./api-shared";
import { data, Transaction } from "./data";

export interface BudgetsData {
    category: string;
    maximum: number;
    theme: string;
    spent: number;
    transactions: Transaction[];
}

export async function getBudgets() {
    const startOfMonth = Temporal.PlainDate.from(data.transactions[0].date.substring(0, 10)).with({ day: 1})

    const budgets = data.budgets.map((budget) => {
        const transactions = data.transactions.filter(x => x.category === budget.category)
        const transactionsThisMonth = transactions.filter(x => Temporal.PlainDate.from(x.date.substring(0, 10)).with({ day: 1 }).equals(startOfMonth))
        
        const spentThisMonth = transactionsThisMonth.reduce((acc, transaction) => acc - transaction.amount, 0)
        return {
            ...budget,
            spent: spentThisMonth,
            transactions: transactions.slice(0, 3),
        }
    })
  return budgets;
}
