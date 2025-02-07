import { data } from './data';

export async function getOverviewData() {
    return {
        balance: data.balance,
        pots: data.pots.slice(0, 4),
        budgets: data.budgets,
        transactions: data.transactions.slice(0, 5),
        recurrings: (await getRecurrings()).slice(0, 3)
    }
}

export async function getTransactions() {
    return data.transactions;
}

export async function getBudgets() {
    return data.budgets;
}

export async function getPots() {
    return data.pots;
}

export async function getRecurrings() {
    return data.transactions.filter((transaction) => transaction.recurring);
}