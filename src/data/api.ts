import { data } from './data';
import { Temporal } from 'temporal-polyfill';

export async function getOverviewData() {
    return {
        balance: data.balance,
        pots: data.pots.slice(0, 4),
        budgets: data.budgets,
        transactions: data.transactions.slice(0, 5),
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

export async function getRecurringBills() {
    const latestTransactionDate = Temporal.PlainMonthDay.from(data.transactions[0].date.substring(0, 10))
    // return data.transactions.filter((transaction) => transaction.recurring);
    return {
        latestTransactionDate
    }
}